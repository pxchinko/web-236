
/*
============================================
; Title:  Exercise 2.3
; Author: Professor Krasso
; Date:   06 June 2020
; Modified By: Juvenal Gonzalez
; Description: Uses function property to set a variable and returns that variable when called.
;===========================================
*/


/*
  Expected output:

  FirstName LastName
  Exercise 2.3
  Today's Date

  Hello FirstName LastName!

  Hint: Use your personal header display function and
  refer to page 178 for implementing function properties
*/
//imported function to be used for every assignment
const header = require('./gonzalez-header.js');
console.log(header.display("Juvenal", "Gonzalez", "Exercise 2.3"));
//setting function property of myName
myName.juvenal = "Juvenal";
//defining function and assigning it to return the property myName
function myName() {
        return myName.juvenal;
}
//output that displays the function property by calling the function
console.log('\n');
console.log("Hello "  + myName() + " Gonzalez!");
