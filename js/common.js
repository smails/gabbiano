
"use strict";$(function(){$('input[type="checkbox"], input[type="file"], select').styler();$('.top-slider__inner').slick({slidesToShow:1,slidesToScroll:1,prevArrow:'<button type="button" data-role="none" class="arrow-prev arrow-btn" aria-label="Previous" role="button" ><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAVCAYAAAB/sn/zAAAAeUlEQVQ4T43S6w2AIAxG0ctGjOQIupGb6AiOZEoC4dUHCf9OmvZrE7GXU8Bl4PFgQcBlwYaAW4MDkvZ2cEE7uEUzVFEPTVShiyr8APmHFb5MLRVf4JS8NFzjcXGfo4nnwFWsbWbp2dr1gL3raThyjwV7UGItA0ZgwT+B1iMVE0QivQAAAABJRU5ErkJggg=="></button>',nextArrow:'<button type="button" data-role="none" class="arrow-next arrow-btn" aria-label="Next" role="button" ><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAVCAYAAAB/sn/zAAAAaklEQVQ4T6XTQRGAMAxE0V8nSEACUpCEBCQhBQnMHmCANt0Wcn6HzG6SgBHYMJOAHZgcFpyBxWFBjcUntPgOq/gNQ1yCRRzBDNfgAzsovAKDg1e+v3fMmvqcY9h5d9dN12ORwuy68KafOQBx3iU2tyIHHwAAAABJRU5ErkJggg=="></button>',arrows:true,fade:true}).on('afterChange',function(event,slick,currentSlide,nextSlide){var $this=$(slick.$slides[currentSlide]);$('.top-slider .top-slider__all').attr('href',$this.attr('data-link'));});$('.video-gallery__slider').slick({slidesToShow:1,slidesToScroll:1,prevArrow:'<button type="button" data-role="none" class="arrow-prev arrow-btn" aria-label="Previous" role="button" ><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAVCAYAAAB/sn/zAAAAeUlEQVQ4T43S6w2AIAxG0ctGjOQIupGb6AiOZEoC4dUHCf9OmvZrE7GXU8Bl4PFgQcBlwYaAW4MDkvZ2cEE7uEUzVFEPTVShiyr8APmHFb5MLRVf4JS8NFzjcXGfo4nnwFWsbWbp2dr1gL3raThyjwV7UGItA0ZgwT+B1iMVE0QivQAAAABJRU5ErkJggg=="></button>',nextArrow:'<button type="button" data-role="none" class="arrow-next arrow-btn" aria-label="Next" role="button" ><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAVCAYAAAB/sn/zAAAAaklEQVQ4T6XTQRGAMAxE0V8nSEACUpCEBCQhBQnMHmCANt0Wcn6HzG6SgBHYMJOAHZgcFpyBxWFBjcUntPgOq/gNQ1yCRRzBDNfgAzsovAKDg1e+v3fMmvqcY9h5d9dN12ORwuy68KafOQBx3iU2tyIHHwAAAABJRU5ErkJggg=="></button>',arrows:true,infinite:true,variableWidth:false,});$('.model__slider').slick({slidesToShow:3,slidesToScroll:1,prevArrow:'<button type="button" data-role="none" class="arrow-prev arrow-btn" aria-label="Previous" role="button" ><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAVCAYAAAB/sn/zAAAAeUlEQVQ4T43S6w2AIAxG0ctGjOQIupGb6AiOZEoC4dUHCf9OmvZrE7GXU8Bl4PFgQcBlwYaAW4MDkvZ2cEE7uEUzVFEPTVShiyr8APmHFb5MLRVf4JS8NFzjcXGfo4nnwFWsbWbp2dr1gL3raThyjwV7UGItA0ZgwT+B1iMVE0QivQAAAABJRU5ErkJggg=="></button>',nextArrow:'<button type="button" data-role="none" class="arrow-next arrow-btn" aria-label="Next" role="button" ><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAVCAYAAAB/sn/zAAAAaklEQVQ4T6XTQRGAMAxE0V8nSEACUpCEBCQhBQnMHmCANt0Wcn6HzG6SgBHYMJOAHZgcFpyBxWFBjcUntPgOq/gNQ1yCRRzBDNfgAzsovAKDg1e+v3fMmvqcY9h5d9dN12ORwuy68KafOQBx3iU2tyIHHwAAAABJRU5ErkJggg=="></button>',arrows:true,infinite:true,variableWidth:true,responsive:[{breakpoint:1150,settings:{arrows:false}}]});$('.js-cart-slider').slick({slidesToShow:4,slidesToScroll:1,prevArrow:'<button type="button" data-role="none" class="arrow-prev arrow-btn" aria-label="Previous" role="button" ><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAVCAYAAAB/sn/zAAAAeUlEQVQ4T43S6w2AIAxG0ctGjOQIupGb6AiOZEoC4dUHCf9OmvZrE7GXU8Bl4PFgQcBlwYaAW4MDkvZ2cEE7uEUzVFEPTVShiyr8APmHFb5MLRVf4JS8NFzjcXGfo4nnwFWsbWbp2dr1gL3raThyjwV7UGItA0ZgwT+B1iMVE0QivQAAAABJRU5ErkJggg=="></button>',nextArrow:'<button type="button" data-role="none" class="arrow-next arrow-btn" aria-label="Next" role="button" ><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAVCAYAAAB/sn/zAAAAaklEQVQ4T6XTQRGAMAxE0V8nSEACUpCEBCQhBQnMHmCANt0Wcn6HzG6SgBHYMJOAHZgcFpyBxWFBjcUntPgOq/gNQ1yCRRzBDNfgAzsovAKDg1e+v3fMmvqcY9h5d9dN12ORwuy68KafOQBx3iU2tyIHHwAAAABJRU5ErkJggg=="></button>',arrows:true,infinite:true,variableWidth:true,responsive:[{breakpoint:1150,settings:{arrows:false}}]});$('.magazine__sale').slick({slidesToShow:1,slidesToScroll:1,prevArrow:'<button type="button" data-role="none" class="arrow-prev arrow-btn" aria-label="Previous" role="button" ><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAVCAYAAAB/sn/zAAAAeUlEQVQ4T43S6w2AIAxG0ctGjOQIupGb6AiOZEoC4dUHCf9OmvZrE7GXU8Bl4PFgQcBlwYaAW4MDkvZ2cEE7uEUzVFEPTVShiyr8APmHFb5MLRVf4JS8NFzjcXGfo4nnwFWsbWbp2dr1gL3raThyjwV7UGItA0ZgwT+B1iMVE0QivQAAAABJRU5ErkJggg=="></button>',nextArrow:'<button type="button" data-role="none" class="arrow-next arrow-btn" aria-label="Next" role="button" ><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAVCAYAAAB/sn/zAAAAaklEQVQ4T6XTQRGAMAxE0V8nSEACUpCEBCQhBQnMHmCANt0Wcn6HzG6SgBHYMJOAHZgcFpyBxWFBjcUntPgOq/gNQ1yCRRzBDNfgAzsovAKDg1e+v3fMmvqcY9h5d9dN12ORwuy68KafOQBx3iU2tyIHHwAAAABJRU5ErkJggg=="></button>',arrows:true,dots:true,infinite:true,variableWidth:false,});$('.cart-slider__for').slick({slidesToShow:1,slidesToScroll:1,arrows:false,asNavFor:'.cart-slider__nav'});$('.cart-slider__nav').slick({slidesToShow:2,slidesToScroll:1,asNavFor:'.cart-slider__for',vertical:true,arrows:false,verticalSwiping:true,focusOnSelect:true,});function slidePadding(){let h=$('.cart-slider__nav .cart-slider__slide').height();$(".cart-slider__nav .slick-list").css("padding-bottom",h);}
$(document).on('click','.sidebar__head',function(){if(!$(this).hasClass('active')){$(this).addClass('active');}else{$(this).removeClass('active');}
$(this).next().slideToggle(400);});$('.m-menu').click(function(){$('.nav__wrap').css("display","block");$('.nav__list').slideToggle(400);});$('.nav__close').click(function(){$('.nav__list').slideUp(400);setTimeout(function(){$('.nav__wrap').css("display","none");},400)});$('.btn-filter').click(function(){$('.sidebar').css("display","block");$('.sidebar__sort').slideToggle(400);});$('.js-open-sidebar').click(function(){$('.sidebar').css("display","block");$('.sidebar__wrap').slideToggle(400);});$('.sidebar__close').click(function(){$('.sidebar__wrap').slideUp(400);$('.sidebar__sort').slideUp(400);setTimeout(function(){$('.sidebar').css("display","none");},400)});$('.js-anchor-link').click(function(e){e.preventDefault();let link=$(this).attr('href');$('html, body').animate({scrollTop:$(link).offset().top},1000,'swing')});var markActive=false;$('.js-cart-all').click(function(){if(markActive==false){$('.cart__spec').find('li:not(.btn-all)').slideDown();$(this).addClass('open').text('Свернуть');markActive=true;}
else{$('.cart__spec').find('li:not(.btn-all)').slideUp();$(this).removeClass('open').text('Ещё');markActive=false;}})
$(document).on('click','.sidebar__referense',function(){$(this).addClass('active').siblings().removeClass('active');let link=$(this).text();$('h2, b').each(function(){if($(this).text()==link){$(this).addClass('target')}});var distanceToScroll=$(".target").offset().top-50;$('body, html').animate({scrollTop:distanceToScroll},1000);$('h2, b').removeClass('target');});setTimeout(function(){$('.collection__pictures').masonry({itemSelector:'.collection__picture',columnWidth:'.collection__picture',percentPosition:true,gutter:0,horizontalOrder:true});},100);function propertyCollectionOnPage(){let c=$('.cart__picture').children().length;if(c==4){$('.cart__picture').css("justify-content","space-around");}
else{$('.cart__picture').css("justify-content","flex-start");}}
$('.collection__picture').fancybox({idleTime:0,afterLoad:function(instance,item,current){var l=item.opts.$orig.data('ln');var tl=item.opts.$orig.data('tl');current.$content.append('<p class="collection__caption" > '+tl+'</p>');current.$content.append('<a href="'+l+'" class="btn btn-collection" style="max-width: 305px">Перейти в карточку модели</a>');},beforeClose:function(instance){$('.collection__caption').remove();$('.btn-collection').remove();},});function videoCart(){if($('.cart__video').children().length>1){$(".cart__back").before('<div class="cart__video-bg"></div>');$(".cart__video").css("margin-bottom","137px");}}
$('.js-open-modal').click(function(){let modal=$(this).data("modal");$('.modals').css('display','flex');$('.modal').css('display','none');$('#'+modal).fadeIn();});$('.modals__close').click(function(){$('.modal').css('display','none');$('.modals').css('display','none');});$('.thanks__btn').click(function(e){e.preventDefault();$('.modal').css('display','none');$('.modals').css('display','none');});$('.modals').mouseup(function(e){var container=$(".modals__inner");if(!container.is(e.target)&&container.has(e.target).length===0){$('.modal').css('display','none');$('.modals').css('display','none');}});$('.header').stick_in_parent();var isVisible=false;$(window).on("scroll",function(){if($('html, body').scrollTop()>=20){if(!isVisible){$('.header').addClass("fixed");isVisible=true;}}else{$('.header').removeClass("fixed");isVisible=false;}});var searchAction=false;$('#s-seller').click(function(e){e.preventDefault();let parent=$(this).parents('#search-seller');console.log(parent);if(searchAction==false){parent.find('.modal__img').slideUp();parent.find('.modal__answer').slideDown();$(this).text("Отправить");searchAction==true;}});$('.cart-slider__for .slick-active').zoom();var up=$('.up');function visibleUp(){if($("html, body").scrollTop()>$(window).height()){up.fadeIn();}else{up.fadeOut();}}
up.click(function(){$('html, body').animate({scrollTop:0},1000)});function newsHeight(){var newBlock=$('.news__block');var heightNewsImg=newBlock.find('.news-block__pic').height();var heightNewsDesc=newBlock.find('.news-block__desc').outerHeight(true);newBlock.height(heightNewsDesc+heightNewsImg);$('.news__big-block').height(heightNewsDesc+heightNewsImg);}
newsHeight();slidePadding();videoCart();if($('.cart__video').length){videoCart();}
if($('.cart__picture').length){propertyCollectionOnPage();}
$(window).resize(function(){newsHeight();slidePadding();});$(window).scroll(function(){visibleUp();});if(window.innerWidth>1020){$('.sidebar__wrap').stick_in_parent();}
if($('#share').length){Ya.share2('share',{theme:{services:'vkontakte,facebook',counter:false,},content:{url:location.href,title:"title",description:"tetx",image:location.hostname+'img/logo.svg'}});}});