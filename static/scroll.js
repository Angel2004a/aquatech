$(document).ready(function () {
	
	if ($(this).scrollTop() > 0) {
      $(".scroll-down").fadeOut(0);
    } else {
      $(".scroll-down").fadeIn(0);
    }
	
	
  $(".menu a").on("click", function (e) {
    var id = $(this).attr("href");
    if (!(id == "https://www.discord.gg/drain") && (!(id == "/login"))) {
      e.preventDefault();
      
      if (id == "#pricing") {
        $('html, body').animate({
        scrollTop: $(id).offset().top - 90
      }, 1000);
      } else {
       $('html, body').animate({
        scrollTop: $(id).offset().top - 130
      }, 1000); 
      }
    }
  })
  
  $(".buy a").on("click", function (e) {
    var id = $(this).attr("href");
      e.preventDefault();
      
        $('html, body').animate({
        scrollTop: $(id).offset().top - 90
      }, 1000);
  })

  $(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
	
	if ($(this).scrollTop() > 0) {
      $(".scroll-down").fadeOut(100);
    } else {
      $(".scroll-down").fadeIn(100);
    }
  });

  $('.scrollup').click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  });
});
