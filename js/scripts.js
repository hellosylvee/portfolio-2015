$(".row").mouseenter(function(){
  $(".work-img", this).show( "fast", function() {
  });
});

$(".row").mouseenter(function(){
  $(".work-description", this).show( "fast", function() {
  });
});

$(".row").mouseenter(function(){
  $(".work-description", this).animate({
    opacity: 1,
  }, 100);
});

$(".row").mouseenter(function(){
  $(".work-img", this).animate({
    right: "-10px",
    opacity: 1,
  }, 1000);
});

// $(".work-block, .work-link").mouseenter(function(){
//   $(".viewipad-img").animate({
//     left: "-100px",
//     opacity: 1,
//   }, 1500);
// });
