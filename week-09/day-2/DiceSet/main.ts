// You have a `DiceSet` class which has a list for 6 dice
// You can roll all of them with roll()
// Check the current rolled numbers with getCurrent()
// You can reroll with reroll()
// Your task is to roll the dice until all of the dice are 6
import { DiceSet } from "./diceset";

let diceSet = new DiceSet();

diceSet.roll();

console.log(diceSet.getCurrent());

function rollIuntilAllSix(pokerSet: DiceSet): void {
  for (let i = 0; i < pokerSet.numOfDices; i++) {
    if (diceSet.getCurrent(i) === 6) {
      continue;
    } else {
      while (diceSet.getCurrent(i) !== 6) {
        diceSet.reroll(i);
      }
    }
  }
}

rollIuntilAllSix(diceSet);
console.log(diceSet.getCurrent());


