$(function(){
  $(".greenBox").fadeOut(1000);
  $(".redBox").fadeOut(6000);
  $(".blueBox").fadeOut(12000);

  $(".redBox").fadeTo(1000, 0.3);
  $(".blueBox").fadeTo(2000, 0.6);
  $(".greenBox").fadeTo(4000, 0.8);

  $(".redBox").fadeToggle(18000);
  $(".blueBox").fadeToggle(20000);
  $(".greenBox").fadeToggle(26000);
  $(".redBox").fadeToggle(18000);
  $(".blueBox").fadeToggle(20000);
  $(".greenBox").fadeToggle(26000);

  $(".redBox").fadeIn(1000);
  $(".blueBox").fadeIn(2000);
  $(".greenBox").fadeIn(2600);

  $(".blueBox").toggle();

  $(".box1").hide(1000);

  setTimeout(function(){
    $(".box2").css("width", "100%");
  }, 800);

  $(".blueBox3").hide(2000);

  $("#SlideUp").slideUp(1000);

  setTimeout(function(){
    $("#SlideUp").slideDown(1000);
  }, 2000);


  $(".blueBox3").slideToggle();
});


$(function () {
  $("#Moving").animate({
    marginLeft : "+=550px",
    "opacity" : "0",
    "height" : "50px",
    marginTop : "75px",
    weight : ""
  }, 1000, "linear");
});
