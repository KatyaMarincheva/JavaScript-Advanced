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

// below I write the functions to be exported into an anonymous object
// a module, or js library, is an object with properties
// each property is a function, which can be called separately, once we create an instance of the object
// in the case below, the myConsole object is created by a self-called IFEE
// module objects are exported with the code: module.exports = myObject;
// and this makes them available for use in any other js file
// in which we have required them:
// requiring the PrintArgsInfo.js file/module
// const func = require('./PrintArgsInfo.js');
// for the require syntax to be activated, I had to go to
// File > Settings > Languages & Frameworks > Java Script > Libraries
// Click on Download (on the right), wait for the list to get populated,
// and download the first node suggestion from the list; gets later displayed as node-DefinitelyTyped
// creating an instance of the anonymous object module from PrintArgsInfo.js,
// by calling the PrintArgsInfo.js IFEEE
// var myFunc = func();
// using the functions of the PrintArgsInfo.js module
// myFunc.printArgsInfo(2, 3, 2.5, -110.5564, false);

// as the return value of the IFEE below is exactly an object-module/js library,
// with properties-functions - I can write in this object as much properties-functions as I want
module.exports = function() {
    return {
        printArgsInfo: function() {
            if (arguments.length === 0) {
                console.log("No arguments.");
            }

            for (var i = 0; i < arguments.length; i++) {

                var type = arguments[i] ? arguments[i].constructor.name.toLocaleLowerCase() : typeof arguments[i];
                console.log(arguments[i] + ' (' + type + ')');
            }
        },

        hello: function () {
            console.log("Hello!");
        }
    };
}
