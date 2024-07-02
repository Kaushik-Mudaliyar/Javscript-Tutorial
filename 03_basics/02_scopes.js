// There are two scopes in javascript, which are local and global scope.
// Scopes means the code inside or outside of the {}(block)..
// Local Scope:The variable which was defined inside of the {} block is called local Scope.
// Global Scope:The variable which was defined outside of any block is called a Global Scope.
// let a = 30;
// const b = 20;
// var c = 10;

// If you console all the variables it will give the result,but there is a twist..
// when we use if block and inside that if block we are defining the same varaibles and let's see what happen?
if (true) {
  let a = 30;
  const b = 20;
  var c = 10;
}
//Here if we are defining using let keyword it will not work as it only works inside the if block. so we are getting error.
// console.log(a);

//Here if we are defining using const keyword it will not work as it only works inside the if block. so we are getting error.
// console.log(b);

// But for var it is interesting we can console the value inside the variable c.so we does not get error and get the given value which was inside the if block.
// That is why in today's time no one use these var variables because it create huge complexity in large codebase if user one defined the variable outside the block and another user who is not aware of these he change these variable inside a block it creates a huge confusion due to that var is not used nowadays..
console.log(c);
