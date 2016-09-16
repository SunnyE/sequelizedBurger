var bodyParser = require('body-parser');
var express = require('express');
var methodOverride = require('method-override');
var models = require('../models');
var router = express.Router();

router.get('/', function(req, res){
    models.burgers.findAll()
    .then(function(result){
        var devBurger = [];
        var freshBurger = [];

        for (var i=0; i < data.length; i++){
            if(result[i].devoured === false){
                freshBurger.push(result[i]);
            } else {
                devburger.push(result[i]);
            }
        }
        var burgsAllDay = {
            fresh: freshBurger,
            devoured: devBurger
        };
        res.render('index', burgsAllDay);
    });
});


router.post('/devoured/:id', function(req, res){
    models.burgers.update(
        {devoured:true},
        {where:{id: req.body.id}})
        .then(function(){
            res.redirect('/')
        })
});


router.post('/create', function(req, res){
    models.burgers.create({
            burger_name: req.body.burger_name})
            .then(function(){
                res.redirect('/');
            })
    });

module.exports = router;