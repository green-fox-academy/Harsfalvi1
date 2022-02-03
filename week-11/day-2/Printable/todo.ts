import { Printable } from "./printable";

export class Todo implements Printable {
    private task: string;
    private priority: string;
    private isDone: boolean;

    constructor(task: string = "Buy milk", priority: string = "high", isDone: boolean = true){
        this.task = task;
        this.priority = priority;
        this.isDone = isDone;
    }


    printAllFields(): void {
        console.log ("Task: " + this.task + " | Priority: " + this.priority + " | Done: " + this.isDone);
    }

}

