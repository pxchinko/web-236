/*
============================================
; Title:  gonzalez-header-test.js
; Author: Professor Krasso
; Date:   06 June 2020
; Modified By: Juvenal Gonzalez
; Description: Displays a formatted header by calling the imported function
;===========================================
*/
//Initialization of header that imports the function from the file location.
const header = require('./gonzalez-header.js');
//Method call that outputs the student name and assignment name in header format
//by passing 3 string variables into the header function.
console.log(header.display("Juvenal", "Gonzalez", "Exercise 2.2"));
