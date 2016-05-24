var Message = require('./../js/message.js').Message;
$(document).ready(function() {
  $('#email').submit(function(event){
    event.preventDefault();
    var toField = $('#to').val();
    var fromField = $('#from').val();
    var messageField = $('#message').val();

    var newMessage = new Message(toField, fromField, messageField);
    // console.log(newMessage.read());
    $('#result').append("<li>" + newMessage.read() + "</li>");
  });
});

$(document).ready(function(){
  $('#time').text(moment());
  // console.log(moment());
});

var apiKey = "";

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $('.showWeather').text("The city you have chosen is" + city + ".");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid' + apiKey, function(response){
      console.log(response);
    });
  });
});
