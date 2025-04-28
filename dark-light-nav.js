// Navbar change color from light to dark
$(".is-section-light").each(function (index) {
  ScrollTrigger.create({
    trigger: $(this),
    start: "top 10%",
    end: "bottom 10%",
    onEnter: () => {
      $(
        ".icon-language-blur
      ).addClass("is-light");
    },
    onEnterBack: () => {
      $(
        ".icon-language-blur
      ).addClass("is-light");
    },
  });
});
$(".is-section-dark").each(function (index) {
  ScrollTrigger.create({
    trigger: $(this),
    start: "top 10%",
    end: "bottom 10%",
    onEnter: () => {
      $(
        ".icon-language-blur
    },
    onEnterBack: () => {
      $(
        ".icon-language-blur
      ).removeClass("is-light");
    },
  });
});
