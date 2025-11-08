const accounts = [];

function BankAccount(accountNumber, accountOwner, initialBalance, activeStatus) {
    const account = {
        // Properties (data)
        accountNumber: accountNumber, //id in html first, then comes the function value
        accountOwner: accountOwner,
        balance: initialBalance,
        isActive: activeStatus,

        // Method: Get a summary of the account
        getSummary: function() {
            return 'Account Number ' + this.accountNumber + ' whose owner is ' + this.accountOwner +
                    ' and its balance: €' + this.balance.toFixed(2) + ' and its status is ' + 
                    (this.isActive ? 'Active' : 'Inactive') + '.';
        },
    };

    return account;
}

// DOM HELPER FUNCTIONS

function byId(id) {
    return document.getElementById(id);
}

function clearOutput() {
    byId('output').innerHTML = '';
}

function appendCard(html) {
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = html;
    byId('output').appendChild(div);
}

// INPUT VALIDATION
function readInputs() {
    const owner = byId('accountOwner').value.trim();
    const accNum = byId('accountNumber').value.trim();
    // `isActive` is now a checkbox, so read the boolean directly from `.checked`.
    const active = byId('isActive').checked;
    const bal = Number(byId('balance').value);

    // Validation
    if (accNum === '' || owner === '') {
        return { ok: false, message: 'Please fill in Account Number and Owner Name.' };
    }
    if (isNaN(bal) || bal < 0) {
        return { ok: false, message: 'Please enter a valid balance (0 or more).' };
    }

    return { ok: true, accountNumber: accNum, accountOwner: owner, balance: bal, isActive: active };
}

// BUTTON HANDLERS
function AddAccount() {
    const data = readInputs();
    if (!data.ok) {
        appendCard('<p class="warn">' + data.message + '</p>');
        return;
    }

    // Create the account object
    const acc = BankAccount(data.accountNumber, data.accountOwner, data.balance, data.isActive);
    accounts.push(acc);

    appendCard(
        '<h3>Account Created ✅</h3>' +
        '<p class="mono">' + acc.getSummary() + '</p>' +
        '<p><strong>Tip:</strong> Click "List All Accounts" to see all accounts.</p>'
    );

    // Clear form
    byId('accountNumber').value = '';
    byId('accountOwner').value = '';
    byId('balance').value = '';
    // Reset checkbox to default (checked)
    byId('isActive').checked = true;
}

function ListAccounts() {

    clearOutput();

    if (accounts.length === 0) {
        appendCard('<p class="warn">No accounts yet. Create one above!</p>');
        return;
    }

    // Display all accounts
    for (let i = 0; i < accounts.length; i = i + 1) {
        const acc = accounts[i];
        const statusClass = acc.isActive ? 'ok' : 'warn';

        appendCard(
            '<h3>Account #' + acc.accountNumber + '</h3>' +
            '<p><strong>Owner:</strong> ' + acc.accountOwner + '</p>' +
            '<p><strong>Balance:</strong> €' + acc.balance.toFixed(2) + '</p>' +
            '<p><strong>Status:</strong> <span class="' + statusClass + '">' + 
            (acc.isActive ? 'Active' : 'Inactive') + '</span></p>' +
            '<hr>' +
            '<p><strong>Method:</strong> getSummary() → <span class="mono">' + acc.getSummary() + '</span></p>'
        );
    }
}


(function() {
    document.getElementById('btnAdd').addEventListener('click', AddAccount);
    document.getElementById('btnList').addEventListener('click', ListAccounts);
})();