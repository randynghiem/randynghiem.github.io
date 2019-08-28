(function ($) {
  "use strict";

  $(document).ready(function () {
    $(window).scroll(function () {
      var showing = $(this).scrollTop() > 150;
      $('.navbar').toggleClass('solid', showing);
    });

    $(document).click(function (event) {
      var target = $(event.target);
      if ($('.navbar-collapse').hasClass('show') && !target.hasClass('navbar-toggler')) {
        $('.navbar-toggler').click();
      }
    });

    $('.nav-link,.anchor-intro').click(function (event) {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        window.location.hash = hash;
      });
    });

    $('.isotope').isotope({
      itemSelector: '.isotope-item',
      layoutMode: 'fitRows'
    });

    $('#filters').on('click', '.company', function () {
      var filter = $(this).data('filter');
      $('.isotope').isotope({ filter: filter });

      // update .active class
      $('.company.active').removeClass('active');
      $(this).addClass('active');
    });

    $('.isotope-content').matchHeight({
      byRow: false
    });

  });

})(jQuery);