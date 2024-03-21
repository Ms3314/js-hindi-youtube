// let intbal = new Date()

// console.log(intbal);
// console.log(intbal.toString());
// console.log(intbal.toDateString());
// console.log(intbal.toISOString());
// console.log(intbal.toJSON());
// console.log(intbal.toLocaleString());
// console.log(intbal.toLocaleDateString());

let Datesys = new Date()
let disney = Date.now()
console.log(Datesys.getTime()); // get the time we require now 
// console.log(disney); //++anyways gives the time as it is already defines lol
//? give me the time in seconds
const chapter = Date.now() // gives the time in milliseconds 
console.log(Math.floor(chapter/1000))
// so this will give your answer 
const day =  Datesys.toLocaleString('default',{
  weekday:"long"
}
//! one amazing way to use Dates (tolocaleString) noiceeeee!!!
)

console.log(day);
console.log(2);