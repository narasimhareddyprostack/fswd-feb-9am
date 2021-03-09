/* for (let i = 1; i <= 10; i = i + 1) {
  console.log("Value:", i);
} */

let i = 1;
{
  if (i <= 10) {
    console.log("Value:", i);
    i++;
  }
}
