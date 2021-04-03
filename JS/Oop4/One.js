class Tax {
  constructor(tax) {
    this.tax = tax;
    console.log("Parent Class Construstro");
  }
}
class Customer extends Tax {
  constructor(name, year, tax) {
    super(tax);
    this.name = name;
    this.year = year;
    console.log("Child Class Constructor");
  }
  get_Customer_Details() {
    return `Customer Name: ${this.name}`;
  }
}

let c1 = new Customer("Lithesh", 2020, 15);
console.log(c1.get_Customer_Details());
