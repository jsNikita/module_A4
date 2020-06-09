let image = document.querySelector('.small-img-4');
image.addEventListener('mouseover',showImage);

function showImage() {
	document.querySelector('.small-img-4-name').classList.add('visible');
}

image.addEventListener('mouseout',hideImage);

function hideImage() {
	document.querySelector('.small-img-4-name').classList.remove('visible');
}