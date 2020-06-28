/*
 	============================================
 	; Title: gonzalez-discussion-5.1-edit1
 	; Professor Cross
 	; Date: 27 June 2020
 	; Author: Anil Rayamajhi
 	; Modified By: Juvenal Gonzalez
 	;
 	; Description: JavaScript program with bugs
 	;===========================================
 	*/

//header removed as local import file is not stored on my repository


 	/*
 	Deliverable:

 	Story point for WEB-101 is 3
 	Story point for WEB-102 is 5
 	Story point for WEB-103 is 1
 	Story point for WEB-104 is 3
 	Story point for WEB-105 is 2
 	*/

 	/**
 	 *
 	 * @param {*} story
 	 * @param {*} point
 	 *
 	 * @returns void
 	 */
 	function logger(story, point) {
 	console.log(`Story point for ${story} is ${point}`);
 	}

 	/**
 	 * backlogs instance of Map
 	 * JavaScript Keyed Collections: Map
 	 */
   //changed to set as Map does not have .add method
 	const backlogs = new Set();

 	backlogs.add("WEB-101", "3");
 	backlogs.add("WEB-102", "5");
 	backlogs.add("WEB-103", "1");
 	backlogs.add("WEB-104", "3");
 	backlogs.add("WEB-105", "2");

 	//loop through map and output
 	backlogs.forEach(logger);//removed unncessary point and story parameters *foreach knows to pass each element in function
