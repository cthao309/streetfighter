

$(document).ready(function() {
		playThemeMusic();

		/* Mouse events functions */
		$(".ryu")
				.mouseenter(function() {
					playThemeMusic();
					$(".ryu-still").hide();
					$(".ryu-ready").show();
				})
				.mouseleave(function() {
					 	$(".ryu-still").show();
					 	$(".ryu-ready").hide();
				})
				.mousedown(function(){
						playHadouken();	//play "hadouken" sound
						$(".ryu-ready").hide();
						$(".ryu-throwing").show();
						$(".hadouken").finish().show().animate(	//this "finish()" wait for the "show()" to finish before it execute
								{"left":"1020px"},
								500,
								function(){
									$(this).hide();
									$(this).css("left","520px");
									$(this).css("width","500px");
								});
					})
				.mouseup(function(){
						$(".ryu-throwing").hide();
						$(".ryu-ready").show();
				})		

				/* This fade-in and fade-out the logo */
				$(".street-fighter-logo").fadeIn("slow",function(){
						$(this).fadeOut(1000,function(){
								$(".jquery-logo").fadeIn("slow",function(){
									$(this).fadeOut(1000,function(){
										$(".author").fadeIn("slow",function(){
											$(this).fadeOut(1000);
										});
									});
								});			
						});
				})

				/* This show the image "ryu-cool" when the user press an "x" */
				$(document)
				.keydown(function(e) {					
			    if (e.keyCode == 88) //keyCode for X
			    {				    	
			      playThemeMusic();
			      $('.ryu-still').hide();
			      $('.ryu-cool').show();
			    }			    
			    if(e.keyCode == 70)  //keyCode for F
			    {
			    	console.log("throw fire-ball");
			    	$(".ryu-still").hide();
			    	$(".ryu-throwing").show();
			    	$(".hadouken").finish().show().animate(
			    			{"left":"1020px"},
								500,
								function(){
									$(this).hide();
									$(this).css("left","520px");
									$(this).css("width","500px");
								});	
			    } 
			    else if(e.keyCode == 74)  //keyCode for J
			    {
				    /*console.log("move left");	*/					    							
				   	$(".ryu-still").hide();
				    $(".ryu-ready").show();				    							
				    $(".ryu").finish().animate({"paddingLeft":"-=1000px"},"slow");
			    } 
			    else if(e.keyCode == 76)  //keyCode for L
			    {
				    /*console.log("move right");*/
				    $(".ryu-still").hide();
				    $(".ryu-ready").show();				    							
				    $(".ryu").finish().animate({"paddingLeft":"+=100px"},"slow");
				    	
			    } 
			    else if(e.keyCode == 73)  //keyCode for I
			    {
				   /* console.log("jump up");*/

				    $(".ryu-ready").show();
				    $(".ryu").finish().animate({"marginBottom":"-=100px"},"slow");			    							
			    } 
			   			  
			  })

			  .keyup(function(e) {
				    if (e.keyCode == 88)	//keyCode for X
			     {  
				      $('.ryu-cool').hide();
				      $('.ryu-still').show();
				    }
				    if(e.keyCode == 70)
				    {
				    	$(".ryu-throwing").hide();
				    	$('.ryu-still').show();
				    }
				    if(e.keyCode == 74)  //keyCode for J
				    {
					    console.log("stop move left");

					    $(".ryu-ready").show();
					    $(".ryu-still").hide();				    							
				    } 
				    if(e.keyCode == 76)  //keyCode for L
				    {
					    console.log("stop move right");

					    $(".ryu-ready").hide();
					    $(".ryu-still").show();				    							
				    } 
				    if(e.keyCode == 73)  //keyCode for I
				    {
					    console.log("stop jump up");

					    $(".ryu-ready").hide();
					    $(".ryu-still").show();				    							
				    } 
				    
				  });
				
				
	
});

/* Function to play Hadouken sound */
function playHadouken(){
	$("#hadouken-sound")[0].volume=.85;
	$("#hadouken-sound")[0].load();
	$("#hadouken-sound")[0].play();
}

/* Function to play theme-music of street-figter sound */
function playThemeMusic(){
	$("#theme-music")[0].volume=.5;
	$("#theme-music")[0].load();
	$("#theme-music")[0].play();
}



