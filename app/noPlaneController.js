notplaneapp.controller('noPlaneController',['$http',function($http) {

  var self = this;

  var searchResource = $resource('https://api.sandbox.amadeus.com/v1.2/flights/low-fare-search?apikey=H2ddqhQKyhWGbo5ZXytM3qjFBDv0acSV&origin=LON&destination=PAR&departure_date=2015-12-12&return_date=2015-12-13&direct=true');
  var 

  //var API_key = 'INQs3X0RjI9ZHCCMZM1pLyRx1nsNz6TC'; //EE

  self.getFlightFromLoc = function() {
    searchResource.get().$promise.then(function(response) {
      self.response = response;
      console.log(self.response);
    });
  };
}]);
