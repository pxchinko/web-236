/* ===========================================
 	; Title: gonzalez-6.1-edit2.js
 	; Author: Wendy Leon
 	; Date: 05 July 2020
 	; Modified By: Juvenal Gonzalez
 	; Description: Objects
 	;=========================================== */

 	/*
 	create a simple JavaScript program using
 	object properties with at least (2) errors
 	*/

 	/*
 	 Expected output:
 	 day1: Monday
 	 day2: Tuesday
 	 day3: Wednesday
 	 day4: Thursday
 	 day5: Friday
 	 day: Saturday
 	 day: Sunday
 	*/

   //header removed

//fixed printThis mispelling as it was undefined when be called in object because the mispelled
//function was calling a function that was not defined.
 	function printThis() {

 	return ('Sunday');

 	}

 	var daysOfWeek = {
 	day1: 'Monday',
 	day2: 'Tuesday',
 	day3: 'Wednesday',
 	day4: 'Thursday',
 	day5: 'Friday',
 	day6: 'Saturday',
 	day7: printThis()
 	}
//for each method does not use literals, so the for loop
//is the proper way to travers each data field in an object
 for( key in daysOfWeek) {console.log(key, ":", daysOfWeek[key])}

