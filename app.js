gsap.to(".typing1", {
    text: "真的好想去日本玩= =", //text屬性將自動為DOM元素嵌入我們所輸入的文字
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
    
    keyboard: {
      enabled: true,
    },
    navigation: {
      nextEl: ".button-next",
      prevEl: ".button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30
      },
   }
  });