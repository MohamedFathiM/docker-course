const express = require("express");
const PORT = 4000;
const app = express();
const mongoose = require("mongoose");

const DB_USER = "root";
const DB_PASSWORD = "example";
const DB_PORT = 27017;
const DB_HOST = "mongo";

const URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`;

mongoose
  .connect(URI)
  .then(() => console.log("Connected "))
  .catch((err) => console.log("Failed To Connect", err));

app.get("/", (req, res) =>
  res.send("<h1> Hello From Node js  World , hi</h1>")
);
app.listen(PORT, () => console.log(`App is Running on : ${PORT}`));
