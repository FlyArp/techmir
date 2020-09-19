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