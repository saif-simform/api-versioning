const express = require("express");
const cors = require("cors");
const CONFIG = require("./config/config");
const mongoose = require("mongoose");
const routesV1 = require("./routes/v1.routes");
const routesV2 = require("./routes/v2.routes");
const queryRoutes = require("./routes/query.routes");
const httpStatus = require("http-status");

// DATABASE Connection
const db_url = `${CONFIG.db_dialect}://${CONFIG.db_host}:${CONFIG.db_port}/${CONFIG.db_name}`;

mongoose.connect(db_url);
mongoose.connection.once("open", function () {
  console.log("MongoDB database connection established successfully");
});

//Initiate the app
const app = express();
app.use(express.json({ limit: "100mb" }));

//CORS
app.use(cors());

//Load API V1 Routes
app.use("/api/v1", routesV1);

//Load API V2 routes
app.use("/api/v2", routesV2);

//Load query based routes
app.use("/api", queryRoutes);

app.use("/", function (req, res) {
  return res
    .status(httpStatus.NOT_FOUND)
    .send({ message: `Route does not exists` });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

//Start the server
const PORT = CONFIG.port || "3001";

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
