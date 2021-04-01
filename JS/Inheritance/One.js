class Component {
  constructor(name) {
    this.sirName = "Raj";
    this.name = name;
    console.log("Parent Class - Constructor");
  }
}
let c1 = new Component("Mr Kumar");
class Message extends Component {
  constructor(message, name) {
    super(name);
    this.msg = message;
    console.log(this.msg);
  }
  getName() {
    console.log(this.name);
  }
}
let m1 = new Message("GM", "Mr Lithesh");
console.log(m1.name);
m1.getName();
