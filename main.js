const express = require('express')
const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

function home() {

    app.use(express.static('public')); //inline
    //displaying html requested page
    app.get('/', function (req, res) {
        res.render('index', { Name: null, error: null });
    })

    app.listen(3000, function () {
        console.log('Example app listening on port 3000!')
    })
}

home();