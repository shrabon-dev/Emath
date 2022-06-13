$(function () {

    "use strict";

    // =====Pre Loader===== //
     
    // var loader = document.getElementById("loader");
    // window.addEventListener("load", function () {

    //     loader.style.visibility = "hidden";

    // });

    // ======Menufix===== //

    //    var navoff = $(".main_menu").offset().top;
    //
    //    $(window).scroll(function () {
    //        var scrolling = $(this).scrollTop();
    //
    //        if (scrolling > navoff) {
    //            $(".main_menu").addClass("menu_fix");
    //        } else {
    //            $(".main_menu").removeClass("menu_fix");
    //        }
    //    });


     // =====Closes responsive menu when a scroll link is clicked===== //

     $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });


    // ======Smooth Scroll===== //

    // $('a[href*="#"]')
    //     .not('[href="#"]')
    //     .not('[href="#0"]')
    //     .click(function (event) {
    //         if (
    //             location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
    //             location.hostname == this.hostname
    //         ) {
    //             var target = $(this.hash);
    //             target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    //             if (target.length) {
    //                 event.preventDefault();
    //                 $('html, body').animate({
    //                     scrollTop: target.offset().top
    //                 }, 1000, function () {
    //                     var $target = $(target);
    //                     $target.focus();
    //                     if ($target.is(":focus")) {
    //                         return false;
    //                     } else {
    //                         $target.attr('tabindex', '-1');
    //                         $target.focus();
    //                     };
    //                 });
    //             }
    //         }
    //     });

  




    // =====scroll top===== //


    // $(".scroll_top").on('click', function () {
    //     $("html,body").animate({
    //         scrollTop: 0,
    //     }, 800);
    // });
    // $(window).on('scroll', function () {
    //     var scrolling = $(this).scrollTop();

    //     if (scrolling > 200) {
    //         $(".scroll_top").fadeIn();
    //     } else {
    //         $(".scroll_top").fadeOut();
    //     }
    // });



    // =====Aos Js===== n//

    AOS.init();



});
    // ======Slick Slider===== //

    $('.banner__slider').slick({
        autoplay:true,
        dots: true,
        arrows:false,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
      });

      $('.biggest__ofer__slider').slick({
        autoplay:true,
        dots: false,
        arrows:true,
        speed: 300,
        slidesToShow: 4,
        adaptiveHeight: true,
        prevArrow: '<i class="fas fa-long-arrow-alt-right next"></i>',
        nextArrow:'<i class="fas fa-long-arrow-alt-left prev"></i>',
        responsive: [
          {
            breakpoint: 2624,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
              infinite: true,
              
            }
          },
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });

      $(".drp__menu__one").click(function(){
          $(".DH__pstn").slideToggle()
           $(".spnTwo").toggleClass("spnOne")
      })


window.addEventListener('scroll',()=>{
  console.log("scrolled!")
})
$(".menu").click(function(){
   $(".side__bar__menu__part").slideToggle()
})