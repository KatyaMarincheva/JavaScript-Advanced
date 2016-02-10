function toggleVisibility(adres) {
    var deliverSame = document.getElementById('invoice');
    var deliveryAddress = document.getElementById(adres);
    if (deliverSame.checked) {
        deliveryAddress.style.visibility = 'visible';
    } else {
        deliveryAddress.style.visibility = 'hidden';
    }
}


