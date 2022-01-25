
export class Plant {
  protected color: string;
  protected waterAmount: number;
  protected absorbWater: number;
  protected currentLevel: number;

  constructor(color: string, waterAmount: number, absorbWater: number) {
    this.color = color;
    this.waterAmount = waterAmount;
    this.absorbWater = absorbWater;
    this.currentLevel = 0;
  }

  needWater(): boolean {
    return this.currentLevel < this.waterAmount;
  }
  receiveWater(water: number) {
    this.currentLevel += water * this.absorbWater;
  }
  logStatus() {
    if (this.needWater()) {
      console.log("The " + this.color + " " + this.constructor.name + " needs water");
    } else {
      console.log("The " + this.color + " " + this.constructor.name + " doesn't need water");
    }
  }
}


