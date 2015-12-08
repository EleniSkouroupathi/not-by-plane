notplaneapp.controller('noPlaneController',['$resource',function($resource) {

  var self = this;

  var lowFareSearch = 'http://api.sandbox.amadeus.com/v1.2/flights/low-fare-search';

  var API_key = 'INQs3X0RjI9ZHCCMZM1pLyRx1nsNz6TC'; //EE

  self.getFlightFromAirport = function(startLoc,endLoc,startDate,endDate) {
    searchResource = $resource(lowFareSearch+'?'+'apikey='+API_key+'&origin='+startLoc+'&destination='+endLoc+'&departure_date='+startDate+'&return_date=');
    searchResource.get().$promise.then(function(response) {
      self.response = response;
    });
  };
}]);