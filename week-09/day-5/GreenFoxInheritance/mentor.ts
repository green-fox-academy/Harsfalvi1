'use strict';
import { Person } from "./person";


export class Mentor extends Person {
    protected level: string;

    constructor(name: string = "Jane Doe", age: number = 30, gender: string = "female", level: string = "intermediate") {
        super(name, age, gender);
        this.level = level;
    }

    public introduce(): void {
        console.log(super.getIntroduction() + this.gender + this.level + "mentor.");
    }

    public getGoal(): void {
        console.log ("My goal is: Educate brilliant junior software developers.")
    }
}