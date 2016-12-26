	
	$(document).ready(function(){
		var status ='box';
		var counter = 0;

		for(var j=0; j<9;j++){
	   		for(var i=0; i<15;i++){
	   			box  = document.createElement('div');
		   		box.className = 'gridbox empty';
		   		box.id = j+"_"+i;
	   			document.getElementById('gamearea').appendChild(box); 
	   		}	
   		    boxbreak  = document.createElement('br');
   			document.getElementById('gamearea').appendChild(boxbreak); 
		}		

 		 ga('send', 'event', 'Test', 'Loaded', '');

 		 $('.mainbtm').click(function(){
 		 		Reveal.next();
 		 });


 		 $('.howisholding').click(function(){
				respond = $(this).attr('id')		 		
 		 	    ga('send', 'event', 'Phone Position', respond, respond );
 		 		Reveal.next();
 		 });

 		 $('.gridbox.empty').on('click',function clickedFunctions(){
 		 		console.log('CLICKED')
			

				ga('send', 'event', respond, status , position);

 		 		if( status=='box'  && counter<7){
 		 			//disable box 
 		 			$(this).removeClass('empty');
 		 			$(this).off("click");

 		 			//show box
 		 			$(this).addClass('clickedbox');
 					
 					//save value
 					position = $(this).attr('id')
 					// ga('send', 'event', respond, status , position);

 					//increase counter
 					counter++;
 		 			
 		 			if(counter == 7){

 		 				status = 'build';
						
 		 				$('.backdrop').css('display','block');
 		 				$('div.info').fadeIn(700);

						$('div.info .nextbtn').on('click', function(){
							$(this).fadeOut('fast',function(){
							
								$('div.build').fadeIn('fast');
								$('div.build .nextbtn').on('click',function(){
									$('.backdrop').css('display','none');
									$('div.build').css('display','none')
									$('div.info').css('display','none')
								})
							})
						})

 		 			}

 		 		}else{
 		 			if(status=='build'){
	 		 			$(this).removeClass('empty');
	 		 			$(this).addClass('clickedbuild');

	 					position = $(this).attr('id');
	 					// ga('send', 'event', 'Added Build', position, position);

 		 				status = 'gold';

 		 				$('.backdrop').css('display','block');
 		 				$('div.gold').fadeIn(700);

						$('div.gold .nextbtn').on('click', function(){
							$('.backdrop').css('display','none');
	 		 				$('div.gold').css('display','none');
						});

 					}else if(status=='gold'){

	 		 			$(this).removeClass('empty');
	 		 			$(this).addClass('clickedgold');

	 					position = $(this).attr('id');
	 					// ga('send', 'event', 'Added Gold', position, position);


	 		 			status = 'options';

 		 				$('.backdrop').css('display','block');
 		 				$('div.options').fadeIn(700); 
		
						$('div.options .nextbtn').on('click', function(){
							$('.backdrop').css('display','none');
	 		 				$('div.options').css('display','none');
						});

 		 			}else if(status=='options'){

	 		 			$(this).removeClass('empty');
	 		 			$(this).addClass('clickedoptions');
		
	 					position = $(this).attr('id');
	 					// ga('send', 'event', 'Added Options', position, position);

 						setTimeout(function(){
		 		 			Reveal.next();
		 		 		},500);

 		 			}
 		 		}

 		 })

	})
