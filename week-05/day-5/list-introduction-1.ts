let names: string[] = []
console.log(names.length);
names.push('William');
console.log(!names.length);
names.push("John");
names.push("Amanda");
console.log(names.length);
console.log(names[2]);
names.map (name => {console.log(name)});
let map: { [key: string]: string } = {};
map = {
    "1.": "William",
    "2.": "John",
    "3.": "Amanada"
}
console.log(map);

