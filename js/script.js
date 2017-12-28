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
  }, 10000, "linear");

  $("p").animate({
    fontSize: "-=20px"
  }, 8000);
  $("#lne").css("font-size", "0px");
});


$(function () {
  $("#b1").fadeTo(2000, 0.4, function (){
    $("#b2").fadeTo(2000, 0.5);
    $("#r1").fadeTo(2000, 0.5, function(){
      $("#b2").delay(6000).fadeTo(2000, 0.8).fadeOut().delay(2000).fadeIn();
    });
  });
  $("#r1").delay(2000).fadeTo(2000, 0.5);
  $("#b2").delay(6000).fadeTo(2000, 0.8).fadeOut().delay(2000).fadeIn();
});



$(function () {
  $("p").css("background-color", "rgba(120, 180, 59, 0.8)");
  $(".bluechange").css("background-color", "rgba(130, 70, 100, 0.8)");
  $("#list").css("background-color", "rgba(10, 70, 70, 0.8)");
  $("input[type='text']").css("background-color", "rgba(10, 50, 90, 0.8)");
  $("h2, a, input[type='email']").css("background-color", "rgba(120, 190, 230, 0.8)");
  $("p:first, li:first").css("background-color", "rgba(230, 250, 290, 0.8)");
  $("li:last, a:first").css("background-color", "rgba(190, 70, 100, 0.8)");
  $("li:even").css("background-color", "rgba(230, 10, 90, 0.8)");
  $("li:odd").css("background-color", "rgba(230, 170, 200, 0.8)");
});


$(function () {
  $("#order").find("li").css("background-color", "rgba(30, 20, 220, 0.8)");
  $("#order").children("li").css("background-color", "rgba(330, 120, 220, 0.8)");
  $("#order").parents("div").css("background-color", "rgba(5, 50, 10, 0.3)");
  $("#order").parent("body").css("background-color", "rgba(15, 150, 110, 0.4)");
  $("#order").siblings("header").css("background-color", "rgba(175, 170, 210, 0.4)");
  $("#order").prev().css("background-color", "rgba(145, 250, 90, 0.4)");
  $("#order").next().css("background-color", "rgba(215, 250, 10, 0.4)");
});

$(function () {
  $("#match").find("li").filter(":even").css("background-color", "rgba(215, 250, 10, 0.4)");
  $("li").filter(function (index) {
    return index % 3 == 0;
  }).css("background-color", "rgba(0, 0, 0, 0.4)");
});

$(function () {
  $("li").first().css("color", "white");
  $("li").last().css("background-color", "green");
  $("li").eq(12).css("background-color", "green");
  $("li").eq(-8).css("background-color", "green");
  $("li").not(function (i) {
    return i % 3 == 1 | i % 3 == 0;
  }).css("background-color", "orange");
});

$(function () {
  $("div div:first").append("<h2>This is my new addition</h2>");
  $("ul ul:last").append("<li> This is the last blue red green</li>");
  $("ul ul:first").append("<li>This is the first blue red green</li>");
  $("<div class='greenBox'> AppendTo green</div>").appendTo("ul ul:last");
  $("ul ul").prepend("<div class='redBox box'> Prepend Red Box</div>");
  $("<div class='redBox box'> Prepend Red Box</div>").prependTo("p:last");


});
