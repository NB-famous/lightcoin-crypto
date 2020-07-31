//let balance = 500.00; /// REPLACE BY ACCOUNT




///////////////////////LATEST CODE  RETURNING NEG VALUES FROM WITHDRAWALS ///////////////////

class Account {

  constructor(username) {
    this.username = username;
    this.balance = 0;
  }

}

class Transaction {

  constructor(amount, account) {
    this.amount  = amount;
    this.account = account;
  }

  commit() {
    this.account.balance += this.value;
  }

}

class Deposit extends Transaction {

  get value() {
    return this.amount
  }

}

class Withdrawal extends Transaction {

  get value() {
    return -this.amount;
  }

}

/////////////////LATEST DRIVER CODE ////////////////////

const myAccount = new Account('NORTHY');

console.log('Starting Balance:', myAccount.balance);

const t1 = new Deposit(120.00, myAccount);
t1.commit();

const t2 = new Withdrawal(150.00, myAccount);
t2.commit();

console.log('Ending Balance:', myAccount.balance);


////////////////////// NEW CODE WITH INHERITANCE /////////////////

/* 
class Account {

  constructor(username) {
    this.username = username;
    this.balance = 0;
  }

}

class Transaction {

  constructor(amount, account) {
    this.amount  = amount;
    this.account = account;
  }

}

class Deposit extends Transaction {

  commit() {
    this.account.balance += this.amount;
  }

}

class Withdrawal extends Transaction {

  commit() {
    this.account.balance -= this.amount;
  }

} 

*/





///////////////////// CODE BEFORE APPLYING INHERITANCE ////////////////////////

/* 

class Account {

  constructor(username) {
    this.username = username;
    // Have the account balance start at $0 since that makes more sense.
    this.balance = 0;
  }

}


class Withdrawal {

  constructor(amount, account) {
    this.amount = amount;
    this.account = account
  }

  commit() {
    this.account.balance -= this.amount;
  }

}

class Deposit {

  constructor(amount, account) {
    this.amount = amount;
    this.account = account
  }

  commit() {
    this.account.balance += this.amount;
  }

} */


//const myAccount = new Account("snow-patrol");

// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

//t1 = new Withdrawal(50.25, myAccount);
//t1.commit();

/// Old driver codes ////
/* t1 = new Withdrawal(50.25);
t1.commit();
console.log('Transaction 1:', t1);

t2 = new Withdrawal(9.99);
t2.commit();
console.log('Transaction 2:', t2);

console.log('Balance:', balance);

t3 = new Deposit(20.00);
t3.commit();

console.log('New Balance: ', balance); 

*/
