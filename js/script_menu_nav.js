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
	origHeight = $thumbs.height()*0.5,
	origWidth = $thumbs.width()*0.5,
	newHeight = $thumbs.height()*1,
	newWidth = $thumbs.width()*1,
	$images = $(".large img");

	/*------------------ Initialisation -------------------*/

	//initialise thumbs
	$('.thumbs img').css({
		"opacity" : thumbOpacity,
		"width" : '50%',
		"height" : "50%"
	});

	//initialise images

	$images.hide();



	/*------------------ Thumbs Hover Handler --------------------*/

	//add hover event handler to the set of thumbs
	
	$thumbs.hover(function() {
			$(this).stop(true, true).fadeTo(thumbSpeed, 1
				, function(){
						$(this).parents('li').css({"top": "20%", "left": "20%"});
					}
				).animate({"width": newWidth, "height": newHeight}, 5000)

	}, function() { // hover off back to OG size.

			
			$thumbs.eq().stop(true, true).fadeTo(thumbSpeed, thumbOpacity)
			.animate({"width": origWidth, "height": origHeight});

	});

});

