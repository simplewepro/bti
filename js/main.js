let $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});

$('.service_item').focus(function(){
	$('.service_item').addClass('blured');
});
$('.service_item').mousedown(function(event){
	if ($('.service_item').is(':focus')) {
		event.preventDefault();
		$('.service_item').blur();
	}
})
$('.service_item').blur(function(){
	$('.service_item').removeClass('blured');
});

$(window).scroll(function() {
	let windowTop = $(window).scrollTop();
	let navbar 	  = $('#navbar');
	let services  = $('#services').offset().top;
	if (windowTop > services - navbar.height()) {
		navbar.addClass('scrolled');
	}
	else{
		navbar.removeClass('scrolled');	
	}
});

let firstAdress  = {lat: 49.985212, lng: 36.070149};
let secondAdress = {lat: 50.105063, lng: 36.106566};

function initMap() {
    let styles = [
	  {
	    "elementType": "labels",
	    "stylers": [
	      {
	        "visibility": "on"
	      }
	    ]
	  },
	  {
	    "elementType": "labels.text",
	    "stylers": [
	      {
	        "visibility": "on"
	      }
	    ]
	  },
	  {
	    "elementType": "labels.text.fill",
	    "stylers": [
	      {
	        "color": "#000000"
	      },
	      {
	        "visibility": "on"
	      }
	    ]
	  },
	  {
	    "elementType": "labels.text.stroke",
	    "stylers": [
	      {
	        "color": "#f7f7f7"
	      },
	      {
	        "visibility": "on"
	      }
	    ]
	  },
	  {
	    "featureType": "landscape.man_made",
	    "elementType": "geometry.fill",
	    "stylers": [
	      {
	        "color": "#f7f7f7"
	      }
	    ]
	  },
	  {
	    "featureType": "landscape.man_made",
	    "elementType": "geometry.stroke",
	    "stylers": [
	      {
	        "color": "#b2b2b2"
	      }
	    ]
	  },
	  {
	    "featureType": "poi.school",
	    "elementType": "geometry",
	    "stylers": [
	      {
	        "color": "#fdfdfd"
	      }
	    ]
	  },
	  {
	    "featureType": "road.arterial",
	    "stylers": [
	      {
	        "color": "#c7c7c7"
	      }
	    ]
	  },
	  {
	    "featureType": "road.highway",
	    "elementType": "geometry",
	    "stylers": [
	      {
	        "color": "#d6d5e3"
	      }
	    ]
	  },
	  {
	    "featureType": "road.local",
	    "elementType": "geometry",
	    "stylers": [
	      {
	        "color": "#e8e8ec"
	      }
	    ]
	  }
	];
    let markerImage = 'img/map-marker.png';
    let map 		= new google.maps.Map(document.getElementById('map'), {
      zoom: 16,
      center: firstAdress,
      disableDefaultUI: true,
      styles: styles
    });
    let markerOne = new google.maps.Marker({
      position: firstAdress,
      map: map,
      icon: markerImage
    });
    let markerTwo = new google.maps.Marker({
      position: secondAdress,
      map: map,
      icon: markerImage
    });
	$('.first_adress').click(function(){
		// scrollToContact();
		map.setOptions({
			center: firstAdress,
			zoom: 16
		});
	});

	$('.second_adress').click(function(){
		// scrollToContact();
		map.setOptions({
			center: secondAdress,
			zoom: 17
		});
	});
}

function scrollToContact() {
	$page.animate({
        scrollTop: $('.contacts').offset().top
    }, 400);
}