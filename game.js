/*
Game JS for The Thesis Game
by Mike Henry (mikeshenry@gmail.com)
*/
//object for our game items
var items = {};
items.topic = "";
items.currentmessage = 1;
items.research = 0;
items.researchmax = 20;
items.writing = 0;
items.writingmax = 20;
items.editing = 0;
items.editingmax = 20;

$(document).ready(function(){
  // localstorage
  if (typeof(Storage) !== "undefined") {
  	// Code for localStorage
  	console.log("Viskas gerai");
    
  	if (localStorage.topic) {
  	  //already exists, second loading of the game
  	  //$('#content .one').show();
  	  //$('#content .two').show();
  	  $('#content .three').show();

  	  $('#clickers').show();
  		$('#inventory').show();
  		$('#tasks').show();
  		
  		//Retrieve all variables
  		items.topic = localStorage.topic;
  		items.currentmessage = localStorage.currentmessage;
  		items.research = localStorage.research;
  		items.researchmax = localStorage.researchmax;
      items.writing = localStorage.writing;
      items.writingmax = localStorage.writingmax;
      items.editing = localStorage.editing;
      items.editingmax = localStorage.editingmax;
  		
  		let counter = 3;
  		while(counter < items.currentmessage){
  		    $('#content .four').show();
  		    counter++;
  		}
  		
  	} else {
  		// first loading of the game

  		// prompt for topic of your thesis
  		var topic = prompt('First, you need to identify a topic. What is your topic?','');
  		localStorage.setItem("topic", topic);
  		items.topic = topic;
  		
		  //fade in messages
  		$('#content .one').delay(1000).fadeIn(1000).delay(30000).fadeOut(1000);
  		$('#content .two').delay(4000).fadeIn(1000).delay(30000).fadeOut(1000);
  		$('#content .three').delay(7000).fadeIn(1000);
  		items.currentmessage = 3;
  		$('#clickers').delay(10000).fadeIn(1000);
  		$('#inventory').delay(10000).fadeIn(1000);
  		$('#tasks').delay(10000).fadeIn(1000);
  		
  	}
  	      // Put variables into the page
  	  $('#topic-summary').text(items.topic);
  	  $('#research-status').text(items.research);
  	  $('#research-max').text(items.researchmax);
  	  $('#writing-status').text(items.writing);
  	  $('#writing-max').text(items.writingmax);
  	  $('#editing-status').text(items.editing);
  	  $('#editing-max').text(items.editingmax);
  	  
  } else {
    // Sorry! No Web Storage support..
    console.log("No localStorage support!");
  }
  //end localstorage
});

//Game functions
function increment(item){
  var current_quantity = '#' + item.name + "-status";
  var current_max = '#' + item.name + "-max";
  
  //use item.name to refer to an item in the items array
  items[item.name] = Number(items[item.name]) + 1;
  //prevent incrementing over max
  if(items[item.name] > items[item.name + "max"]){
    items[item.name] = items[item.name + "max"];
  }

  //update the text on page with the new quantity
  $(current_quantity).text(items[item.name]);
}

function save(){
  localStorage.setItem("currentmessage", items.currentmessage);
  localStorage.setItem("research", items.research);
  localStorage.setItem("researchmax", items.researchmax);
  localStorage.setItem("writing", items.writing);
  localStorage.setItem("writingmax", items.writingmax);
  localStorage.setItem("editing", items.editing);
  localStorage.setItem("editingmax", items.editingmax);
  
  $('#saving-status-2').fadeIn(500).delay(4000).fadeOut(500);
}

  //game loop; this runs every second to do things in the game
window.setInterval(function(){
    console.log(items.currentmessage);
    if(items.currentmessage == 3 && items.research > 4){
      	$('#content .four').fadeIn(1000);
      	items.currentmessage = 4;
    }

  	save();
}, 10000); //updates once per second (1000 milliseconds)
