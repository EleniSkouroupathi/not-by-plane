notplaneapp.controller('noPlaneController',['$http','$filter', 'outBound', 'inBound', 'factoryTLAName',function($http,$filter, outBound, inBound, factoryTLAName) {

  var self = this;

  var baseUrl = 'app/airports.json';
  $http.get(baseUrl).then(function(response) {
      airportJSON = response.data;
    });

  self.doOutbound = function() {
    outBound.query(self.startLoc, self.endLoc)
      .then(function(response) {
        self.searchResult = response.data;
        self.doNameLookup(self.searchResult.results);
      });
  };

  self.doInbound = function() {
    inBound.query(self.startLoc, self.endLoc)
      .then(function(response) {
        self.searchResult2 = response.data;
        self.doNameLookup(self.searchResult2.results);
      });
  };

  self.searchs = function(){
    self.doOutbound();
    self.doInbound();
  };

  self.doName = function(itaTLA) {
    return factoryTLAName.query(itaTLA);
  };

  self.doNameLookup = function(aryItems) {
    aryItems.forEach(function(item) {
      console.log(item);
      var test = self.doName(item.itineraries[0].outbound.flights[0].origin.airport);
      var test2 = self.doName(item.itineraries[0].outbound.flights[0].destination.airport);
      item.itineraries[0].outbound.flights[0].origin.airport = test[0].name +", " +  test[0].city;
      item.itineraries[0].outbound.flights[0].destination.airport = test2[0].name +", " +  test2[0].city;

    });


  };

}]);
