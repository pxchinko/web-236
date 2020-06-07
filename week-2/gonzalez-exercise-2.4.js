/*
============================================
; Title:  Exercise 2.4
; Author: Juvenal Gonzalez
; Date:   06 June 2020
; Description: Name and date function to display name and date properties
: and a format function that allows you to set the amount of numbers after the decimal postion,
; finsished  with a string to int, and string to float type converter.
;===========================================
*/
//
const header = require('./gonzalez-header.js');
console.log(header.display("Juvenal", "Gonzalez", "Exercise 2.4"));
//Passes two parameters that returns the first and last name
function fullName(firstName, lastName){
    return firstName + " " + lastName;
}
//Passes three parameter that returns the date.
function dateWriter(year, month, day){
    return year + " " + month + " " + day;
}
//Passes a number as the first parameter and its
//specified fixed position after decimal.
function formatNumber(number, numOfFixedPositions){
    return number.toFixed(numOfFixedPositions);
}
//Converts a string variable into an integer.
function convertToInt(stringVariable)
{
  return parseInt(stringVariable);
}
//Converts a string variable into a float.
function convertToFloat(stringVariable)
{
  return parseFloat(stringVariable);
}
// Intialization of variables that accepts what
// the functions return;
var name = fullName("Juvenal", "Gonzalez");
var date = dateWriter("2020", "June", 6);
var temperature = formatNumber(33.644, 1);
var age = convertToInt("29");
var goalAmount = convertToFloat("500000");
// Output that uses the variables that
// use the functions for their input.
console.log("\n");
console.log("Hello my name is ", name + ".");
console.log("Today's date is", date, "and the current temperature is", temperature, "degrees.");
console.log("I am", age, "years old and my savings account goal is", goalAmount + ".");
