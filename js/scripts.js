$(".row").mouseenter(function(){
  $(".work-img", this).animate({
    right: "-10px",
    opacity: 1,
    }, 1500);
});

$(".link-to-projects-margin, .link-to-projects").mouseenter(function(){
  $(".viewipad-img").animate({
    left: "-100px", 
    opacity: 1,
  }, 1500);
});



console.log("This better work! You can do it!");