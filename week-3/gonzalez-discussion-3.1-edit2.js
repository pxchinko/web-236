/*

============================================

; Title:  Discussion 3.1

; Author: Brooklyn Hairston

; Date:   14 June 2020

; Modified by: Juvenal Gonzalez

; Description: JavaScript program using while loop with three errors

;===========================================

*/


//expected output when loop terminates first = 10, second = 40


var first = 5;

var second = 0;


//while loop with two errors

while (first < 10) { //The while syntax requires parantheses
                     //around the condition, but it had quotations
                     //so this was corrected
first;

second += first;

}


//output with one error

console.log(first);

console.log(second);//Javascript is case sensitive so the capitol S
                    //needed to be changed for a lower case s
