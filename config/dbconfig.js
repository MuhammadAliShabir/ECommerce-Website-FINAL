const express = require('express');
const mysql = require('mysql');

const app = express();
// Create a pool of database connections
const pool = mysql.createPool({
    connectionLimit: 5, // Maximum number of connections in the pool
    host: 'localhost',
    user: 'root',
    password: 'itsmysql',
    database: 'websiteDB'
});

// Function to get a connection from the pool
function getConnection(callback) {
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error getting connection from pool:', err);
            callback(err, null);
            return;
        }
        callback(null, connection);
    });
}


// Function to execute a query using a connection
function executeQuery(query, params, callback) {
    getConnection((err, connection) => {
        if (err) {
            callback(err, null);
            return;
        }
        console.log("Database Connection Successful");
        connection.query(query, params, (queryError, results) => {
            connection.release();
            if (queryError) {
                console.error('Error executing query:', queryError);
                callback(queryError, null);
            } else {
                callback(null, results);
            }
        });
    });
}




module.exports = {
    getConnection,
    executeQuery
};




// //stored procedure
// connection.query('CALL GetUsers()', (error, results) => {
//     if (error) {
//         console.error('Error calling stored procedure:', error);
//         return;
//     }
//     console.log('Users:', results[0]); // Stored procedure results are returned as an array
// });

// connection.end();



// const userId = 1;
// connection.query('CALL GetUserInfo(?)', [userId], (error, results) => {
//     if (error) {
//         console.error('Error calling stored procedure:', error);
//         return;
//     }
//     console.log('User Info:', results[0]);
// });
