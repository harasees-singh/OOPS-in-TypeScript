// singleton is a class that can be instantiated only once
// It's implementation requires a private constructor
class Currency {
    private id: string;
    private static instance: Currency;

    private constructor(public countries: string[], id: string) {
        this.id = id
    }
    static getInstance(){
        if(!Currency.instance)
            Currency.instance = new Currency(['india', 'usa', 'britain'], 'some id');

        return Currency.instance;
    }
}
const BigBuck = Currency.getInstance();
const Rupee = Currency.getInstance();

console.log(Rupee === BigBuck); // true, they point to the same instance in memory

// if we try to instantiate the class using the constructor it will give an error
// const Dollar = Currency('$', ['USA']) gives compilation error