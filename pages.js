const express = require('express')
const app = express()
const bodyParser = require('body-parser');
//const database = require('./database.js');
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

//css
app.use(express.static('public')); //inline

function homePage() {
    app.get('/', function (req, res) {
        res.render('index', {});
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

    app.listen(3000, function () {
        console.log('listening on port 3000!')
    })
}

//exporting
module.exports.homePage = homePage;
module.exports.about = about;
module.exports.autoNavigate = autoNavigate;
