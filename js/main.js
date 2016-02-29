$('.menu a').click(function(e){
    var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top - 56;
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
  pager: false,
  auto: true,
  pause: 10000
});
$('#certificats').bxSlider({
  minSlides: 3,
  maxSlides: 3,
  slideWidth: 250,
  slideMargin: 15,
  moveSlides: 1,
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

$(':input').blur(function() {
    if($(this).val().length == 0) {
      $(this)
        .addClass('error')
    }
  });
  $(':input').focus(function() {
    $(this)
      .removeClass('error')
  });

$('form').bind('submit', function(event) {
  $(this).find('[type=text]').each(function() {
    if(!$(this).val().length) { 
    event.preventDefault();
      $(this).addClass('error');
    }
  });
});

$(document).ready(function() {
  $(".scroll").each(function () {
    var block = $(this);
    $(window).scroll(function() {
      var top = block.offset().top;
      var bottom = block.height()+top;
      top = top - $(window).height();
      var scroll_top = $(this).scrollTop();
      if ((scroll_top > top) && (scroll_top < bottom)) {
        if (!block.hasClass("animated")) {
          block.addClass("animated");
        }
      } else {
        block.removeClass("animated");
      }
    });
  });
  $(".p-cont").each(function () {
    var block = $(this);
    $(window).scroll(function() {
      var top = block.offset().top;
      var bottom = block.height()+top;
      top = top - $(window).height();
      var scroll_top = $(this).scrollTop();
      if ((scroll_top > top) && (scroll_top < bottom)) {
        $(".p-cont").find(".prod-info").each(function(i) {
          setTimeout(function() {
            $(".p-cont").find(".prod-info:eq("+i+")").addClass("animated");
          }, 200 * (i + 1));
        });
      } else {
        $(".prod-info").removeClass("animated");
      }
    });
  });
});

