let employee = {
  name: "narasimha",
  age: 38,
  getHike: function () {
    console.log("Hello, your are eligible for Hike");
  },
  loc: ["Bangalore", "Chennai", "Hyd"],
  manager: { name: "Ramesh", deliveryManager: "Mahesh" },
};
/* console.log(employee.name);
console.log(employee.getHike());

console.log(employee.loc); */

console.log(employee.manager.deliveryManager);
console.log(employee.loc[2])
