var buttonImage = document.querySelector('button');
var imageContainer = document.querySelector('.image-container');

buttonImage.addEventListener('click', function(e) {
	imageContainer.classList.toggle('image-container--02');
})