const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const routes = require("./routes");

const app = express();

mongoose.connect(
  "mongodb+srv://userhack:passhack@cluster0-aknur.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true
  }
);

mongoose.connection.on("connected", function() {
  console.log("db on");
});
mongoose.connection.on("error", function() {
  console.log("db error");
});
mongoose.connection.on("disconnected", function() {
  console.log("db off");
});

app.use(cors());
app.use(express.json());
app.use(routes);

const HOST = process.env.HOST || "0.0.0.0";
const PORT = process.env.PORT || 8080;
app.listen(PORT, HOST);

console.log(`server on in ${HOST}:${PORT}`);
