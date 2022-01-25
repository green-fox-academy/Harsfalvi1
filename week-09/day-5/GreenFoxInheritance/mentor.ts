'use strict';

import { Person } from "./person";

export class Mentor extends Person {
    protected level: string;

    constructor(name: string = "Jane Doe", age: number = 30, gender: string = "female", level: string = "intermediate") {
        super(name, age, gender);
        this.level = level;
    }

    introduce(): void {
        console.log(super.getIntroduction() + " " + this.level + " mentor. ");
    }
    getGoal(): void {
        console.log ("My goal is: Educate brilliant junior software developers.")
    }
}