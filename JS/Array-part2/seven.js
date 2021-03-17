let values = [10, 20, 30, 40];
let sum = 0;
for (value of values) {
  sum = sum + value;
}

console.log(sum);

sum = 0;
let i = 0;
while (i <= values.length - 1) {
  sum = sum + values[i];
  i++;
}
console.log(sum);
