#Jest Text Reporter (jest-text-reporter)
Jest text output reporter

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
        "filename": "test-file.txt"
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