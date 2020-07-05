
/*
============================================
; Title:  gonzalez-discussion-6.2
; Author: Juvenal Gonzalez
; Date:   05 July 2020
; Description: Create a try/catch/finally statement that properly handles an error.
;===========================================
*/

/*
  Expected output:

  FirstName LastName
  Exercise 6.2
  Today's Date

  Catch clause: <your custom message goes here>
  Finally clause reached...
*/

//header
const header = require('../week-2/gonzalez-header');
console.log(header.display("Juvenal", "Gonzalez", "Exercise 6.2"));

//try statements that checks for errors
try {
  someFunction("Welcome guest!");
}
//error message to be outputed if an error is thrown
catch(err) {
 console.log(err.message + " Please define your function!");
}//Will execute regardless if code is thrown or not
finally{
  console.log("Finally clause reached...")
}
