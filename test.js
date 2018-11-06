const S = require('string'),
	opn = require('opn'),
	glob = require('glob-utils');

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

console.log(glob.basename('./**/*.js'));

/*let specName = getSpecName('factory.pwPlannedTaskRecalculator.js');
opn('http://localhost:8080/$dhtmlxgantt_test.do?spec=' + specName);

specName = getSpecName('service.clientSidePcService.js');
opn('http://localhost:8080/$dhtmlxgantt_test.do?spec=' + specName);*/