function toggleVisibility(checkBox, address) {
    var checkBox = document.getElementById(checkBox);
    var deliveryAddress = document.getElementById(address);
    if (checkBox.checked) {
        deliveryAddress.style.visibility = 'visible';
    } else {
        deliveryAddress.style.visibility = 'hidden';
    }
}