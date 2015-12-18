$(document).ready(function(){
    $('#contact-list > a').click(function(){
    $('#contact-list > a').removeClass("active");
    $(this).addClass("active");
  });
  $('body').scrollspy({target: ".navbar"});
});