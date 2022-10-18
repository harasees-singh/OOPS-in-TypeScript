// inheriting from a parent class
class Polygon {
    name: string;
    protected readonly id: string = '8282';
    // we change the private access modifier to protected so that it can be accessed by
    // the children classes
    constructor(name: string) {
        this.name = name;
    }
    describe(this: Polygon){
        console.log(this.id);
    }
}
class Decagon extends Polygon {
    constructor(name: string, public readonly info: string) {
        super(name); // super calls the constructor of the parent class
    }
    // overriding the parent class method
    describe(this: Decagon) {
        console.log(this.info, this.id);
    }
}
const someDecagon = new Decagon('dragon', 'from the house Targaryen');
someDecagon.describe();
