import visible from 'jquery-visible';
// counter
$(window).scroll(function() {
  var c = $('.counter');
  c.each(function() {
    var $this = $(this),
      countTo = $this.attr('data-count');
    if (c.visible(false, true) == true) {
      $({
        countNum: $this.text()
      }).animate({
        countNum: countTo
      }, {
        duration: 5000,
        easing: 'swing',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
        }
      });
    } else {
      c.each(function() {
        c.html = 0;
      });
    }
  });
}).scroll();
