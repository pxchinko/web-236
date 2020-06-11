/*
;===========================================
; Title: Assignment 1.5
; Author: Juvenal Gonzalez
; Date: 30 May 2020
; Description: Create multiple variables for
; 3 different employees with proper format of date and decimal place.
;===========================================
*/
// data input
var firstName1 = "Bob";
var firstName2 = "Harold";
var firstName3 = "John";
var lastName1 = "Tass";
var lastName2 = "Gronkowski";
var lastName3 = "Jinglehymersmith";

var address1 = "221 Stockton St, Stockton, CA, 95206";
var address2 = "335 Jackson St, Jackson, CA, 95203";
var address3 = "335 Kumar Ln, Orange Country, CA, 52326";

var payRate1 = 5.75;
var payRate2 = 11.70;
var payRate3 = 15.55;
//date variables with slash styling and using date object
//Used -1 because month uses 0-11 like array elements
//but wanted to adopt this methodology to reduce errors
var hireDate1 = new Date(2015, 6-1, 2);
var hireDate2 = new Date(2010, 3-1, 15);
var hireDate3 = new Date(2015, 12-1, 30);
//output of 3 employees
console.log("Name:", firstName1, lastName1, "Address:", address1, "Payrate:", payRate1.toFixed(1), "hiredate:", hireDate1.toLocaleDateString());
console.log("Name:",firstName2, lastName2, "Address:", address2, "Payrate:", payRate2.toFixed(1), "hiredate:",hireDate2.toLocaleDateString());
console.log("Name:",firstName3, lastName3, "Address:", address3, "Payrate:", payRate3.toFixed(1), "hiredate:", hireDate3.toLocaleDateString());

// I understand this method as well and its uses hr2 for the output but i liked the above method which uses 3 lines of input vs 6 for this method
//hireDate = new Date(2010, 4-1, 15);
//var hr2 = hireDate.toLocaleDateString();
