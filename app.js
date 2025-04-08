const express = require("express");
const cors = require("cors");
const app = express();
const fruits = require("./routes/fruits");

app.get("/", (req, res) => {
  res.send("Hello Fruity!"); // This is the default route
});

app.use(cors()); // Enable CORS for all routes
app.use(express.json());
app.use("/fruits", fruits); // Use the fruits router for all routes starting with /fruits
// Middleware to parse JSON request bodies

module.exports = app;
