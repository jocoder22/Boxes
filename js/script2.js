


//make AJAX call to foursquare API
var result = function(){
  var AllPlaces = [];
  var myAddress = '383 Springfield Ave, Newark NJ 07103';
  var foursquareUrl2 = 'https://api.foursquare.com/v2/venues/search?limit=80&near=' + myAddress + '&client_id=RMJLP0XC1CPMPOE4IINGN4RSBFUVTP10D1N0OO0RLBCCNPFK&client_secret=2OAXA5CSE43HQRNUYEEFV2FYR3SLB3CHVN0FCLXEGIUVCUUP&v=20170801'

  $.getJSON(foursquareUrl2, function(data){
    format: 'json'
  }).done(function(data){
    var resultParsed = data.response.venues;
    for (var i = 0; i < resultParsed.length; i++) {
      var resp = resultParsed[i]; var llresp = resp.location;
      if (resp.contact.formattedPhone && resp.name != "CityPlex 12 Newark") {
        AllPlaces.push({
          name: resp.name,
          Address: llresp.formattedAddress,
          Phone: resp.contact.formattedPhone,
          stats: resp.stats,
          lat: llresp.lat,
          lng: llresp.lng,
          latlng:[{lat: llresp.lat, lng: llresp.lng}],
          url: resp.url});
      }
    }
  }).fail(function(xhr, errorType, exception) {
    alert( xhr.status + " " + errorType+"\n\ " + exception);
  });
  return AllPlaces;
};

console.log('outside calls');
console.log('outside calls');
console.log(result);
var mayy = result();
console.log(mayy);








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
var markers = [];
(function initMap() {
  map = new google.maps.Map(document.getElementById('mm'), {
    center: model[3].localLocation[0],
    zoom: 15
  });
  var bounds = new google.maps.LatLngBounds();
  var infowindowList = new google.maps.InfoWindow();

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
    markers.push(marker);
    bounds.extend(markers[i].position);
    marker.addListener('mouseover', function(){
      showInfoWindow(this, infowindowList);
    });

  };
  map.fitBounds(bounds);

  function showInfoWindow(marker, infowindow) {
  if (infowindow.marker != marker) {
      infowindow.marker = marker;
      infowindow.setContent(marker.cursor);
      infowindow.open(map, marker);
      marker.addListener('click', function(){
        marker.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function () {marker.setAnimation(null);}, 1000);
      });

      marker.addListener('mouseout', function(){
        infowindow.close(map, marker);
      });

    }
  }

})();


var ViewModel = function () {
  var self = this;
  self.placeNames = [];
  self.myPlaces = ko.observableArray([]);
  self.myPlaces3 = ko.observableArray([]);
  self.query1 = ko.observable('');
  self.allMarkers = ko.observableArray([]);










  model.forEach(function(data) {
    self.myPlaces3.push(data);
  });

  markers.forEach(function(data) {
    self.allMarkers.push(data);
  });




 console.log(self.allMarkers()[1]);
 console.log(self.myPlaces()[1]);


  self.filterPlace = ko.computed(function () {
    var myFilter = self.query1().toLowerCase();
    if (!myFilter) {
      return self.myPlaces();
    } else {
      return ko.utils.arrayFilter(self.myPlaces(), function (item) {
        return item.name.toLowerCase().indexOf(myFilter) >=0;
      });
    }
  });

  // self.bounceMarker = function(marker){
  //   self.allMarkers().id == marker;
  //   marker.setAnimation(google.maps.Animation.BOUNCE);
  //   setTimeout(function () {marker.setAnimation(null);}, 1000);
  // };

};

ko.applyBindings(new ViewModel());
