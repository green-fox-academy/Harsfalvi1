import { Farm } from "./farm";
import { Animal } from "../../../week-08/day-1/Animal/animal";

let cow = new Animal();
let cat = new Animal();
let chicken = new Animal();

let animalFarm = new Farm(100);

cat.play();
cow.eat();
chicken.eat();

animalFarm.breed();
animalFarm.sell();