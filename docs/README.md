# Travel Allowance Sample App - back-end

Front-end: [travel-allowance-frontend](https://github.com/daniel-moya/travel-allowance-frontend)<br>
Back-end: [travel-allowance-backend](https://github.com/daniel-moya/travel-allowance-backend)

# Getting Started

Development section will help you setting up and running on your local machine for development and testing purposes.<br>
Deployment section covers how to deploy the project on a live system.

# Development

## Prerequisites

In order to start the backend locally you need `node.js` and `npm` installed and also `Mysql` at `localhost:27017` for development mode. 


## Installing

Install the dependencies:

```
npm i
```

Run in the development mode:

```
npm run start-dev
```

Run in the production mode:

```
npm run start
```

This backend serves the HTML page and API endpoints for travel allowance frontend frontend, described below:


## API
API endpoints are requested by Ajax in the frontend.

- Get version

  `GET /version`

  Response:
  ```
  {
    version: string
  }
  ```

- Get Employees with Allowance Data
  `GET /api/allowance`

  <br/>
  will return all allowance data

- Get one Employee by id
  `GET /api/allowance/:id`


# Deployment
* No deployment

# Built With
* [NodeJS](https://nodejs.org/en/) - The Platform.
* [Express](https://github.com/expressjs/express) - The web framework used.
* [MongoDB](https://www.mysql.com/) - The main database for Admin control.