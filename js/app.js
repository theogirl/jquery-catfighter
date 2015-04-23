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
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throw').show();
		$('.hadouken').finish().show().animate(
			{'left': '1080px'},
			500,//the speed of the animation in ms
			function() {
				$(this).hide();
				$(this).css('left', '615px');
			}
		);
	})

	.mouseup(function() {
		$('.ryu-throw').hide();
		$('.ryu-ready').show();
		//stop sound

	});

function playHadouken() {
	$('#hadouken-sound') [0].volume = 0.5;
	$('#hadouken-sound') [0].load();
	$('#hadouken-sound') [0].play();
}






});