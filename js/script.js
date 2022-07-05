$(document).ready(function () {

  // 위로가기 기능
  let goTop = $('.gotop');
  goTop.click(function(){
    $('html').animate({scrollTop:0}, 1500);
  });




});






window.onload = function () {

  //  메뉴기능
  let header = $('.header');
  let mainGnb = $('.main-gnb');
  let mainGnbH = mainGnb.height();


  mainGnb.mouseenter(function() {
    header.css('height', mainGnbH);
  });
  mainGnb.mouseleave(function() {
    header.css('height', 100);
  });
  // navnFf.mouseenter(function() {

  // });



};