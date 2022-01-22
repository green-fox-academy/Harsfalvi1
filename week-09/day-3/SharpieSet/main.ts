import { Sharpie } from "C:/Users/Vicuska/greenfox/Harsfalvi1/week-08/day-1/Sharpie/sharpie";
import { SharpieSet } from "./SharpieSet";

let yellow = new Sharpie("yellow", 1);
let green = new Sharpie("green", 0.8);
let red = new Sharpie("red", 1.2);
let blue = new Sharpie("blue", 0.4);


let sharpieList: Sharpie[] = [green, red, yellow]

green.use();
green.use();green.use();green.use();green.use();green.use();green.use();green.use();green.use();green.use();green.use();

let mySharpies = new SharpieSet(sharpieList);
mySharpies.add(blue);

console.log(mySharpies.countUsable());

mySharpies.removeTrash();

console.log(mySharpies);

