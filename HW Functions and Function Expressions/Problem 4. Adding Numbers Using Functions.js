var add = (function () {
    var sum = 0;

    function increment(number) {
        sum += number;
        return add;
    }

    increment.toString = function () {
        return sum;
    }

    return increment;
})();  // we call the function once here, so that the first actual call is second,
// the first added number is increment

// the lines below will add and store into the final result no matter printed or not
//add(1)
//add(2)(3)
//add(1)(1)(1)(1)(1)
//add(1)(0)(-1)(-1)

console.log("Problem 4. Adding numbers using functions.");
var addTwo = add(2);
console.log(addTwo.toString()); // the + sign below is equal to addTwo.toString()
console.log(+addTwo(3)(5)); // the + sign is equal to addTwo.toString(),
// without it we will be printing the function info not the function result

console.log("\n\n");
