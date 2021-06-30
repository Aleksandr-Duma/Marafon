// -------------------------mobile-menu---------------------------
const burger = document.querySelector('.button-burger');
const navigation = document.querySelector('.header__nav-list');
const navLink = document.querySelectorAll('.header__nav-link');
const closeButton = document.querySelector('.button-close');

	burger.addEventListener('click', function(){
		navigation.classList.add('active');
	});

	closeButton.addEventListener('click', function(){
		navigation.classList.remove('active');
	});	

	for (let i = 0; i < navLink.length; i++){
		navLink[i].addEventListener('click', function() {
			navigation.classList.remove('active');
		});
	}

// ------------------------swiper-slider--------------------------
const swiper = new Swiper('.swiper-container', {
  	loop: true,
  	centeredSlides: true,
  	autoplay: {
		delay: 3000,
  	},

  // If we need pagination
  	pagination: {
    	el: '.swiper-pagination',
    	type: 'bullets',
    	clickable: true
  	},
});

// ----------------------smooth scrolling-------------------------
const links = document.querySelectorAll('a[href^="#"]');

	for(let i = 0; i < links.length; i++){
		links[i].addEventListener('click', function(event){
			event.preventDefault();
			const blockId = event.target.getAttribute('href').substr(1);

			document.getElementById(blockId).scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		});
	};




