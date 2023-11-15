/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.

   Authors: Leyton and Jacob
   Date: 2023
*/

// Append the button to the element with the id "challenge"
$("#challenge").append("<button id='button-challenge1' class='special'>Make Special</button>");

// Use the correct selector (#button-challenge) for the click event
$("#button-challenge1").click(function(){
  // Add (or remove) the "special" class to the section
  $("#challenge").toggleClass("special");
});


$("#problem").append("<button id='button-challenge2' class='special'>Make Special</button>");

// Use the correct selector (#button-challenge) for the click event
$("#button-challenge2").click(function(){
  // Add (or remove) the "special" class to the section
  $("#problem").toggleClass("special");
});


$("#reflection").append("<button id='button-challenge3' class='special'>Make Special</button>");

// Use the correct selector (#button-challenge) for the click event
$("#button-challenge3").click(function(){
  // Add (or remove) the "special" class to the section
  $("#reflection").toggleClass("special");
});


$("#result").append("<button id='button-challenge4' class='special'>Make Special</button>");

// Use the correct selector (#button-challenge) for the click event
$("#button-challenge4").click(function(){
  // Add (or remove) the "special" class to the section
  $("#result").toggleClass("special");
});


