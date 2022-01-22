import { Teacher } from "./teacher";

export class Student {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }
  getStudentName(): string {
    return this.name;
  }
  learn() {
    console.log("The Student actually learning.");
  }
  question(teacher: Teacher) {
    teacher.giveAnswer();
  }
}
