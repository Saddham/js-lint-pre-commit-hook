#!/usr/bin/env node

/**
 * @fileoverview Main CLI that is run via the jstest command.
 * @author Saddham Pathan
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const concat = require("concat-stream"),
    jsTestCli = require("../lib/jstest-cli"),
    path = require("path"),
    fs = require("fs");

//------------------------------------------------------------------------------
// Execution
//------------------------------------------------------------------------------

process.exitCode = jsTestCli.execute(process.argv);
