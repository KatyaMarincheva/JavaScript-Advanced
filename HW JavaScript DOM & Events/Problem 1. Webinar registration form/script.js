function toggleVisibility(checkBox, adres) {
    var checkBox = document.getElementById(checkBox);
    var deliveryAddress = document.getElementById(adres);
    if (checkBox.checked) {
        deliveryAddress.style.visibility = 'visible';
    } else {
        deliveryAddress.style.visibility = 'hidden';
    }
}