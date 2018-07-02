const express = require('express')
const app = express()
const mysql = require('mysql');

//session variables
var s_username = null
var s_usernumber = null

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sampleDB'
});

connection.connect(function (error) {
    if (error) {
        console.log("error");
    }
    else {
        console.log("connection successful");
    }
});

function addUserToDb(username, password) {
    connection.query(`INSERT INTO Users (userId, username, password) VALUE ('${userId}','${username}', '${password}')`, function (error, rows, fields) {
        if (error) {
            console.log("error in query");
        }
    }); 
}

function verifyCredentials(username, password, callback) {
    connection.query(`SELECT name FROM sampletable`, function (error, rows, fields) {
        if (error)
            callback(error, null);
        else {
            //successfull query
            if (rows.length == 1) {
                //person found
                s_username = rows[0].username;
                s_userId = rows[0].userId;
            }
            callback(null, messageArrayTemp);
        }
    });
}

function logout() {
    s_username = null;
    s_userId = null;
}

function isSignedIn() {
    if (((s_username) || (s_usernumber)) != null) {
        return true;
    }
    else {
        return false;
    }
}

//exporting
module.exports.addUserToDb = addUserToDb;
module.exports.verifyCredentials = verifyCredentials;
module.exports.logout = logout;
module.exports.isSignedIn = isSignedIn;







