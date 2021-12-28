// Create a map with the following key-value pairs:
const telephoneBook: {[key:string]: string } = {
    
    "William A. Lathan":"405-709-1865",
    "John K. Miller":"402-247-8568",
    "Hortensia E. Foster": "606-481-6467",
    "Amanda D. Newland": "319-243-5613",
    "Brooke P. Askew": 	"307-687-2982"
    }

// What is John K. Miller's phone number?
console.log(telephoneBook["John K. Miller"]);

//Whose phone number is 307-687-2982?
/*function getKeyByValue(object: {[key:string]: string }, phoneNumber: string) {
    return Object.keys(object).find(key => object[key] === phoneNumber);
  }
  console.log(getKeyByValue(telephoneBook,"307-687-29822")); //miért undefined? */

for (const [key, value] of Object.entries(telephoneBook)) {
    if (value === "307-687-2982") {
        console.log(`${key}`);
    }
}

//Do we know Chris E. Myers' phone number? (yes/no)
if (telephoneBook.hasOwnProperty('Chris E. Myers')) {
    console.log("yes")
} else {
    console.log("no")
};

  

