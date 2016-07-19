





$(document).ready(function() {
	//$('#first-line').fadeTo("slow", 1);
	$('.content').addClass('line1').fadeTo("slow", 1).text("Put the mouse on Ryu to get him ready for combat!");
});
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
		
		$('.line1').fadeTo("slow", 0, function() {
			$(this).hide();
		})
		$('.content').addClass('line2').fadeTo("slow", 1).text("Ok, Let's begin...");

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
	})

	$(this).keydown(function(e){
       var code = e.keyCode; /*not entirely sure how this code is implemented*/
        if(code == 88){
         	$('.ryu-ready').hide();
         	$('.ryu-still').hide();
         	$('.ryu-cool').show();   
        }
    })
	$(this).keyup(function(e){
       var code = e.keyCode;
        if(code == 88){
        	$('#take-five').hide();
         	$('.ryu-cool').hide();
         	$('.ryu-ready').show();
        // $('.ryu-still').show();   
        }
    }) 
	playTakeFive();




function playHadouken() {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}

function playTakeFive() {
	$('#take-five')[0].volume = 0.5;
	$('#take-five')[0].load();
	$('#take-five')[0].play();
}