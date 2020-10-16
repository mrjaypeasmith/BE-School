document.addEventListener("DOMContentLoaded", function () {
  M.AutoInit();
});

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".tap-target");
  var instance = M.TapTarget.init(elems, options);
});

// (function($){
//   $(function(){
//     $('.scrollspy').scrollSpy();
//     $('.carousel').carousel({padding: 100,});
//     $('.button-collapse').sideNav();
//     $('.collapsible').collapsible();
//     $('.tap-target').tapTarget();
//     $('#modal1').modal();
//     $('#modal2').modal();

//   }); // end of document ready
// })(jQuery); // end of jQuery name space

// // Autoplay
// autoplay()
// function autoplay() {
//     $('.carousel').carousel('next');
//     setTimeout(autoplay, 3500);
// }
