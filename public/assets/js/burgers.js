// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".eat").on("click", function (event) {
    event.preventDefault();
    var id = $(this).data("id");
    var devouredState = {
      devoured: 1
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredState
    }).then(
      function () {
        console.log("Burger Devoured, Yum!");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(function () {

    // Add a new burger.
    $(".create-form").on("submit", function (event) {
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#name").val().trim(),
        devoured: 0
      };
  
      // Send the POST request.
      $.ajax("/api/burgers/", {
        type: "POST",
        data: newBurger
      }).then(function () {
        console.log("Added new burger");
        // Reload the page to get the updated burger list.
        location.reload();
      });
    });

    $(".eatburger").on("click", function (event) {
      event.preventDefault();
      var id = $(this).data("id");
      var devouredState = {
        devoured: 1
      };

      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devouredState
      }).then(function () {
        console.log("Burger devoured");
        location.reload();
      });
    });

    $(".clean-up-btn").on("click", function (event) {
      event.preventDefault();
      var id = $(this).data("id");
    

      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE",
      }).then(location.reload());
    });
  });
});

