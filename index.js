
/*
 *Author: Cole Alban
 */

var express = require('express')
var path = require('path')
var fs = require('fs');//import filesystem module
var template = require('./js/templater');//Mustache templating helper functions

//Setup express app
var app = express();
app.set('view engine', 'html');
app.use(express.static('public'));


/*
 *Main event loop. Listen for requests here
 */
app.listen(3000, function(){
    console.log("Listen on port 3000");
});

/*************
    ROUTES
 ************/
 
/*
 *Respond to requests on the root with index.html
 */
app.get('/',function(req, res){
    var partialElements = template.loadCommonElements();
    var partials = {header:partialElements["header"],
                    footer: partialElements["footer"],
                    nav: partialElements["nav"]}
    var html = template.loadTemplate("index.mustache",null,partials); 
    res.send(html);
});

/*
 *Respond to requests to /rush with rush.html
 */
app.get('/rush',function(req, res){
    var partialElements = template.loadCommonElements();
    var partials = {header:partialElements["header"],
                    footer: partialElements["footer"],
                    nav: partialElements["nav"]}
    var html = template.loadTemplate("rush.mustache",null,partials); 
    res.send(html);
});



/*
 *Respond to requests to /about with rush.html
 */
app.get('/about',function(req, res){
    var partialElements = template.loadCommonElements();
    var partials = {header:partialElements["header"],
                    footer: partialElements["footer"],
                    nav: partialElements["nav"]}
    var html = template.loadTemplate("about.mustache",null,partials); 
    res.send(html);
});


/*
 *Respond to requests to /contact with contact.html
 */
app.get('/contact',function(req, res){
    var partialElements = template.loadCommonElements();
    var partials = {header:partialElements["header"],
                    footer: partialElements["footer"],
                    nav: partialElements["nav"]}
    var html = template.loadTemplate("contact.mustache",null,partials); 
    res.send(html);
});

/*
 *Respond to requests on /schedule with schedule.html
 */
app.get('/schedule',function(req, res){
    var partialElements = template.loadCommonElements();
    var partials = {header:partialElements["header"],
                    footer: partialElements["footer"],
                    nav: partialElements["nav"]}
    var html = template.loadTemplate("schedule.mustache",null, partials); 
    res.send(html);
});

/*
 *Respond to requests on /philanthropy with philantrhopy.html
 */
app.get('/philanthropy',function(req, res){
    var partialElements = template.loadCommonElements();
    var partials = {header:partialElements["header"],
                    footer: partialElements["footer"],
                    nav: partialElements["nav"]}
    var html = template.loadTemplate("philanthropy.mustache",null, partials); 
    res.send(html);
});
