import * as dotenv from 'dotenv';

dotenv.config(); // loads env vars

export const ENDPOINTS = Object.freeze({
  users: 'users',
  announcements: 'announcements',
  laundry: 'laundry',
  sauna: 'sauna',
});

export const API_PATH = 'api/v0';
export const BASE_URL = `${process.env.API_HOST}:${process.env.API_PORT}/${API_PATH}`;
