/*
   lab.js - This simple JavaScript/jQuery script appends new elements to an output div

   Requirements: jQuery must be loaded for this script to work.

   Author: Leyton and Jacob
   Date: 2023
*/

// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
  // We have to convert our string to an array and back again to sort it
  return inputString.split('').sort().join('');
}

// Anagram function
function areAnagrams(str1, str2) {
  const cleanStr1 = str1.replace(/\s/g, '').toLowerCase();
  const cleanStr2 = str2.replace(/\s/g, '').toLowerCase();

  const sortedStr1 = cleanStr1.split('').sort().join('');
  const sortedStr2 = cleanStr2.split('').sort().join('');

  return sortedStr1 === sortedStr2;
}

// click listener for button
$("#submit").click(function(){
  // get value of input field
  const userName = $("#user-name").val();

  // now let's sort it
  const userNameSorted = sortString(userName);

  // check if the inputted word is an anagram
  const isAnagram = areAnagrams(userNameSorted, "racecar"); // Compare with "racecar"

  // display the result
  if (isAnagram) {
    $("#output").html('<div class="text"><p>' + userNameSorted + ' is an anagram!</p></div>');
  } else {
    $("#output").html('<div class="text"><p>' + userNameSorted + ' is not an anagram.</p></div>');
  }
});

