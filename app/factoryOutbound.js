notplaneapp.factory('outBound', ['$http', function($http){

  var baseUrl = 'https://api.sandbox.amadeus.com/v1.2/flights/low-fare-search';
  //var token = 'INQs3X0RjI9ZHCCMZM1pLyRx1nsNz6TC';

  return {
    query: function(startLoc, endLoc){
      return $http({
        url: baseUrl,
        method: 'GET',
        params: {
          'apikey': token,
          'origin': startLoc,
          'destination': endLoc,
          'departure_date': '2015-12-20',
          'currency': 'GBP'
        }
      });
    }
  };

}]);
