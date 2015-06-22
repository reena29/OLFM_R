
var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");
var $cart=$('<a id="mycart" href="#">Add to cart</a>');

//An image to overlay
$overlay.append($image);

//A caption to overlay
$overlay.append($caption);
$overlay.append($cart);
//Add overlay
$("body").append($overlay);

//Capture the click event on a link to an image
$("#produce_img a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  //Update overlay with the image linked in the link
  $image.attr("src", imageLocation);
  
  //Show the overlay.
  $overlay.show();
  
  //Get child's alt attribute and set caption
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
});

//When overlay is clicked
$overlay.click(function(){
  //Hide the overlay
  $overlay.hide();
});
$('#mycart').click(function(){
alert("Produce has been added to your cart.");
});










