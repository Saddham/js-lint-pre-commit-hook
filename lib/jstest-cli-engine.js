/**
 * @fileoverview Main JSTestCLIEngine object.
 * @author Saddham Pathan
 */

"use strict";

/*
 * The JSTestCLIEngine object should *not* call process.exit() directly. It should only return
 * exit codes. This allows other programs to use the JSTestCLIEngine object and still control
 * when the program exits.
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const fs = require("fs"),
    path = require("path"),
    glob = require('glob-utils'),
    S = require('string'),
    opn = require('opn'),
    pkg = require("../package.json");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

function getSpecName(sourceFileName) {
    var strS = S(sourceFileName);
    
    strS = strS.strip('factory.', 'service.', '.js');
    if(strS.startsWith('pw')) {
        strS = strS.chompLeft('pw');
        strS.s = 'PW' + strS.s;
    } else
        strS = strS.titleCase();
    
    strS.s = strS.s + '.prototype'; 
    
    return strS.s;
}

/**
 * Run a test.
 * @param {string} sourceFileName An string representing the source filename.
 */
function runTest(sourceFileName) {
    let specName = getSpecName(sourceFileName);
    
    // Opens the url in the default browser
    opn('http://localhost:8080/$dhtmlxgantt_test.do?spec=' + specName);
    
}

/**
 * Processes an individual file. Files used here are known to
 * exist, so no need to check that here.
 * @param {string} sourceFileName Name of the source file under test
 */
function processFile(sourceFileName) {
    runTest(sourceFileName);
}

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

class JSTestCLIEngine {

    /**
     * Creates a new instance of the core JSTestCLI engine.
     * @param {JSTestCLIEngineOptions} providedOptions The options for this instance.
     * @constructor
     */
    constructor(providedOptions) {

        const options = Object.assign(
            Object.create(null),
            providedOptions
        );

        /**
         * Stored options for this instance
         * @type {Object}
         */
        this.options = options;
    }

    /**
     * Resolves the patterns passed into executeOnFiles() into basenames.
     * @param {string[]} patterns The file patterns passed on the command line.
     * @returns {string[]} basenames.
     */
    resolveFileGlobPatterns(patterns) {
        return glob.basename(patterns);
    }

    /**
     * Executes the current configuration on an array of file and directory names.
     * @param {string[]} patterns An array of file and directory names.     
     */
    executeOnFiles(patterns) {
        const fileList = this.resolveFileGlobPatterns(patterns);
        
        fileList.forEach(function(sourceFileName) {
            processFile(sourceFileName);
        });        
    }
}

JSTestCLIEngine.version = pkg.version;

module.exports = JSTestCLIEngine;
