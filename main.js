//This is how we create a funcions
 function multi(a, b) {
     return a * b;
 }
 var totals = multi(20,40);
 console.log(totals);

 function dive(a, b) {
     return a / b;
 }
  function sum(a, b) {
      return a + b;
  }
  function menos(a, b) {
      return a - b;
  }

 
  console.log(dive(40, 50));
  console.log(sum(40, 10));
  console.log(menos(34, 64));
 
  //second ejercicios

  // Make a keyless car EVEN BETTER!
// We are improving our car from previous exercise now.
// Solutions to future exercises will be in the .js file (meaning Javascript file) from now on.
function checkDriverAge(){
var age = prompt("What is your age?");
if (Number(age) < 18) {
	alert("Sorry, you are too yound to drive this car. Powering off");
} else if (Number(age) > 18) {
	alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
	alert("Congratulations on your first year of driving. Enjoy the ride!");
}
}

//1. Make the above code have a function called checkDriverAge(). Whenever you call this function, you will get prompted for age. Use Function Declaration to create this function.
// Notice the benefit in having checkDriverAge() instead of copying and pasting the function everytime?

//2. Create another function that does the same thing, called checkDriverAge2() using Function Expression.
var checkDriverAge2 = function(){
    if (Number(age) < 18) {
        alert("Sorry, you are too yound to drive this car. Powering off");
    } else if (Number(age) > 18) {
        alert("Powering On. Enjoy the ride!");
    } else if (Number(age) === 18) {
        alert("Congratulations on your first year of driving. Enjoy the ride!");
    }
}
//BONUS: Instead of using the prompt. Now, only use console.log and make the checkDriverAge() function accept an argument of age, so that if you enter:
checkDriverAge(92);
//it returns "Powering On. Enjoy the ride!"


//Array

var countries = ["Cuba", "Mexico", "Brazi", "Congo", "colombia"];


//Understanding Js executes runs

function tesquared(){

}

const songTitle = "Space Oddity"
const lyrics = "This is Ground Control to Major Tom / You’ve really made the grade"

// ADD CODE BELOW
let firstLetter = songTitle([0]);
let seventhLetter = songTitle([6]);
let lastLetter = lyrics([-1]);

// Uncomment the line below to check your work!
console.log(firstLetter);
console.log(seventhLetter);
console.log(lastLetter);

const songTitle = "Space Oddity"
const lyrics = "This is Ground Control to Major Tom / You’ve really made the grade"

// ADD CODE BELOW
let firstLetter = songTitle[0];
let seventhLetter = songTitle[6];
let lastLetter = lyrics[65]

// Uncomment the line below to check your work!
console.log(firstLetter);
console.log(seventhLetter);
console.log(lastLetter);


const synonyms = ['fantastic', 'wonderful', 'great'];
const greetings = [];

// 1. this is how you pass info to another array
// Loop through the synonyms array. Each time, push a string into the greetings array. 
// The string should have the format 'Have a [synonym] day!'
// ADD CODE HERE
for(let i = 0; i < synonyms.length; i++) {
   //console.log(synonyms.push[i]);
  greetings.push(`Have a ${synonyms[i]} day!`)
  
}
for(let i = 0; i < greetings.length; i++){
  console.log(greetings[i]);
}


//This how i push other arrays into 1 array
const firstNames = ["Jon", "Arya", "Jamie"];
const lastNames = ["Snow", "Stark", "Lannister"];
const places = ["The Wall", "Winterfell", "Kings Landing"];
const bios = [];
// Loop through your arrays and store the following strings in the bios array:

// ADD CODE HERE
for(let i = 0; i < firstNames.length; i++) {
     bios.push(`My name is ${firstNames[i]} ${lastNames[i]} and I am from ${places[i]}`);
   
}
console.log(bios);

//This US HOW WE ITARTE ARRAY CALCULATING
const increaseByTwo = [1, 2, 3, 4, 5];
// ADD CODE HERE
for(let i = 0; i < increaseByTwo.length; i++) {
      increaseByTwo[i] = increaseByTwo[i] + 2;

}
console.log(increaseByTwo); // -> should print [3, 4, 5, 6, 7]
 
 
 let count = 2;
// ADD CODE HERE
while(count < 8){
 count++;
}
  // Uncomment these to check your work!
 console.log(count); 

//Adding while looping 
let addThis = 0;
let sum = 0;
while(addThis < 10) {
  sum += addThis;
  addThis++;
    
}
// Uncomment the line below to check your work!
 console.log(sum);

//If
 if(num > 100) {
   
} else if(num > 100) {
  final = null;
}
else {
  final = num + num;
}
// Log final to the console below to check your work
console.log(final)


//This a loop section
//for(var i=0; i < todos.length; i++){
  
  // console.log(todos[i] + "!");
//};

var todos = [
  "cleaning",
  "meditation",
  "listening",
  "reading",
  "working out",
  "writting"
];

todos.forEach(todo => console.log(todo));
  


//Loops
//Learning how to improve loops
const digits = [0,1,2,3,4,5,6,7,8,9];

for(const index in digits) {
    console.log(digits[index]);
}

//Loops
//this doesnt work
const names = ['Reinier', 'Lucas', 'Lennox', 'Yari'];
for(const name of names) {
  if(name === 'Reinier' ) {
     if(name === 'Lucas') {

     }
     break;
  }
  console.log(name);
}
//it doesnt work obj
const objName = {
  name: 'Reinier',
  age: 43,
  city: 'Havana',
  zipCode: 48910
}
objName[country] = "Cuba";
console.log(objName[4]);


///DOM Section, these are the things i've beenworking on
