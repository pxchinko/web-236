/*
============================================
; Title:  Discussion 4.2
; Author: Juvenal Gonzalez
; Date:   17 June 2020
; Description: Function that iterates through an array
; and outputs each element
;===========================================
*/



/*
  Expected output:

  FirstName LastName
  Exercise 4.2
  Today's Date

  Apple
  Orange
  Banana
  Mango
  Pear
*/

const header = require('../week-2/gonzalez-header');
console.log(header.display("Juvenal", "Gonzalez", "Exercise 4.2"));

//Array initilization with 5 fruti elements
fruits = ["Apple", "Orange", "Banana", "Mango", "Pear"]
//Function that outputs each element as it iterates through
//a for loop
function getFruit(fruits){
    for(i=0; i<fruits.length; i++)
      console.log(fruits[i]);
}
//Function Call
getFruit(fruits);
