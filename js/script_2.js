/* Author:
 alert("test");
 */

$(document).ready(function() {
	
	var $twiter = $('.twitter'),
	$bgImg = $('.bgImg'),
	$banned = $('.outdoorImg');
	
	$bgImg.backstretch("../img/color_grass_2.jpg");
	$bgImg.hide();
	$twitter.hide();
	
	$banned.mouseenter(function(){
		
		$bgImg.stop(true, true).fadeIn(2000, function(){
			
				$bgImg.fadeOut(2000);
			});
		
		});

	/*$('.outdoorImg').hover(function() {
		$('.banned img').stop(true, true).fadeIn(4000);
	}, function() {
		$('.banned img').fadeOut(4000);
	});*/

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
	
		var $tabs = $("nav a"),
	$panels = $(".panels section"),
	currentIndex = 0,
	fadeSpeed = 4000;
	
	//initialise
	$panels.css({"position":"absolute", "left":"5%"}).hide().eq(currentIndex).show();
	$tabs.eq(currentIndex).addClass("selected");
	
	//tabs click handler
	$tabs.click(function(e){
		
		e.preventDefault();
		
		var selectedIndex = $tabs.index(this);
		
		//only change panels if not currently selected
		if(selectedIndex != currentIndex){
			//hide previous panel
			$panels.eq(currentIndex).fadeOut(fadeSpeed);
			//clear selected tab
			$tabs.eq(currentIndex).removeClass("selected");
			
			//update currentIndex to clicked on tab's index
			currentIndex = selectedIndex;
			
			//show selected panel
			$panels.eq(currentIndex).fadeIn(fadeSpeed);
			//set selected tab
			$tabs.eq(currentIndex).addClass("selected");
		}
		
	});
	

	
});

