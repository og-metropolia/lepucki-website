import express from 'express';
import mysql from 'mysql';
// import bcrypt from 'bcrypt';
import * as dotenv from 'dotenv';

dotenv.config(); // loads env vars

const app = express();
const port = process.env.SERVER_PORT || 3000;
const api_prefix = '/api';

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
  app.get(`${api_prefix}/${endpoint}/`, async (req, res) => {
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

//routes
app.post('/api/users/create', async (req, res) => {
  const { username, password, apartment_number } = req.body;

  try {
    conn.query(
      'INSERT INTO users (username, password, apartment_number) VALUES (?, ?, ?)',
      [username, password, apartment_number],
      (err) => {
        if (err) {
          console.log('Error while inserting a user into the database', err);
          return res.status(400).send();
        }
        return res
          .status(201)
          .json({ message: 'New user created successfully!' });
      }
    );
  } catch (err) {
    console.log(err);
    return res.status(500).send();
  }
});

getRequest('users', 'users');
getRequest('announcements', 'announcements');
getRequest('laundry', 'laundry');
getRequest('sauna', 'sauna');

// postRequest('users', 'users');
// postRequest('announcements', 'announcements');
// postRequest('laundry', 'laundry');
// postRequest('sauna', 'sauna');

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
