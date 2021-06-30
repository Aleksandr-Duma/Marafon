$(function(){

	$('.top-slider').slick({
		arrows: false,
		dots: true,
		autoplay: true
	});

	$('.button-burger').on('click', function(){
		$('.header__nav-list').addClass('active');
	});

	$('.button-close, .header__nav-link').on('click', function(){
		let win = $(window).width();

		$('.header__nav-list').removeClass('active');	
		if(win < 768){
			$('.header__nav-list').removeClass('active');
		}
	});

	$('a[href^="#"]').click(function(){
		var target = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(target).offset().top
		},800);
	});
});

