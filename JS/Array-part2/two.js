let size = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//print only odd number

for (let i = 0; i <= size.length - 1; i = i + 2) {
  console.log(size[i]);
}
console.log("------------------");
let i = 1;
while (i <= size.length - 1) {
  console.log(size[i]);
  i = i + 2;
}
