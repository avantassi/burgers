ymaps.ready(init);

var placemarks = [
	{
		latitude: 59.97,
		longitude: 30.31,
		hintContent: '<div class="map__hint">ул. Литераторов, д.19</div>',
		balloonContent: [
			'<div class="map__balloon">',
			'<img src="img/content/burger-main.png " alt="Бургер" class="map__burger-img" />',
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
			'<img src="img/content/burger-main.png " alt="Бургер" class="map__burger-img" />',
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
			'<img src="img/content/burger-main.png " alt="Бургер" class="map__burger-img" />',
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