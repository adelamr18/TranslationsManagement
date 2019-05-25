const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const translationsRoutes = require('./routes/translations')

mongoose
  .connect(
    'mongodb+srv://Adel:UV4iiLHeosO08J12@tms-koroa.mongodb.net/test?retryWrites=true'
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});



app.use("/api/translations", translationsRoutes);



















app.get('/', function (req, res, next) {
    var passedVariable = req._parsedUrl.query;

    translations.search({
      query_string: {
        query: passedVariable
      }
    },
    function (err, results) {
      results.hits.hits.map((element) => {
        return res.status(200).json({
          values:element
        })
      })
    });
  });


module.exports = app;
