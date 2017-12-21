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





});
