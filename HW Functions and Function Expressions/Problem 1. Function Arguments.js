// requiring the PrintArgsInfo.js file/module
const func = require('./PrintArgsInfo.js');
// creating an instance of the anonymous object module from PrintArgsInfo.js,
// by calling the PrintArgsInfo.js IFEEE
var myFunc = func();

console.log("Problem 1. Function arguments:");
console.log("\n");
console.log("Example 1:");
// using the functions of the PrintArgsInfo.js module
myFunc.printArgsInfo(2, 3, 2.5, -110.5564, false);
console.log("\n");
console.log("Example 2:");
myFunc.printArgsInfo(null, undefined, "", 0, [], {});
console.log("\n");
console.log("Example 3:");
myFunc.printArgsInfo([1, 2], ["string", "array"], ["single value"]);
console.log("\n");
console.log("Example 4:");
myFunc.printArgsInfo("some string", [1, 2], ["string", "array"], ["mixed", 2, false, "array"], { name: "Peter", age: 20 });
console.log("\n");
console.log("Example 5:");
myFunc.printArgsInfo([[1, [2, [3, [4, 5]]]], ["string", "array"]]);
console.log("\n\n");