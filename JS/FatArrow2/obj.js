/* function ObjContext() {
  console.log(this);
}

ObjContext(); */

let x = () => {
  console.log(this);
};
x();
