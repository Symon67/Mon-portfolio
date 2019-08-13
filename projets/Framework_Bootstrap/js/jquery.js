$(document).ready(function () {

    $('#drop').click(function (element) {
          $(element.currentTarget).next('ul').slideToggle();
    });

    $('#burger').click(function (element) {
          $(element.currentTarget).parent().next('ul').slideToggle();
    });

    $(window).resize(function () {
          if ($(window).width() > 768) {
                $("ul").removeAttr('style');
          }
    });
});