const express = require("express");
const PORT = 4000;
const app = express();
const mongoose = require("mongoose");
const redis = require("redis");

// Connect To Redis
const REDIS_PORT = 6379;
const REDIS_HOST = "redis";
const REDIS_CLIENT = redis.createClient({
  url: `redis://${REDIS_HOST}:${REDIS_PORT}`,
});
REDIS_CLIENT.on("error", (err) => console.log("Redis Client Error", err));
REDIS_CLIENT.on("connect", () => console.log("Connected To Redis.. "));
REDIS_CLIENT.connect();

// Connect To MongoDB
const DB_USER = "root";
const DB_PASSWORD = "example";
const DB_PORT = 27017;
const DB_HOST = "mongo";
const URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`;
mongoose
  .connect(URI)
  .then(() => console.log("Connected To Database "))
  .catch((err) => console.log("Failed To Connect", err));

app.get("/", (req, res) => {
  REDIS_CLIENT.set("products", "products");

  res.send("<h1> Hello From Node js  World , hi</h1>");
});
app.listen(PORT, () => console.log(`App is Running on : ${PORT}`));
