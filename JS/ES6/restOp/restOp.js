/* function add(a, b, ...args) {
  console.log(a);
  console.log(b);
  console.log(args);
}
add(1, 2, 3, 4);
 */

let add = (a, b, ...c) => {
  console.log(a);
  console.log(b);
  console.log(c);
};
add(1);
add(1, 2);
add(1, 2, 3);
add(1, 2, 3, 4);
