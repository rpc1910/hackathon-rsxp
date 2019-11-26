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


app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3000);
console.log("on");
