const express = require("express");
const router = express.Router();

const userRoutes = require("../controllers/user/routes");
const moviesRoutes = require("../controllers/movies/routes");
const webSeriesRoutes = require("../controllers/web-series/routes");

// Query based routes
router.use("/user", userRoutes);

// Custom header based routes
router.use("/movies", moviesRoutes);

// Accespt header based routes
router.use("/web-series", webSeriesRoutes);

module.exports = router;
