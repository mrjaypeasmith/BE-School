(function($){
  $(function(){
    $('.scrollspy').scrollSpy();
    $('.carousel').carousel({padding: 100,});
    $('.button-collapse').sideNav();
    $('.collapsible').collapsible();
    $('#modal1').modal();
    $('#modal2').modal();

  }); // end of document ready
})(jQuery); // end of jQuery name space

// Autoplay
autoplay()   
function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 3500);
}