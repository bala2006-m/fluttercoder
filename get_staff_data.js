const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors'); // Optional, for easier management of CORS

const app = express();
const port = 3000;

// Middleware to set CORS headers manually
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Use body-parser middleware to parse POST data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// MySQL database connection
const db = mysql.createConnection({
  host: 'sql10.freesqldatabase.com',
  user: 'sql10764215',
  password: 'V4nZAkfcv8',
  database: 'sql10764215',
  connectTimeout: 60000
});

// Check MySQL connection
db.connect((err) => {
  if (err) {
    console.error('Connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to the database');
});

// POST route for login
app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // Escape inputs to prevent SQL injection
  const escapedUsername = db.escape(username);
  const escapedPassword = db.escape(password);

  // Query to check if username and password match
  const query = `SELECT * FROM staff WHERE username = ${escapedUsername} AND password = ${escapedPassword}`;
  
  db.query(query, (err, result) => {
    if (err) {
      console.error('Database query error: ' + err);
      res.status(500).send('Database query error');
      return;
    }

    if (result.length > 0) {
      res.send('success'); // Return success if user exists
    } else {
      res.send('failure'); // Return failure if user does not exist or password is incorrect
    }
  });
});
app.post('/store_subject1', (req, res) => {
    const { date, time, name } = req.body;
  
    // Clean up the name array and escape the input
    let name1 = name.replace(/[\[\]]/g, '').split(",").map((item) => item.trim());
    
    // Loop through the names and insert each into the database
    name1.forEach((aa) => {
      const query = `INSERT INTO subject1 (name, date, time) VALUES (?, ?, ?)`;
      
      // Execute the query using prepared statements
      db.query(query, [aa, date, time], (err, result) => {
        if (err) {
          console.error('Database query error: ' + err);
          return res.status(500).send('Database query error');
        }
        
        console.log('Record inserted:', result);
      });
    });
    
    // Send a success response after all insertions
    res.status(200).send('Data inserted successfully');
  });
  app.post('/store_subject2', (req, res) => {
    const { date, time, name } = req.body;
  
    // Clean up the name array and escape the input
    let name1 = name.replace(/[\[\]]/g, '').split(",").map((item) => item.trim());
    
    // Loop through the names and insert each into the database
    name1.forEach((aa) => {
      const query = `INSERT INTO subject2 (name, date, time) VALUES (?, ?, ?)`;
      
      // Execute the query using prepared statements
      db.query(query, [aa, date, time], (err, result) => {
        if (err) {
          console.error('Database query error: ' + err);
          return res.status(500).send('Database query error');
        }
        
        console.log('Record inserted:', result);
      });
    });
    
    // Send a success response after all insertions
    res.status(200).send('Data inserted successfully');
  });
  app.post('/store_subject3', (req, res) => {
    const { date, time, name } = req.body;
  
    // Clean up the name array and escape the input
    let name1 = name.replace(/[\[\]]/g, '').split(",").map((item) => item.trim());
    
    // Loop through the names and insert each into the database
    name1.forEach((aa) => {
      const query = `INSERT INTO subject3 (name, date, time) VALUES (?, ?, ?)`;
      
      // Execute the query using prepared statements
      db.query(query, [aa, date, time], (err, result) => {
        if (err) {
          console.error('Database query error: ' + err);
          return res.status(500).send('Database query error');
        }
        
        console.log('Record inserted:', result);
      });
    });
    
    // Send a success response after all insertions
    res.status(200).send('Data inserted successfully');
  });
  app.post('/store_subject4', (req, res) => {
    const { date, time, name } = req.body;
  
    // Clean up the name array and escape the input
    let name1 = name.replace(/[\[\]]/g, '').split(",").map((item) => item.trim());
    
    // Loop through the names and insert each into the database
    name1.forEach((aa) => {
      const query = `INSERT INTO subject4 (name, date, time) VALUES (?, ?, ?)`;
      
      // Execute the query using prepared statements
      db.query(query, [aa, date, time], (err, result) => {
        if (err) {
          console.error('Database query error: ' + err);
          return res.status(500).send('Database query error');
        }
        
        console.log('Record inserted:', result);
      });
    });
    
    // Send a success response after all insertions
    res.status(200).send('Data inserted successfully');
  });
  app.post('/store_subject5', (req, res) => {
    const { date, time, name } = req.body;
  
    // Clean up the name array and escape the input
    let name1 = name.replace(/[\[\]]/g, '').split(",").map((item) => item.trim());
    
    // Loop through the names and insert each into the database
    name1.forEach((aa) => {
      const query = `INSERT INTO subject5 (name, date, time) VALUES (?, ?, ?)`;
      
      // Execute the query using prepared statements
      db.query(query, [aa, date, time], (err, result) => {
        if (err) {
          console.error('Database query error: ' + err);
          return res.status(500).send('Database query error');
        }
        
        console.log('Record inserted:', result);
      });
    });
    
    // Send a success response after all insertions
    res.status(200).send('Data inserted successfully');
  });
  
// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
