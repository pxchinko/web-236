/*
============================================
; Title:  Discussion 4.3
; Author: Juvenal Gonzalez
; Date:   17 June 2020
; Description: Use an array in a function to scan for matching variable
;===========================================
*/

/*
  Expected output:

  FirstName LastName
  Exercise 4.3
  Today's Date

  -- DISPLAYING ARRAY ITEMS --
  Car
  Truck
  Motorcycle
  Airplane
  Bus

  -- SELECTED VALUE --
  Motorcycle

  -- SELECTED VALUE --
  Bus
*/

const header = require('../week-2/gonzalez-header');
console.log(header.display("Juvenal", "Gonzalez", "Exercise 4.3"));
//Vehicle array that holds 5 string variables
vehicles = ["Car", "Truck", "Motorcycle", "Airplane", "Bus"];
//function that outputs if array element parameter matches
//string parameter
function getValue(arrayParameter, stringParameter){
    for(i=0; i<vehicles.length; i++)
      if(arrayParameter[i] === stringParameter){
        console.log("\n-- SELECTED VALUE --")
        console.log(vehicles[i]);
      }
}
//Array iteration
console.log("-- DISPLAYING ARRAY ITEMS --");
for(i=0; i<vehicles.length; i++)
  console.log(vehicles[i]);
//Call of function to test for matching string
getValue(vehicles, "Motorcycle");

getValue(vehicles, "Bus");

