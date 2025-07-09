
# Node.js Weather Application

This repository contains a simple Node.js-based weather application that fetches weather data for a given address and stores it in a database.

---

## 📁 Project Structure Overview

```
node-assesment/
├── app.js                # Main application entry point
├── db.js                 # MySQL database connection configuration
├── dump.sql              # SQL file to initialize the database schema
├── .env                  # Environment variables (e.g., DB credentials)
├── package.json          # Node.js dependencies and scripts
├── package-lock.json     # Exact dependency versions
└── README.md             # Project instructions and metadata
```

---

## ⚙️ Setup & Run Instructions

Follow these steps to set up and run the project:

### 1. Clone the Repository

```bash
git clone <repository-url>
cd node-assesment
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root folder and define your database credentials:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=weatherdb
```

### 4. Setup MySQL Database

1. Open MySQL or your preferred client.
2. Import `dump.sql` to create the database and tables.

```sql
SOURCE dump.sql;
```

### 5. Run the Application

```bash
node app.js
```

You should see logs indicating that the app is connected and listening on a port.

---

## 📄 File & Directory Purpose

| File/Folder      | Purpose                                                                 |
|------------------|-------------------------------------------------------------------------|
| `app.js`         | Main server file, sets up Express and route handlers                    |
| `db.js`          | Creates a MySQL pool and exports it for query usage                     |
| `.env`           | Stores environment-specific variables (never commit this file)          |
| `dump.sql`       | Contains SQL commands to create necessary database schema               |
| `package.json`   | Contains app metadata and NPM scripts/dependencies                      |
| `package-lock.json` | Automatically generated file to lock dependencies                    |
| `.git/`          | Git tracking data (automatically generated)                             |

---

## 📌 Notes

- Make sure MySQL is running and accessible with the credentials you provide.
- The project uses [Express](https://expressjs.com/) and [MySQL2](https://www.npmjs.com/package/mysql2) packages.

---

## 🧪 API Endpoints (Assumed)

> You may want to include these if implemented in `app.js`.

- `GET /weather?address=<address>` - Fetch weather data from OpenWeatherMap
- `POST /weather/save` - Save weather data to DB
- `GET /history` - View previously saved weather entries

---

## ✅ Requirements Fulfilled

- Weather API integration using OpenWeatherMap
- MySQL database for storing historical data
- Clean folder structure and separation of concerns (after refactor)

---

## 🚫 Known Limitations

- Initially, all code was written in a single file (`app.js`)
- Nunjucks templating was not used

---

## ✨ Improvements Suggested

- Use Nunjucks or EJS for templating frontend
- Move routes and DB logic into separate files/folders for better modularity
- Add error handling and validation for robustness
