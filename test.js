const fs = require('fs'),
	S = require('string'),
	opn = require('opn'),
	glob = require('glob-utils'),
	pkg = require('./package.json'),
	createLogger = require('logging');

	const logger = createLogger.default('jstest-cli');
    logger.info('hi');

/*function getSpecName(sourceFileName) {
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

function getSpecFilePath(sourceFileName) {
    var specFilePathGlob,
        specFilePath,
        specFilePathParts,
        specFilePaths;
    
    specFilePathGlob = pkg.jstestConfig.testDir;

    specFilePathParts = S(sourceFileName).splitRight('.', 1);
    specFilePathGlob = specFilePathGlob + specFilePathParts[0] + '.spec.' + specFilePathParts[1];

    specFilePaths = glob.expand(specFilePathGlob);
    if(specFilePaths.length > 0)
        specFilePath = specFilePaths[0];

    return specFilePath;
}

var specFilePath = getSpecFilePath('service.pwPlannedTaskRecalculator.js');
console.log(specFilePath);
if(fs.existsSync(specFilePath))
	console.log('Yes, it exists!');
*/
/*let specName = getSpecName('factory.pwPlannedTaskRecalculator.js');
opn('http://localhost:8080/$dhtmlxgantt_test.do?spec=' + specName);

specName = getSpecName('service.clientSidePcService.js');
opn('http://localhost:8080/$dhtmlxgantt_test.do?spec=' + specName);*/