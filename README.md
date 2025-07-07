# Weather App

### How to Run
1. Install MySQL, create database and import `dump.sql`.
2. `npm install`
3. Set your MySQL credentials in `.env` and access into `db.js` via `process.env`.
4. Add your API keys into the `api_keys` table:
    - name: openweathermap, key_value: YOUR_KEY
5. `npm start`
6. Visit [http://localhost:3000](http://localhost:3000)

### Notes
- No API keys or passwords are committed.
- UI is fully responsive (Bootstrap 4).
- Dynamic elements, AJAX, and history included.
