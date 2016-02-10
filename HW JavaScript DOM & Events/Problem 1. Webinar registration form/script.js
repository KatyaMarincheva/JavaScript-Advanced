function toggleVisibility(adres) {
    var checkBox = document.getElementById('invoice');
    var deliveryAddress = document.getElementById(adres);
    if (checkBox.checked) {
        deliveryAddress.style.visibility = 'visible';
    } else {
        deliveryAddress.style.visibility = 'hidden';
    }
}


