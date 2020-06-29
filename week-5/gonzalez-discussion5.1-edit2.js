/*

Title: Perry-discussion 5.1.js
Author: Erica Perry
Date:6/28/2020
Modified by:Juvenal Gonzalez
Description: program with four errors

*/

//Header Removed, not stored in my repository, so import will not work

let colors = new Map ()
// there are four errors
//indentation of colors . set changed to colors.set
colors.set ( 'blue' , 'Water' );
colors.set ( 'green' , 'grass' );
colors.set ( 'red' , 'fire ') ; //Fire was missing quotation which is proper syntax unless it is a named variable
//color was changed to colors, which needs to match the map as it is case sensitive
colors.set ( 'orange' ,  ); // orange should have a value of undefined
//removed the 7 to make the value stored with the key of 'orange' to undefined
for ( let [ key , value ] of colors ){
console.log ( key + " = " + value );
}
