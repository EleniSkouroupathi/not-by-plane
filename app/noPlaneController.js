notplaneapp.controller('noPlaneController',['$http', 'outBound', 'inBound', 'outboundDate', function($http, outBound, inBound, outboundDate) {

  var self = this;

  self.doOutbound = function() {
    self.StartDateToString();
   debugger;
    outBound.query(self.startLoc, self.endLoc, date )
    .then(function(response) {
      self.searchResult = response.data;
    });
  };

  self.doInbound = function() {
    endDate = outboundDate.convertEndDate(self.endingDate);
    inBound.query(self.startLoc, self.endLoc, endDate)
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

  //self.EndDateToString = function(){
    //year2 = self.endingDate.getFullYear();
    //month2 = self.endingDate.getMonth();
    //day2 = self.endingDate.getDate();
    //day2 < 10 ? self.correctDate() : day2;
    //date2 = year2 + '-' + (month2+1) + '-' + day2;
  //};

  self.correctDate = function(date){
    DayString = day.toString();
    day = '0' + DayString;
  };

  //self.correctDate2 = function(date2){
    //DayString = day2.toString();
    //day2 = '0' + DayString;
  //};
}]);
