const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const todoRouter = require("./Routes/todo");
const port = process.env.PORT || 5001;
// The service name should be samed as the alias used while linking containers
const MONGODBURI = "mongodb://mongo:27017/Todo";
mongoose.connect(
  MONGODBURI,
  { useNewUrlParser: true }
);
let db = mongoose.connection;

db.once("open", () => {
  console.log("MongoDb connected");
  return db;
});
db.on("error", console.error.bind(console, "Connection Error"));

app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.use(bodyParser.json({ limit: "10mb" }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});
app.use("/todos", todoRouter);

app.listen(port, () => {
  console.log("Serve listening on port " + port);
});
