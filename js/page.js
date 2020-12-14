var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("carousel_item");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
	$(slides[slideIndex-1]).css('display','block');
}


$(document).ready(function(){

	/*BANNERS*/
	$('#carousel_items').owlCarousel({
		items:5,
    margin:10,
    center: true,
    touchDrag: true,
    nav:false,
    autoplay:false,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
		loop: true,
		dots: false
	});

	$('#secundary_carousel .prev').click(function() { 	$('#carousel_items').trigger('prev.owl.carousel'); });
	$('#secundary_carousel .next').click(function() { 	$('#carousel_items').trigger('next.owl.carousel'); });

});