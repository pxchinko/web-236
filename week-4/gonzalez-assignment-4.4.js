/*
============================================
; Title:  Discussion 4.4
; Author: Juvenal Gonzalez
; Date:   17 June 2020
; Description: Use array methods to sort and filter an array
;===========================================
*/

/*

  FirstName LastName
  Assignment 4.4
  Today's Date

  -- ORIGINAL ARRAY --
  Alabama
  Nebraska
  Iowa
  California
  Nevada

  -- SORTED ARRAY --
  Alabama
  California
  Iowa
  Nebraska
  Nevada

  -- SELECTED VALUE --
  Iowa

*/

const header = require('../week-2/gonzalez-header');
console.log(header.display("Juvenal", "Gonzalez", "Exercise 4.4"));
//Array declaration with 5 states
states = ["Alabama", "California", "Iowa", "Nebraska", "Nevada"];
//Function that returns true if two variables match
function getState(varA, varB){
 if(varA==varB)
   return true;
}
//function that iterates an array and outputs each element
function outputArray(arr){
    for(i=0; i<arr.length; i++)
      console.log(arr[i]);
}
//Returns a sorted version of states array into a new array
sortedStates = states.sort();
//Filter method that uses getState function on each iteration
//and sends each matching element to the new array
selectedState = states.filter(getState =>  {return getState == "Iowa" ;});
//Output for each array using the outputArray function
console.log("-- ORIGINAL ARRAY --\n")
outputArray(states);
console.log("\n-- SORTED ARRAY --\n");
outputArray(sortedStates);
console.log("\n\-- SELECTED VALUE --\n");
outputArray(selectedState);
