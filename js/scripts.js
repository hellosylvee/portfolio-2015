$(".row").mouseenter(function(){
  $(".work-img", this).animate({
    right: "-10px",
    opacity: 1,
    }, 1500);
});

$(".work-block, .work-link").mouseenter(function(){
  $(".viewipad-img").animate({
    left: "-100px",
    opacity: 1,
  }, 1500);
});
