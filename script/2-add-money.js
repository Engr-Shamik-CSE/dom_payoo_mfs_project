document.getElementById('add-money').addEventListener('click',
    function (event) {
        event.preventDefault(); // to stop the default refreshing problem of the form
        const amount = document.getElementById('amount').value;
        const convertedAmount = parseInt(amount);
        console.log(convertedAmount);

        const pin = document.getElementById('pin').value;
        const convertedPIN = parseInt(pin);
        console.log(convertedPIN);

        const mainBalance = document.getElementById('main-balance').innerText;
        const convertedMainBalance = parseFloat(mainBalance);
        console.log(convertedMainBalance);
        if (amount && pin) { //value empty kina check kora
            if (convertedPIN === 1234) {
                let sum = convertedMainBalance + convertedAmount;
                document.getElementById('main-balance').innerText = sum;
                console.log(sum);
                document.getElementById('amount').value = ''; //to empty the amount input field
            } else {
                alert('Wrong!, Give valid PIN Number');
            }
        } else {
            alert("Give amount and PIN correctly");
        }
    }
);