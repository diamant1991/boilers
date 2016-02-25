$('.menu a').click(function(e){
    var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top;
    $('html, body').stop().animate({
        scrollTop: offsetTop
    }, 1000);
    e.preventDefault();
});

$(function() {
  $( "#calc-slider" ).slider({
    value: 0,
    min: 50,
    max: 450
  });
});


function testJump(x){
  var ml = ~~x.getAttribute('maxlength');
  if(ml && x.value.length >= ml){
      do{
          x = x.nextSibling;
      }
      while(x && !(/text/.test(x.type)));
      if(x && /text/.test(x.type)){
          x.focus();
      }
  }
}
$(document).ready(function(){
	$(".f-phone1").inputmask("+9");
  $(".f-phone3").inputmask("999-99-99");
});

$('#project-slider').bxSlider({
  captions: true,
  pager: false
});

$(document).ready(function() {
  $(".fancybox").fancybox({
    padding : 10,
    openEffect	: 'elastic',
		closeEffect	: 'elastic',
		helpers: {
			overlay: {
				locked: false
			}
		}
	});

});