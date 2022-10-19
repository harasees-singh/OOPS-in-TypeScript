// an abstract class cannot be instantiated
// any methods and properties declared as abstract must be defined in the classes that inherit from
// the abstract class
// abstract classes force the devs to override the abstract methods

abstract class WaterBody {
    static id: string = '#45';

    abstract describe(): void;
    abstract age: string;
    static info(){
        console.log(this.id)
    }
}
class Ocean extends WaterBody {
    describe(){
        // must be defined since describe was an abstract method
        // must have the same access specifier as in WaterBody, public in our case
        console.log(WaterBody.id);
    }
    constructor(public age: string) {
        super();
    }
}
const Pacific = new Ocean('3457');
Pacific.describe();