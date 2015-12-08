notplaneapp.controller('noPlaneController',['FlightSearch', 'Autocomplete', function(FlightSearch, Autocomplete) {

  var self = this;

  self.doFlightSearch = function() {
    FlightSearch.query(self.startLoc, self.endLoc)
      .then(function(response) {
        self.searchResult = response.data;
        console.log(response);
        console.log(self.searchResult);
      });
  };

  self.performAutoComplete = function() {
    Autocomplete.query(self.startLoc).then(function(response) {
      self.autoCompleteResult = response;
    });
  };
}]);
