import cors from 'cors';
import express from 'express';
import mysql from 'mysql';
// import bcrypt from 'bcrypt';
import * as dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { ENDPOINTS, API_PATH } from '../constants/api.mjs';
import TABLES from '../constants/tables.mjs';
import { insertRecord, deleteRecord } from './sql.mjs';

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

function getRecordsAll(endpoint, tableName) {
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

function getRecordById(endpoint, table) {
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
    return insertRecord(
      conn,
      res,
      TABLES.users,
      'username, password, apartment_number',
      [username, password, apartment_number]
    );
  });
}

function postAnnouncements() {
  app.post(`/${API_PATH}/${ENDPOINTS.announcements}`, async (req, res) => {
    const { title, content, apartment_number } = req.body;
    return insertRecord(
      conn,
      res,
      TABLES.announcements,
      'title, content, apartment_number',
      [title, content, apartment_number]
    );
  });
}

function postLaundry() {
  app.post(`${API_PATH}/${ENDPOINTS.laundry}`, async (req, res) => {
    const { apartment_number, starting_at, ending_at } = req.body;
    return insertRecord(
      conn,
      res,
      TABLES.laundry,
      'apartment_number, starting_at, ending_at',
      [apartment_number, starting_at, ending_at]
    );
  });
}

function postSauna() {
  app.post(`/${API_PATH}/${ENDPOINTS.sauna}`, async (req, res) => {
    const { apartment_number, starting_at, ending_at } = req.body;
    return insertRecord(
      conn,
      res,
      TABLES.sauna,
      'apartment_number, starting_at, ending_at',
      [apartment_number, starting_at, ending_at]
    );
  });
}

function deleteRecordById(endpoint, table) {
  app.delete(`/${API_PATH}/${endpoint}/:id`, async (req, res) => {
    deleteRecord(conn, res, table, req.params.id);
  });
}

getRecordsAll(ENDPOINTS.users, TABLES.users);
getRecordsAll(ENDPOINTS.announcements, TABLES.announcements);
getRecordsAll(ENDPOINTS.laundry, TABLES.laundry);
getRecordsAll(ENDPOINTS.sauna, TABLES.sauna);

getSingleUserByUsername();

getRecordById(ENDPOINTS.announcements, TABLES.announcements);
getRecordById(ENDPOINTS.laundry, TABLES.laundry);
getRecordById(ENDPOINTS.sauna, TABLES.sauna);

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
