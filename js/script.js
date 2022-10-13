$(document).ready(function () {
  AOS.init();

  // modal 기능
  let modalWrap = $(".modal-wrap");
  let modalClose = "modal-close-active";
  let modalCloseBt = $(".modal-close");

  modalCloseBt.click(() => {
    modalWrap.addClass(modalClose);
  });

  // 위로가기 기능
  let goTop = $(".gotop");
  let goTopState = 0;

  goTop.click(function (event) {
    // a 태그이므로 href 를 막아준다.
    event.preventDefault();
    if (goTopState == 0) {
      // 1번만 실행되도록 flag 를 활용한다.
      goTopState = 1;
      $("html")
        .stop()
        .animate(
          {
            scrollTop: 0,
          },
          1500,
          function () {
            // 모션이 완료되어서 도착을 하면
            // 다시 클릭이 가능하도록 해준다.
            goTopState = 0;
          }
        );
    }
  });
});

window.onload = function () {
  //프로그레스
  // var vdo = document.getElementById('homeVdo');
  // vdo.addEventListener('loadedmetadata', function() {
  //    $('.progress-circle circle ').css('animation-duration','' + vdo.duration + 's');
  // });

  // 비디오 콘트롤
  let progressBox = $(".progress-box");
  let homeVdo = $("#homeVdo").get(0);
  let homeVdoState = 1;
  // console.log(homeVdo.duration);
  let homeVdoTime = homeVdo.duration * 1000; // 비디오 시간

  let progressCircle = $(".progress-circle circle");
  progressCircle.css("animation-duration", "24.1s");
  progressCircle.css("animation-play-state", "running");

  let progressBtn_icon = $(".progress-btn > i");
  // progressBtn_icon.addClass('icon-pause');

  // 비디오 실행하기
  homeVdo.currentTime = 0;
  homeVdo.play();
  progressBox.click(function () {
    if (homeVdoState == 1) {
      homeVdo.pause();
      progressCircle.css("animation-play-state", "paused");
      progressBtn_icon.addClass("icon-play");
      progressBtn_icon.removeClass("icon-pause");

      homeVdoState = 0;
    } else {
      homeVdo.play();
      progressCircle.css("animation-play-state", "running");
      progressBtn_icon.addClass("icon-pause");
      progressBtn_icon.removeClass("icon-play");

      homeVdoState = 1;
    }
  });

  //  메뉴기능

  //  메뉴기능
  let header = $(".header");
  let mainGnb = $(".main-gnb");
  let mainGnbH = mainGnb.height();
  let logo = $(".logo");

  mainGnb.mouseenter(function () {
    header.css("height", mainGnbH);
    header.css("background-color", "white");
    logo.css("background", 'url("images/logo-gray.svg") no-repeat center');
  });
  mainGnb.mouseleave(function () {
    header.css("height", 100);
    header.css("background-color", "transparent");
    logo.css("background", 'url("images/logo.svg") no-repeat center');
  });

  // wayMotionFn ani

  function wayMotionFn(_what, _effect, _offset, _delay) {
    _what.each(function (index, el) {
      new Waypoint({
        element: el,
        handler: function (direction) {
          var element = $(this.element);
          setTimeout(function () {
            element.addClass(_effect);
          }, _delay);
          // this.destroy();
        },
        offset: _offset,
      });
    });
  }

  // main-txtbox ani
  wayMotionFn($(".f-main-txtbox > p"), "fadeup-1", "90%", 0);
  wayMotionFn($(".f-main-txtbox > strong"), "fadeup-1", "90%", 250);

  // Pergola set ani
  wayMotionFn($(".pla-set-imgbox"), "fadeup-2", "80%", 100);
  wayMotionFn($(".pla-set-imgbox > a"), "radius-effect", "80%", 100);

  wayMotionFn($(".pla-set-txtbox > span"), "fadeup-2", "100%", 0);
  wayMotionFn($(".pla-set-txtbox > strong"), "fadeup-2", "100%", 100);
  wayMotionFn($(".pla-set-txtbox > p"), "fadeup-2", "100%", 200);
  wayMotionFn($(".pla-set-txtbox > .plus > a"), "fadeup-2", "100%", 300);

  // parasol set ani
  wayMotionFn($(".parasol-set > h3"), "fadeup-2", "60%", 350);
  wayMotionFn($(".slidepart"), "fadeup-2", "60%", 300);

  // project ani
  wayMotionFn($(".project-inner > h3"), "fadeup-1", "60%", 200);
  wayMotionFn($(".project-inner > p"), "fadeup-1", "60%", 250);
  wayMotionFn($(".project-itembox"), "fadeup-2", "60%", 250);

  // Contact ani
  wayMotionFn($(".con-us-txtbox > h3"), "fadeup-1", "60%", 250);
  wayMotionFn($(".con-us-txtbox > p"), "fadeup-1", "60%", 250);
  wayMotionFn($(".con-us-inner > .more-view-bt"), "fadeup-1", "60%", 250);

  let sw_parasol = new Swiper(".sw-parasol", {
    speed: 1500,
    loop: true,
    slidesPerView: 3,
    spaceBetween: 0,
    centeredSlides: true,

    autoplay: {
      delay: 3000,
    },
    navigation: {
      nextEl: ".sw-sol-next",
      prevEl: ".sw-sol-prev",
    },
  });

  // s and r
  let srBg = $(".s-and-r-bg");
  let srBg_Active = $(".srBg-r-active");
  let shade = $(".shade");
  let airea = $(".airea");

  shade.mouseenter(function () {
    srBg.css("opacity", 1);
    srBg_Active.css("opacity", 0);
  });

  airea.mouseenter(function () {
    srBg.css("opacity", 0);
    srBg_Active.css("opacity", 1);
  });

  // contact 배경 줌인
  let contactBg = $(".contact-bg");

  contactBg.each(function (index, el) {
    new Waypoint({
      element: el,
      handler: function (direction) {
        var element = $(this.element);
        setTimeout(function () {
          element.addClass("scroll-zoomin");
        }, 350);
        // this.destroy();
      },
      offset: "80%",
    });
  });
};
