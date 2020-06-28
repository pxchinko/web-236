/*
============================================
; Title:  gonzalez-exercise-5.4
; Author: Juvenal Gonzalez
; Date:   27 June 2020
; Description: Create 2 arrays that are filtered with map containing desired data fields
;===========================================
*/


/*

  lastName LastName
  Assignment 5.4
  Today's Date

  -- COMPOSER BY RATING --
  Rating: 8
  Composer: Beethoven

  Rating: 10
  Composer: Mozart

  Rating: 9
  Composer: Bach

  Rating: 6
  Composer: Haydn

  Rating: 5
  Composer: Schubert

  -- COMPOSER BY GENRE --
  Genre: Classical
  Composer: Beethoven

  Genre: Classical
  Composer: Mozart

  Genre: Classical
  Composer: Bach

  Genre: Classical
  Composer: Haydn

  Genre: Classical
  Composer: Schubert
*/


//header
const header = require('../week-2/gonzalez-header');
console.log(header.display("Juvenal", "Gonzalez", "Exercise 5.4"));
//recyled object array from assignment 5.3
var composers = [
  {
    lastName: "Ludwig van", lastName: "Beethoven", genre: "Classical", rating: 8
  },

  {
    lastName: "Wolfgang Anadeus", lastName: "Mozart", genre: "Classical", rating: 10
  },

  {
    lastName: "Johann Sebastian", lastName: "Bach", genre: "Classical", rating: 9
  },

  {
    lastName: "Joseph", lastName: "Haydn", genre: "Classical", rating: 6
  },

  {
    lastName: "Franz", lastName: "Schubert", genre: "Classical", rating: 5
  },
  ];
//array declaration that assigns the values of selected data fields
//from composers array by storing an object into variable a so that
//multiple data fields may be returned
  var composersByRating = composers.map(function(item) {
    var a = {lastName: item.lastName,
             rating: item.rating} ;
    return a;
  });

  var composersByGenre = composers.map(function(item) {
    var a = {lastName: item.lastName,
            genre: item.genre} ;
    return a;
   });
//output uses forEach to iterate the filtered map arrays and selects the desired data fields
console.log("-- COMPOSER BY RATING --")
composersByRating.forEach(element => console.log("Rating:" , element.rating , "\nComposer:" , element.lastName +"\n"));
console.log("-- COMPOSER BY GENRE --")
composersByGenre.forEach(element => console.log("Genre:" , element.genre , "\nComposer:" , element.lastName +"\n"));
