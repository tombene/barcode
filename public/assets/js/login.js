// When user clicks add-btn
$("#login").on("click", function(event) {
  event.preventDefault();

  // Make a newBook object
  var user = {
    userName: $("#username").val().trim(),
    password: $("#password").val().trim()
  };

  // Send an AJAX POST-request with jQuery
  $.post("index", user)
    // On success, run the following code
    .then(function(data) {
      // Log the data we found
      console.log(data);
    });

});