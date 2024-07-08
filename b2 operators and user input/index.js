//operator
let a=30;

// a=a+2
// a=a-2 
// a=a*2
// a=a/2
// a=a**2
// a=a%7

// a+=2
// a-=2
// a*=2
// a/=2
// a**=2
// a%=7

//a++
//a--

console.log(a);

let b=6/2**(2+5);

console.log(b);


//user input
// let username;

// username=window.prompt("What's your name?");

// console.log(username);

let username;

document.getElementById("myButton").onclick=function(){
    username=document.getElementById("myText").value;
    document.getElementById("myH1").textContent=`Hello ${username}`
}