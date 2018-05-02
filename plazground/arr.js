var square= x =>x*x;

console.log(square(9));

var user ={
  name:"ANkit",
  hi: ()=>{
    console.log(`hallo`);
  },
  alt () {
    console.log(arguments);
    console.log(`hallo ${this.name}`);
  }
};

user.alt(1,2)
