/**
 * Author:  Jacob and Leyton
 * Created: 11.01.2023
 * 
 **/

function sortUserName() {
  var userName = window.prompt("Hi please tell me your name so that I can fix it!");
  console.log("userName =", userName);

  var stringArray = userName.split('');
  console.log("stringArray =", stringArray);

  var stringArraysort = stringArray.sort();
  console.log("stringArraySort =", stringArraysort);

  var stringSorted = stringArraysort.join("");
  console.log("stringsorted =", stringSorted);

  return stringSorted;
}


function cap() {
  var cap = window.prompt("CAPS: ");
  console.log("caps =", cap);

  var capArray = cap.split('');
  console.log("stringArray =", capArray);

  var capArraysort = capArray.sort();
  console.log("capArraySort =", capArraysort);

  var capSorted = capArraysort.join("");
  console.log("capsorted =", capSorted);  

  return capSorted;
}

function lower(){
  var low = window.prompt("lower: ");
  console.log("lower =", low);

  var lowerArray = low.split('');
  console.log("stringArray =", lowerArray);

  var lowerArraysort = lowerArray.sort();
  console.log("lowerArraySort =", lowerArraysort);

  var lowerSorted = lowerArraysort.join("");
  console.log("lowersorted =", lowerSorted); 

  return lowerSorted;
}


document.writeln("I fixed your name: ", sortUserName(), "<br>");

document.writeln("Cap: ", cap(), "<br>");

document.writeln("Lower: ", lower(), "<br>");

