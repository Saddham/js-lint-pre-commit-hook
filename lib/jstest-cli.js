/**
 * @fileoverview Main JSTestCLI object.
 * @author Saddham Pathan
 */

"use strict";

/*
 * The JSTestCLI object should *not* call process.exit() directly. It should only return
 * exit codes. This allows other programs to use the JSTestCLI object and still control
 * when the program exits.
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const fs = require("fs"),
    path = require("path"),
    options = require("./options"),
    JSTestCLIEngine = require("./jstest-cli-engine"),
    log = require("logging");

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

/**
 * Encapsulates all JSTestCLI behavior for jstest. Makes it easier to test as well as
 * for other Node.js programs to effectively run the CLI.
 */
const jsTestCli = {

    /**
     * Executes the JSTestCLI based on an array of arguments that is passed in.
     * @param {string|Array|Object} args The arguments to process.
     * @returns {int} The exit code for the operation.
     */
    execute(args) {

        let currentOptions;

        try {
            currentOptions = options.parse(args);
        } catch (error) {
            log.error(error.message);
            return 1;
        }
        
        const files = currentOptions._;

        const jsTestCLIEngine = new JSTestCLIEngine(currentOptions);

        jsTestCLIEngine.executeOnFiles(files);

        return 0;
    }
};

module.exports = jsTestCli;
