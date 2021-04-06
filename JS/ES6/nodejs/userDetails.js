const bcrypt = require("bcryptjs");
let userDetails = {
  name: "kavitha",
  email: "greetlabs@gmail.com",
  password: "123ABC",
};

let salt = bcrypt.genSaltSync(10);
let newPassword = bcrypt.hashSync(userDetails.password, salt);

console.log(newPassword);

userDetails = { ...userDetails, password: newPassword };
console.log(userDetails)
