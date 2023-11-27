// lab.js

// Function to perform FizzBuzz
function fizzBuzz() {
  var outputString = "";
  var resultsPerRow = 10;

  // Loop through numbers 1 to 200
  for (var i = 1; i <= 200; i++) {
    // Check for multiples of 3, 5, and 7
    if (i % 3 === 0) {
      outputString += "Fizz";
    }
    if (i % 5 === 0) {
      outputString += "Buzz";
    }
    if (i % 7 === 0) {
      outputString += "Boom";
    }

    // Combine Fizz, Buzz, and Boom if multiple of more than one
    if (outputString === "") {
      outputString += i;
    }

    // Create a new paragraph element for each number
    var resultParagraph = "<p class='result'>" + outputString + "</p>";

    // Append the paragraph to the current result row
    $(".result-row:last").append(resultParagraph);

    // Check if a new row is needed
    if (i % resultsPerRow === 0) {
      // Create a new result row
      $("#output").append("<div class='result-row'></div>");
    }

    // Reset the output string for the next iteration
    outputString = "";
  }
}

// Call the FizzBuzz function when the document is ready
$(document).ready(function () {
  // Create the initial result row
  $("#output").append("<div class='result-row'></div>");
  fizzBuzz();
});
