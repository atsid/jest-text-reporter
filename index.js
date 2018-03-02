const fs = require('fs');

console.log('START');

class jestReporter {
	constructor(globalConfig, options) {

		this.config = globalConfig;
        this.options = options;
	}

	onRunComplete(contexts, results) {
        //var filename = 'test-coverage/tests.txt';
        var dir = this.options.outputdir || '.';
        var filename = dir + '/' + (this.options.filename || 'tests.txt');
        var text = "";

        text += "Total tests: " + results.numTotalTests + "\r\n";
        text += "Passed tests: " + results.numPassedTests + "\r\n";
        text += "Failed tests: " + results.numFailedTests + "\r\n\r\n";

        results.testResults.forEach(function suiteIterator(suiteResult) {
            text += 'Test Suite - ' + suiteResult.testFilePath + '\r\n';
            suiteResult.testResults.forEach(function testIterator(testResult) {
                if (testResult.status === 'passed') {
                    text += "passed - " + testResult.ancestorTitles + ' ' + testResult.title + "\r\n";
                } else if (testResult.status === 'failed') {
                    text += "failed - " + testResult.ancestorTitles + ' ' + testResult.title  + "\r\n";
                } else if (testResult.status === 'pending') {

                }
            });
        });
        console.log('FIOLE');
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }
        fs.writeFileSync(filename, text, 'utf-8');
        console.log('FIOLE DPME');
        return results;
    }
}

module.exports = jestReporter;
