notplaneapp.factory('FlightSearch', ['$http', function($http){

  var baseUrl = 'https://api.sandbox.amadeus.com/v1.2/flights/low-fare-search';
  var token = 'H2ddqhQKyhWGbo5ZXytM3qjFBDv0acSV';

  return {
    query: function(startLoc, endLoc){
      return $http({
        url: baseUrl,
        method: 'GET',
        params: {
          'apiKey': token,
          'origin': startLoc,
          'destination': endLoc,
          'departure_date': '2015-12-20',
          'return_date': '2015-12-27'
        }
      });
    }
  };

}]);
