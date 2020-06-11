/*
============================================
; Title:  Discussion 3.1
; Author: Juvenal Gonzalez
; Date:   10 June 2020
; Description: Create a JavaScript program with conditional statements that contain two errors.
;===========================================
*/


//Properly escape switch without allowing case 2 to execute
var n = 1;

switch(n) {
   case 1:
     {console.log("In Switch");
             }
   case 2:
     console.log("Error still in switch")
}

//Properly escape infinite loop
var num = 10;

while(11 > num) {
    num--;
    if(num >= 11)
      {break;}

      console.log("Infinite Loop!")
}

