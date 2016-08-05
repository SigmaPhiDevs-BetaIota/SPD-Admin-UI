/*
 *Load in express module and the path module.
 *Also set the static file path.
 *Also set the template engine to mustache
 */
var express = require('express')
var path = require('path')
var app = express();
app.set('view engine', 'mustache');
app.use(express.static('public'));


/*
 *Main event loop. Listen for requests here
 */
app.listen(3000, function(){
    console.log("Listen on port 3000");
});

/*************
 *ROUTES
 * **********./
 
/*
 *Respond to requests on the root with index.html
 */
app.get('/',function(req, res){
    res.sendFile(path.join(__dirname, "views", "index.html"));
});


/*
 *Respond to requests to /rush with rush.html
 */
app.get('/rush',function(req, res){
    res.sendFile(path.join(__dirname, "views", "rush.html"));
});



/*
 *Respond to requests to /about with rush.html
 */
app.get('/about',function(req, res){
    res.sendFile(path.join(__dirname, "views", "about.html"));
});


/*
 *Respond to requests to /contact with contact.html
 */
app.get('/contact',function(req, res){
    res.sendFile(path.join(__dirname, "views", "contact.html"));
});

/*
 *Respond to requests on /schedule with schedule.html
 */
app.get('/schedule',function(req, res){
    res.sendFile(path.join(__dirname, "views", "schedule.html"));
});

/*
 *Respond to requests on /philanthropy with philantrhopy.html
 */
app.get('/philanthropy',function(req, res){
    res.sendFile(path.join(__dirname, "views", "philanthropy.html"));
});


/*
 *This will load a mustache template with the two given files
 */
function load_template(file, views, mixins){

    if(file != null){
        //Load in the given file
        var main_file = ""
        main_template = load_file(path.join(__dirname,"views",file));
        //Check if views or mixins is null, if so set them to empty hashes
        if(views == null){
            views = {};
        }

        if(mixins == null){
            mixin = {};
        }
        //return the rendered string
        return mustache.render(main_file, views,mixins);
    }             
    return "<h1>Error reading file</h1>" //If no valid file is passed in, return this error html
}

/*
 *This function will be used to load a file into a string
 *The returned value will be a string.
 */
function load_file(file){
    fs.readFile(file, function(err, data){
        return data.toString();
    });
}
