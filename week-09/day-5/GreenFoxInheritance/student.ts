'use strict'

import { Person } from './person';

export class Student extends Person {
    protected previousOrganization: string;
    protected skippedDays: number;

    constructor(name: string = "Jane Doe", age: number = 30, gender: string = "female", previousOrganization: string){
        super(name, age, gender);
        this.previousOrganization = previousOrganization;
    }

    introduce(): void {
        console.log(super.getIntroduction() +  this.gender + "from" + this.previousOrganization +  "who skipped" + this.skippedDays + "days from the course already.");
    }
    getGoal(): void {
        console.log("My goal is: Be a junior software developer.");
    } 
    skipDays(numberOfDays: number): number {
        return this.skippedDays += numberOfDays;
    } 

}