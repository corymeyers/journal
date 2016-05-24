(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./../js/message.js":2}],2:[function(require,module,exports){
exports.Message = function(to, from, messageText) {
  this.to = to;
  this.from = from;
  this.messageText = messageText;
}

exports.Message.prototype.read = function() {
  return "Dear" + this.to + "," + this.messageText + "Yours truely," + this.from;
}

},{}],3:[function(require,module,exports){
$(document).ready(function(){
  $('#time').text(moment());
  // console.log(moment());
});

},{}],4:[function(require,module,exports){
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

},{}]},{},[1,3,4]);
