let person = {
  firstName: "Raj",
  lastName: "Kumar",
  fullName: () => {
    return this.firstName + "" + this.lastName;
  },
};

console.log(person.fullName());


/* function getData() {
  return this;
} */
/* let getData = () => this;
let x = getData();
console.log(x.firstName);
 */
