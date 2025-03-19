// Array to store transactions
let transactions = [];

// Function to add a transaction
function addTransaction(type, amount, description) {
    const transaction = {
        type: type, // "add" or "cashout"
        amount: amount,
        description: description,
        timestamp: new Date().toLocaleString()
    };
    transactions.push(transaction);
    updateTransactionList();
}

// Function to update the transaction list in the UI
function updateTransactionList() {
    const transactionList = document.getElementById('transaction-list');
    transactionList.innerHTML = ''; // Clear the list

    transactions.forEach((transaction) => {
        const transactionElement = document.createElement('div');
        transactionElement.className = 'bg-white p-4 rounded-lg shadow';

        const transactionType = transaction.type === 'add' ? 'Deposit' : 'Withdrawal';
        const transactionColor = transaction.type === 'add' ? 'text-green-500' : 'text-red-500';

        // Determine the icon based on the transaction type
        const transactionIcon = transaction.type === 'add' ? './assests/main-add-money.png' : './assests/main-cash-out.png';

        transactionElement.innerHTML = `
    <div class="flex justify-between items-center">
        <div class="flex items-center">
            <img src="${transactionIcon}" alt="Transaction Icon" class="w-12 h-12 mr-3 bg-slate-100 p-3 rounded-full">
            <div>
                <h2 class="font-semibold">${transaction.description}</h2>
                <p class="text-sm text-slate-500">${transaction.timestamp}</p>
            </div>
        </div>
        <div class="${transactionColor}">${transaction.type === 'add' ? '+' : '-'}$${transaction.amount.toFixed(2)}</div>
    </div>
`;

        transactionList.appendChild(transactionElement);
    });
}