/*Create a Sharpie class
We should know the followings about each sharpie:
color (which should be a string),
width (which will be a number) and the
inkAmount (another number)
We need to specify the color and the width at creation
Every sharpie is created with a default inkAmount value: 100
We can use() the sharpie objects: using it decreases inkAmount by 10*/

"use strict";
import { Sharpie } from "./sharpie";

let myFavoritesharpie = new Sharpie("black", 0.4);
let oldSharpie = new Sharpie("red", 0.8);

myFavoritesharpie.use();
oldSharpie.use();
