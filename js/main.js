// delay the code from executing before all DOM assets have been loaded

$(document).ready(function(){

// when user clicks the Update button, execute the changeBg function

	$("#submit-btn").click(changeBg);

	function changeBg() {

//prevent form submission when clicking the Update button

		event.preventDefault();

// call .val on the user input to get the string value of their input		

		var city = $("#city-type").val();

// if the input is NYC, New York, or New York City - remove any previous class on body and apply .nyc to the body

		if(city === "NYC" || city === "New York" || city === "New York City") {
			$("body").removeClass();
			$("body").addClass("nyc");
		}

// or if the input is SF, San Francisco, or Bay Area - remove any previous class on body and apply .sf to the body

		else if(city === "SF" || city === "San Francisco" || city === "Bay Area") {
			$("body").removeClass();
			$("body").addClass("sf");
		}

// or if the input is Los Angeles, LA, or LAX - remove any previous class on body and apply .la to the body

		else if(city === "Los Angeles" || city === "LA" || city === "LAX") {
			$("body").removeClass();
			$("body").addClass("la");
		}

// or if the input is Austin or ATX - remove any previous class on body and apply .austin to the body

		else if(city === "Austin" || city === "ATX") {
			$("body").removeClass();
			$("body").addClass("austin");
		}

// or if the input is Sydney or SYD - remove any previous class on body and apply .sydney to the body

		else if(city === "Sydney" || city === "SYD") {
			$("body").removeClass();
			$("body").addClass("sydney");
		}
	}

});