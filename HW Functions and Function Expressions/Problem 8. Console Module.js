// a module, or js library, is an object with properties
// each property is a function, which can be called separately, once we create an instance of the object
// in the case below, the myConsole object is created by a self-called IFEE
// module objects are exported with the code: module.exports = myObject;
// and this makes them available for use in any other js file
// in which we have required them:
//var anyVarName = require('./name-of-js-file-with-module.js');
// e.g. var myConsole = require('./Problem 8. Console Module.js');
// for the require syntax to be activated, I had to go to
// File > Settings > Languages & Frameworks > Java Script > Libraries
// Click on Download (on the right), wait for the list to get populated,
// and download the first node suggestion from the list; gets later displayed as node-DefinitelyTyped


// myConsole is an object with 4 properties (functions)
//    writeLine: writeLine,
//    writeError: writeError,
//    writeWarning: writeWarning,
//    writeInfo: writeInfo
// this object is created by a self-called IFEE
var myConsole = (function () {

    // the replaceParams function is called in every function below,
    // for the parsing of C#-formatted myConsole input
    function replaceParams(message, parameters) {

        // detects the placeholders
        var pattern = /{(\d+)}/g;

        // matching the placeholders, and the placeholders' indexes
        var match = pattern.exec(message);

        while (match) {
            var placeholder = match[0];
            var index = parseInt(match[1]);

            // parameters com from the idea that any myConsole input
            // is viewed as an array, the first element of this array is the message to be printed
            // all the next elements of the array form an array of parameters
            // e.g. the replacements for evey placeholder in the message
            // so parameters[index] means that the replacement for placeholder {0}
            // is found in the parameters array, at position 0
            var replacement = parameters[index];

            if (replacement === undefined) {
                writeError("Incorrect number of parameters provided!");
                return null;
            }

            if (replacement === null) {
                replacement = "";
            }

            // replacing placeholder with the respective parameter
            message = message.replace(placeholder, replacement.toString());

            // calling again the pattern.exec() - searching for next placeholder into the message
            // while matches are returned
            match = pattern.exec(message);
        }

        return message;
    }

    function writeLine() {
        // arguments is the entire array of elements in the myConsole input
        // e.g. "Message: {0}", "Hello Console!"
        // arguments[0] is everything before the first comma
        var message = arguments[0];

        // Array.prototype.shift.apply(arguments); removes the first element (the message)
        // and all the rest is the array of parameters
        Array.prototype.shift.apply(arguments);

        // now that we have the message and the parameters separately - we can parse
        // apply the replaceParams function
        message = replaceParams(message, arguments);

        if (message !== null) {
            console.log(message);
        }
    }

    // same as in writeLine() function, using the puilt in console.error() function
    function writeError() {
        var message = arguments[0];
        Array.prototype.shift.apply(arguments);

        message = replaceParams(message, arguments);

        if (message !== null) {
            console.error(message);
        }
    }

    // same as in writeLine() function, using the puilt in console.warn() function
    function writeWarning() {
        var message = arguments[0];
        Array.prototype.shift.apply(arguments);

        message = replaceParams(message, arguments);

        if (message !== null) {
            console.warn(message);
        }
    }

    // same as in writeLine() function, using the puilt in console.info() function
    function writeInfo() {
        var message = arguments[0];
        Array.prototype.shift.apply(arguments);

        message = replaceParams(message, arguments);

        if (message !== null) {
            console.info(message);
        }
    }

    // returns the myConsole object's properties
    return {
        writeLine: writeLine,
        writeError: writeError,
        writeWarning: writeWarning,
        writeInfo: writeInfo
    };
})();

// exports the myConsole object (actually the whole file/module) for use in other js files
module.exports = myConsole;
