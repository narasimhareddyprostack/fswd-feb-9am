let size = [38, 40, 42, 44];

let a = [];

let i = 0;
while (i <= size.length - 1) {
  a[i] = size[i];
  i++;
}
console.log(a);
size[0] = 38.5;
console.log(a);

console.log(size);
