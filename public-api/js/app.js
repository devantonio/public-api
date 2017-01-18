
var gallery = document.getElementsByClassName('grid');
var i = -1;
$('.next').click(function (){
 gallery[i++];
});

$('li').click(function(event){
  var movie = $(this).text();
  event.preventDefault();
  $('#overlay').fadeIn(1000);
  $('#overlay').css("display", "initial");
  $.getJSON('https://www.omdbapi.com/?t=' + movie).then(function(response){
  $('.plot').html(response.Plot);
  $('.title').html(response.Title);
  $('#img').attr('src', response.Poster);
  });
});

$('li').click(function (){
 var galleryIndex = $(this).attr('id');
  $('.next').click(function (){
    var h3 = document.getElementsByTagName("h3");
    if (galleryIndex < h3.length - 1) {
       galleryIndex++;
     }
    var movieTitle = document.getElementsByTagName("h3")[galleryIndex].textContent;
    $.getJSON('https://www.omdbapi.com/?t=' + movieTitle).then(function(response){
    $('.plot').html(response.Plot);
    $('#img').attr('src', response.Poster);
    $('.title').html(response.Title);
    });
  });
  $('.prev').click(function() {
   if (galleryIndex > 0) {
       galleryIndex--;
     }
  var movieTitle = document.getElementsByTagName("h3")[galleryIndex].textContent;
    $.getJSON('https://www.omdbapi.com/?t=' + movieTitle).then(function(response){
    $('.plot').html(response.Plot);
    $('#img').attr('src', response.Poster);
    $('.title').html(response.Title);
    });
  });
});
$('.close').click(function(){
  $('#overlay').hide();
});
