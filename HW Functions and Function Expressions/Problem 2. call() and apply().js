const func = require('./PrintArgsInfo.js');
var myFunc = func();

console.log("Problem 2. call()");
console.log("Example no args:");
myFunc.printArgsInfo.call(this);
console.log("\n");
console.log("Example with args:");
myFunc.printArgsInfo.call(this, 2, NaN, undefined, null);
console.log("\n");
console.log("Problem 2. apply()");
console.log("Example no args:");
myFunc.printArgsInfo.apply(this);
console.log("\n");
console.log("Example with args:");
myFunc.printArgsInfo.apply(this, [[1, [2, [3, [4, 5]]]], ["string", "array"]]);
console.log("\n\n");


