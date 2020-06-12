/*
============================================
; Title:  gonzalez-exercise-3.4.js
; Author: Professor Krasso
; Date:   12 June 2020
; Modified by: Juvenal Gonzalez
; Description: Iterate 10 times and test
; if random number matches assigned varibles with
; complimenting output.
;===========================================
*/


/*
  FirstName LastName
  Assignment 3.4
  Today's Date

  -- DO THE NUMBERS MATCH GAME --
  6 does not match 4!
  6 does not match 7!
  6 does not match 4!
  6 does not match 8!
  6 does not match 9!
  6 does not match 7!
  6 does match 6!
  6 does not match 3!
*/

/**
 * Params: n/a
 * Response: integer value
 * Description: Returns a random integer value
 * Disclaimer: Do not remove this function as this is what you will be using to generate a random number
 */

 function randomNumber() {
  return Math.floor((Math.random() * 10) + 1)
}

const header = require('../week-2/gonzalez-header');
console.log(header.display("Juvenal", "Gonzalez", "Exercise 3.4"));

//Function that compares two matching datatypes and values of that datatype
//Adjusted so that one function achieves what 3 functions previously did
function match(parameter1, parameter2){
  if(parameter1 === parameter2)
     console.log(parameter1, "does match", parameter2);
  else
     console.log(parameter1, "does not match", parameter2);
}

//for loop that test one set random number against
//8 alternating random numbers
for(j=0; j< 10; j ++)
{
  //sets random number to variable named a
  var a = randomNumber();
  //Sets random number to b on only first iteration
  if(j === 0){
    var b = a;
  }//After first iteration the random number is applied to c
    else{
      var c = a;
    }
   //On 3rd iteration and every one after b & C are
   //passed as parameters to the match() function
   //and supporting output confirms match or mismatch
  if(j>1){
    match(b,c)
  }
}
