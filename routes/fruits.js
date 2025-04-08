const express = require("express");
const router = express.Router();
const fruits = require("../controllers/fruits");

// http methods
router.get("/", fruits.index); // Get all fruits
router.get("/:name", fruits.show); // Get a specific fruit by name
router.post("/", fruits.create); // Create a new fruit
router.patch("/:name", fruits.update); // Update a specific fruit by name
router.delete("/:name", fruits.destroy); // Delete a specific fruit by name

module.exports = router;
