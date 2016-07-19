

$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();;
	})
	.mouseleave(function() {
    	$('.ryu-ready').hide();
		$('.ryu-still').show();;
  })
	.mousedown(function() {
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
			{'left': '1020px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left', '-126px')
			}
		);
	})
	.mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});
});




function playHadouken() {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}



 $(document).on("keydown", function(e){
       var code = e.keyCode;
        if(code == 88){
        	//playMusic();
         	$('.ryu-ready').hide();
         	$('.ryu-still').hide();
         	$('.ryu-cool').show();   
        }
    });

  $(document).on("keyup", function(e){
       var code = e.keyCode;
        if(code == 88){
         	$('.ryu-cool').hide();
         	$('.ryu-ready').show();
        // $('.ryu-still').show();   
        }
    });

function playMusic() {
	$('#my-sound')[0].volume = 0.5;
	$('#my-sound')[0].load();
	$('#my-sound')[0].play();
}