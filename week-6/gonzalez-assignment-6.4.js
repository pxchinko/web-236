/*
============================================
; Title:  gonzalez-discussion-6.4
; Author: Juvenal Gonzalez
; Date:   05 July 2020
; Description: Create nested object literal and display the results
;===========================================
*/

/*

  FirstName LastName
  Assignment 6.4
  Today's Date

  Ticket 105 was created on <today' date> and assigned to employee Bob Jones (Programmer I).
*/

//header
const header = require('../week-2/gonzalez-header');
console.log(header.display("Juvenal", "Gonzalez", "Exercise 6.4"));

// ticket object with four data fields and a nested object with also 4 data fields
var ticket = {
   id: 105,
   name: "hardware Issue",
   dateCreated : new Date().toLocaleDateString('en-US'),
   priority: "high",
  person: { //nested object
   id: 10,
   firstName: "Bob",
   LastName: "Jones",
   jobTitle: "(Programmer I)"
  }
};
// Output that uses the data fields of the nested object
console.log("Ticket", ticket.id, "was created on", ticket.dateCreated, "and assigned to employee", ticket.person.firstName, ticket.person.LastName, ticket.person.jobTitle);
