/* Author:
 alert("test");
 */

$(document).ready(function() {

	// alert("test");
	 
	// declare variables
	var $bannedImage = $(".banned img"), bgImage = "img/bg_w_lights.jpg";

	// initialise

	//$(".bg").backstretch(bgImage);
	// apply fullscreen background using backstretch
	$('.banned img').hide();
	$('.twitter').hide();

	// color photo fading in on HOME page
	$('.outdoorImg').mouseenter(function() {
		$bannedImage.stop(true, true).fadeIn(2000, function() {
			$bannedImage.fadeOut(2000);
		});
	});

	$('.findMe').hover(function() {
		$(this).html('<a href="menu.html">Find Me</a>');
	}, function() {
		$(this).html('Ai Weiwei');
	});

	$('.door').hover(function() {
		$('#marbleDoor').hide()
		$('.twitter').stop(true, true).show();
	}, function() {
		$('#marbleDoor').show()
		$('.twitter').stop(true, true).hide();
	});

	// 	============== MENU PAGE =========================
	$('.large img').hide();

	$(".thumbs").delegate("img", "hover", function() {
		$(this).animate({
			width : 200,
			height : 200
		}, 5000, function() {
			$(this).animate({
				width : 100,
				height : 100
			});
		});

	});

	// var thumbOpacity = 0.30,
	// thumbSpeed = 200,
	// currentIndex = 0,
	// dissolveSpeed = 1000,
	// $thumbs = $(".thumbs img"),
	// $images = $(".large img"),
	// numImages = $images.length;
	//
	// /*------------------ Initialisation -------------------*/
	//
	// //initialise thumbs
	// $thumbs
	// .css({"opacity":thumbOpacity})
	// .eq(currentIndex)
	// .addClass("selected")
	// .css("opacity:1");
	//
	// //initialise images
	//
	// $images
	// .hide()
	//
	// $images.parent()
	// .css("position", "relative");
	//
	// $images
	// .css("position", "absolute")
	// .hide()
	// .eq(currentIndex);
	// // .fadeIn(dissolveSpeed)
	//
	//
	// /*------------------ Thumbs Hover Handler --------------------*/
	//
	// //add hover event handler to the set of thumbs
	// $thumbs.hover(function(){
	//
	// //on mouse enter fade the thumb in to full thumbOpacity
	// $(this)
	// .stop(true, true)
	// .fadeTo(thumbSpeed, 1);
	//
	// }, function(){
	//
	// //on mouse leave fade the thumb out to thumbOpacity
	// if($thumbs.index(this)!==currentIndex){
	// $(this).stop(true, true).fadeTo(thumbSpeed, thumbOpacity);
	// }
	//
	// });
	//
	// /*------------------ Thumbs Click Handler --------------------*/
	//
	// $thumbs.click(function(e){
	// e.preventDefault();
	// // e.stopPropogation();
	//
	//
	// var selectedIndex = $thumbs.index(this);
	//
	//
	// //only change image if not the selected image
	// if(currentIndex != selectedIndex){
	//
	// //fade out current image and remove selected class form thumb
	// $images.eq(currentIndex).fadeOut(dissolveSpeed);
	// //$thumbs.eq(currentIndex).removeClass("selected").stop(true, true).fadeTo(500, .5);
	//
	// //update the current index
	// currentIndex = selectedIndex;
	// //alert(dissolveSpeed);
	// //fade in the selected image and add selected class to thumb
	// $images.eq(currentIndex).stop(true, true).fadeIn(dissolveSpeed);
	// //$thumbs.eq(currentIndex).addClass("selected");
	// } else {
	// $images.eq(currentIndex).stop(true, true).fadeIn(dissolveSpeed);
	// }
	//
	// //alert('woah');
	//
	// //			return false;
	//
	// });

});

