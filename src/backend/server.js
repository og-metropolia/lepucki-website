import cors from 'cors';
import express from 'express';
import mysql from 'mysql';
import * as dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { ENDPOINTS, API_PATH } from '../constants/api.mjs';
import TABLES from '../constants/tables.mjs';
import {
  insertRecord,
  deleteRecord,
  queryRecordByAttribute,
  queryRecordsAll,
} from './sql.mjs';

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
    queryRecordsAll(conn, res, tableName);
  });
}

function getRecordById(endpoint, table) {
  app.get(`/${API_PATH}/${endpoint}/:id`, async (req, res) => {
    queryRecordByAttribute(conn, res, table, 'id', req.params.id);
  });
}

function getUserByUsername() {
  app.get(`/${API_PATH}/${ENDPOINTS.users}/:username`, async (req, res) => {
    queryRecordByAttribute(
      conn,
      res,
      TABLES.users,
      'username',
      req.params.username
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
    const { title, content, apartment_number, expiration_at } = req.body;
    return insertRecord(
      conn,
      res,
      TABLES.announcements,
      'title, content, apartment_number, expiration_at',
      [title, content, apartment_number, expiration_at]
    );
  });
}

function postLaundry() {
  app.post(`/${API_PATH}/${ENDPOINTS.laundry}`, async (req, res) => {
    const { apartment_number, ind } = req.body;
    return insertRecord(conn, res, TABLES.laundry, 'apartment_number, ind', [
      apartment_number,
      ind,
    ]);
  });
}

function postSauna() {
  app.post(`/${API_PATH}/${ENDPOINTS.sauna}`, async (req, res) => {
    const { apartment_number, ind } = req.body;
    return insertRecord(conn, res, TABLES.sauna, 'apartment_number, ind', [
      apartment_number,
      ind,
    ]);
  });
}

function postContactForm() {
  app.post(`/${API_PATH}/${ENDPOINTS.contact}`, async (req, res) => {
    const { name, email, message } = req.body;
    return insertRecord(conn, res, TABLES.contact, 'name, email, message', [
      name,
      email,
      message,
    ]);
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

getUserByUsername();
getRecordById(ENDPOINTS.announcements, TABLES.announcements);
getRecordById(ENDPOINTS.laundry, TABLES.laundry);
getRecordById(ENDPOINTS.sauna, TABLES.sauna);

postUser();
postAnnouncements();
postLaundry();
postSauna();
postContactForm();

deleteRecordById(ENDPOINTS.users, TABLES.users);
deleteRecordById(ENDPOINTS.announcements, TABLES.announcements);
deleteRecordById(ENDPOINTS.laundry, TABLES.laundry);
deleteRecordById(ENDPOINTS.sauna, TABLES.sauna);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
