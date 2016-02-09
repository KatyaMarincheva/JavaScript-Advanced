// gets the myConsole object exported from the Problem 8. Console Module.js file/module
var myConsole = require('./Problem 8. Console Module.js');

// print messages
myConsole.writeLine("Message: Hello Console!");
myConsole.writeLine("Message: {0}", "Hello Console!");
// passing an object as parameter
myConsole.writeLine("Object: {0}", { name: "Az", toString: function() { return this.name } });
myConsole.writeInfo("Info: {0}", "FYI: this works!");
myConsole.writeLine("{0} - {1}", "zero", "one");

// print errors and warnings
myConsole.writeError("Error: {0}", "A fatal error has occurred.");
myConsole.writeWarning("Warning: {0}", "Access denied!");
// passing an object as parameter
myConsole.writeError("Error object: {0}", { msg: "An error occurred...", toString: function () { return this.msg } });
myConsole.writeLine("{0} - {2}", "zero", "one");
console.log("\n\n");