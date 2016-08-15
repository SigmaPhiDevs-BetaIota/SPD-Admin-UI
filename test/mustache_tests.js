var expect = require('chai').expect;
var fs = require('fs');
var path = require('path');
var ROOT_PATH = require('../constants').ROOT_PATH;

//This test suite will test the load file function
describe('Test load file function', function(){
    var loadFile;
    //before each test, load in loadFile
    beforeEach( function(){
       loadFile = require('../js/templater').loadFile;
    });

    //Test that index.mustache loads correctly
    it('Should load index.mustache', function(){
       var html = fs.readFileSync(path.join(ROOT_PATH,'views','index.mustache'),'utf8');
       expect(loadFile(path.join(ROOT_PATH,'views','index.mustache'))).to.equal(html);
    });

    //Test that the error message is returned when an invalid file is passed in
    it('Should return error text when file not found', function(){
        expect(loadFile(path.join(ROOT_PATH,'views','not_real.html'))).to.equal('<h1>File not found</h1>');
    });

    //Test when null is passed in
    it('Should return error text when null is passed in', function(){
        expect(loadFile(null)).to.equal('<h1>File not found</h1>');
    });

});

//This will test the loadTemplate function
xdescribe('Test loadTemplate function', function(){    

});
