$(document).ready(function() {
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var btn_read = $("#read"); // Read Letter button
    var popup_letter = $(".popup-letter"); // Pop-up letter element
    var close_popup = $("#close-popup"); // Close the pop-up letter button

    envelope.click(function() {
        open();
    });
    btn_open.click(function() {
        open();
    });
    btn_reset.click(function() {
        close();
    });

    window.onload = function() {
        var iframe = document.getElementById('audioPlayer');
        var iframeSrc = iframe.src;
        iframe.src = iframeSrc + "&autoplay=1";  // Add autoplay query to the URL
    };

    function open() {
        envelope.addClass("open")
               .removeClass("close");
         // Show the "Read Letter" button only when the envelope opens
         $(".read-letter").show();
          // Change the background to space image
        $("body").css("background-image", "url('images/space.jpg')");
    }

    function close() {
        envelope.addClass("close")
               .removeClass("open");

        $(".read-letter").hide(); // Hide the "Read Letter" button
        popup_letter.hide(); // Hide the pop-up letter
    }

    // Show the pop-up letter when the "Read Letter" button is clicked
    btn_read.click(function () {
    popup_letter.show(); // Show the letter pop-up
    });

    // Close the pop-up letter when Close button is clicked
    close_popup.click(function () {
    popup_letter.hide(); // Hide the pop-up letter

    });
});
