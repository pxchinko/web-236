/*
============================================
; Title:  gonzalez-exercise-3.2.js
; Author: Juvenal Gonzalez
; Date:   11 June 2020
; Description: One function to test matching parameters, two functions
; with outputs for a true or false statement. Conditional if statements
; test the matching function and provide the proper output.
;===========================================
*/


/*
  Expected output:

  FirstName LastName
  Exercise 3.2
  Today's Date

  // output from the match() function
  false
  true

  // output from the if...else blocks
  Truck and Car do not match!
  Bike and Bike do match!
  Four and Three do not match!
*/


const header = require('../week-2/gonzalez-header');
header.Date =  new Date(2015, 6-1, 2);
console.log(header.display("Juvenal", "Gonzalez", "Exercise 3.2"));

//function that compares two matching datatypes and values of that datatype
function match(parameter1, parameter2){
  if(parameter1 === parameter2)
    return true;
  else
    return false;
}
//function that is called when two variables do not match
function logMismatch(parameter1, parameter2){
    console.log(parameter1, "does not match", parameter2);

}
//function to be called when two parameters match exactly
function logMatch(parameter1, parameter2){
  console.log(parameter1, "does match", parameter2);

}
//6 variables to be tested
var stringTest1 = "hello";
var stringTest2 = "hello";
var integerTest1 = 5;
var integerTest2 = 4;
var integerVsString1 = "5";
var integerVsString2 = 5;

//output of what the match function returns
console.log(match(stringTest1,stringTest2));
console.log(match(integerTest1, integerTest2,),"\n")

//two matching strings that should call logMatch function
if(match(stringTest1,stringTest2) === true)
  logMatch(stringTest1,stringTest2);
  else
    logMismatch(stringTest1,stringTest2);
//two different integers that should call logMismatch function
if(match(integerTest1, integerTest2) === true)
  logMatch(integerTest1, integerTest2);
  else
    logMismatch(integerTest1, integerTest2);
//one 5 integer with one string of 5 that should call logMismatch function
//due to different datatypes
if(match(integerVsString1, integerVsString2) === true)
  logMatch(integerVsString1, integerVsString2);
  else
    logMismatch(integerVsString1, integerVsString2);
