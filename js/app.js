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
		console.log('there has been a mousedown event');
	});








});