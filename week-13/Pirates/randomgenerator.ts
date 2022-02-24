import { Ship } from "./ship";
import { Pirate} from "./pirate";

//export class randomGenerator {
    
export function getRandomNumber(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//}