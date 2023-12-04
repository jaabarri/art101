/*
   lab.js - This script uses jQuery to make an AJAX call and appends the result to the output div.

   Requirements: jQuery must be loaded for this script to work.

   Authors: Leyton and Jacob
   Date: 2023
*/

// Wait for the document to be ready
$(document).ready(function() {

    // Add a click event to the button with id "activate"
    $('#activate').on('click', function() {

        // Using the core $.ajax() method
        $.ajax({
            url: "https://jservice.io/api/random",
            
            // The data to send (will be converted to a query string)
            data: { 
                // Replace with any required data by the API
                id: 123,
                api_key: "blahblahblah",
            },
            
            // Whether this is a POST or GET request
            type: "GET",
            
            // The type of data we expect back
            dataType: "json",
            
            // What to do when the API call is successful
            success: function(data) {
                // Display the JSON data in the 'output' div
                $('#output').html(JSON.stringify(data, null, 2));
            },
            
            // What to do if the API call fails
            error: function(jqXHR, textStatus, errorThrown) {
                // Log the error to the console
                console.log("Error:", textStatus, errorThrown);
            }
        });

    });

});
