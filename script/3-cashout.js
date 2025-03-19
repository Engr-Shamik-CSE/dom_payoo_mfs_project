// Cash Out Form Validation
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // Reset error messages
    document.querySelectorAll('.text-red-500').forEach(function (el) {
        el.classList.add('hidden');
    });

    // Validate Agent Number
    const agentNumber = document.getElementById('agent-number').value;
    if (agentNumber.length !== 11 || isNaN(agentNumber)) {
        document.getElementById('agent-error').classList.remove('hidden');
        return;
    }

    // Validate Amount
    const cashoutAmountInput = document.getElementById('cashout-amount');
    const cashoutAmount = parseFloat(cashoutAmountInput.value);
    if (cashoutAmount <= 0 || isNaN(cashoutAmount)) {
        document.getElementById('cashout-amount-error').classList.remove('hidden');
        return;
    }

    // Validate Pin Number
    const cashoutPin = document.getElementById('cashout-pin').value;
    if (cashoutPin.length !== 4 || isNaN(cashoutPin)) {
        document.getElementById('cashout-pin-error').classList.remove('hidden');
        return;
    }

    // Update Main Balance
    const mainBalanceElement = document.getElementById('main-balance');
    const currentBalance = parseFloat(mainBalanceElement.textContent);
    if (cashoutAmount > currentBalance) {
        alert("Insufficient balance!");
        return;
    }
    const newBalance = currentBalance - cashoutAmount;

    // Update the balance display
    mainBalanceElement.textContent = newBalance.toFixed(2);

    // Add transaction to history
    addTransaction('cashout', cashoutAmount, 'Cash Out');

    // Show success message
    alert(`Amount withdrawn successfully! New balance: $${newBalance.toFixed(2)}`);

    // Clear the form
    cashoutAmountInput.value = '';
    document.getElementById('cashout-pin').value = '';
});