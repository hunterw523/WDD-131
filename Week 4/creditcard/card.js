document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.credit-card');

    if (!form) {
        console.error('Form not found!');
        return;
    }

    function displayError(msg) {
        const errorElement = document.querySelector('.errorMsg');
        if (errorElement) {
            errorElement.innerHTML = msg;
            errorElement.style.display = 'block';
        }
    }

    function hideError() {
        const errorElement = document.querySelector('.errorMsg');
        if (errorElement) {
            errorElement.style.display = 'none';
        }
    }

    function isCardNumberValid(number) {
        // Add actual validation logic here
        return /^[0-9]{16}$/.test(number);
    }

    function isExpirationDateValid(expiration) {
        const [month, year] = expiration.split('/');
        if (isNaN(month) || month < 1 || month > 12 || isNaN(year) || year.length !== 2) {
            return false;
        }
        const expDate = new Date(`20${year}`, month - 1);
        const currentDate = new Date();
        return expDate > currentDate;
    }

    function submitHandler(event) {
        event.preventDefault(); 

        let errorMsg = '';
        const cardNumber = form.querySelector('#cardNumber').value;
        const expiration = form.querySelector('#expiration').value;

        hideError();

        if (!isCardNumberValid(cardNumber)) {
            errorMsg += 'Card number is not a valid card number\n';
        }

        if (!isExpirationDateValid(expiration)) {
            errorMsg += 'Expiration date is not valid or in the past\n';
        }

        if (errorMsg !== '') {
            displayError(errorMsg);
            return false;
        }

        alert('Form submitted successfully!');
        return true;
    }

    form.addEventListener('submit', submitHandler);
});
