/*Cohort
Create a Cohort class that has the following

fields:
name: the name of the cohort
students: a list of Students
mentors: a list of Mentors
methods:
addStudent(Student): adds the given Student to students list
addMentor(Mentor): adds the given Mentor to mentors list
info(): prints 'The name cohort has size of students students and size of mentors mentors.'
The Cohort class has the following constructors:

Cohort(name): beside the given parameter it sets students and mentors as empty lists*/

import { Student } from "./student";
import { Mentor } from "./mentor"

export class Cohort {
    protected name: string;
    protected students: Student[];
    protected mentors: Mentor[];
  
    constructor(name: string, students?: Student [], mentors?: Mentor []) {
      this.name = name;
      this.students = [];
      this.mentors = [];
    }

    //methods:
    addStudent(student:Student): void {
        this.students.push(student);
      }
    
    addMentor(mentor: Mentor): void {
        this.mentors.push(mentor)
    } 

    info(): void {
        console.log("The" + this.name + "cohort has"+ Student.length + "students and" + Mentor.length + "mentors.")
    }
   
}