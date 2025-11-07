# JS Bank Account Builder

This is a simple web application built using HTML, CSS, and plain JavaScript to demonstrate the creation and management of **objects** using a **factory function** pattern.

---

## Key JavaScript Concepts Demonstrated

This project focuses on the core principles of object-oriented programming (OOP) in JavaScript:

### 1. Object Creation (Factory Function)

The core structure of the bank account is defined in the `BankAccount` function:

* It acts as a **factory** that takes input parameters (like `accountNumber`, `accountOwner`, `initialBalance`).
* It returns a brand-new object (`const account = { ... }`) every time it's called.

### 2. Properties (Data)

Objects hold data in **properties** (or keys).

* `accountNumber`
* `accountOwner`
* `balance`
* `isActive`

### 3. Methods (Behavior)

Objects can also contain functions, called **methods**, which define how the object behaves.

* `getSummary()`: This method returns a formatted string containing all the account's properties. Notice how it uses the **`this`** keyword to access the object's internal properties (e.g., `this.accountNumber`).

### 4. Data Storage

All created bank account objects are stored in a central array:

```javascript
const accounts = [];
