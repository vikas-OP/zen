class Bank {
  constructor(code, address) {
    this.code = code;
    this.address = address;
  }
  manages = () {};
  maintains = () {};
}
class ATM {
  constructor(location, managedby) {
    this.location = location;
    this.managedby = managedby;
  }
  indentifies = function () {};
  transactions = function () {};
}
class Customer {
  constructor(name, address, dob, card_num, pan) {
    this.name = name;
    this.address = address;
    this.dob = dob;
    this.card_num = card_num;
    this.pan = pan;
    this.num_of_accounts = 0;
  }
  verify_password = function () {};
  create_account = function () {};
}
class Account {
  constructor(number, balance) {
    this.number = number;
    this.balance = balance;
    this.transac_array = [];
  }
  deposit = function () {};
  withdraw = function () {};
  createTransaction = function () {};
}
class ATM_transaction {
  constructor(trans_id, date, type, amount, post_balance) {
    this.trans_id = trans_id;
    this.date = date;
    this.type = type;
    this.amount = amount;
    this.post_balance = post_balance;
  }
  modifies = function () {};
}
class currentAccount extends Account {
  constructor(number, balance) {
    super(number, balance);
  }
  withdraw = function () {};
}
class SavingsAccount extends Accound {
  constructor(number, balance) {
    super(number, balance);
  }
}
