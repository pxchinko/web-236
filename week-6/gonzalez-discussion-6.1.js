/*
============================================
; Title:  gonzalez-discussion-6.1
; Author: Juvenal Gonzalez
; Date:   02 July 2020
; Description: Create a simple program using object properties with 2 errors.
;===========================================
*/

/*
  Expected output:

horror:Evil Dead
comedy:50 First Dates
anime:Dragon Ball Z Battle of the Gods
action:300

*/

// 4 errors of the same
var movies = [
 { genre: "horror" , title: "Evil Dead"}
 { genre: "comedy" , title: "50 First Dates"}
 { genre: "anime" , title: "Dragon Ball Z Battle of the Gods"}
 { genre: "action" , title: "300"}

]

movies.forEach(element => {
  console.log(element.genre + ":" + element.Title); // One Error
});
