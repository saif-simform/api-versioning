const express = require("express");
const router = express.Router();

const moviesRoutes = require("../controllers/movies/routes");

router.use("/movies", moviesRoutes);
