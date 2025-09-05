$(function () {
  $(document).keydown(function (event) {
    var key = $(`.key[data-key="${event.which}"]`);
    var audio = $(`audio[data-key="${event.which}"]`)[0];
    key.toggleClass('playing');
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
  });

  $(document).keyup(function (event) {
    var key = $(`.key[data-key="${event.which}"]`);
    key.toggleClass('playing');
  });
});
