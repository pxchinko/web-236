/*
 	============================================

 	; Title: gonzalez-discussion-6.1-edit1.js
 	; Author: Arlix Sorto
 	; Date: 7/4/2020
 	; Modified By: Juvenal Gonzalez
 	; Description: A program with two errors.

 	;===========================================
 	*/


 	/*

 	Expected output:

 	***** Book Information *****

 	JavaScript: The Definitive Guide
 	David Flanagan
 	O'Reilly Media
 	2011
 	1096

 	*/
// changed all = to : as that is proper syntax to assign a value to the object property
 	var book = {
    title :"JavaScript: The Definitive Guide",
    author : "David Flanagan",
    publisher : "O'Reilly Media",
    year : "2011",
    pages : "1096",
    isDigital : true

    }

    console.log(book.title);

    console.log("\n***** Book Information *****\n");



    //Loop over the book object and output without the boolean value.
    for (var index in book) {

    if (typeof book[index] !== "boolean") {
    console.log(book[index]);//swapped index[book] because the index belongs in the
    }                        //brackets and the object name should precede it

    }


