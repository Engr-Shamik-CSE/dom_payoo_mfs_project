//login button call
const loginBtn = document.getElementById('btn-login');
loginBtn.addEventListener('click',
    function (event) {
        // to stop the default refreshing problem of the form
        event.preventDefault();
        const accountNumber = document.getElementById('account-number').value;
        const pinNumber = document.getElementById('pin-number').value;
        const convertedPIN = parseInt(pinNumber);//convert string to integer

        if (accountNumber.length === 11) {
            if (convertedPIN === 1234) {
                // console.log('PIN thik ache');
                window.location.href="./main.html";// redirecting to HomePage
            } else {
                console.log('PIN thik nai')
            }
        }else{
            console.log('Give valid PIN Number');
        }
    });