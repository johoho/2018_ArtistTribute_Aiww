/* Author:
 alert("test");
 */

$(document).ready(function() {
	// declare variables
	var $bannedImage = $(".banned img"), bgImage = "img/bg_w_lights.jpg";

	// initialise

	$(".bg").backstretch(bgImage);
	// apply fullscreen background using backstretch


	// 	============== MENU PAGE =========================
	var thumbOpacity = 0.30, 
	thumbSpeed = 500, 
	// currentIndex = 0, 
	dissolveSpeed = 1000, 
	$thumbs = $(".thumbs img"), 
	$images = $(".large img");

	/*------------------ Initialisation -------------------*/

	//initialise thumbs
	$('.thumbs img').css({
		"opacity" : thumbOpacity,
		"width" : "50%"
	});

	//initialise images

	$images.hide()



	/*------------------ Thumbs Hover Handler --------------------*/

	//add hover event handler to the set of thumbs
	$thumbs.hover(function() {
		$(this).stop(true, true).fadeTo(thumbSpeed, 1)
		.animate({"width": "120%", "left": "20%", "top": "20%"}, 5000)
		// .transition({scale: [1.2]}, 1000);
	}, function() {
		$(this).stop(true, true).fadeTo(thumbSpeed, thumbOpacity).animate({"width": "50%"})
	}
		
		);

});

