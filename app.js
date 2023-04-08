gsap.to(".typing1", {
    text: "真的好想去出國玩= =", //text屬性將自動為DOM元素嵌入我們所輸入的文字
    duration: 1.5,
    scrollTrigger: {
              trigger: ".typing1",
      toggleActions: "play pause resume reset", //見備註
    },
  });

  gsap.fromTo(
    ".cursor",
    0,
    {
      visibility: "hidden",
    },
    {
      visibility: "visible",
      repeat: -1,
      yoyo: true, // 若為true，則動畫repeat運行順序將會以倒放的形式回去，如溜溜球一樣
      repeatDelay: 0.3, // 下一次repeat的delay時間
    }
  );

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    keyboard: {
          enabled: true,
        },
       navigation: {
        nextEl: ".circle_right",
        prevEl: ".circle_left",
      },
    breakpoints: {
          1: {
            slidesPerView: 1,
            spaceBetween: 30
          },
          414: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30
          },
       }
  });