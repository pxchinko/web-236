
/*
============================================
; Title:  gonzalez-discussion-6.3
; Author: Juvenal Gonzalez
; Date:   05 July 2020
; Description: Create an object and display all the data fields.
;===========================================
*/

/*
  Expected output:

  FirstName LastName
  Exercise 6.3
  Today's Date

  {id: 101, name: Help Desk Support, requester: Bob Jones}
*/

//header
const header = require('../week-2/gonzalez-header');
console.log(header.display("Juvenal", "Gonzalez", "Exercise 6.3"));

var ticketing = {
  id: 101, name: "Help Desk Support", requester: "Bob Jones"

};

console.log(ticketing);
