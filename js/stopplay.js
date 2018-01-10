$(document).ready(function(){
  var screenWidth = $(window).width();
  if (screenWidth < 800){
		$('video').removeAttr('autoplay');
  } else {
  	$('video').attr('autoplay');
  }
});
