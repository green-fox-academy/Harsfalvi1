//Car
//it stores how much gas is actually present: gasAmount
//it stores the capacity of the tank: capacity
//create a constructor for the Car class where you:
//initialize gasAmount -> 0
//initialize capacity -> 100

export class Car {
  private gasAmount: number;
  private capacity: number;

  constructor(gasAmount: number, capacity: number) {
    this.gasAmount = gasAmount = 0;
    this.capacity = capacity = 100;
  }

  getCapacity(): number {
    return this.capacity;
  }
  getGasAmount(): number {
    return this.gasAmount;
  }
  setGasAmount(amount: number) {
    this.gasAmount = amount;
  }
}
