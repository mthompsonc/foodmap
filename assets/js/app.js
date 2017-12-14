$(document).ready(function(){
  $('#webapp').hide();

  /*Escondiendo fotos*/
  $('#cchile').hide();
  $('#cchatarra').hide();
  $('#cperuana').hide();
  /*Escondiendo overlays*/
  $('.overlay').hide();

  /*Splash*/
  $("#splash").fadeOut(3000, function(){
    $('#splash').hide();
    $('#webapp').show();
  });

  /* Dropdown */
 $(".selLabel").click(function () {
   $('.dropdown').toggleClass('active');
 });

 $(".dropdown-list li").click(function() {
   $('.selLabel').text($(this).text());
   $('.dropdown').removeClass('active');
   $('.selected-item p span').text($('.selLabel').text());
 });

/* Comida Casera */
  $("#casera").click(function(){
    $("#cchile").show();
    $("#cchatarra").hide();
    $("#cperuana").hide();
  });

/* Comida Chatarra */
  $("#chatarra").click(function(){
    $("#cchile").hide();
    $("#cchatarra").show();
    $("#cperuana").hide();
  });

/* Comida Peruana */
  $("#peruana").click(function(){
    $("#cchile").hide();
    $("#cchatarra").hide();
    $("#cperuana").show();
  });

/* Overlay Comida Chilena  */
  $('.img').mouseover(function () {
    $('.overlay').show();
}).mouseout(function () {
    $('.overlay').hide();
});

});
