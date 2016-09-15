$(document).ready(function(){
  $('.slider').slick({
        dots: true,
        arrows: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        variableWidth: true,
        centerMode: true
  });
});

$(document).ready(function(){
    $('#loading-screen').fakeLoader({
        timeToHide:3000,
        zIndex:'999',
        spinner:'spinner5',
        bgColor:'#F2B686'
    });
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var dest = $(this.hash);
      dest = dest.length ? dest : $('[name=' + this.hash.slice(1) +']');
      if (dest.length) {
        $('html, body').animate({
          scrollTop: dest.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
