// Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
type magician = string;
let magicians: magician[] = ['alisha','tania','ifra'];
function make_great(magicians: magician[]): void{
   for (let i =0; i < magicians.length; i++) {
magicians[i] = "the great" + magicians[i];
    }
}
function show_magicians(magicians: magician[]): void {
    for (let magician of magicians){
        console.log(magician);
    }
}
make_great(magicians);
show_magicians(magicians);
