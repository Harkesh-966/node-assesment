const axios = require('axios');
const pool = require('../db');

async function getApiKey(name) {
    const [rows] = await pool.query('SELECT key_value FROM api_keys WHERE name = ?', [name]);
    return rows.length > 0 ? rows[0].key_value : '';
}

exports.fetchWeather = async (address) => {
    const weatherKey = await getApiKey('openweathermap');
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(address)}&units=metric&appid=${weatherKey}`);
    return { ...resp.data, address };
};

exports.saveWeather = async (address, lat, lng, weather_json) => {
    if (!address || !address.trim()) return { success: false, error: 'Address should be mandatory!' };
    if (!lat || !lng || !weather_json) return { success: false, error: 'Invalid data.' };

    await pool.query(
        'INSERT INTO weather_history (address, latitude, longitude, weather_json) VALUES (?, ?, ?, ?)',
        [address, lat, lng, weather_json]
    );
    return { success: true };
};
