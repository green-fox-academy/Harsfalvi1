/*/Create Student and Teacher classes
Student
learn() -> prints: the student is actually learning
question(teacher) -> calls the teacher's giveAnswer() method
Teacher
teach(student) -> calls the student's learn() method
giveAnswer() -> prints: the teacher is answering a question
Instantiate a Student and Teacher object
Call the student's question() method and the teacher's teach() method*/

import { Student } from "./student";
import { Teacher } from "./teacher";

let emi = new Teacher("Emi");
let evi = new Student("Evi");

evi.question(emi);
evi.learn();
emi.giveAnswer();
