import { Printable } from "./printable";
import { Domino } from "./domino";
import { Todo} from "./todo";

let dominoes: Domino [] = [];
let todos: Todo [] = [];
let domino = new Domino(3,2);
let todo = new Todo("Buy milk", "high", true);

dominoes.push(domino);
todos.push(todo);

for (let domino of dominoes) {
    domino.printAllFields();
  }
  
  for (let todo of todos) {
    todo.printAllFields();
  }