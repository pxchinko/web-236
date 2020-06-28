/*
============================================
; Title:  gonzalez-exercise-5.3
; Author: Juvenal Gonzalez
; Date:   27 June 2020
; Description: create an array of objects and output specified data fields
;===========================================
*/


/*
  Expected output:

  FirstName LastName
  Exercise 5.3
  Today's Date

  -- COMPOSERS --
  Last Name: Beethoven, Genre: Classical, Rating: 8
  Last Name: Mozart, Genre: Classical, Rating: 10
  Last Name: Bach, Genre: Classical, Rating: 9
  Last Name: Haydn, Genre: Classical, Rating: 6
  Last Name: Schubert, Genre: Classical, Rating: 5
*/

//header
const header = require('../week-2/gonzalez-header');
console.log(header.display("Juvenal", "Gonzalez", "Exercise 5.3"));
//composers array that holds 5 objects with 5 data fields
var composers = [
{
  firstName: "Ludwig van", lastName: "Beethoven", genre: "Classical", rating: 8
},

{
  firstName: "Wolfgang Anadeus", lastName: "Mozart", genre: "Classical", rating: 10
},

{
  firstName: "Johann Sebastian", lastName: "Bach", genre: "Classical", rating: 9
},

{
  firstName: "Joseph", lastName: "Haydn", genre: "Classical", rating: 6
},

{
  firstName: "Franz", lastName: "Schubert", genre: "Classical", rating: 5
},
];
//function to be passed through forEach method that outputs the selected data fields in each object
function output(composer)
{
  console.log("Last Name: " + composer.lastName + ", Genre: " + composer.genre + ", Rating: " + composer.rating);
}
//forEach iterates the array of objects and outputs the selected number elements data fields using the output function
composers.forEach(element => output(element));
