// How to take user input

// 1. Easy way = window prompt
// 2. professional way = HTML textbox

//Easy way
// let username;
//
// username = window.prompt("Enter your username");
//
// console.log(username)

//Professional way

let username;
let email;
let dateOfBirth;

document.getElementById('mySubmit').onclick = function(){
    username = document.getElementById('username').value;
    email = document.getElementById('email').value;
    dateOfBirth = document.getElementById('dob').value;

    document.getElementById('myH1').textContent = `Welcome! ${username}`;
    document.getElementById('myH1e').textContent = `Your email is: ${email}`;
    document.getElementById('myH1dob').textContent = `your date of birth is:${dateOfBirth}`;
}