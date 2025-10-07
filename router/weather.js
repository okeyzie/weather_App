// routes/weatherRoute.js
const express = require("express");
const router = express.Router();
const {getWeather} = require("../controller/weather");

router.get("/weather",getWeather);

module.exports = router;
