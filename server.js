const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
var cors = require('cors')
const app = express();
app.use(cors())
require('dotenv').config()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT_SERVER || 3000, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT_SERVER || 3000}`);
});