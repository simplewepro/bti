let slider 			= document.querySelector('#slider'),
	slides 			= document.querySelectorAll('#slider .slide'),
	currentSlide 	= 0,
	interval		= 100000;
	slideInterval	= setInterval(nextSlide, interval),
	next			= document.querySelector('#next'),
	prev			= document.querySelector('#prev'),
	thumbnails		= document.querySelectorAll('input[name=slider]');

function nextSlide() {
	goToSlide(currentSlide + 1);
	setThumbnail(currentSlide);
}

function previousSlide() {
	goToSlide(currentSlide - 1);
	setThumbnail(currentSlide);
}

function goToSlide(n) {
	slides[currentSlide].className = 'slide';
	currentSlide = (n + slides.length) % slides.length;
	slides[currentSlide].className = 'slide showing';
}

function setThumbnail(n){
	thumbnails[n].checked = true;
}

next.onclick = function () {
	clearInterval(slideInterval);
	nextSlide();
	slideInterval = setInterval(nextSlide, interval);
}
prev.onclick = function () {
	clearInterval(slideInterval);
	previousSlide();
	slideInterval = setInterval(nextSlide, interval);
}

for ( let i = 0; i < thumbnails.length; i++) {
	thumbnails[i].onchange = function () {
		clearInterval(slideInterval);
		goToSlide(event.target.value - 1);
		slideInterval = setInterval(nextSlide, interval);
	}
}

let position1;
let position2;

slider.addEventListener('touchstart', function(e){
	position1 = e.changedTouches[0].pageX;
});
slider.addEventListener('touchend', function(e){
	position2 = e.changedTouches[0].pageX;
	if (position1 > position2) {
		nextSlide();
	}
	else if (position1 < position2){
		previousSlide();
	}
});