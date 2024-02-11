import $ from 'jquery';


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


