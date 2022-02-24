//Reuse your Animal class
//Create a Farm class
  //it has a list of Animals listOfAnimals
  //it has a limit that defines how many animals can be kept in the Farm and can be set when the Farm is created
  //it has two methods:
//breed() //-> creates a new animal if there's place for it
//sell() //-> removes the least hungry animal
import { Animal } from "../../../week-08/day-1/Animal/animal";

export class Farm {
    private listOfAnimals: Animal [] = [];
    private limit: number;

    constructor(limit: number) {
        this.limit = limit;
    }

    breed(): void {
        if (this.listOfAnimals.length < this.limit) { this.listOfAnimals.push(new Animal)
        }
    }

    sell(): void {
        this.listOfAnimals.sort((a, b) => a.getHunger() - b.getHunger())
        this.listOfAnimals.shift()
    }
}