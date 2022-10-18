class Graphics {
    private latestVectorArt: string | null = null;
    constructor(public vectors: string[]) {}

    get mostRecentVectorArt() {
        if(this.latestVectorArt)
            return this.latestVectorArt;
        else
            throw new Error('vector art not found');
    }

    set mostRecentVectorArt(art: string) {
        this.latestVectorArt = art;
    }
}
const Metal = new Graphics(['vector_1']);

Metal.mostRecentVectorArt = 'vector_2'; // set new value
console.log(Metal.mostRecentVectorArt); // get the value
// a getter is a method that executes when u retrieve a value and that allows you as a dev to implement more complex logic