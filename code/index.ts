// learning oops with typescript
// authored by ਹਰਅਸੀਸ ਸਿੰਘ

// here is a basic example of a class

class Department {
    name: string;
    private readonly id: string = '8282';

    constructor(name: string) {
        this.name = name;
    }
    describe(this: Department){ // explained further down
        console.log(this.id);
    }
}
// note that line number 7 is a declaration,
// such a declaration must be followed by a definition in the constructor
// private is an access modifier, since we define the value of id along with it's declaration
// ts won't force us to set up id in the constructor
// readonly doesn't allow the devs to change the value of id in the future.

// there is a shorthand for declaration and definition as well

class _Department {
    private readonly id: string = '8282';
    constructor(public name: string) {}

}
// both codes are the same
// note how we must specify the access modifier 'public' in the implicit definition

const accounting = new Department('charmi');
// instantiating the Department class
// what happens if i don't want to use the constructor ?

const analytics = {
    describe: accounting.describe,
    name: 'charmi',
}
// analytics.describe(); // this gives error here

// the reason being that in the definition of describe() we specify that the 'this' keyword
// must refer to an object of type Department and since analytics wasn't instantiated
// through the constructor of Department it can't call describe().
