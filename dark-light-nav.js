// Navbar change color from light to dark
$(".is-section-light").each(function (index) {
  ScrollTrigger.create({
    trigger: $(this),
    start: "top 10%",
    end: "bottom 10%",
    onEnter: () => {
      $(
        ".nav-blur, .logo-epivity-blur-nav, .nav-link-blur-nav, .paragraph-btn-blur-nav, .btn-nav-small-blur, .paragraph-menu-blur-nav, .menu-icon-blur_line-top, .menu-icon-blur_line-middle, .menu-icon-blur_line-middle-inner, .menu-icon-blur_line-bottom, .dropdown-language-blur, .nav-link-main-blur, .arrow-dropdown-blur, .dropdown-link-blur, .dropdown-language__list-blur, .btn-contact-blur-nav"
      ).addClass("is-light");
    },
    onEnterBack: () => {
      $(
        ".nav-blur, .logo-epivity-blur-nav, .nav-link-blur-nav, .paragraph-btn-blur-nav, .btn-nav-small-blur, .paragraph-menu-blur-nav, .menu-icon-blur_line-top, .menu-icon-blur_line-middle, .menu-icon-blur_line-middle-inner, .menu-icon-blur_line-bottom, .dropdown-language-blur, .nav-link-main-blur, .arrow-dropdown-blur, .dropdown-link-blur, .dropdown-language__list-blur, .btn-contact-blur-nav"
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
        ".nav-blur, .logo-epivity-blur-nav, .nav-link-blur-nav, .paragraph-btn-blur-nav, .btn-nav-small-blur, .paragraph-menu-blur-nav, .menu-icon-blur_line-top, .menu-icon-blur_line-middle, .menu-icon-blur_line-middle-inner, .menu-icon-blur_line-bottom, .dropdown-language-blur, .nav-link-main-blur, .arrow-dropdown-blur, .dropdown-link-blur, .dropdown-language__list-blur, .btn-contact-blur-nav"
      ).removeClass("is-light");
    },
    onEnterBack: () => {
      $(
        ".nav-blur, .logo-epivity-blur-nav, .nav-link-blur-nav, .paragraph-btn-blur-nav, .btn-nav-small-blur, .paragraph-menu-blur-nav, .menu-icon-blur_line-top, .menu-icon-blur_line-middle, .menu-icon-blur_line-middle-inner, .menu-icon-blur_line-bottom, .dropdown-language-blur, .nav-link-main-blur, .arrow-dropdown-blur, .dropdown-link-blur, .dropdown-language__list-blur, .btn-contact-blur-nav"
      ).removeClass("is-light");
    },
  });
});
