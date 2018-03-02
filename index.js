const fs = require('fs');

class jestTextReporter {
    constructor(globalConfig, options) {
        this.options = options;
    }

    onRunComplete(contexts, results) {
        const dir = this.options.outputdir || '.';
        const filename = `${dir  }/${  this.options.filename || 'tests.txt'}`;
        let text = '';

        text += `Total test suites: ${  results.numTotalTestSuites  }\r\n`;
        text += `Passed test suites: ${  results.numPassedTestSuites  }\r\n`;
        text += `Failed test suites: ${  results.numFailedTestSuites  }\r\n\r\n`;

        text += `Total tests: ${  results.numTotalTests  }\r\n`;
        text += `Passed tests: ${  results.numPassedTests  }\r\n`;
        text += `Failed tests: ${  results.numFailedTests  }\r\n`;

        results.testResults.forEach((suiteResult) => {
            text += `\r\nTest Suite - ${  suiteResult.testFilePath  }\r\n`;
            suiteResult.testResults.forEach((testResult) => {
                if (testResult.status === 'passed') {
                    text += `passed - ${ testResult.ancestorTitles } ${ testResult.title }\r\n`;
                } else if (testResult.status === 'failed') {
                    text += `failed - ${ testResult.ancestorTitles } ${ testResult.title }\r\n`;
                } else if (testResult.status === 'pending') {
                }
            });
        });
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
        fs.writeFileSync(filename, text, 'utf-8');
        return results;
    }
}

module.exports = jestTextReporter;
