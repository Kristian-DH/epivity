$(document).ready(function() {
  // Set initial state for the first items
  $(".method-item__wrapper").eq(0).addClass("is-current");
  $(".method-tab__link").eq(0).addClass("is-current");

  // Function to handle changing the current state
  function changeCurrentState() {
    var currentItems = $(".is-current");
    var currentNumber = currentItems.closest(".method-tab__wrapper").index();

    // Remove "is-current" class from all elements
    currentItems.removeClass("is-current");

    // Calculate the index for the next item
    var nextIndex = (currentNumber + 1) % $(".method-tab__link").length;

    // Add "is-current" class to the next link and corresponding item
    $(".method-tab__link").eq(nextIndex).addClass("is-current");
    $(".method-item__wrapper").eq(nextIndex).addClass("is-current");
  }

  // Handle click on method-tab__link
  $(".method-tab__link").click(function () {
    // Remove "is-current" class from all elements
    $(".is-current").removeClass("is-current");

    // Add "is-current" class to the clicked link and corresponding item
    $(this).addClass("is-current");
    var currentNumber = $(this).closest(".method-tab__wrapper").index();
    $(".method-item__wrapper").eq(currentNumber).addClass("is-current");
  });

  // Autoplay every 3000 milliseconds (3 seconds)
  let myTimer = setInterval(changeCurrentState, 10000);
});
