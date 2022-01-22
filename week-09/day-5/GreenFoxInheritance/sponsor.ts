'use strict';
import { Person } from "./person";

export class Sponsor extends Person {
    protected company: string
    protected hiredStudents: number

    constructor(name: string = "Jane Doe", age: number = 30, gender: string = "female",
        company: string = "Google", hiredStudents: number = 0) {
        super(name, age, gender);
        this.company = company;
        this.hiredStudents = hiredStudents;
    }

    introduce(): void {
        console.log(super.getIntroduction() + this.hiredStudents + "students so far.");
    }
    hire(): number {
        return this.hiredStudents ++
    } 
    getGoal(): void {
    console.log("My goal is: Hire brilliant junior software developers.")
    }
}