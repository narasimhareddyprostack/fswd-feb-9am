class Address {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.address = c;
  }
}

let a1 = new Address(1, 2, { house_No: 101, area: "Marathahalli" });
console.log(a1.address.area);
