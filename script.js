
var cats = [];
var s1 = "resources/";
var s2 = ".jpeg";
var slectedCatID = 13;
for (i = 1; i < 13; i++) { 

    cats[i-1] = s1.concat(i.toString().concat(s2));
}
console.log(cats);



function attachEventHandlers() {
	$('.image').on('click', handleImageClick);
}

function handleImageClick(event) {
	const target = $(event.target);
	const images = $('.photo-row .image');
	const info = $('.info-pane');
	const preview = $('.preview-image');
	console.log($(event.target))

	if (target.hasClass('selected')) {
		images.removeClass('not-selected');
		target.removeClass('selected');
		info.fadeOut(200);
	}
	else {
		images.removeClass('selected');
		images.addClass('not-selected');

		target.addClass('selected');
		target.removeClass('not-selected');

		info.fadeIn(200);
		preview.css('background-image', target.css('background-image'));
	}
}
function changePicture(){
	let selectedCat = $('.selected').attr("style");
	let trimSelectedCat = selectedCat.subtring(22,37);

	console.log(trimSelectedCat);
}
setInterval(changePicture, 5000);




$('document').ready(function() {

	attachEventHandlers();

});
