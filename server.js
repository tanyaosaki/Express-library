const express = require('express');
const app = express();
const staff = require('./staff.json');

app.get('/staff', function (req, res) {
    res.send(staff);
  });

app.listen(4018, function () {
  console.log('Example app listening on port 4018!');
});