notplaneapp.factory('outboundDate', function(startingDate){

  var day = startingDate.getDate();
  var month = startingDate.getMonth();
  var year = startingDate.getFullYear();
  var date;
  day < 10 ? correctDate() : day;
  date: year = '-' + (month+1) + '-' + day;
 console.log(startingDate);
  });
