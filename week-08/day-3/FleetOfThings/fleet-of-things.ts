import { Thing } from "./thing";
import { Fleet } from "./fleet";

let fleet = new Fleet();

// -  You have the `Thing` class
// -  You have the `Fleet` class
// -  Download those, use those

//  Crete a fleet of things to have this output:
// 1. [ ] Get milk
// 2. [ ] Remove the obstacles
// 3. [x] Stand up
// 4. [x] Eat lunch
let things: Thing[] = initializeThing();

function initializeThing(): Thing[] {
  return [
    new Thing("Get milk"),
    new Thing("Remove the obstacles"),
    new Thing("Stand up"),
    new Thing("Eat lunch"),
  ];
}
things.forEach((element) => {
  fleet.add(element);
});

fleet.getThings()[3].complete();
fleet.getThings()[2].complete();

console.log(fleet.toString());
