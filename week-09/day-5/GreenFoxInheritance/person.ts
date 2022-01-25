'use strict';

export class Person {
  protected name: string;
  protected age: number;
  protected gender: string;

  constructor(name: string = "Jane Doe", age: number = 30, gender: string = "female") {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  introduce(): void {
    console.log("Hi! I'm " + this.name + ", I'm " + this.age + " years old and I am " + this.gender + ".")
  }
  getGoal(): void {
      console.log("My goal is: Live for the moment!")
    }
  protected getIntroduction(): string {
      return "Hi! I'm " + this.name + ", I'm " + this.age + " years old and I am " + this.gender
  }
} 


