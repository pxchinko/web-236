/*
============================================
; Title:  gonzalez-exercise-3.3.js
; Author: Professor Krasso
; Date:   11 June 2020
; Modified by: Juvenal Gonzalez
; Description: switch case that simulates a
; manually inputted event code instead of using
; a listener
;===========================================
*/



/*
  Expected output:

  FirstName LastName
  Exercise 3.3
  Today's Date

  // Expected output
  The enter key was pressed
*/

const header = require('../week-2/gonzalez-header');
console.log(header.display("Juvenal", "Gonzalez", "Exercise 3.3"));
//variable to be used for switch case
let eventKeyCode = 13
//switch case that tests each case against the choice
switch (eventKeyCode)
{
  case 13:{
  console.log('The enter key was pressed.')
  break; //break statement to exit the body of the switch
}
  case 16: {
  console.log('The shift key was pressed.')
  break;
}
  case 32: {
  console.log('The spacebar key was pressed.')
  break;
}
  case 8: {
  console.log('The backspace / delete key was pressed.')
  break;
}
  case 9:
 log('Unrecognized key.')
}
