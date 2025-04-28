// Navbar change color from light to dark
$(".is-section-light").each(function (index) {
  ScrollTrigger.create({
    trigger: $(this),
    start: "top 10%",
    end: "bottom 10%",
    onEnter: () => {
      $(
        ".icon-language-blur, .nav-blur, .logo-epivity-blur-nav, .nav-link-blur-nav, .paragraph-btn-blur-nav, .btn-nav-small-blur, .paragraph-menu-blur-nav, .dropdown-language-blur, .nav-link-main-blur, .arrow-dropdown-blur, .dropdown-link-blur, .dropdown-language__list-blur, .btn-contact-blur-nav"
      ).addClass("is-light");
    },
    onEnterBack: () => {
      $(
        ".icon-language-blur, .nav-blur, .logo-epivity-blur-nav, .nav-link-blur-nav, .paragraph-btn-blur-nav, .btn-nav-small-blur, .paragraph-menu-blur-nav, .dropdown-language-blur, .nav-link-main-blur, .arrow-dropdown-blur, .dropdown-link-blur, .dropdown-language__list-blur, .btn-contact-blur-nav"
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
        ".icon-language-blur, .nav-blur, .logo-epivity-blur-nav, .nav-link-blur-nav, .paragraph-btn-blur-nav, .btn-nav-small-blur, .paragraph-menu-blur-nav, .dropdown-language-blur, .nav-link-main-blur, .arrow-dropdown-blur, .dropdown-link-blur, .dropdown-language__list-blur, .btn-contact-blur-nav"
    },
    onEnterBack: () => {
      $(
        ".icon-language-blur, .nav-blur, .logo-epivity-blur-nav, .nav-link-blur-nav, .paragraph-btn-blur-nav, .btn-nav-small-blur, .paragraph-menu-blur-nav, .dropdown-language-blur, .nav-link-main-blur, .arrow-dropdown-blur, .dropdown-link-blur, .dropdown-language__list-blur, .btn-contact-blur-nav"
      ).removeClass("is-light");
    },
  });
});
