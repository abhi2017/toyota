$(document).ready(function() {
	///////////////////////////////////////////////////////////////////
	$(window).scroll(function(){
		checkNav();
	});
	function checkNav(){
		if($( window ).width() > 768){
			var gerWH = 400;
			if($(window).scrollTop() > gerWH){
				showStickyMenu();
			}else{
				hideStickyMenu();
			}
		}
	}
	checkNav();
	/////////
	function showStickyMenu(){
		//$('#header').css({'position':'fixed', 'z-index':99999});
		//$('header #top-bar').fadeOut('fast');
		$('#header').addClass('makeSticky');
	}
	function hideStickyMenu(){
		//$('#header').fadeOut('fast');
		//$('#header').css({'position':'relative'});
		//$('header #top-bar').fadeIn('fast');
		$('#header').removeClass('makeSticky');
	}
});