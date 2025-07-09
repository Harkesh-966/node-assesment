
# 🌤️ Node.js Weather Application with Nunjucks

This is a Node.js-based weather application using the Nunjucks templating engine. It allows users to search weather data by address, save it to a MySQL database, and view historical data.

---

## 📁 Project Structure Overview

```
.
├── app.js                         # Main application entry point
├── controllers/                  # Handles business logic
│   ├── historyController.js
│   └── weatherController.js
├── db.js                          # MySQL database connection setup
├── dump.sql                       # SQL dump to create initial DB schema
├── package.json                   # Project metadata and dependencies
├── package-lock.json              # Locked dependency versions
├── public/                        # Static assets
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── index.js
├── README.md
├── routes/                        # API and view route handlers
│   ├── historyRoutes.js
│   └── weatherRoutes.js
├── services/                      # External service integrations
│   └── weatherService.js
└── views/                         # Nunjucks templates
    ├── base.njk
    ├── history.njk
    ├── index.njk
    └── partials/
        ├── alert-modal.njk
        └── weather-card.njk
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd node-assesment
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env` file with the following content:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=weatherdb
```

### 4. Setup the MySQL Database

Run the SQL dump file in your MySQL client:

```sql
SOURCE dump.sql;
```

### 5. Run the App

```bash
node app.js
```

---

## 🧠 Technologies Used

- **Node.js**
- **Express.js**
- **Nunjucks** - for rendering dynamic HTML templates
- **MySQL** - for storing weather history
- **OpenWeatherMap API** - for fetching weather data

---

## 🔍 Key Directories and Files

| File/Folder             | Purpose |
|-------------------------|---------|
| `controllers/`          | Handles request-response logic |
| `routes/`               | Defines application routes |
| `services/`             | Contains reusable logic (e.g., API calls) |
| `views/`                | Contains Nunjucks templates for frontend |
| `public/`               | Static assets like CSS and JS |
| `db.js`                 | Sets up MySQL connection |
| `dump.sql`              | Creates DB tables |
| `.env`                  | Stores DB credentials |

---

## ✅ Features

- Search weather data by address
- Display results using styled cards
- Save results to MySQL
- View historical weather search data
- Responsive frontend using Nunjucks and custom CSS

---

## ✨ Future Enhancements

- Add pagination and filters to history
- Integrate charts for visual weather trends
- Add user login to store personal history
