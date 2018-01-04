
var slide = document.getElementById("mm");
var menu = document.querySelector("#btnn");
var main = document.querySelector(".main");
var drawer = document.querySelector("#drawer");

menu.addEventListener('click', function(e) {
  drawer.classList.toggle('open');
  e.stopPropagation();
  //slide.style.transform = "translateX(300px)";
});

main.addEventListener('click', function() {
  drawer.classList.remove('open');
  //slide.style.transform = "translateX(0px)";
});

var model = [
  {name: 'Robert Treat Center', address: '50 Park Pl,', city: 'Newark, NJ 07102', localLocation:[{lat: 40.739037 , lng: -74.168635}]},
  {name: 'Newark Museum', address: '49 Washington St,', city: 'Newark, NJ 07102', localLocation:[{lat: 40.743108 , lng: -74.171716}]},
  {name: 'University Hospital', address: '150 Bergen St,', city:'Newark, NJ 07103', localLocation:[{lat: 40.740356 , lng: -74.190241 }]},
  {name: 'Newark ShopRite', address: '206 Springfield Ave', city:'Newark, NJ 07103', localLocation:[{lat: 40.736670 , lng: -74.186159 }]},
  {name: 'CityPlex 12', address: '360-394 Springfield Ave,', city: 'Newark, NJ 07103', localLocation:[{lat: 40.733553 , lng: -74.196379 }]},
  {name: "Applebee Grill", address: '383 Springfield Ave,', city: 'Newark, NJ 07103', localLocation:[{lat: 40.732625 , lng: -74.196325 }]},
  {name: "Wendy's Place", address: '427 Springfield Ave,', city: 'Newark, NJ 07103', localLocation:[{lat: 40.732158 , lng: -74.199454 }]},
  {name: 'Home Depot', address: '399-443 Springfield Ave,', city: 'Newark, NJ 07103', localLocation:[{lat: 40.731358 , lng: -74.198435 }]}];

console.log(model[0].localLocation[0]);
var map;
var marker;
(function initMap() {
  map = new google.maps.Map(document.getElementById('mm'), {
    center: model[0].localLocation[0],
    zoom: 12
  });

  for (var i = 0; i < model.length; i++) {
    var maklocation = model[i].localLocation[0];
    var makaddress = model[i].address;
    var maktitle = model[i].name;
    var makcity = model[i].city;
    var marker = new google.maps.Marker({
      position: maklocation,
      map: map,
      name: maktitle,
      animation: google.maps.Animation.DROP,
      cursor: '<h4>' + maktitle + '</h4>' + makaddress + '<br>' + makcity,
      id: i
    });
  };
})();

// menu.addEventListener('click', function(e) {
//   drawer.classList.toggle('open');
//   e.stopPropagation();
//   //slide.style.transform = "translateX(300px)";
// });
//
// main.addEventListener('click', function() {
//   drawer.classList.remove('open');
//   //slide.style.transform = "translateX(0px)";
// });
