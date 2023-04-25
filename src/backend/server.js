import cors from 'cors';
import express from 'express';
import mysql from 'mysql';
// import bcrypt from 'bcrypt';
import * as dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { endpoints } from '../constants/api.mjs';
import tables from '../constants/tables.mjs';

dotenv.config(); // loads env vars

const app = express();
app.use(cors());
app.use(bodyParser.json());
const port = process.env.API_PORT || 3000;
const apiPrefix = '/api';

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

conn.connect((err) => {
  if (err) {
    console.log('Error connecting to MySQL database = ', err);
    return;
  }
  console.log('MySQL successfully connected!');
});

function getRequest(endpoint, tableName) {
  app.get(`${apiPrefix}/${endpoint}/`, async (req, res) => {
    try {
      conn.query(`SELECT * FROM ${tableName}`, (err, results) => {
        if (err) {
          console.log(err);
          return res.status(400).send();
        }
        res.status(200).json(results);
      });
    } catch (err) {
      console.log(err);
      return res.status(500).send();
    }
  });
}

// EXAMPLE: addRow(res, 'users', 'username, password, apartment_number', ['user123', 'foobar', 42]);
function addRow(response, tableName, fieldNames, fields) {
  try {
    const placeholders = Array.from({ length: fields.length }, () => '?').join(
      ', '
    );
    conn.query(
      `INSERT INTO ${tableName} (${fieldNames}) VALUES (${placeholders})`,
      fields,
      (err) => {
        if (err) {
          console.log('Error while inserting a user into the database', err);
          return response.status(400).send();
        }
        return response
          .status(200)
          .json({ message: 'New row created successfully!' });
      }
    );
  } catch (err) {
    console.log(err);
    return response.status(500).send();
  }
}

app.post(`${apiPrefix}/${endpoints.users}`, async (req, res) => {
  const { username, password, apartment_number } = req.body;
  return addRow(res, 'users', 'username, password, apartment_number', [
    username,
    password,
    apartment_number,
  ]);
});

app.post(`${apiPrefix}/${endpoints.announcements}`, async (req, res) => {
  const { title, content, apartment_number } = req.body;
  return addRow(res, 'announcements', 'title, content, apartment_number', [
    title,
    content,
    apartment_number,
  ]);
});

app.post(`${apiPrefix}/${endpoints.laundry}`, async (req, res) => {
  const { apartment_number, starting_at, ending_at } = req.body;
  return addRow(res, 'laundry', 'apartment_number, starting_at, ending_at', [
    apartment_number,
    starting_at,
    ending_at,
  ]);
});

app.post(`${apiPrefix}/${endpoints.sauna}`, async (req, res) => {
  const { apartment_number, starting_at, ending_at } = req.body;
  return addRow(res, 'sauna', 'apartment_number, starting_at, ending_at', [
    apartment_number,
    starting_at,
    ending_at,
  ]);
});

app.get(`${apiPrefix}/${endpoints.users}/:username`, async (req, res) => {
  const username = req.params.username;

  conn.query(
    'SELECT * FROM users WHERE username = ?',
    [username],
    (err, results) => {
      if (err) {
        console.log(err);
        return res.status(400).send();
      }
      res.status(200).json(results[0]);
    }
  );
});

getRequest(endpoints.users, tables.users);
getRequest(endpoints.announcements, tables.announcements);
getRequest(endpoints.laundry, tables.laundry);
getRequest(endpoints.sauna, tables.sauna);

// postRequest(endpoints.announcements, tables.announcements);
// postRequest(endpoints.laundry, tables.laundry);
// postRequest(endpoints.sauna, tables.sauna);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
