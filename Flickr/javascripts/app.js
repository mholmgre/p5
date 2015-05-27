var slide = function() {
    $(".focus").text('Slide Loading');
    var sList = []
    var prefixURL = "http://api.flickr.com/services/feeds/photos_public.gne?tags=";
    var suffixURL = "&format=json&jsoncallback=?";
    var flickrTag = $("input").val();
    var requestURL = prefixURL + flickrTag + suffixURL;
    $.getJSON(requestURL, function(flickrResponse) {
        flickrResponse.items.forEach(function(item) {
            var $image = $("<img>").attr('src', item.media.m).hide();
            sList.push($image);
        });
        var dispImage = function(i) {
            if (i == sList.length) {
                    i = 0
                };
            $(".focus").empty();
            // append the image with imageIndex to the DOM
            $(".focus").append(sList[i]); // fade in the image
            sList[i].fadeIn();
            setTimeout(function() {
                // In 3 seconds call dispImage again with the next index 
                i = i + 1;
                dispImage(i);
            }, 3000);
        };
        dispImage(0);
    });
};

$("button").on("click", slide);
