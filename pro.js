var bigB ={
    name ="Father",
    surname = "Malviya"
};
console.log(bigB);

var  smallB = Object.create(bigB);
console.log(smallB);
console.log(smallB.surname);
smallB.name ="sun";
console.log(smallB.name);

var bayB = Object.create(smallB);
bayB.name = "Child"
console.log(bayB.name.bayB.surname);
console.log()