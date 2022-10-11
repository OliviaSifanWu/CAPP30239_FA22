/*
This is a javascript example for 
week 2.
*/

// inline comment

let num = 100; //integer

function foo() {
    let num2 = 200;
}


foo();

// let anonFun = function() {
//    console.log("hello");
// };

let anonFun = () => console.log("hello") // shortcut

let person = "Summer";

function people(peopleName){
    console.log("Hello" + peopleName)
}

let arr = ["foo", 123, ["zar", "bar"]];

console.log(arr[2]);

// Set item in array
arr[1] = "barbar";

// Add item to the end of the array
arr.push("car");

for (let item of arr) {
    console.log(item);
}

for (let i in arr){
    console.log(i + " " + arr[i]);
}

// Loop through each item in the array with its index - forEach()
arr.forEach((item, i) => console.log(i + " " + item));

let obj1 = {
    name: "Jill",
    age: 85,
    job: "Cactus Hunter",
};

console.log(obj1.name);
console.log(obj1["name"]);

for (let key in obj1) {
    let value = obj1[key];
    console.log(`${key}: ${value}`);
}

console.log("hello " + obj1 + " " + num);

console.log(`hello ${obj1["name"]} ${num}`); //string template long

for (let i = 0; i < 10; i++) {
    console.log(i);
}

let x = 5;

// if else
if (x > 50) {
    console.log("Above Average");
} else if (x > 5){
    console.log("Below Average");
} else {
    console.log("Really Below Average")
}

// ternary operator (aka inline if else)
let y = (x > 50) ? "Above Average" : "Below Average";

//traverse DOM
let example = document.getElementById("example");

example.innerHTML += "Hello world!";


