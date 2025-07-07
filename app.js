const express = require('express');
const bodyParser = require('body-parser');
const pool = require('./db');
const axios = require('axios');
const path = require('path');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

async function getApiKey(name) {
    const [rows] = await pool.query('SELECT key_value FROM api_keys WHERE name = ?', [name]);
    return rows.length > 0 ? rows[0].key_value : '';
}

app.get('/', (req, res) => {
    res.render('index', { weather: null, error: null });
});

app.post('/weather', async (req, res) => {
    const address = req.body.address;
    if (!address) return res.render('index', { weather: null, error: "Please enter address" });

    try {
        // 1. Get API Keys
        const weatherKey = await getApiKey('openweathermap');
        const weatherResp = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(address)}&units=metric&appid=${weatherKey}`);
        const weather = weatherResp.data;
        // 4. Render result
        res.render('index', { weather: { ...weather, address }, error: null });
    } catch (err) {
        res.render('index', { weather: null, error: "Error fetching weather!" });
    }
});

// Save to DB
app.post('/save', async (req, res) => {
    const { address, lat, lng, weather_json } = req.body;
    if (!address || !address.trim()) {
        return res.json({ success: false, error: 'Address should be mandatory!' });
    }
    if (!lat || !lng || !weather_json) return res.json({ success: false, error: 'Invalid data.' });

    await pool.query(
        'INSERT INTO weather_history (address, latitude, longitude, weather_json) VALUES (?, ?, ?, ?)',
        [address, lat, lng, weather_json]
    );
    res.json({ success: true });
});


// Show history
app.get('/history', async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM weather_history ORDER BY created_at DESC');
    res.render('history', { history: rows });
});

// API for dynamically adding element
app.get('/add-element', (req, res) => {
    res.json({
        html: `<div class="alert alert-info mt-3">This is a dynamically added HTML element!</div>`
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
