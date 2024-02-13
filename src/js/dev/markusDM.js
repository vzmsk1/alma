import $ from 'jquery';
import Swiper from 'swiper';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const rem = function (rem) {
  if ($(window).width() > 768) {
    return 0.005208335 * $(window).width() * rem;
  } else {
    return (100 / 390) * (0.1 * $(window).width()) * rem;
  }
};

$(document).ready(function(){ 

    $('.price-services__item').click(function () {
        var id = $(this).attr('data-tab'),
          content = $('.price-services__block[data-tab="' + id + '"]');
      
        $('.price-services__item.active').removeClass('active'); // 1
        $(this).addClass('active'); // 2
      
        $('.price-services__block.active').removeClass('active'); // 3
        content.addClass('active'); // 4
    });


    $('.price-services__wrapper').each(function () {
		let more = $(this).find('.price-services__btn');
		let hide = $(this).find('.price-services__box');
		hide.hide(300);
		more.click(function () {
			hide.slideToggle(300);
			more.toggleClass('active');
		});
	});

  $('.comprehensive-box__content').each(function () {

    let comprehensiveLists = $(this).find('.comprehensive-box__lists');
    let comprehensiveItem = $(this).find('.comprehensive-box__item');
    let comprehensiveItemNth = $(this).find('.comprehensive-box__item:nth-child(n+4)');
    let comprehensiveBtn = $(this).find('.comprehensive-box__all');

    if(comprehensiveLists.find(comprehensiveItem ).length > 3){
      comprehensiveBtn.click(function(){
      (comprehensiveItemNth).slideToggle('');
      $(this).toggleClass('opnd_g');
      if($(this).hasClass('opnd_g')){
      $(this).html('Скрыть');}
      else {$(this).html('Развернуть');}
      });
      }else{comprehensiveBtn.hide();}

  });
 

});

const otherArticlesSwiper = new Swiper('.other-articles__swiper', {
  modules: [Pagination],
  slidesPerView: 1,
  spaceBetween: rem(2.4),
  speed: 1000,
  pagination: {
    el: '.other-articles__pagination .swiper-pagination',
    renderBullet: function (index, className) {
        return '<span class="' + className + '"></span>';
    },
    clickable: true
  },
  breakpoints: {
    769: {
      slidesPerView: 4,
      spaceBetween: rem(2.4),
    },
  },
});


var positions = [],
	currentActive = null,
	links = $('.sidebar-ar__chapter');

$(".article__block-title").each(function(){
	positions.push({
		top: $(this).position().top - 100,
		a: links.filter('[href="#'+$(this).attr('id')+'"]')
	});
});

positions = positions.reverse();

$(window).on('scroll',function() {
	var winTop = $(window).scrollTop();
	for(var i = 0; i < positions.length; i++){
		if(positions[i].top < winTop){
			if(currentActive !== i){
				currentActive = i;
				links.removeClass('active');
				positions[i].a.addClass("active");
			}
			break;
		}
	}
});


