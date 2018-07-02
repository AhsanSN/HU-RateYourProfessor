const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const pages = require('./pages');
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

function start() {

    //starting 
    pages.homePage();

    pages.autoNavigate();

    app.listen(3000, function () {
        console.log('listening on port 3000!')
    })
}

start();