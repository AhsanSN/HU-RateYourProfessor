const db = require('../database.js');

function login() {
    var email = document.getElementById("Email")
    var password = document.getElementById("password")

    if (db.verifyCredentials(email, password)) {
        //login successfull
        //redirect 
    }
    else {
        document.getElementById("errorMsg").innerHTML = "Error creating account";
    }
}

function signup() {
    var username = document.getElementById("username")
    var password = document.getElementById("password")
    var email = document.getElementById("email")

    if (password1 == password2) {
        db.addUserToDb(username, email, password )
    }
}