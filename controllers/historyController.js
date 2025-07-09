const pool = require('../db');

exports.showHistory = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM weather_history ORDER BY created_at DESC');
    res.render('history.njk', { history: rows });
};
