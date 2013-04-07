//Site JavaScript

$(document).ready(function() {
  $('body').addClass('hasjs');
  rpkwidescreen();
  $(window).resize(rpkwidescreen);
  });

function rpkwidescreen() {
    var rpkwidth = $(window).width();
    if(rpkwidth>1100) { $('body').addClass('widescreen'); }
    else { $('body').removeClass('widescreen'); }
}
$(document).ready(function(){
  $("#portfolio h2").click(function(){
    $("#portfolio p").slideToggle("slow");
  });
});
$(document).ready(function(){
  $("#aboutme h2").click(function(){
    $("#aboutme p").slideToggle("slow");
  });
});

