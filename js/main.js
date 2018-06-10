jQuery(document).ready(function ($) {
     var secondaryNav = $('.cd-secondary-nav'),
          secondaryNavTopPosition = secondaryNav.offset().top,
          taglineOffesetTop = $('#cd-intro-tagline').offset().top + $('#cd-intro-tagline').height() + parseInt($('#cd-intro-tagline').css('paddingTop').replace('px', '')),
          contentSections = $('.cd-section');

     $(window).on('scroll', function () {

          ($(window).scrollTop() > taglineOffesetTop) ? $('#cd-logo, .cd-btn').addClass('is-hidden'): $('#cd-logo, .cd-btn').removeClass('is-hidden');


          if ($(window).scrollTop() > secondaryNavTopPosition) {

               secondaryNav.addClass('is-fixed');

               $('.cd-main-content').addClass('has-top-margin');

               setTimeout(function () {
                    secondaryNav.addClass('animate-children');
                    $('#cd-logo').addClass('slide-in');
                    $('.cd-btn').addClass('slide-in');
               }, 50);
          } else {
               secondaryNav.removeClass('is-fixed');
               $('.cd-main-content').removeClass('has-top-margin');
               setTimeout(function () {
                    secondaryNav.removeClass('animate-children');
                    $('#cd-logo').removeClass('slide-in');
                    $('.cd-btn').removeClass('slide-in');
               }, 50);
          }


          updateSecondaryNavigation();
     });

     function updateSecondaryNavigation() {
          contentSections.each(function () {
               var actual = $(this),
                    actualHeight = actual.height() + parseInt(actual.css('paddingTop').replace('px', '')) + parseInt(actual.css('paddingBottom').replace('px', '')),
                    actualAnchor = secondaryNav.find('a[href="#' + actual.attr('id') + '"]');
               if ((actual.offset().top - secondaryNav.height() <= $(window).scrollTop()) && (actual.offset().top + actualHeight - secondaryNav.height() > $(window).scrollTop())) {
                    actualAnchor.addClass('active');
               } else {
                    actualAnchor.removeClass('active');
               }
          });
     }

secondaryNav.find('ul a').on('click', function (event) {
               event.preventDefault();
               var target = $(this.hash);
               $('body,html').animate({
                    'scrollTop': target.offset().top - secondaryNav.height() + 1
               }, 400);

     });


     $('.cd-primary-nav').on('click', function (event) {
          if ($(event.target).is('.cd-primary-nav')) $(this).children('ul').toggleClass('is-visible');
     });
});

$(window).ready(function () {
     $("#fact1-c").click(function () {
          $("#pre-text1").hide();
          $("#post-text1").show();

     })
});

$(document).ready(function () {
     $("#fact2-c").click(function () {
          $("#pre-text2").hide();
          $("#post-text2").show();
          $("#facts").css;
     })
});

$(document).ready(function () {
     $("#fact3-c").click(function () {
          $("#pre-text3").hide();
          $("#post-text3").show();
          $("#facts").css;
     })
});
