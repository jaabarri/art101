/**
 * Author:  Jacob and Leyton
 * Created: 10.27.2023
 * 
 **/

// Array of transportations
const myTransportation = ["bus", " train ", " car", " bike"];

// Object of my car
var myMainRide = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  color: "blue",
  age: function() {
       return 2023 - this.year;
       },
}

document.writeln("Getting around I use: " + myTransportation + "<br>");
document.writeln("My main ride: <pre>", JSON.stringify(myMainRide, null, '\t'), "</pre>");

// let's get this party started
main();
