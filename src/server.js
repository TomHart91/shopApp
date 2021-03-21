const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

app.use(cors());

app.use('/login', (req, res) => {
    res.send({
      token: 'test123'
    });
  });

var connection = mysql.createConnection({
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASS,
    port     : 3306
});

connection.connect(function(err) {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }

  console.log('Connected to database.');
});

app.get("/",(req,res) => {
  connection.query('SELECT * FROM blinxDB.product_list_csv', (err, rows) => {
      if(err) throw err;
      console.log('The data from users table are: \n', rows);
      connection.end();
  });
});

var dbTable = connection.query("SELECT * FROM blinxDB.product_list_csv", function (error, results, fields){
  if(error){
      console.log("test");
  }
  if(results.length > 0) {
      console.log(results);
  }
});
app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));

exports.module = connection;
exports.module = dbTable;