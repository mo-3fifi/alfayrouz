$.fn.intro = function(options) {
  const defaults = {
    selector: {
      slides: '.slides',
      slide: '.slide',
      bullets: '.bullets',
      bullet: '.bullet'
    }
  };
  const settings = $.extend( {}, defaults, options);
  return this.each(function() {
    const intro = $(this);
    function onStep(index) {
      $('.step').eq(index).addClass('status--on');
    }
    function onMarker(index) {
      $('.marker').eq(index).addClass('status--on');
    }
    introInit = function() {
      let markersDelay = 0;
      $('.steps .step').each(function () {
        const index = $(this).index();
        let stepDelay = (index * (160 * (1 - (index * (0.04)))));
        markersDelay = stepDelay;
        window.setTimeout(function () {
          onStep(index);
        }, stepDelay);
      });
      window.setTimeout(function () {
        $('.markers .marker').each(function () {
          const index = $(this).index();
          window.setTimeout(function () {
            onMarker(index);
          }, (index * (480 * (1 - (index * (0.04))))));
        });
      }, markersDelay);
      $('.markers .marker').on('click', function () {
        $('.component.type--intro').addClass('status--active');
        $('.markers .marker').removeClass('status--active');
        $(this).addClass('status--active');
      });
    };
    introInit();
  });
};