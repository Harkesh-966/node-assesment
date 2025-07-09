-- Save as dump.sql

CREATE DATABASE IF NOT EXISTS weatherdb;
USE weatherdb;

CREATE TABLE IF NOT EXISTS weather_history (
    id INT PRIMARY KEY AUTO_INCREMENT,
    address VARCHAR(255),
    latitude FLOAT,
    longitude FLOAT,
    weather_json JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS api_keys (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    key_value VARCHAR(255)
);

/* Sample data for api_keys (REMOVE before commit)
INSERT INTO api_keys (name, key_value) VALUES ('openweathermap', 'YOUR_KEY'), ('mapbox', 'YOUR_KEY');
*/