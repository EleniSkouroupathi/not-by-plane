notplaneapp.controller('noPlaneController',['$http', 'outBound', 'inBound','$scope', function($http, outBound, inBound, $scope) {

  var self = this;

  self.doOutbound = function() {
    var startLoc = self.selectedAirportFrom['iata']
    var endLoc = self.selectedAirportTo['iata']

    console.log(startLoc)

    outBound.query(startLoc, endLoc)

      .then(function(response) {
        self.searchResult = response.data;
        //console.log(response.data);
        //console.log(self.searchResult);
      });
  };

  self.doInbound = function() {
    var startLoc = self.selectedAirportFrom['iata']
    var endLoc = self.selectedAirportTo['iata']

    inBound.query(self.startLoc, self.endLoc)
      .then(function(response) {
        self.searchResult2 = response.data;
        console.log(response.data);
        console.log(self.searchResult2);
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

  self.searchs = function(){
    self.doOutbound();
    self.doInbound();
  };

}]);
