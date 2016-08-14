/*
 *Author: Cole Alban
 */

/*
 *Load in express module and the path module.
 *Also set the static file path.
 *Also set the template engine to mustache
 */
var express = require('express')
var path = require('path')
var app = express();
var fs = require('fs');
var mustache = require('mustache');
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
    var partialElements = loadCommonElements();
    var partials = {header:partialElements["header"],
                    footer: partialElements["footer"],
                    nav: partialElements["nav"]}
    var html = loadTemplate("index.mustache",null,partials); 
    res.send(html);
});

/*
 *Respond to requests to /rush with rush.html
 */
app.get('/rush',function(req, res){
    var partialElements = loadCommonElements();
    var partials = {header:partialElements["header"],
                    footer: partialElements["footer"],
                    nav: partialElements["nav"]}
    var html = loadTemplate("rush.mustache",null,partials); 
    res.send(html);
});



/*
 *Respond to requests to /about with rush.html
 */
app.get('/about',function(req, res){
    var partialElements = loadCommonElements();
    var partials = {header:partialElements["header"],
                    footer: partialElements["footer"],
                    nav: partialElements["nav"]}
    var html = loadTemplate("about.mustache",null,partials); 
    res.send(html);
});


/*
 *Respond to requests to /contact with contact.html
 */
app.get('/contact',function(req, res){
    var partialElements = loadCommonElements();
    var partials = {header:partialElements["header"],
                    footer: partialElements["footer"],
                    nav: partialElements["nav"]}
    var html = loadTemplate("contact.mustache",null,partials); 
    res.send(html);
});

/*
 *Respond to requests on /schedule with schedule.html
 */
app.get('/schedule',function(req, res){
    var partialElements = loadCommonElements();
    var partials = {header:partialElements["header"],
                    footer: partialElements["footer"],
                    nav: partialElements["nav"]}
    var html = loadTemplate("schedule.mustache",null, partials); 
    res.send(html);
});

/*
 *Respond to requests on /philanthropy with philantrhopy.html
 */
app.get('/philanthropy',function(req, res){
    var partialElements = loadCommonElements();
    var partials = {header:partialElements["header"],
                    footer: partialElements["footer"],
                    nav: partialElements["nav"]}
    var html = loadTemplate("philanthropy.mustache",null, partials); 
    res.send(html);
});


/*
 *This will load a mustache template with the two given files
 */
function loadTemplate(file, views, mixins){
    if(file != null){
        var baseTemplate;
        baseTemplate = loadFile(path.join(__dirname,"views",file));
        //Check if views or mixins is null, if so set them to empty hashes
        if(views == null){
            views = {};
        }

        if(mixins == null){
            mixins = {};
        }
        //return the rendered string
        var renderedTemplate = mustache.render(baseTemplate, views, mixins);
        return renderedTemplate;
    }             
    return "<h1>Error reading file</h1>" //If no valid file is passed in, return this error html
}

/*
 *This function will be used to load a file into a string
 *The returned value will be a string.
 */
function loadFile(file){
    return fs.readFileSync(file, 'utf-8');
}

/*
 * This function will load up the header, footer, and navbar.
 * return: an array containing header at [0] and footer at [1]
 */
function loadCommonElements(){
    var elements = {}; 
    elements["footer"] = loadFile(path.join(__dirname, "views", "partials", "footer.mustache"));
    elements["header"] = loadFile(path.join(__dirname, "views", "partials", "header.mustache"));
    elements["nav"] = loadFile(path.join(__dirname, "views", "partials", "nav.mustache"));
    return elements;
}
