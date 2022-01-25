//The Flower
//needs water if its current water amount is less than 5
//when watered the flower can only absorb 75% of the water
//eg. watering with 10 the flower's amount of water should only increase by 7.5
import { Plant } from "./plant";

export class Flower extends Plant {
    
    constructor(color: string) {
        super(color, 5, 0.75);
    }
}

