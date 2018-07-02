const express = require('express')
const app = express()
const mysql = require('mysql');

//session variables
var s_username = null
var s_usernumber = null
var s_email = null

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'HU_RYP'
});

connection.connect(function (error) {
    if (error) {
        console.log("error");
    }
    else {
        console.log("connection successful");
    }
});

function addUserToDb(username, email, password) {
    //generate userid

    connection.query(`INSERT INTO Users (userId, username, email, password) VALUE ('${userId}','${username}','${email}', '${password}')`, function (error, rows, fields) {
        if (error) {
            console.log("error in query");
        }
    }); 
}

function verifyCredentials(email, password, callback) {
    connection.query(`SELECT * FROM Users Where email = ${email} AND password = ${password}`, function (error, rows, fields) {
        if (error)
            callback(error, null);
        else {
            //successfull query
            if (rows.length == 1) {
                //person found
                s_username = rows[0].username;
                s_email = rows[0].email;
                s_userId = rows[0].userId;
            }
            callback(null, messageArrayTemp);
        }
    });
}

function logout() {
    s_username = null;
    s_userId = null;
    s_email = null;
}

function isSignedIn() {
    if (((s_username) || (s_usernumber) || (s_email)) != null) {
        return true;
    }
    else {
        return false;
    }
}

function submitReview(instructorName, courseName, rat_teaching, rat_marking, rat_etc, rat_comments) {

    connection.query(`INSERT INTO Reviews (
                    instructorName,
                    courseName,
                    rat_teaching,
                    rat_marking,
                    rat_etc,
                    rat_comments)
                VALUE ('${instructorName}',
                        '${courseName}',
                        '${rat_teaching}', 
                        '${rat_marking}',
                        '${rat_etc}',
                        '${rat_comments}')`,
        function (error, rows, fields) {
        if (error) {
            console.log("error in query");
        }
    }); 
}

function showInstructorReview(instructor, callback) {
    connection.query(`SELECT * FROM Reviews Where instructor = ${instructor}`, function (error, rows, fields) {
        if (error)
            callback(error, null);
        else {
            //successfull query

            callback(null, messageArrayTemp);
        }
    });
}

function showCourseInstructors(course) {
    connection.query(`SELECT * FROM Instructors Where course = ${course}`, function (error, rows, fields) {
        if (error)
            callback(error, null);
        else {
            //successfull query
            callback(null, messageArrayTemp);
        }
    });
}

//exporting
module.exports.addUserToDb = addUserToDb;
module.exports.verifyCredentials = verifyCredentials;
module.exports.logout = logout;
module.exports.isSignedIn = isSignedIn;
module.exports.submitReview = submitReview;
module.exports.showInstructorReview = showInstructorReview;
module.exports.showCourseInstructors = showCourseInstructors;








