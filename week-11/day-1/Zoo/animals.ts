/*We are going to represent a Zoo. The animals are cuter than humans, so let's focus on them right now.

So we need an abstract Animal class

it has name, age field
it has getName() and breed() methods
Have we got all fields and methods we should? What about gender? Any other? Write down at least 3 fields and/or methods that should be included in Animal.

Mi a helyzet a nemmel? Bármi más? 
Írjon le legalább 3 olyan mezőt és/vagy metódust, amelyet az Animal-ban szerepeltetni kell.

Gondoljunk csak az állatok fajtáira, emlősökre, hüllőkre, madarakra stb. 
Mindegyikhez meg kell határoznunk a sajátos területeket és módszereket. Például minden madárfajta() tojásból nem számít, 
hogy pingvinről, papagájról vagy struccról van szó. Írjon le legalább 2 mezőt és/vagy módszert, ami az egyes fajtákban közös.

A hüllők többsége tojásrakással is szaporodik, ez gyakori a madaraknál.

Hozd létre a projektet és a fenti osztályokat.

Let's think about the kinds of animals Mammals, Reptiles, Birdss etc. We need to define specific fields and methods for each. For example every Bird breed() from an egg, doesn't matter if it is a penguin or parrot or ostrich. Write down at least 2 of field and/or method what is common in each kind.

Most of the Reptiles breed() by laying eggs too, it is common with Birds.

Create the project and the classes above.*/
import { Gender } from './gender';

export abstract class Animal {
    protected name: string;
    protected age: number;
    protected gender: Gender;
    protected color: string;

    constructor(name: string, age: number = 0, gender: Gender = Gender.Female, color: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.color = color;
    }

    getName(): string {
        return this.name
    }

    synthesizesCollagen(): string {
        return "I produce collagen."
    }

    abstract breed(): string;

  }