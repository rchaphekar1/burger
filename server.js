// Dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');

// Create an instance of the express app
const app = express();

// Set the port for the application
const PORT = process.env.PORT || 8080;

// Set Handlebars as the default templating engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Starts server and console logs address
app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
);