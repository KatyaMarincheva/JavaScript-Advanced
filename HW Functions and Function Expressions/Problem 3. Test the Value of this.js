console.log("Problem 3. Test the value of \"this\"");

function testContext() {
    console.log(this);
}

console.log("Global context:");
testContext();
console.log("\n");

function outer() {

    function inner() {
        testContext();
    }

    inner();
}

// unless the function is called from an object, "this" will be the global context, e.g. window object
console.log("From within another function:");
outer();

console.log("\n");
var obj = {
    info: testContext()
};
console.log("\n");
console.log("From within an object:");
testContext.call(obj);

var context = new testContext();

console.log("\n\n");