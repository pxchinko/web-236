/*
============================================
; Title:  gonzalez-discussion-4.1-edit1.js
; Author: Marie Nicole Barleta
; Date:   18 June 2020
; Modified By: Juvenal Gonzalez
; Description: Fix multiple errors
;===========================================
*/


/*
expected output:
2 bananas
*/

//start program
//variable

var arr = [
  ['apple', 'mango', 'banana'],
  ['carrots', 'potato', 'spinach'],
  ['pasta', 'rice', 'beans']
]

//This block of code has multiple errors
//bannan initialized at 3, changed to 2 so that output starts with 2 bananas
for (banana=2; banana <= 7; banana++){ //changed banana =+ operator to ++ so that it increments
  if (banana > 1){
    console.log(banana + " " + arr[0][2]+"s")//Changed from [2][0] to target proper element
  }                                          // in multidimensional array
  else {
    console.log(banana + " " + arr[0][2])   //Added numbers to array elements
  }                                         //so that program would execute

}
