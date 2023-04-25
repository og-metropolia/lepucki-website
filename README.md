# Lepucki

* [Local Development](#local-development)
* [Tech and Tools](#tech-and-tools)
* [REST API](#rest-api)
  * [Users](#users)
    * [`GET /api/users/`](#get-apiusers)
    * [`GET /api/users/{username}`](#get-apiusersusername)
    * [`POST /api/users/`](#post-apiusers)
  * [Announcements](#announcements)
    * [`GET announcements/`](#get-announcements)
    * [`GET /api/announcements/{id}`](#get-apiannouncementsid)
    * [`POST /api/announcements/`](#post-apiannouncements)
  * [Laundry](#laundry)
    * [`GET /api/laundry/`](#get-apilaundry)
    * [`GET /api/laundry/{id}`](#get-apilaundryid)
    * [`POST /api/laundry/`](#post-apilaundry)
  * [Sauna](#sauna)
    * [`GET /api/sauna/`](#get-apisauna)
    * [`GET /api/sauna/{id}`](#get-apisaunaid)
    * [`POST /api/sauna/`](#post-apisauna)


## Local Development
```bash
npm install
npm start
```

<!-- TODO: image of website -->

* http://localhost:5173 for React website
* http://localhost:3000 for REST API

## Tech and Tools
* React
* Express
* MySQL
* Vite
* Eslint
* Prettier
* Jest
* JSDoc

## REST API

<!--
GET
POST
PUT, PATCH
DELETE
-->

### Users

#### `GET /api/users/`

Example Response
```json
[
  {
    "id": 1,
    "username": "user",
    "password": "password",
    "apartment_number": 1234,
    "created_at": "2023-04-20T09:31:24.000Z"
  },
  {
    "id": 2,
    "username": "user123",
    "password": "foobar",
    "apartment_number": 42,
    "created_at": "2023-04-21T14:30:56.000Z"
  },
  {
    "id": 4,
    "username": "testi12",
    "password": "testi12",
    "apartment_number": 12,
    "created_at": "2023-04-21T15:23:45.000Z"
  },
  {
    "id": 42,
    "username": "janedoe",
    "password": "foobar",
    "apartment_number": 123,
    "created_at": "2023-04-24T10:11:21.000Z"
  }
]
```

#### `GET /api/users/{username}`

Example Response
```json
{
  "id": 42,
  "username": "janedoe",
  "password": "foobar",
  "apartment_number": 123,
  "created_at": "2023-04-24T13:11:21.000Z"
}
```

#### `POST /api/users/`

Example Request Body
```json
{
  "username": "janedoe",
  "password": "foobar",
  "apartment_number": 42
}
```

Example Response
```json
{
  "message": "New row created successfully!"
}
```

### Announcements
#### `GET announcements/`

Example Response
```json
[
  {
    "id": 1,
    "title": "Announcement One",
    "content": "This is a test announcement.",
    "apartment_number": 1234,
    "created_at": "2023-04-20T09:33:35.000Z",
    "expiration_at": "2023-05-31T21:00:00.000Z"
  },
  {
    "id": 2,
    "title": "Another Announcement",
    "content": "content content content content content content content content content","apartment_number": 598,
    "created_at": "2023-04-24T12:12:46.000Z",
    "expiration_at": "2023-04-24T12:13:46.000Z"
  }
]
```

#### `GET /api/announcements/{id}`

Example Response
```json
{
  "id": 1,
  "title": "An Announcement",
  "content": "This is an announcement.",
  "apartment_number": 1234,
  "created_at": "2023-04-20T09:33:35.000Z",
  "expiration_at": "2023-05-31T21:00:00.000Z"
}
```

#### `POST /api/announcements/`

Example Request Body
```json
{
  "title": "2023-04-24T12:15:14",
  "content": "2023-04-24T12:15:14",
  "apartment_number": 598
}
```

Example Response
```json
{
  "message": "New row created successfully!"
}
```


### Laundry
#### `GET /api/laundry/`

Example Response
```json
[
  {
    "id": 1,
    "apartment_number": 345,
    "starting_at": "2023-04-24T09:15:14.000Z",
    "ending_at": "2023-04-24T09:15:14.000Z"
  },
  {
    "id": 2,
    "apartment_number": 100,
    "starting_at": "2023-04-24T09:15:14.000Z",
    "ending_at": "2023-04-24T09:15:14.000Z"
  }
]
```

#### `GET /api/laundry/{id}`

Example Response
```json
{
  "id": 1,
  "apartment_number": 598,
  "starting_at": "2023-04-24T09:15:14.000Z",
  "ending_at": "2023-04-24T09:16:14.000Z"
}
```

#### `POST /api/laundry/`

Example Request Body
```json
{
  "apartment_number": 598,
  "starting_at": "2023-04-24T12:15:14",
  "ending_at": "2023-04-24T12:15:14"
}
```

Example Response
```json
{
  "message": "New row created successfully!"
}
```


### Sauna
#### `GET /api/sauna/`

Example Response
```json
[
  {
    "id": 1,
    "apartment_number": 598,
    "starting_at": "2023-04-24T09:15:14.000Z",
    "ending_at": "2023-04-24T09:15:14.000Z"
  },
  {
    "id": 2,
    "apartment_number": 234,
    "starting_at": "2023-04-24T09:10:15.000Z",
    "ending_at": "2023-04-24T09:11:14.000Z"
  }
]
```

#### `GET /api/sauna/{id}`

Example Response
```json
{
  "id": 1,
  "apartment_number": 12,
  "starting_at": "2023-04-25T07:20:45.000Z",
  "ending_at": "2023-04-25T08:20:45.000Z"
}
```

#### `POST /api/sauna/`

Example Request Body
```json
{
  "apartment_number": 598,
  "starting_at": "2023-04-24T12:15:14",
  "ending_at": "2023-04-24T12:15:14"
}
```

Example Response
```json
{
  "message": "New row created successfully!"
}
```
