const obj = {
    prop: 42
  };
  
  Object.freeze(obj);
  
  obj.prop = 33;
  // Throws an error in strict mode
  
  console.log(obj.prop);

  let x = 2;
function foo(y = x , x) {
    x = 3;
    console.log(x)
}
foo();
