var person ={id:1, name:"ravi", salary:2000};
console.log(person);
delete person.salary;
console.log(person)

//obj function
function emp(id,name)
{
    this.id = id;
    this.name = name
  this.print =  function  ()
    {
        console.log(this.id,this.name)
    }
}
var result = new emp(1,"ravi");
console.log(result)