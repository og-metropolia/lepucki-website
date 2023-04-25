import cors from 'cors';
import express from 'express';
import mysql from 'mysql';
// import bcrypt from 'bcrypt';
import * as dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { ENDPOINTS } from '../constants/api.mjs';
import tables from '../constants/tables.mjs';
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

function getSingleUser() {
  app.get(`/${API_PATH}/${ENDPOINTS.users}/:username`, async (req, res) => {
    const username = req.params.username;
    conn.query(
      `SELECT * FROM ${tables.users} WHERE username = ?`,
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
}

function getSingleAnnouncement() {
  app.get(`/${API_PATH}/${ENDPOINTS.announcements}/:id`, async (req, res) => {
    const id = req.params.id;
    conn.query(
      `SELECT * FROM ${tables.announcements} WHERE id = ?`,
      [id],
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

function getSingleLaundry() {
  app.get(`/${API_PATH}/${ENDPOINTS.laundry}/:id`, async (req, res) => {
    const id = req.params.id;
    conn.query(
      `SELECT * FROM ${tables.laundry} WHERE id = ?`,
      [id],
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

function getSingleSauna() {
  app.get(`/${API_PATH}/${ENDPOINTS.sauna}/:id`, async (req, res) => {
    const id = req.params.id;
    conn.query(
      `SELECT * FROM ${tables.sauna} WHERE id = ?`,
      [id],
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

getRequest(ENDPOINTS.users, tables.users);
getRequest(ENDPOINTS.announcements, tables.announcements);
getRequest(ENDPOINTS.laundry, tables.laundry);
getRequest(ENDPOINTS.sauna, tables.sauna);

getSingleUser();
getSingleAnnouncement();
getSingleLaundry();
getSingleSauna();

postUser();
postAnnouncements();
postLaundry();
postSauna();

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
