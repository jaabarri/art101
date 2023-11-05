/**
 * Author:  Jacob and Leyton
 * Created: 11.04.2023
 * 
 **/



array  = [1,2,3,4];

function squared(x){
  var results = x * x;
  return results;
}

console.log("2 squared is: ", squared(2));
console.log("3 squared is: ", squared(3));

var results = array.map(squared);

console.log("Here are the array results: ", results);

var results2 = array.map(function(x){
  return x * x * x;
})

console.log("Here are the other results: ", results2);


var outputEL = document.getElementById("output").innerHTML =
 ("This is an array: " + array + "<br>" + 
  "This is the array squared: " + results + "<br>" +
  "This is the array cubed: " + results2 + "<br>");

