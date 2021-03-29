class Bank {
  constructor() {
    console.log("Constructor will execute only once");
  }
  getBal() {
    console.log("get Details");
  }
}
let c1 = new Bank();
c1.getBal();
c1.getBal();
c1.getBal();
c1.getBal();
c1.getBal();
