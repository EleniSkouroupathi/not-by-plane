notplaneapp.controller('noPlaneController',['$http', 'FlightSearch',"$scope", function($http, FlightSearch, $scope) {

  var self = this;

  self.doFlightSearch = function() {
    var startLoc = selectedAirportFrom[0].iata
    var endLoc = $scope.selectedAirportTo[0].iata

    FlightSearch.query(startLoc, endLoc)
      .then(function(response) {
        self.searchResult = response.data;
        console.log(response.data);
        console.log(self.searchResult);
      });
  };

  $scope.selectedAirportFrom = null;
  $scope.selectedAirportTo = null;

  var airports = new Bloodhound({
    datumTokenizer: function(d) { return Bloodhound.tokenizers.whitespace(d.name);},
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: allAirports

  });

  airports.initialize();

  $scope.airportsDataset = {
    displayKey: 'name',
    source: airports.ttAdapter()
  };

  $scope.exampleOptionsNonEditable = {
    highlight: true,
    editable: false
  };

}]);
