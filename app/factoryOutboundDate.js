notplaneapp.factory('outboundDate',function(){

  return {
    convertEndDate: function(endingDate){

      year = endingDate.getFullYear();
      month = (endingDate.getMonth())+1;
      day = endingDate.getDate();
      day < 10 ? self.correctDate() : day;
      month < 10 ? self.correctMonth() : month;
      console.log(month);
      endDate = year + '-' + month + '-' + day;
      return endDate;
    }
  };
});

  self.correctDate = function(){
    DayString = day.toString();
    day = '0' + DayString;
    };

  self.correctMonth = function(){
    monthString = month.toString();
    month = '0' + monthString;
    };
