

		// ARRAY OF CARS
   var cars = [“FORD”, “TESLA”, “TOYOTA”, “PORSCHE”, “HONDA”, “CADILLAC”, “JEEP”, “HUMMER”, “CHRYSLER”, “FERARRI”];

// FUNCTION FOR DISPLAYING THE CAR DATA
  function renderButtons() {

   $(“#cars-view”).empty();
///loop through the array of cars
   for (var i = 0; i < cars.length; i++) {
///then dynmically generating buttons for each car in an array
     var a = $(“<button>“);
///adding a class
     a.addClass(“car”);
///adding a data attribute with a value of the movie index i
     a.attr(“data-name”, cars[i]);
///providing  the button's text with a value of the movie at index i
     a.text(cars[i]);
///adding the button to the HTML
     $(“#cars-view”).append(a);
   }
  }

 renderButtons();

     	// EVENT LISTENER FOR THE CAR PAGE
      $(“.car”).on(“click”,function(event) {
      	event.preventDefault();
      //
       var car = $(this).attr(“data-name”);
       //STORING THE GIPHY API URL FOR A CAR IMAGE
       var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + car + “&api_key=dc6zaTOxFJmzC”;

       // AJAX CALL REQUEST TO OUR QUERY URL
        $.ajax({
          url: queryURL,
          method: “GET”
        })
        //AFTER THE DATA FROM AJAX REQUEST COMES BACK
        .done(function(response) {

        var imageURL = response.

       // CREATING A DIV TO HOLD THE CAR
        var carDiv = $(“<div class=‘car’>“);


        
       
       });
    });



 



//RATING CHECK
		for (var i = 0; i < results.length; i++) {
		if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
		 		var gifDiv = $("<div class='item'>");
		 		var rating = results[i].rating
		 		var p = $("<p>")text("Rating: " + rating)
		 		var carImage = $("<img>");

		 	carImage>attr("src", results[i].images.fixed_height.url);
		 		gidDiv.append(p);
		 		gifDiv.append(carImage);
		 	}

		 }
		})
});

// STILL ON LOAD BUT CLICK TO ANIMATE
$(".gif").on("click",function()){
	//make a variable named STATE and then store the image's data-state into it.
	//use the .attr() method for this.
	var state = $(this).attr('data-state')
	//"check to see if the variable state is equal to "still".
	if(state === 'still'){
		$(this).attr('src', $(this).attr('data-animate'));
		$(this).attr('data-state', 'animate');
	}
	else {
		$(this).attr('src', $(this).attr('data-still'));
		$(this).attr('data-state', 'still');
	}





