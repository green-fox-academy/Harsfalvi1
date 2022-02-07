//Create a sum method in your class which has a list of integers as parameter
//It should return the sum of the elements in the list

class Integers {
    sum(listOfInteger : number[]):number{
        let sumOfInteger: number = 0;
        for (let i = 0; i < listOfInteger.length; i++) {
            sumOfInteger += listOfInteger[i];            
        }
        return sumOfInteger;
    }    
}
export default Integers;