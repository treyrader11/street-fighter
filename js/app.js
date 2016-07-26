 function playHadouken() {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
};

function playTakeFive() {
	$('#take-five')[0].volume = 0.5;
	$('#take-five')[0].load();
	$('#take-five')[0].play();
}

function playSatie() {
	$('#satie')[0].volume = 0.5;
	$('#satie')[0].load();
	$('#satie')[0].play();
}
 

$(document).ready(function() {
	playTakeFive()
	$('#instruction-1').show();
	$('.ryu').mouseenter(function() {
		$('#instruction-1').fadeTo("slow", 0, function() {
			$('#instruction-2').fadeTo("slow", 1);
		});
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
		$('#instruction-2').fadeTo("slow", 0, function() {
			$('#instruction-1').fadeTo("slow", 1); 
		});

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
		$('#instruction-2').fadeTo("slow", 0, function() {
			$('#instruction-3').fadeTo("slow", 1);
		})
	});
	$(this).keydown(function(e){
       var code = e.keyCode; 
        if(code == 88){
         	$('.ryu-ready').hide();
         	$('.ryu-still').hide();
         	$('.ryu-cool').show();
         	$('#instruction-3').fadeTo("slow", 0);    
        	$('#take-five').trigger('pause');
        	$('#satie').trigger('play');

        }
    });
	$(this).keyup(function(e){
       var code = e.keyCode;
        if(code == 88){
        	$('#take-five').hide();
         	$('.ryu-cool').hide();
         	$('.ryu-ready').show();
         	$('#satie').trigger('pause');
         	$('#take-five').trigger('play');
        }
    }); 

});