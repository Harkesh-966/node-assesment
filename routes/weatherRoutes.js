const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weatherController');

router.get('/', weatherController.index);
router.post('/weather', weatherController.getWeather);
router.post('/save', weatherController.saveWeather);
router.get('/add-element', weatherController.addElement);

module.exports = router;
