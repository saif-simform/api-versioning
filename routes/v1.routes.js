const express = require("express");
const router = express.Router();

const userRoutes = require("../controllers/V1/user/routes");

router.use("/user", userRoutes);

module.exports = router;
