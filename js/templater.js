/*
*This file will contain methods for supporting the mustache templating engine
*Author: Cole Alban
*/

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

function testMe(){
    console.log(__dirname);
}

module.exports.loadCommonElements = loadCommonElements;
module.exports.loadFile = loadFile;
module.exports.loadTemplate = loadTemplate;
module.exports.testMe = testMe;
