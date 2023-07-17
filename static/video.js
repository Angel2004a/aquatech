function videoEmbed(bool) {
  if (bool) {
    window.scrollTo(0, 0);
    $('.video-embed-wrapper').css('visibility', 'visible');
    $("body").css("overflow", "hidden");
  } else {
    $('.video-embed-wrapper').css('visibility', 'hidden');
    $("body").css("overflow", "visible");
    let src = $('.yt_player_iframe').attr('src');
    $('.yt_player_iframe').attr('src', src);
  }
}
