jQuery(function($) {'use strict',

	//Countdown js
	 $("#countdown").countdown({
			date: "1 april 2017 10:00:00",
			format: "on"
		},

		function() {
			// callback function
		});

		$(document).ready(function() {

			setTimeout(function(){
				$('body').addClass('loaded');
				$('h1').css('color','#222222');
			}, 1000);

		});
// 		var randomLoadingMessage = function() {
//     var lines = new Array(
//         "Locating the required gigapixels to render...",
//         "Spinning up the hamster...",
//         "Shovelling coal into the server...",
//         "Programming the flux capacitor"
//     );
//     return lines[Math.round(Math.random()*(lines.length-1))];
// }

$(".ty").html(function() {
    var lines = new Array(
			"Locating the required gigapixels...",
        "&nbsp;&nbsp;&nbsp;&nbsp;Spinning up the hamster...",
        "&nbsp;Shovelling coal into the server...",
        "&nbsp;Programming the flux capacitor"
    );
    return lines[Math.round(Math.random()*(lines.length-1))];
});
	//Scroll Menu

	function menuToggle()
	{
		var windowWidth = $(window).width();

		if(windowWidth > 767 ){
			$(window).on('scroll', function(){
				if( $(window).scrollTop()>405 ){
					$('.main-nav').addClass('fixed-menu animated slideInDown');
				} else {
					$('.main-nav').removeClass('fixed-menu animated slideInDown');
				}
			});
		}else{

			$('.main-nav').addClass('fixed-menu animated slideInDown');

		}
	}

	menuToggle();


	// Carousel Auto Slide Off
	$('#event-carousel, #twitter-feed, #sponsor-carousel ').carousel({
		interval: false
	});


	// Contact form validation
	var form = $('.contact-form');
	form.submit(function () {'use strict',
		$this = $(this);
		$.post($(this).attr('action'), function(data) {
			$this.prev().text(data.message).fadeIn().delay(3000).fadeOut();
		},'json');
		return false;
	});

	$( window ).resize(function() {
		menuToggle();
	});

	$('.main-nav ul').onePageNav({
		currentClass: 'active',
	    changeHash: false,
	    scrollSpeed: 900,
	    scrollOffset: 0,
	    scrollThreshold: 0.3,
	    filter: ':not(.no-scroll)'
	});

});


// Google Map Customization
(function(){

	var map;

	map = new GMaps({
		el: '#gmap',
		lat: 12.894657,
		lng: 77.675144,
		scrollwheel:false,
		zoom: 16,
		zoomControl : true,
		panControl : false,
		streetViewControl : false,
		mapTypeControl: false,
		overviewMapControl: false,
		clickable: true
	});


	var image = 'images/map-icon.png';
	map.addMarker({
		lat: 12.894657,
		lng: 77.675144,
		icon: image,
		animation: google.maps.Animation.DROP,
		verticalAlign: 'bottom',
		horizontalAlign: 'center',
		backgroundColor: '#3e8bff',
	});


	var styles = [

	{
		"featureType": "road",
		"stylers": [
		{ "color": "#b4b4b4" }
		]
	},{
		"featureType": "water",
		"stylers": [
		{ "color": "#d8d8d8" }
		]
	},{
		"featureType": "landscape",
		"stylers": [
		{ "color": "#f1f1f1" }
		]
	},{
		"elementType": "labels.text.fill",
		"stylers": [
		{ "color": "#000000" }
		]
	},{
		"featureType": "poi",
		"stylers": [
		{ "color": "#d9d9d9" }
		]
	},{
		"elementType": "labels.text",
		"stylers": [
		{ "saturation": 1 },
		{ "weight": 0.1 },
		{ "color": "#000000" }
		]
	}

	];

	map.addStyle({
		styledMapName:"Styled Map",
		styles: styles,
		mapTypeId: "map_style"
	});

	map.setStyle("map_style");
}());
