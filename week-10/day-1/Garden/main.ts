//The task is to create a garden application, so in your main method you should create a garden with flowers and trees. 
//The program should demonstrate an example garden with two flowers (yellow and blue) and two trees (purple and orange). 
//After creating these plants you should show the user how the garden looks like. 
//After that the program should water the garden twice, first with the amount of 40 then with 70. 
//After every watering the user should see the state of the garden as you can see in the output below:

import { Garden } from "./garden";
import { Flower } from "./flower";
import { Tree } from "./tree";

let myLittleGarden= new Garden();

let yellowFlower = new Flower("yellow");
myLittleGarden.addPlant(yellowFlower);

let blueFlower = new Flower("blue");
myLittleGarden.addPlant(blueFlower);

let purpleTree = new Tree("purple");
myLittleGarden.addPlant(purpleTree);

let orangeTree = new Tree("orange");
myLittleGarden.addPlant(orangeTree);

/*The yellow Flower needs water
The blue Flower needs water
The purple Tree needs water
The orange Tree needs water

Watering with 40
The yellow Flower doesnt need water
The blue Flower doesnt need water
The purple Tree needs water
The orange Tree needs water

Watering with 70
The yellow Flower doesn't need water
The blue Flower doesn't need water
The purple Tree doesn't need water
The orange Tree doesn't need water*/

myLittleGarden.checkallPlantstatus();
myLittleGarden.waterTotalWater(40);
myLittleGarden.checkallPlantstatus();
myLittleGarden.waterTotalWater(70);
myLittleGarden.checkallPlantstatus();