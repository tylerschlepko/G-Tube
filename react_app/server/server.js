const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
const app = express();

// Middleware to parse JSON data
app.use(express.json());

// Middleware to enable CORS
app.use(cors());

// Create a connection pool to the database
const pool = new Pool({
  user: "",
  password: "",
  port: 5432,
  host: "localhost",
  database: "METUBE",
});

const PORT = process.env.PORT || 3001;

// API endpoint to retrieve a simple JSON object
app.get("/testApi", async (req, res) => {
  const data = { users: ["userOne", "userTwo", "userThree"] };
  res.send(data);
});

// API endpoint to retrieve all Users
app.get("/Users", async (req, res) => {
  try {
    const { rows } = await pool.query(`SELECT * FROM users`);
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});
//API endpoint to retrieve all comments
app.get("/Comments", async (req, res) => {
    try {
      const { rows } = await pool.query(`SELECT * FROM comments`);
      res.json(rows);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  });

// API endpoint to retrieve a single User by ID
app.get("/Users/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await pool.query(`SELECT * FROM users WHERE id = ${id}`);
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});
//API endpoint to retreieve single comment
app.get("/Comments/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const { rows } = await pool.query(`SELECT * FROM comments WHERE id = ${id}`);
      res.json(rows);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  });
//API endpoint to retrieve single video
app.get("/Videos/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const { rows } = await pool.query(`SELECT * FROM videos WHERE id = ${id}`);
      res.json(rows);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  });


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});