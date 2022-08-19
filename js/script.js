$(document).ready(function () {

  AOS.init();

  // 위로가기 기능
  let goTop = $('.gotop');
  let goTopState = 0;

  goTop.click(function (event) {
    // a 태그이므로 href 를 막아준다.
    event.preventDefault();
    if (goTopState == 0) {
      // 1번만 실행되도록 flag 를 활용한다.
      goTopState = 1;
      $('html').stop().animate({
        scrollTop: 0
      }, 1500, function () {
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

  mainGnb.mouseenter(function () {
    header.css('height', mainGnbH);
  });
  mainGnb.mouseleave(function () {
    header.css('height', 100);
  });



  let sw_parasol = new Swiper('.sw-parasol', {
    speed: 1500,
    loop: true,
    slidesPerView: 3,
    spaceBetween: 0,
    centeredSlides: true,

    autoplay: {
      delay: 3000
    },
    navigation: {
      nextEl: ".sw-sol-next",
      prevEl: ".sw-sol-prev",
    },


  });

  // s and r
  let srBg = $('.s-and-r-bg');
  let shade = $('.shade');
  let airea = $('.airea');

  shade.mouseenter(function () {
    srBg.css('background', 'url("../images/shade.jpg") no-repeat center');
    srBg.css('background-size', 'cover');
  });

  airea.mouseenter(function () {
    srBg.css('background', 'url("../images/model-airea-1.jpg") no-repeat center');
    srBg.css('background-size', 'cover');
  });

  // contact 배경 줌인
  let contactBg = $('.contact-bg');

  contactBg.each(function (index, el) {

    new Waypoint({
      element: el,
      handler: function (direction) {
        var element = $(this.element);
        setTimeout(function () {
          element.addClass('scroll-zoomin');
        }, 0);
        // this.destroy();
      },
      offset: '80%'
    });

  });



};