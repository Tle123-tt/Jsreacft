//typeof
// let age=window.prompt("How old are you?");

// age=Number(age)

// age+=1;

// console.log(age, typeof age);

// let x="Thucle";
// let y=14;
// let z=false;

// x=String(x);
// y=Number(y);
// z=Boolean(z);

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);


//constants
const pi = 3.14159;
let radius;
let circumference;

// console.log(circumference)

document.getElementById("mySubmit").onclick = function () {
    radius = document.getElementById("myInput").value;
    radius = Number(radius);
    circumference = 2 * pi * radius;
    document.getElementById("myH3").textContent = circumference + "cm";
}