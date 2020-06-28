/*
============================================
; Title:  gonzalez-exercise-5.2
; Author: Juvenal Gonzalez
; Date:   27 June 2020
; Description: Use forEach to iterate a string array and output each element
;===========================================
*/


/*
  Expected output:

  FirstName LastName
  Exercise 5.2
  Today's Date

  Oysters
  Shrimp
  Steak
  Tacos
  Sushi

*/

//header
const header = require('../week-2/gonzalez-header');
console.log(header.display("Juvenal", "Gonzalez", "Exercise 5.2"));
// String Array with 5 string elements
foods = [ "Oysters", "Salmon", "Lobster", "Ribs", "Crab"]
//forEach array method that iterates each element while outputting that element
foods.forEach(element => console.log(element));
