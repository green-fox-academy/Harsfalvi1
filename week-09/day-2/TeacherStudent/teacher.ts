import { Student } from "./student";

export class Teacher {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }
  teach(student: Student) {
    student.learn();
  }
  giveAnswer() {
    console.log("The teacher is answering a question");
  }
}
