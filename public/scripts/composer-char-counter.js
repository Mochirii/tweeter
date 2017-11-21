$(document).ready(function () {
  var text_max = 140;
  $('#textarea_feedback').html(text_max + ' characters remaining');

  var $textCounter = $('.counter');

  var $counter = $(".counter");

  $('textarea').keyup(function () {
    var text_length = $(this).val().length;
    var text_remaining = text_max - text_length;

    $textCounter.text(text_remaining);

    if (text_length <= text_max) {
      return $counter.css("color", "#0A3517");
    }
    $counter.css("color", "#ff0000");;
  });
})

