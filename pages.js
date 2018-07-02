const express = require('express')
const app = express()
const bodyParser = require('body-parser');
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

function autoNavigate() {
    homePage();
    about();
}

//exporting
module.exports.homePage = homePage;
module.exports.about = about;
module.exports.autoNavigate = autoNavigate;
