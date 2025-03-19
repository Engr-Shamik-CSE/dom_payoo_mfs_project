// Add Money Form Validation
document.getElementById('add-money').addEventListener('click', function () {
    // Reset error messages
    document.querySelectorAll('.text-red-500').forEach(function (el) {
        el.classList.add('hidden');
    });

    // Validate Bank Selection
    const bankSelect = document.getElementById('bankSelect');
    if (bankSelect.value === "") {
        document.getElementById('bank-error').classList.remove('hidden');
        return;
    }

    // Validate Bank Account Number
    const accountNumber = document.getElementById('account-number').value;
    if (accountNumber.length !== 11 || isNaN(accountNumber)) {
        document.getElementById('account-error').classList.remove('hidden');
        return;
    }

    // Validate Amount
    const amountInput = document.getElementById('amount');
    const amount = parseFloat(amountInput.value);
    if (amount <= 0 || isNaN(amount)) {
        document.getElementById('amount-error').classList.remove('hidden');
        return;
    }

    // Validate Pin Number
    const pin = document.getElementById('pin').value;
    if (pin.length !== 4 || isNaN(pin)) {
        document.getElementById('pin-error').classList.remove('hidden');
        return;
    }

    // Update Main Balance
    const mainBalanceElement = document.getElementById('main-balance');
    const currentBalance = parseFloat(mainBalanceElement.textContent);
    const newBalance = currentBalance + amount;

    // Update the balance display
    mainBalanceElement.textContent = newBalance.toFixed(2);

    // Add transaction to history
    addTransaction('add', amount, 'Bank Deposit');

    // Show success message
    alert(`Amount added successfully! New balance: $${newBalance.toFixed(2)}`);

    // Clear the form
    amountInput.value = '';
    document.getElementById('pin').value = '';
});