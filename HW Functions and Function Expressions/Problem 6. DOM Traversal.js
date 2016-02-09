var selector = ".birds";

function traverse(selector) {
    var element = document.querySelector(selector);
    // element is the code <article class="birds">...</article> itself
    var result = "";

    // node is every single tag-element within the above var element (article)
    // starting with the article itself, and including everything inside it:
    //article, h2, ul, li (no matter what their particular class name is
    function traverseNode(node, spacing) {

        spacing = spacing || "\t";
        result += spacing + node.nodeName.toLocaleLowerCase() + ": ";

        var i;
        for (i = 0; i < node.attributes.length; i += 1) {
            result += node.attributes[i].name + "=\"" + node.attributes[i].value + "\" ";
        }

        result += "\n";

        for (i = 0; i < node.childNodes.length; i += 1) {
            var child = node.childNodes[i]; // searching for childNodes

            // child.ELEMENT_NODE is a constant indicating that the child note is a tag-element, not a text on;y
            // so it can be traversed too
            if (child.nodeType === child.ELEMENT_NODE) {
                traverseNode(child, spacing + "\t");
            }
        }
    }

    traverseNode(element, ""); // calling the traverseNode function on the element

    console.log(result);

}

console.log("Problem 6. DOM Traversal");
traverse(selector); // calling the traverse function on the chosen selector
console.log("\n\n");