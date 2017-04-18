const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const express = express();
const morgan = require('morgan');
const favicon = require('serve-favicon');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

app.use(express.static(path.join(__dirname, 'public')));

// Always return the main index.html, so react-router renders the route in the client
app.get('*', (req, res) => {
  res.use(path.resolve(__dirname, 'public', 'index.html'));
});

module.exports = app;
