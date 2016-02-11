'use strict';

function attachCheckboxHandlers(checkBoxLocation) {
    // get reference to element with the particular checkbox
    var el = document.getElementById(checkBoxLocation);

    el.onclick = function() {
        toggleVisibility('invoice', 'invoiceDetails');
    }
}

function toggleVisibility(checkBoxLocation, address) {
    var checkBox = document.getElementById(checkBoxLocation);
    var deliveryAddress = document.getElementById(address);
    if (checkBox.checked) {
        deliveryAddress.style.visibility = 'visible';
    } else {
        deliveryAddress.style.visibility = 'hidden';
    }
}

attachCheckboxHandlers('invoice');

