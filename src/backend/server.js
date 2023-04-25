import cors from 'cors';
import express from 'express';
import mysql from 'mysql';
// import bcrypt from 'bcrypt';
import * as dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { ENDPOINTS } from '../constants/api.mjs';
import TABLES from '../constants/tables.mjs';
import { API_PATH } from '../constants/api.mjs';

dotenv.config(); // loads env vars

const app = express();
app.use(cors());
app.use(bodyParser.json());
const port = process.env.API_PORT || 3000;

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

// EXAMPLE: addRow(res, 'users', 'username, password, apartment_number', ['user123', 'foobar', 42]);
function addRow(response, tableName, fieldNames, fieldValues) {
  try {
    const placeholders = Array.from(
      { length: fieldValues.length },
      () => '?'
    ).join(', ');
    conn.query(
      `INSERT INTO ${tableName} (${fieldNames}) VALUES (${placeholders})`,
      fieldValues,
      (err) => {
        if (err) {
          console.log('Error while inserting a record into the database', err);
          return response.status(400).send();
        }
        return response
          .status(200)
          .json({ message: 'New record created successfully!' });
      }
    );
  } catch (err) {
    console.log(err);
    return response.status(500).send();
  }
}

function deleteRow(response, tableName, id) {
  try {
    conn.query(`DELETE FROM ${tableName} WHERE id = ?`, id, (err) => {
      if (err) {
        console.log('Error while deleting a record from the database', err);
        return response.status(400).send();
      }
      return response
        .status(200)
        .json({ message: 'Record deleted successfully!' });
    });
  } catch (err) {
    console.log(err);
    return response.status(500).send();
  }
}

function getRequest(endpoint, tableName) {
  app.get(`/${API_PATH}/${endpoint}/`, async (req, res) => {
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

function getSingleRecordById(endpoint, table) {
  app.get(`/${API_PATH}/${endpoint}/:id`, async (req, res) => {
    conn.query(
      `SELECT * FROM ${table} WHERE id = ?`,
      [req.params.id],
      (err, results) => {
        if (err) {
          console.log(err);
          return res.status(400).send();
        }
        res.status(200).json(results[0]);
      }
    );
  });
}

function getSingleUserByUsername() {
  app.get(`/${API_PATH}/${ENDPOINTS.users}/:username`, async (req, res) => {
    conn.query(
      `SELECT * FROM ${TABLES.users} WHERE username = ?`,
      [req.params.username],
      (err, results) => {
        if (err) {
          console.log(err);
          return res.status(400).send();
        }
        res.status(200).json(results[0]);
      }
    );
  });
}

function postUser() {
  app.post(`/${API_PATH}/${ENDPOINTS.users}`, async (req, res) => {
    const { username, password, apartment_number } = req.body;
    return addRow(res, 'users', 'username, password, apartment_number', [
      username,
      password,
      apartment_number,
    ]);
  });
}

function postAnnouncements() {
  app.post(`/${API_PATH}/${ENDPOINTS.announcements}`, async (req, res) => {
    const { title, content, apartment_number } = req.body;
    return addRow(res, 'announcements', 'title, content, apartment_number', [
      title,
      content,
      apartment_number,
    ]);
  });
}

function postLaundry() {
  app.post(`${API_PATH}/${ENDPOINTS.laundry}`, async (req, res) => {
    const { apartment_number, starting_at, ending_at } = req.body;
    return addRow(res, 'laundry', 'apartment_number, starting_at, ending_at', [
      apartment_number,
      starting_at,
      ending_at,
    ]);
  });
}

function postSauna() {
  app.post(`/${API_PATH}/${ENDPOINTS.sauna}`, async (req, res) => {
    const { apartment_number, starting_at, ending_at } = req.body;
    return addRow(res, 'sauna', 'apartment_number, starting_at, ending_at', [
      apartment_number,
      starting_at,
      ending_at,
    ]);
  });
}

function deleteRecordById(endpoint, table) {
  app.delete(`/${API_PATH}/${endpoint}/:id`, async (req, res) => {
    deleteRow(res, table, req.params.id);
  });
}

getRequest(ENDPOINTS.users, TABLES.users);
getRequest(ENDPOINTS.announcements, TABLES.announcements);
getRequest(ENDPOINTS.laundry, TABLES.laundry);
getRequest(ENDPOINTS.sauna, TABLES.sauna);

getSingleUserByUsername();

getSingleRecordById(ENDPOINTS.announcements, TABLES.announcements);
getSingleRecordById(ENDPOINTS.laundry, TABLES.laundry);
getSingleRecordById(ENDPOINTS.sauna, TABLES.sauna);

postUser();
postAnnouncements();
postLaundry();
postSauna();

deleteRecordById(ENDPOINTS.users, TABLES.users);
deleteRecordById(ENDPOINTS.announcements, TABLES.announcements);
deleteRecordById(ENDPOINTS.laundry, TABLES.laundry);
deleteRecordById(ENDPOINTS.sauna, TABLES.sauna);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
