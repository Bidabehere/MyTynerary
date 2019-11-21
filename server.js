const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// Body parser middleware
var cors = require("cors");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const MongoClient = require("mongodb").MongoClient;
var ObjectID = require("mongodb").ObjectID; // we will use this later

var Schema = mongoose.Schema;

const cityModel = require("./cityModel");

app.get("/", function(req, res) {
  mongoose.connect(
    "mongodb+srv://cafe-user:1979Colador@cluster0-iysvx.mongodb.net/mytinerary?retryWrites=true&w=majority",
    { useNewUrlParser: true },
    function(err) {
      if (err) throw err;

      console.log("Successfully connected");
    }
  );
  cityModel
    .find({})
    .then(files => {
      console.log(files);
      res.send(files);
    })
    .catch(err => console.log(err));
});

app.post("/city", function(req, res) {
  mongoose.connect(
    "mongodb+srv://cafe-user:1979Colador@cluster0-iysvx.mongodb.net/mytinerary?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  );

  const newCity = new cityModel({
    country: req.body.country,
    city: req.body.city
  });
  newCity
    .save()
    .then(city => {
      res.send(city);
    })
    .catch(err => {
      res.status(500).send("Server error");
    });
});

app.get("/citys", function(req, res) {
  mongoose.connect("mongodb://localhost:27017/mytynerary", {
    useUnifiedTopology: true
  });
  //console.log("llego bien Terminal");
  var query = City.find({});
  query.exec(function(err, docs) {});
});

app.listen(3012, () => {
  console.log("Escuchando en el puerto 3012");
});
