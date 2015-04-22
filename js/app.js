$(document).ready (function() {
	$('.ryu')
	.mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})

	.mousedown(function() {
		$('.ryu-ready').hide();
		$('.ryu-throw').show();
		$('.hadouken').show();
		//play sound
		//animate hadouken left to right
	})

	.mouseup(function() {
		$('.ryu-throw').hide();
		$('.ryu-ready').show();
		//stop sound

	});








});