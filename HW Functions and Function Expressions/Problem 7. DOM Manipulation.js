// domModule is an object with 4 properties (functions)
// appendChild: appendChild,
//    removeChild: removeChild,
//    addHandler: addHandler,
//    retrieveElements: retrieveElements
// this object is created by a self-called IFEE
var domModule = (function () {

    // the function below is defined, so that we can use it later,
    // to get the parent or child elements we will be manipulating
    var getElement = function (selector) {
        return document.querySelector(selector);
    }

    // custom function:
    // first gets the parent node as per the chosen selector
    // after that checks up if such parent node exists/has been retrieved
    // uses the built-in appendChild function to append the already created child element
    // to the already retrieved parent
    // if instead of a newly created element we input for child the selector of an existing element
    // the appendChild function gets this existing element from its current location, and
    // moves it at the end of the child-nodes list
    function appendChild(parent, child) {
        // the custom appendChild function accepts as argument the parent-selector
        // and below we actually check up if a parent with the given selector exists
        // if it does, we retrieve it, so that we can use it for parent node
        if (!(parent instanceof Element)) {
            parent = getElement(parent);
        }

        if (!parent) {
            throw new ReferenceError("Parent element is invalid or could not be found.");
        }

        if (!(child instanceof Element)) {
            child = getElement(child);
        }

        if (!child) {
            throw new ReferenceError("Child element is invalid or could not be found.");
        }

        parent.appendChild(child);
    }

    function removeChild(parent, child) {
        // the custom removeChild function accepts as argument the parent-selector
        // and below we actually check up if a parent with the given selector exists
        // if it does, we retrieve it, so that we can use it for parent node
        if (!(parent instanceof Element)) {
            parent = getElement(parent);
        }

        if (!parent) {
            throw new ReferenceError("Parent element is invalid or could not be found.");
        }

        // the custom removeChild function accepts as argument the child-selector
        // and below we actually check up if a child with the given selector exists
        // if it does, we retrieve it, so that we can use it for child node
        if (!(child instanceof Element)) {
            child = getElement(child);
        }

        if (!child) {
            throw new ReferenceError("Child element is invalid or could not be found.");
        }

        parent.removeChild(child);
    }

    // retrieves all elements/nodes by a given selector
    // say all nodes of class bird
    function retrieveElements(selector) {
        return document.querySelectorAll(selector);
    }

    // custom function with 3 arguments
    // the elements to which we will add the handler
    // the type of event we will be listening for
    // the event handler itself = what will happen if an event of type click/change/whatever is detected
    function addHandler(elements, eventType, eventHandler) {
        // retrieves the target elements
        if (!(elements instanceof Element) && !Array.isArray(elements)) {
            elements = retrieveElements(elements);
        }

        if (!elements) {
            throw new ReferenceError("The element(s) requested could not be found.");
        }

        // applies the built-in addEventListener function to every element of the retrieved list of elements
        // third argument is a boolean:
        // false means "hear"/fire first the outermost element and than go inwards (starting from parent node)
        // true means "hear"/fire first the inmost element and then go outwards (starting from child nodes)
        for (var i in elements) {
            if (elements[i] instanceof HTMLElement) {
                elements[i].addEventListener(eventType, eventHandler, false);
            }
        }
    }

    return {
        appendChild: appendChild,
        removeChild: removeChild,
        addHandler: addHandler,
        retrieveElements: retrieveElements
    }

})();

var liElement = document.createElement("li");
// adds a new child of type li to the end of the child-nodes list
domModule.appendChild(".birds-list", liElement);
// moves first child node to the end of the child-nodes list
domModule.appendChild(".birds-list", "li:first-child");
// removes the current first child node
domModule.removeChild(".birds-list", "li:first-child");
// adds a handler to every node of type li, class bird
domModule.addHandler("li.bird", "click", function () { alert("I'm a bird!") });
// retrieves all nodes of class bird
var elements = domModule.retrieveElements(".bird");
console.log(domModule);