//The Zoo app should be invoked by the following example code outside of the animals package:
import { Mammal } from "./Mammal";
import { Reptile } from "./Reptile";
import { Bird } from "./Bird";


const reptile = new Reptile('Crocodile');
const mammal = new Mammal('Koala');
const bird = new Bird('Parrot');

console.log('How do you breed?');
console.log(`A ${reptile.getName()} is breeding by ${reptile.breed()}`);
console.log(`A ${mammal.getName()} is breeding by ${mammal.breed()}`);
console.log(`A ${bird.getName()} is breeding by ${bird.breed()}`);


/*We expect the following output:

How do you breed?
A Crocodile is breeding by laying eggs.
A Koala is breeding by pushing miniature versions out.
A Parrot is breeding by laying eggs.*/