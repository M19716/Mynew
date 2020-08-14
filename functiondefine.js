function Emp(id, name)
{
    Object.defineProperty(this,"id",{value:id,writable:false, enumerable:true,configurable:false});
    Object.defineProperty(this,"name",{value:name,writable:true,enumerable:true});

}

let eich =new Emp(1,"Eich");
eich.name = "ravi";
eich.id = 3;
console.log(eich);