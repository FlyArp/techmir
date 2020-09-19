$(function() {
// Подключаемые модули ===================================================================================================================================================================================================
	@@include('smoothScroll.js')
	// @include('owlCarousel.js')
	@@include('burger.js')
	// @include('aosAnimation.js')
	// @include('langDetect.js')
	// @include('scrollSpy.js')

	$('.header__button').on('click', function(event) {
		event.preventDefault();
		$('.popup-wrapper').fadeIn('400');
		$('.popup-callback').fadeIn('400');
		$('body').addClass('lock');
	});
	$('.equipment__button').on('click', function(event) {
		event.preventDefault();
		$('.popup-wrapper').fadeIn('400');
		$('.popup-callback').fadeIn('400');
		$('body').addClass('lock');
	});
	$('.item-catalog').on('click', function(event) {
		event.preventDefault();
		$('.popup-wrapper').fadeIn('400');
		$('.popup-catalog').fadeIn('400');
		$('body').addClass('lock');
	});
	$('.popup-close').on('click', function(event) {
		event.preventDefault();
		$('.popup-wrapper').fadeOut('400');
		$('.popup-callback').fadeOut('400');
		$('.popup-catalog').fadeOut('400');
		$('body').removeClass('lock');
	});
	$('.popup-wrapper').on('click', function(event) {
		if (!event.target.closest('.popup-callback') && !event.target.closest('.popup-catalog') && $('.popup-wrapper').css('display') === 'block') {
			$('.popup-wrapper').fadeOut('400');
			$('.popup-callback').fadeOut('400');
			$('.popup-thank').fadeOut('400');
			$('.popup-review').fadeOut('400');
			$('body').removeClass('lock');
		}
	});
})