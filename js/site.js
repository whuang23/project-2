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
  $("#protfolio h2").click(function(){
    $("#protfolio p").slideToggle("slow");
  });
});
$(document).ready(function(){
  $("#aboutme h2").click(function(){
    $("#aboutme p").slideToggle("slow");
  });
});
