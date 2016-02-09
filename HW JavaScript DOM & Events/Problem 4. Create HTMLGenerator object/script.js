var  HTMLGenerator = (function() {
    function getElement(id) {
        return document.getElementById(id);
    }

    function createParagraph(id, text) {
        var parent = getElement(id);
        var pElement = document.createElement('p');
        pElement.textContent = text;

        parent.appendChild(pElement);
    };

    function createDiv(id, className) {
        var parent = getElement(id);
        var divElement = document.createElement('div');
        divElement.className = className;

        parent.appendChild(divElement);
    };

    function createLink(id, text, url) {
        var parent = getElement(id);
        var aElement = document.createElement('a');
        aElement.textContent = text;
        aElement.href = url;

        parent.appendChild(aElement);
    };

    return {
        createParagraph: createParagraph,
        createDiv: createDiv,
        createLink: createLink,
    }
})();

HTMLGenerator.createParagraph('wrapper', 'SoftUni');
HTMLGenerator.createDiv('wrapper', 'section');
HTMLGenerator.createLink('book', 'C# basics book', 'http://www.introprogramming.info/');