notplaneapp.controller('noPlaneController',['$http', 'outBound', 'inBound','StringDate', '$scope', function($http, outBound, inBound, StringDate, $scope) {

  var self = this;

  self.doOutbound = function() {
    var startLoc = self.selectedAirportFrom['iata']
    var endLoc = self.selectedAirportTo['iata']

    startDate = StringDate.convertEndDate(self.startingDate);
    outBound.query(startLoc, endLoc, startDate)
      .then(function(response) {
        self.searchResult = response.data;
      });
  };

  self.doInbound = function() {
    var startLoc = self.selectedAirportFrom['iata']
    var endLoc = self.selectedAirportTo['iata']

    endDate = StringDate.convertEndDate(self.endingDate);
    inBound.query(startLoc, endLoc, endDate)
      .then(function(response) {
        self.searchResult2 = response.data;
      });
  };

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

  self.isTrainJourney = function(data) {
      return (data==='TRS' || data==='TRN');
    };

}]);
