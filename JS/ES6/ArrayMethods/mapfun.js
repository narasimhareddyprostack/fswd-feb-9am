let size = [37, 39, 41];

/* let newSize = [];

/* for (let i = 0; i <= size.length - 1; i++) {
  newSize[i] = size[i] + 1;
}
console.log(newSize); */

for (value of size) {
  newSize[size.indexOf(value)] = value + 1;
}
console.log(newSize);
//how to find the array index
 */