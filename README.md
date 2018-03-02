# Custom Jest Reporter (jest-reporter)
Jest text output reporter

[![Build Status](https://travis-ci.org/trembacz/jest-reporter.svg?branch=master)](https://travis-ci.org/trembacz/jest-reporter)
[![Dependencies](https://david-dm.org/trembacz/jest-reporter/status.svg)](https://david-dm.org/trembacz/jest-reporter?view=list) 
[![devDependencies](https://david-dm.org/trembacz/jest-reporter/dev-status.svg)](https://david-dm.org/trembacz/jest-reporter?type=dev&view=list)

## Installing

```npm install --save-dev jest-text-reporter```

or

```yarn add -D jest-text-reporter```

## Getting Started

To use this reporter you will need to have an Jest test environment set up.
In your ```package.json``` add new reporter:

```json
"jest": {
  "bail": false,
  "reporters": [
    "default",
    [
      "<rootDir>/node_modules/jest-text-reporter", {
        "outputdir": "test-output",
        "filename": "test-file"
      }
    ]
  ]
}
```

## Options

| Option              | Value         | Description                                                          |
| ------------------- |:-------------:| -------------------------------------------------------------------- |
| ```outputdir```     | ```string```  | Path to output directory                                             |
| ```filename```      | ```string```  | Output file name                                                     |

## Run

```npm run jest``` 
or 
```yarn jest```