/*
 	============================================
 	; Title: Discussion 3.1
 	; Author: Perry Fulfs
 	; Date: 10 June 2020
 	; Modified By: Juvenal Gonzalez
 	; Description: simple JavaScript program using
 	; either a for, while, if, or switch statement
 	; with at least two errors,
 	;===========================================
 	*/

 	const expr = 'Guitars';
 	switch (expr) {
 	case 'Guitars'://This is expected so I moved it from the drums case and put it in the case that matched the expr variable
    console.log('Drums and guitars are very loud.'); // expected output: "Drums and guitars are very loud."
 	  break;
 	case 'Flutes':
     console.log('Flutes are very soft.');
     break; //break added
 	default:
   console.log(expr)//default was a variable with quotations, which were removed but also
                    //default should give feedback that a switch did not match
 	}
