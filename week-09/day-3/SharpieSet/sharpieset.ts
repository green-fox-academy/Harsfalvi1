import { Sharpie } from "C:/Users/Vicuska/greenfox/Harsfalvi1/week-08/day-1/Sharpie/sharpie"

/*Reuse your Sharpie class
Create SharpieSet class
it contains a list of Sharpie, named listOfSharpies
it has a method that adds a new Sharpie to the set: add(sharpie: Sharpie)
it has a method that returns the number of usable Sharpies: countUsable() -> sharpie is usable if it contains ink
it has a method that removes all unusable Sharpies: removeTrash()*/

export class SharpieSet {
    listOfSharpies: Sharpie [];

constructor (listOfSharpies: Sharpie []) {
    this.listOfSharpies = listOfSharpies;
}

getlistOfSharpies(): Sharpie [] {
    return this.listOfSharpies;
}
add(sharpie: Sharpie){
    this.listOfSharpies.push(sharpie);
}
countUsable(){
    let usableSharpie: number = 0;
    for (let index = 0; index < this.listOfSharpies.length; index++) {
        if (this.listOfSharpies[index].getInkamount() > 0) {
            usableSharpie ++;
        }
    }
}
removeTrash(){
    for (let index = 0; index < this.listOfSharpies.length; index++) {
        if (this.listOfSharpies[index].getInkamount() < 1) {
            this.listOfSharpies.splice(index,1);
        }
    }
}
}

    

