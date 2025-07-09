const weatherService = require('../services/weatherService');

exports.index = (req, res) => {
    res.render('index.njk', { weather: null, error: null });
};

exports.getWeather = async (req, res) => {
    const address = req.body.address;
    if (!address) return res.render('index.njk', { weather: null, error: "Please enter address" });

    try {
        const weather = await weatherService.fetchWeather(address);
        res.render('index.njk', { weather, error: null, now: new Date() });


    } catch (err) {
        res.render('index.njk', { weather: null, error: "Error fetching weather!" });
    }
};

exports.saveWeather = async (req, res) => {
    const { address, lat, lng, weather_json } = req.body;
    const result = await weatherService.saveWeather(address, lat, lng, weather_json);
    res.json(result);
};

exports.addElement = (req, res) => {
    res.json({
        html: `<div class="alert alert-info mt-3">This is a dynamically added HTML element!</div>`
    });
};
