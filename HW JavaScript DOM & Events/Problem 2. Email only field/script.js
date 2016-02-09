var input = document.getElementById('email');
var copy = document.getElementById('text-copy');
var button = document.getElementById('btn');

button.onclick = function() {
    copy.textContent = input.value;

    if (input.value.match(/[\w]+@[\w]+\.[\w]+/g) === null) {
        copy.style.backgroundColor = '#FF0000';
    }else {
        copy.style.backgroundColor = '#00FF7F';
    }
};