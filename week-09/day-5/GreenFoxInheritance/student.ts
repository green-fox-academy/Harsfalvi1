'use strict'

import { Person } from './person';

export class Student extends Person {
    private previousOrganization: string;
    private skippedDays: number;

    constructor(name: string = "Jane Doe", age: number = 30, gender: string = "female", previousOrganization: string = "The School of life"){
        super(name, age, gender);
        this.previousOrganization = previousOrganization;
        this.skippedDays = 0;
    }

    introduce(): void {
        console.log(super.getIntroduction()  + " from " + this.previousOrganization +  " who skipped " + this.skippedDays + " days from the course already.");
    }

    getGoal(): void {
        console.log("My goal is: Be a junior software developer.");
    } 
    
    skipDays(numberOfDays: number): number {
        return this.skippedDays += numberOfDays;
    } 
}