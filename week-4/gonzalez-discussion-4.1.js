/*
============================================
; Title:  Discussion 4.1
; Author: Juvenal Gonzalez
; Date:   17 June 2020
; Description: Create a JavaScript program with array objects that contain two errors.
;===========================================
*/

a = [0,10,13];
//fix undefined output
for(i=0; i<4; i++)
  console.log(a[i])

delete a[0];
 console.log(a[0]);//change index to output something that is not undefined
