function toggleVisibility() {
    var deliverSame = document.getElementById('invoice');
    var deliveryAddress = document.getElementById('invoiceDetails');
    if (deliverSame.checked) {
        deliveryAddress.style.visibility = 'visible';
    } else {
        deliveryAddress.style.visibility = 'hidden';
    }
}
toggleVisibility();

