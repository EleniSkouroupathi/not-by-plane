notplaneapp.controller('noPlaneController',['$http', 'outBound', 'inBound', function($http, outBound, inBound) {

  var self = this;

  self.doOutbound = function() {
    outBound.query(self.startLoc, self.endLoc)
      .then(function(response) {
        self.searchResult = response.data;
        //console.log(response.data);
        //console.log(self.searchResult);
      });
  };

  self.doInbound = function() {
    inBound.query(self.startLoc, self.endLoc)
      .then(function(response) {
        self.searchResult2 = response.data;
        console.log(response.data);
        console.log(self.searchResult2);
      });
  };

  self.searchs = function(){
    self.doOutbound();
    self.doInbound();
  };
}]);
