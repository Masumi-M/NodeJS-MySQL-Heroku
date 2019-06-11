// Define and Import the variables
const mysql = require('mysql');
const databaseName = 'sample';
const tableName = 'todoList';

// Create Connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password' // depends to the user
});

// Connect Function
connection.connect((error) => {
    if (error) {
        console.error('Database Connect Error:' + error);
        return;
    } else {
        console.log('Database Connection Success: id=' + connection.threadId);
    }
});

// Initializing Database
connection.query('CREATE DATABASE IF NOT EXISTS ??;', databaseName);
connection.query('USE ??;', databaseName);
connection.query('CREATE TABLE IF NOT EXISTS ??(id INT AUTO_INCREMENT PRIMARY KEY NOT NULL, name TEXT);', tableName);

connection.query('SHOW FIELDS FROM ??;', tableName, (error, response) => {
    console.log(response);
});

// Export Connection
module.exports = connection;