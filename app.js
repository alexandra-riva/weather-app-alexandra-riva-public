require('dotenv').config();
const express = require('express');
const axios = require('axios');
const path = require('path');
const cors = require('cors'); // <-- ADD THIS

const app = express();
app.use(cors()); // <-- ADD THIS

const API_KEY = process.env.API_KEY;
const API_DOMAIN = "https://weather.visualcrossing.com";
const API_PATH = "/VisualCrossingWebServices/rest/services/timeline/";

app.use(express.static(path.join(__dirname, 'public')));

app.get('/weather', async (req, res) => {
  const city = req.query.city;
  if (!city) return res.status(400).json({ message: 'City is required' });

  try {
    const response = await axios.get(`${API_DOMAIN}${API_PATH}${city}`, {
      params: {
        unitGroup: 'metric',
        key: API_KEY,
        contentType: 'json'
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching weather data' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
