var main = function(){
     
    var messages = ["first message", "second message", "third", "fourth"];
    var displayMessage = function(messageIndex) {
        // create and hide the DOM element
        var $message = $("<p>").text(messages[messageIndex]).hide();
        // clear out the current content
        // it would be better to select the current // paragraph and fade it out. 
        $(".message").empty();
        // append the message with messageIndex to the DOM
        $(".message").append($message); // fade in the message
        $message.fadeIn();
        setTimeout(function() {
            // In 3 seconds call displayMessage again with the next index 
            messageIndex = messageIndex + 1; 
            displayMessage(messageIndex);
        }, 3000);
  };
    displayMessage(0);
}



$(document).ready(main);



