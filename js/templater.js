var mustache = require('mustache');
var path = require('path');
var fs = require('fs');
var ROOT_PATH = require('../constants').ROOT_PATH;

/*
*This file will contain methods for supporting the mustache templating engine
*Author: Cole Alban
*/


/*
 *This function will be used to load a file into a string
 *The returned value will be a string.
 */
function loadFile(file){
    try{
        return fs.readFileSync(file, 'utf-8');
    }
    catch(error){
        return '<h1>File not found</h1>';
    }
}

/*
 *This will load a mustache template with the two given files
 */
function loadTemplate(file, views, mixins){
    var baseTemplate;
    try{
        baseTemplate = loadFile(path.join(ROOT_PATH,"views",file));
        if(views == null){
            views = {};
        }
        if(mixins == null){
            mixins = {};
        }
        return mustache.render(baseTemplate, views, mixins);
    }             
    catch(error){
        return "<h1>Error reading file</h1>"; //If no valid file is passed in, return this error html
    }
}

/*
 * This function will load up the header, footer, and navbar.
 * return: an array containing header at [0] and footer at [1]
 */
function loadCommonElements(){
    var elements = {}; 
    elements["footer"] = loadFile(path.join(ROOT_PATH, "views", "partials", "footer.mustache"));
    elements["header"] = loadFile(path.join(ROOT_PATH, "views", "partials", "header.mustache"));
    elements["nav"] = loadFile(path.join(ROOT_PATH, "views", "partials", "nav.mustache"));
    return elements;
}


module.exports.loadCommonElements = loadCommonElements;
module.exports.loadFile = loadFile;
module.exports.loadTemplate = loadTemplate;
