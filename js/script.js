$(document).ready(function () {


  // 위로가기 기능
  let goTop = $('.gotop');
  let goTopState = 0;

  goTop.click(function (event) {
    // a 태그이므로 href 를 막아준다.
    event.preventDefault();    
    if(goTopState == 0) {
      // 1번만 실행되도록 flag 를 활용한다.
      goTopState = 1;
      $('html').stop().animate({
        scrollTop: 0
      }, 1500, function(){
        // 모션이 완료되어서 도착을 하면
        // 다시 클릭이 가능하도록 해준다.
        goTopState = 0;
      });
    }
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



};