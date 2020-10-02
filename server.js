'use strict';

const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname));

app.use((req, res) => {
  res.redirect(301, '/');
});

app.listen(app.get('port'), () => {
  console.log("Node app is running at localhost:" + app.get('port'));
});
