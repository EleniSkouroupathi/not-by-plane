notplaneapp.controller('noPlaneController',['$http', 'FlightSearch', function($http, FlightSeach) {

  var self = this;

  self.doFlightSearch = function() {
    FlightSearch.query(self.statLoc, self.endLoc)
      .then(function(response) {
        self.searchResult = response.data;
        console.log(response.data);
        console.log(self.searchResult);
      });
  };
}]);
