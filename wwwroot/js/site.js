// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function() {
    $('a[href^="#"]').on('click', function(evt) {
      evt.preventDefault();
      
      var link = $(this).attr('href');
      var less = (!$('#nav').hasClass('active')) ? 50 : 0;
      
      $('html, body').animate({
        scrollTop: $(link).offset().top - less
      }, 750);
    });
    
    $(window).on('scroll', function() {
      if ($(this).scrollTop() > 100) {
        $('#nav').addClass('active');
      }
      else {
        $('#nav').removeClass('active');
      }
    });
  });  