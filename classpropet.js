class Emp {
    constructor(id, name) {
        this.id = id;
        this.name = name;

    }
    print() {
        console.log(this.id, this.name);
    }
}
let eich = new Emp(1, "ravi");
eich.print();
