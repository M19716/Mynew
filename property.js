var person = { id: 1, name: "ravi" };

var salDescription = { value: 1000,  enumerable: true,  };

Object.defineProperty(person, "salary", salDescription);

person.salary = 2000

console.log(person);