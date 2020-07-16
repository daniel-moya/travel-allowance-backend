const express = require('express');
const connection = require('../db');

const { version } = require('../package.json');

const router = express.Router();

// Version
router.get('/version', async (req, res) => {
  res.status(500).json({ version });
});

// Version
router.get('/', async (req, res) => {
  res.status(200).send('Welcome to the travel allowance API.');
});

// Get All Allowance Data
router.get('/api/allowance', async (req, res) => {
  connection.query('SELECT * FROM travel;', function (err, rows, fields) {
    if (!!err) {
      res.status(500).json({ message: 'Interal server err: DB' });
    } else {
      const queryData = {
        rows,
        fields
      };
      res
        .status(200)
        .json({ message: 'Successful query', data: queryData.rows });
    }
  });
});

// Get Employee
router.get('/api/allowance/employee', async (req, res) => {
  const { id } = req.query;

  connection.query(
    `SELECT * FROM travel WHERE \`id\` = ${id};`,
    function (err, rows, fields) {
      if (!!err) {
        res.status(500).json({ message: 'Interal server err: DB' });
      } else {
        const queryData = {
          rows,
          fields
        };
        res
          .status(200)
          .json({ message: 'Successful query', data: queryData.rows });
      }
    }
  );
});

module.exports = router;
