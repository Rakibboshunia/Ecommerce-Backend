const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const RateLimiter = require("./src/middlewares/RateLimiter");
const ErrorHandler = require("./src/middlewares/ErrorHandler");
const NotFound = require("./src/middlewares/NotFound");

const api = require("./src/routes/api");

const app = express();

app.use(cors());

app.use(helmet());

app.use(morgan("dev"));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(RateLimiter);

// Routes
app.use("/api/v1", api);

// 404
app.use(NotFound);

// Error Handler
app.use(ErrorHandler);

module.exports = app;