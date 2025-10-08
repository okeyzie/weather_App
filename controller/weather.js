// controllers/weatherController.js
const axios = require("axios");
const Weather = require("../model/weather");
require("dotenv").config();

exports.getWeather = async (req, res) => {
  try {
    const city = req.query.city;
    const apiKey = process.env.WEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await axios.get(url);
    const data = response.data;

    if (city === null) {
    return res.status(400).json({ 
        message: "Please provide a city name." + error.message
    });
}

    const weather = new Weather({
      city: data.name,
      country: data.sys.country,
      temperature: `${data.main.temp} °C`,
      condition: data.weather[0].description,
      humidity: `${data.main.humidity}%`,
      wind: `${data.wind.speed} m/s`,
    });

    await weather.save();

    return res.status(201).json({
        Message:`The weather reports are :`,
        data: weather
    });
  } catch (error) {
    return res.status(404).json({ 
        message: "City not found or invalid request." + error.message
    });
  }
};
