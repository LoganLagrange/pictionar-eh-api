const express = require("express");
const router = express.Router();

const userRoutes = require("./userRoutes");
router.use("/api/users", userRoutes);

const drawingRoutes = require("./drawingRoutes");
router.use("/api/drawings", drawingRoutes);

module.exports = router;