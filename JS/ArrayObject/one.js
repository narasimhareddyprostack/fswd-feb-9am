let emp = { name: "Kavitha", age: 24, loc: "Bangalore", sal: 50000 };

//how to find object object?
console.log(Object.keys(emp).length);
console.log(Object.keys(emp));

for (a in emp) {
  console.log("Hello");
}
console.log(emp.name);
console.log(emp["name"]);
