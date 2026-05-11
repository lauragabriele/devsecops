const express = require('express');
const _ = require('lodash');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  const data = _.merge({}, { app: 'devsecops-pcc', version: '1.0.0' });
  res.json(data);
});

app.listen(PORT, () => {
  console.log('App rodando na porta ' + PORT);
});
