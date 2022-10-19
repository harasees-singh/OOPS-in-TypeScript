// calling methods without instantiating the class
// for example Math.random()

class Programmer {
    private static key: string = '77777';

    static describe() {
        console.log(this.key);
    }
}
Programmer.describe();
