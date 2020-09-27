$(function(){
'use strict';
//carousel config
var winH =$(window).height(),
    upperH = $('.upper-bar').innerHeight(),
    navH =$('.navbar').innerHeight();
    $('.carousel-item,.slider').height(winH -(upperH + navH));
//shuffle config
$('.featured-work ul li').click(function(){
$(this).addClass('active').siblings().removeClass('active');
if($(this).data('class')==='all'){
$('.shuffle-imgs .col-md').css('opacity',1);
}
else {
	$('.shuffle-imgs .col-md').css('opacity','.09');
	$($(this).data('class')).parent().css('opacity',1);
}
});    
});