/* Делаем собственный слайдер на jQuery */

$(function() {	
	var slideNow = 0;
	var slidemassiv=$('.videocarusel__wprapper').children();
	var slideCount = $('.videocarusel__wprapper').children().length;
	var slideTime = 5000;
	var navBtn = $('.slide-nav');
	

	
	//setInterval(nextSlide, slideTime);

	$('.videocarusel__btn-next').click(nextSlideByMe);
	$('.videocarusel__btn-prev').click(prevSlideByMe);


	$(".sliderwprapper").swipe({
		swipeLeft: function() {
			nextSlideByMe();
			console.log('work');
		},
		swipeRight: function() {
			prevSlideByMe();
		},
		allowPageScroll: "vertical"
	});
  	
  	if ($(window).width() < 993){
		$(slidemassiv[slideNow+2]).toggleClass('activeslide');
		$(slidemassiv[slideNow+3]).toggleClass('activeslide');
	};

  	window.addEventListener('resize',(function(event) {
  		if ($(window).width() < 993){
		$(slidemassiv[slideNow+2]).toggleClass('activeslide');
		$(slidemassiv[slideNow+3]).toggleClass('activeslide');
		}
  	}));


	function nextSlideByMe() {
		if ($(window).width() < 993){
			if (slideNow < slideCount -2) {
				
				$(slidemassiv[slideNow]).toggleClass('activeslide');
				$(slidemassiv[+slideNow+2]).toggleClass('activeslide');
				slideNow++;
				console.log(slideNow);
			}
			else if (slideNow == slideCount -2){			

				$(slidemassiv[slideNow+1]).toggleClass('activeslide');
				$(slidemassiv[slideNow]).toggleClass('activeslide');

				$(slidemassiv[0]).toggleClass('activeslide');
				$(slidemassiv[1]).toggleClass('activeslide');
			
				slideNow = 0;
			}
		}
		else {
			if (slideNow < slideCount -4) {
				
				$(slidemassiv[slideNow]).toggleClass('activeslide');
				$(slidemassiv[+slideNow+4]).toggleClass('activeslide');
				slideNow++;
				console.log(slideNow);
			}
			else if (slideNow == slideCount -4){
				

				$(slidemassiv[slideNow+3]).toggleClass('activeslide');
				$(slidemassiv[slideNow+2]).toggleClass('activeslide');
				$(slidemassiv[slideNow+1]).toggleClass('activeslide');
				$(slidemassiv[slideNow]).toggleClass('activeslide');

				$(slidemassiv[0]).toggleClass('activeslide');
				$(slidemassiv[1]).toggleClass('activeslide');
				$(slidemassiv[2]).toggleClass('activeslide');
				$(slidemassiv[3]).toggleClass('activeslide');
				slideNow = 0;
			}
		}
	}



	function prevSlideByMe() {
		if ($(window).width() < 993){
			if (slideNow > 0){
				
				$(slidemassiv[+slideNow+1]).toggleClass('activeslide');

				$(slidemassiv[+slideNow-1]).toggleClass('activeslide');
				slideNow--;
				
			}
			else if (slideNow == 0){
				

				
				$(slidemassiv[slideCount - 2]).toggleClass('activeslide');
				$(slidemassiv[slideCount - 1]).toggleClass('activeslide');

				$(slidemassiv[0]).toggleClass('activeslide');
				$(slidemassiv[1]).toggleClass('activeslide');				

				slideNow = slideCount -2;
				
			}

		}
		 else {

			if (slideNow > 0){
				
				$(slidemassiv[+slideNow+3]).toggleClass('activeslide');

				$(slidemassiv[+slideNow-1]).toggleClass('activeslide');
				slideNow--;
				
			}
			else if (slideNow == 0){
				

				$(slidemassiv[slideCount - 4]).toggleClass('activeslide');
				$(slidemassiv[slideCount - 3]).toggleClass('activeslide');
				$(slidemassiv[slideCount - 2]).toggleClass('activeslide');
				$(slidemassiv[slideCount - 1]).toggleClass('activeslide');

				$(slidemassiv[0]).toggleClass('activeslide');
				$(slidemassiv[1]).toggleClass('activeslide');
				$(slidemassiv[2]).toggleClass('activeslide');
				$(slidemassiv[3]).toggleClass('activeslide');


				slideNow = slideCount -4;
				
			}
		}
	}



	$(this).keydown(function(event) {
		if ( event.which == 39) {
			nextSlideByMe();
		}
		if ( event.which == 37) {
			prevSlideByMe();
		}
	});
});	