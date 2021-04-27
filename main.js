function isElementVisible($elementToBeChecked)
{
    var TopView = $(window).scrollTop();
    var BotView = TopView + $(window).height();
    var TopElement = $elementToBeChecked.offset().top;
    var BotElement = TopElement + $elementToBeChecked.height();
    return ((BotElement <= BotView) && (TopElement >= TopView));
}

$(window).scroll(function () {
    $( ".bar" ).each(function() {
        $this = $(this);
        isOnView = isElementVisible($(this));
        if(isOnView && !$(this).hasClass('Starting')){
            $(this).addClass('Starting');
            startAnimation($(this));
        }
    });
});

function startAnimation($this) {
  $this.animate({
    width: "100%"
  }, 3000, function() {
    // Animation complete.
  });
}