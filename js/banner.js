function marqueelike() {
    $('.messagedefilant').each(function() {
      var texte = $(this).html();
      $(this).html('<div><span>' + texte + '</span><span>' + texte + '</span></div>');
    });
  }
   
  $(window).on('load', function() {
    marqueelike();
  });