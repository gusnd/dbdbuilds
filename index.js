const db = require('./models/db')
const killers = require('./models/killers')
const perks = require('./models/perks')
const addons = require('./models/addons')


const express = require("express");
const app = express();
const { engine } = require('express-handlebars');

/* const mysql = require('mysql2');
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
});
con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");

}); */

app.get("/", function (req, res) {
    res.render('createbuild');
}
);
// config template engine
app.use(express.static(__dirname))
app.set('views', __dirname + '/views/layouts/')
app.engine('handlebars', engine({ defaultLayout: __dirname + '/views/layouts/main' }))
app.set('view engine', 'handlebars')

/* console.log(__dirname) */

app.get('/', function(req, res){
    killers.all().then(function(killers){
        res.render('createbuild', {killers: killers})
    })
    
})

app.listen(8081);