import { Car } from "./car"
//Create Station and Car classes
//Station
//it stores how much gas is avaliable: gasAmount
//it can refill a car: refill(car: Car):
//decreases the gasAmount by the capacity of the car (let us suppose that the car is empty) and
//increases the car's gasAmount

export class Station {
    private gasAmount: number;

    constructor(gasAmount: number){
        this.gasAmount = gasAmount
    }
    refill(car: Car) {
        this.gasAmount -= car.getCapacity();
        car.setGasAmount(car.getCapacity());
    }
}
