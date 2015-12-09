notplaneapp.controller('noPlaneController',['$http', 'outBound', 'inBound', 'StringDate', function($http, outBound, inBound, StringDate) {

  var self = this;

  self.doOutbound = function() {
    startDate = StringDate.convertEndDate(self.startingDate);
    debugger;
    outBound.query(self.startLoc, self.endLoc, startDate )
    .then(function(response) {
      self.searchResult = response.data;
    });
  };

  self.doInbound = function() {
    endDate = StringDate.convertEndDate(self.endingDate);
    inBound.query(self.startLoc, self.endLoc, endDate)
    .then(function(response) {
      self.searchResult2 = response.data;
    });
  };

  self.searchs = function(){
    self.doOutbound();
    self.doInbound();
  };
}]);
