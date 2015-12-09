notplaneapp.controller('noPlaneController',['$http', 'outBound', 'inBound', function($http, outBound, inBound) {

  var self = this;
  var day;
  var month;
  var year;
  var date;
  var day2;
  var month2;
  var year2;
  var date2;

  self.doOutbound = function() {
    self.StartDateToString();
   debugger;
    outBound.query(self.startLoc, self.endLoc, date )
    .then(function(response) {
      self.searchResult = response.data;
    });
  };

  self.doInbound = function() {
    self.EndDateToString();
    inBound.query(self.startLoc, self.endLoc, date2)
    .then(function(response) {
      self.searchResult2 = response.data;
    });
  };

  self.searchs = function(){
    self.doOutbound();
    self.doInbound();
  };

  self.StartDateToString = function(){
    year = self.startingDate.getFullYear();
    month = self.startingDate.getMonth();
    day = self.startingDate.getDate();
    day < 10 ? self.correctDate() : day;
    date = year + '-' + (month+1) + '-' + day;
  };

  self.EndDateToString = function(){
    year2 = self.endingDate.getFullYear();
    month2 = self.endingDate.getMonth();
    day2 = self.endingDate.getDate();
    day2 < 10 ? self.correctDate() : day2;
    date2 = year2 + '-' + (month2+1) + '-' + day2;
  };

  self.correctDate = function(date){
    DayString = day.toString();
    day = '0' + DayString;
  };

  self.correctDate2 = function(date2){
    DayString = day2.toString();
    day2 = '0' + DayString;
  };
}]);
