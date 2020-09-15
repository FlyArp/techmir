$(function() {
// Подключаемые модули ===================================================================================================================================================================================================
	// Smooth scroll

$('[data-scroll]').on('click', function(event) {
	event.preventDefault();
	var blockId = $(this).data('scroll'),
	blockOffset = $(blockId).offset().top;

	$('html, body').animate({
		scrollTop: blockOffset},
		700);

	// if ($('.burger').hasClass('burger_active')) {
	// 	$('.burger').removeClass('burger_active');
	// 	$('.nav').slideToggle(400);
	// }
});
	// @include('owlCarousel.js')
	$('.header__burger').click(function() {
	$(this).toggleClass('active');
	$('.menu').slideToggle(400);
	if (!$(this).hasClass('active')) {
			setTimeout(() => {
			  $('.menu').removeAttr('style');
			}, 650);
		}
});
$('.top-header__burger').click(function() {
	$(this).toggleClass('active');
	$('.top-header__info').slideToggle(400);
	if (!$(this).hasClass('active')) {
			setTimeout(() => {
			  $('.top-header__info').removeAttr('style');
			}, 650);
		}
});
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