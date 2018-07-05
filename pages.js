const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const db = require('./database.js');
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

//css
app.use(express.static('public')); //inline

function homePage() {
    app.get('/', function (req, res) {
        res.render('index', {});
    })
}

function login() {
    app.get('/login', function (req, res) {

        var email = req.body.email;
        var password = req.body.password;

        if (db.verifyCredentials(email, password)) {
            //login successfull
            //redirect 
            res.render('home', {});
        }
        else {
            //error
            res.render('index', {error: "Error signing you in."});
        }
    })
}

function signup() {
    app.get('/signup', function (req, res) {
        var username = req.body.username;
        var email = req.body.email;
        var password = req.body.password;

        if (db.addUserToDb(username, email, password)) {
            //account created
            //redirect
            res.render('home', {});
        }
        else {
            //not created
            res.render('incex', { error: "error creating account" });
        }
    })
}

function about() {
    app.get('/about', function (req, res) {
        res.render('about', {});
    })
}

function courses() {
    app.get('/courses', function (req, res) {
        res.render('courses', {});
    })
}

function autoNavigate() {
    homePage();
    about();
    login();
    signup();

    app.listen(3000, function () {
        console.log('listening on port 3000!')
    })
}

//exporting
module.exports.homePage = homePage;
module.exports.about = about;
module.exports.autoNavigate = autoNavigate;
