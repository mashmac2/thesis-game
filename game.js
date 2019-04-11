/*
Game JS for The Thesis Game
by Mike Henry (mikeshenry@gmail.com)
*/

// localstorage 
if (typeof(Storage) !== "undefined") {
	// Code for localStorage
	console.log("Viskas gerai");
  
	if (localStorage.topic) {
	  //already exists, second loading of the game
	} else {
		// first loading of the game
		// create all localStorage variables
		
		// prompt for topic of your thesis
		var topic = prompt('First, you need to identify a topic. What is your topic?','');
		localStorage.setItem("topic", topic);
	}

	// Retrieve all variables, put them into the page
	$('#topic-summary').text(localStorage.topic);

	//document.getElementById("summary").innerHTML = localStorage.getItem("topic");
} else {
  // Sorry! No Web Storage support..
  console.log("No localStorage support!");
}
//end localstorage




//game loop; this runs every second to do things in the game
window.setInterval(function(){
	
	
}, 1000); //updates once per second (1000 milliseconds)