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
