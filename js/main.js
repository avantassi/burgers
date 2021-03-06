// map

ymaps.ready(init);

var placemarks = [
	{
		latitude: 59.97,
		longitude: 30.31,
		hintContent: '<div class="map__hint">ул. Литераторов, д.19</div>',
		balloonContent: [
			'<div class="map__balloon">',
			'<img src="../img/content/burger-main.png " alt="Бургер" class="map__burger-img" />',
			'<p>Самые вкусные бургеры у нас! Заходите по адресу: ул. Литераторов, д.19</p>',
			'</div>'
		]
	},
	{
		latitude: 59.94,
		longitude: 30.25,
		hintContent: '<div class="map__hint">Малый проспект В.О., д.64</div>',
		balloonContent: [
			'<div class="map__balloon">',
			'<img src="../img/content/burger-main.png " alt="Бургер" class="map__burger-img" />',
			'<p>Самые вкусные бургеры у нас! Заходите по адресу: Малый проспект В.О., д.64</p>',
			'</div>'
		]
	},
	{
		latitude: 59.93,
		longitude: 30.34,
		hintContent: '<div class="map__hint">наб. реки Фонтанки, д.56</div>',
		balloonContent: [
			'<div class="map__balloon">',
			'<img src="../img/content/burger-main.png " alt="Бургер" class="map__burger-img" />',
			'<p>Самые вкусные бургеры у нас! Заходите по адресу: наб. реки Фонтанки, д.56</p>',
			'</div>'
		]
	}
];

function init () {
	var map = new ymaps.Map('map',{
		center: [59.94, 30.32],
		zoom: 12,
		controls: ['zoomControl'],
		behaviors: ['drag']
	});

	placemarks.forEach (function (obj) {
		var placemark = new ymaps.Placemark([obj.latitude, obj.longitude],{
			hintContent: obj.hintContent,
			balloonContent: obj.balloonContent
			.join('')
		},
		{
			iconLayout: 'default#image',
			iconImageHref: 'img/icons/map-marker.svg',
			iconImageSize: [46, 57],
			iconImageOffset: [-23, -57]
		});

		map.geoObjects.add(placemark);
	});
}

// slider

$(document).ready(function(){
	$(".owl-carousel").owlCarousel();
});

// one page scroll

$(document).ready(function() {
	$('#fullpage').fullpage();
});

// menu accordeon

$(document).ready(function() {
	$('.menu-acco__trigger').click(function() {
		var dropdown=$(this).parent('.menu-acco__item');
			if(!dropdown.hasClass('active')) {
				$('.menu-acco__content').stop().animate({width: '0'}, 1000);
				$('.menu-acco__item').removeClass('active');
			dropdown.addClass('active');
			dropdown.children('.menu-acco__content').stop().animate({width: '550'}, 1000); 
			} else {
				$(this).parent('.menu-acco__item').removeClass('active');
				dropdown.children('.menu-acco__content').stop().animate({width: '0'}, 1000);
			}
		return false;
	});
});

// team accordeon

$(document).ready(function() {
	$('.team-acco__trigger').click(function() {
		var dropdown=$(this).parent('.team-acco__item');
			if(!dropdown.hasClass('active')) {
				$('.team-acco__content').slideUp(500);
				$('.team-acco__item').removeClass('active');
			dropdown.addClass('active');
			dropdown.children('.team-acco__content').slideDown(500);
			} else {
				$(this).parent('.team-acco__item').removeClass('active');
			}
		return false;
	});
});

// hamburger

$('.hamburger').click(function(){
	$('.hamburger-nav').fadeToggle();
});

// form universal

var ajaxForm = function (form) {
	var data = form.serialize(),
		url = form.attr('action');

	return $.ajax({
		type: 'POST',
		url: url,
		dataType : 'JSON',
		data: data
	})
};

// feed popaps

$(document).ready(function() { // вся мaгия пoсле зaгрузки стрaницы
	$('a#go').click( function(event){ // лoвим клик пo ссылки с id="go"
		event.preventDefault(); // выключaем стaндaртную рoль элементa
		$('#overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
		 	function(){ // пoсле выпoлнения предъидущей aнимaции
				$('#modal_form') 
					.css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
					.animate({opacity: 1, top: '50%'}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
		});
	});
	/* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
	$('#modal_close, #overlay').click( function(){ // лoвим клик пo крестику или пoдлoжке
		$('#modal_form')
			.animate({opacity: 0, top: '45%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
				function(){ // пoсле aнимaции
					$(this).css('display', 'none'); // делaем ему display: none;
					$('#overlay').fadeOut(400); // скрывaем пoдлoжку
				}
			);
	});
});
