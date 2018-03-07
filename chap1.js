// The book is using 'print()' to log things, so here's a function for that.
const print = msg => console.log(msg);

/* Variable Scope */
const showScope = () => {
  const scope = 'local';
  return scope;
};
const scope = 'global'; // global variable
print(scope); // global
print(showScope()); // local

/* Recursion: */
const factorial = num => {
  if (num === 1) {
    return num;
  } else {
    return num * factorial(num - 1);
  }
};
print(factorial(5)); // 120

// Diagram for the factorial() funciton:
// 5 * factorial(4);
// 5 * 4 * factorial(3);
// 5 * 4 * 3 * factorial(2);
// 5 * 4 * 3 * 2 * factorial(1);
// 5 * 4 * 3 * 2 * 1;
// 5 * 4 * 3 * 2;
// 5 * 4 * 6;
// 5 * 24;
// 120;

// Any function that uses recursion can be written in in interative manner.

/* Objects and Object Oriented Programming */

// Checking account object:
function Checking(amount) {
  this.balance = amount; // property
  this.deposit = deposit; // function
  this.withdraw = withdraw; // function
  this.toString = toString; // function
}

// 'this' ties each function and property to an object instance.
// Function definitions:
function deposit(amount) {
  this.balance += amount;
}

function withdraw(amount) {
  if (amount <= this.balance) {
    this.balance -= amount;
  }
  if (amount > this.balance) {
    print('Insufficient Funds');
  }
}

function toString() {
  return `Balance: $${this.balance}`;
}

// Testing
const account = new Checking(500);
account.deposit(1000);
print(account.toString()); // Balance: $1500
account.withdraw(750);
print(account.toString()); // Balance: $750
account.withdraw(800); // 'Insufficient funds'
print(account.toString()); // Balance: $750
