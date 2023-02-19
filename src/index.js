const express = require("express");
const PORT = 4000;
const app = express();
const redis = require("redis");
const os = require("os");

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
// const mongoose = require("mongoose");
// const DB_USER = "root";
// const DB_PASSWORD = "example";
// const DB_PORT = 27017;
// const DB_HOST = "mongo";
// const URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`;
// mongoose
//   .connect(URI)
//   .then(() => console.log("Connected To Database "))
//   .catch((err) => console.log("Failed To Connect", err));

// Connect to Postgres
const { Client } = require("pg");
const DB_USER = "root";
const DB_PASSWORD = "example";
const DB_PORT = 5432;
const DB_HOST = "postgres";

const connectionString = `postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`;

const client = new Client({
  connectionString,
});
client
  .connect()
  .then(() => console.log("Connected To Postgres Database "))
  .catch((err) => console.log("Failed To Connect Postgres", err));

app.get("/", (req, res) => {
  REDIS_CLIENT.set("products", "products");
  console.log(`Traffic from ${os.hostname}`);

  res.send("<h1> Hello From Node js  World , hi</h1>");
});

app.get("/result", async (req, res) => {
  let product = await REDIS_CLIENT.get("products");

  res.send(product);
});
app.listen(PORT, () => console.log(`App is Running on : ${PORT}`));


