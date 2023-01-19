const express = require("express");
const PORT = 4000;
const app = express();

app.get("/", (req, res) => res.send("<h1> Hello From Node js , hi</h1>"));
app.listen(PORT, () => console.log(`App is Running on : ${PORT}`));
