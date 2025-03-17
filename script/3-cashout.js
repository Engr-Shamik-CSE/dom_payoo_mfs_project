document.getElementById('btn-withdraw').addEventListener('click',
    function (event) {
        event.preventDefault(); // to stop the default refreshing problem of the form
    const pin = document.getElementById('pin').value;
    const convertedPIN = parseInt(pin);
    
    const cashoutAmount = document.getElementById('cashout-amount').value;
    const ConvertedcashoutAmount = parseFloat(cashoutAmount);

    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);

    if (cashoutAmount && pin) { //value empty kina check kora
        if (convertedPIN === 1234) {
            let sub = convertedMainBalance - ConvertedcashoutAmount;
            document.getElementById('main-balance').innerText = sub;
            console.log(sub);
            document.getElementById('cashout-amount').value = ''; //to empty the amount input field
        } else {
            alert('Wrong!, Give valid PIN Number');
        }
    } else {
        alert("Give amount and PIN correctly");
    }
}
);