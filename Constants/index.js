// Constants are variable that cannot be changed
// const is use to make a variable be a constant so it cannpt be change or altered
// It is also best pratics to upper case the letter of the constant that are numbers and boolens 

const PI = 3.14159;
let radius;
let circumference;


document.getElementById("mysubmit").onclick = function(){
    radius = document.getElementById("mytext").value
    radius = Number(radius)
    circumference = 2 *PI * radius;
     
    document.getElementById("myH3").textContent = `The raduis is ${circumference}`
}