const Address = require("./Address");
class Operations {
  constructor(a, b, c) {
    this.dept = a;
    this.loc = b;
    this.address = c;
  }
}
let op1 = new Operations(
  "IT",
  "Bangalore",
  new Address(5, "RJ Garden", "Bangalore")
);

console.log(op1);
