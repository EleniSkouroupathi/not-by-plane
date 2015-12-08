notplaneapp.factory('Autocomplete', ['$http', function($http) {

  var queryUrl = 'https://api.sandbox.amadeus.com/v1.2/airports/autocomplete';
  var token = 'H2ddqhQKyhWGbo5ZXytM3qjFBDv0acSV';

  return {
    query: function(cityInput) {
      return $http({
        url: queryUrl,
        method: 'GET',
        params: {
          'apikey': token,
          'term': cityInput,
          'q': self.cityInput,
        }
      });
    }
  };
}]);
