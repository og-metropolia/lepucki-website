import * as dotenv from 'dotenv';

dotenv.config(); // loads env vars

export const endpoints = Object.freeze({
  users: 'users',
  announcements: 'announcements',
  laundry: 'laundry',
  sauna: 'sauna',
});

export const baseURL = `${process.env.API_HOST}:${process.env.API_PORT}/api`;
