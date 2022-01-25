//The Garden
//is able to hold unlimited amount of flowers and trees
//when watering it should only water those plants that need water with equally divided amount amongst them
//eg. watering with 40 and 4 of them need water then each gets watered with 10
//öntözéskor csak azokat a növényeket szabad öntözni, amelyeknek vízre van szükségük, egyenlő arányban
//például. 40-el öntözzük és 4-hez víz kell, majd mindegyiket 10-el öntözzük
import { Plant } from "./plant";
import os from 'os';

export class Garden {
  listOfPlants: Plant[] = [];

  constructor() {
    this.listOfPlants = [];
  }

  addPlant(plant: Plant) {
    this.listOfPlants.push(plant);
  }
  waterTotalWater(water: number) {
    console.log(os.EOL + "Watering with " + water);
    let plantsThatNeedWater = 0;
    for (let index = 0; index < this.listOfPlants.length; index++) {
      if (this.listOfPlants[index].needWater()) {
        plantsThatNeedWater++;
      }
    }
    for (let j = 0; j < this.listOfPlants.length; j++) {
      this.listOfPlants[j].receiveWater(water / plantsThatNeedWater);
    }
  }
  checkallPlantstatus() {
    for (let i = 0; i < this.listOfPlants.length; i++) {
      this.listOfPlants[i].logStatus();
    }
  }
}
