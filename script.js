const accounts = [];

function BankAccount(accountNumber, accountOwner, initialBalance, ActiveStatus) {
    const account = {
        // Properties (data)
        accountNumber: accountNumber,
        accountOwner: accountOwner,
        balance: initialBalance,
        isActive: activeStatus,

        // Method: Get a summary of the account
        getSummary: function() {
            return 'Account Number ' + this.accountNumber + ' whose owner is ' + this.accountOwner +
                    ' and its balance: €' + this.balance.toFixed(2) + ' and its status is ' + 
                    (this.isActive ? 'Active' : 'Inactive') + '.';
        },

        
    }
}