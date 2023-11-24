/*
   lab.js - This simple JavaScript/jQuery script appends new elements to an output div

   Requirements: jQuery must be loaded for this script to work.

   Author: Leyton and Jacob
   Date: 2023
*/

document.addEventListener('DOMContentLoaded', function () {
  // Sorting Hat Function
  function sortingHat(str) {
    var length = str.length;
    var mod = length % 4;

    // Sorting based on modulus
    if (mod === 0) {
      return "Gryffindor";
    } else if (mod === 1) {
      return "Ravenclaw";
    } else if (mod === 2) {
      return "Slytherin";
    } else {
      return "Hufflepuff";
    }
  }

  // Click Listener
  document.getElementById('submit').addEventListener('click', function () {
    // Get the input value
    var name = document.getElementById('user-name').value;

    // Run the sortingHat function
    var house = sortingHat(name);

    // Display the result
    document.getElementById('output').innerHTML = "<p>The Sorting Hat has sorted you into " + house + "!</p>";
  });
});

