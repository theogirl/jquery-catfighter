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
		$('.ryu-cool').hide();
		$('.ryu-still').hide();
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

	})

});

function playHadouken() {
	$('#hadouken-sound') [0].volume = 0.5;
	$('#hadouken-sound') [0].load();
	$('#hadouken-sound') [0].play();
}

function playCheeze() {
	$('#cheezy-sound') [0].volume = 0.5;
	$('#cheezy-sound') [0].load();
	$('#cheezy-sound') [0].play();
}

//Attach the keydown event to document as a whole, since can happen anywhere!
$(document)
.keydown(function(event) {
	if (event.which == 88) {
		$('.ryu-still').hide();
		$('.ryu-ready').hide();
		$('.ryu-throw').hide();
		$('.ryu-cool').show();
		playCheeze();
	}

})

//No need to listen for which specific key was released?
.keyup(function() {
		$('.ryu-still').show();
		$('.ryu-cool').hide();
		$('.ryu-ready').hide();
		$('#cheezy-sound') [0].pause();
		$('#cheezy-sound') [0].load();

});
