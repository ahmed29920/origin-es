(function ($) {
  $(document).ready(function () {
    "use strict";

    // BACK BUTTON RELOAD
    window.onpageshow = function (event) {
      if (event.persisted) {
        window.location.reload()
      }
    };

    // ICON CONTENT BLOCK
    $('.icon-content-block .content-block').mouseenter(function () {
      $('.selected').removeClass('selected').addClass('icon-content-block .content-block');
      $(this).removeClass('icon-content-block .content-block').addClass('selected');
    });


    // SPLITTING
    Splitting();


    // DATA BACKGROUND IMAGE
    var pageSection = $(".swiper-slide");
    pageSection.each(function (indx) {
      if ($(this).attr("data-background")) {
        $(this).css("background-image", "url(" + $(this).data("background") + ")");
      }
    });


    // TREE MENU
    $('.site-navigation .inner ul li i').click(function () {
      $(this).parent().children('.site-navigation .inner ul li ul').slideToggle(300);
      return true;
    });


    // HAMBURGER MENU
    $('.hamburger').on('click', function (e) {
      if ($(".site-navigation").hasClass("active")) {
        $("body").toggleClass("overflow");
        $(".site-navigation").removeClass("active");
        $(".site-navigation").css("transition-delay", "0.5s");
        $(".site-navigation .layer").css("transition-delay", "0.3s");
        $(".site-navigation .inner").css("transition-delay", "0s");
      } else {
        $(".site-navigation").addClass('active');
        $("body").toggleClass("overflow");
        $(".site-navigation.active").css("transition-delay", "0s");
        $(".site-navigation.active .layer").css("transition-delay", "0.2s");
        $(".site-navigation.active .inner").css("transition-delay", "0.7s");
      }
      $(this).toggleClass("is-opened-navi");
    });


    // FOLLOW US
    $('.follow-us').on('click', function (e) {
      if ($(".social-media").hasClass("active")) {
        $("body").toggleClass("overflow");
        $(".social-media").removeClass("active");
        $(".social-media").css("transition-delay", "0.5s");
        $(".social-media .layer").css("transition-delay", "0.3s");
        $(".social-media .inner").css("transition-delay", "0s");
        setTimeout(function() {
          $(".all-cases-link").removeClass("d-none");
        }, 1000); // 1000 milliseconds = 1 second
        
      } else {
        $(".social-media").addClass('active');
        $("body").toggleClass("overflow");
        $(".all-cases-link").addClass("d-none");
        $(".social-media.active").css("transition-delay", "0s");
        $(".social-media.active .layer").css("transition-delay", "0.2s");
        $(".social-media.active .inner").css("transition-delay", "0.7s");
      }

    });


    // ALL CASES
    $('.all-cases-link b').on('click', function (e) {
      if ($(".all-cases").hasClass("active")) {
        $("body").toggleClass("overflow");
        $(".all-cases").removeClass("active");
        $(".all-cases").css("transition-delay", "0.5s");
        $(".all-cases .layer").css("transition-delay", "0.3s");
        $(".all-cases .inner").css("transition-delay", "0s");
      } else {
        $(".all-cases").addClass('active');
        $("body").toggleClass("overflow");
        $(".all-cases.active").css("transition-delay", "0s");
        $(".all-cases.active .layer").css("transition-delay", "0.2s");
        $(".all-cases.active .inner").css("transition-delay", "0.7s");
      }

    });


    // Contact Us FORM INPUT LABEL
    function checkForInput(element) {
      const $label = $(element).siblings('span');
      if ($(element).val().length > 0) {
        $label.addClass('label-up');
      } else {
        $label.removeClass('label-up');
      }
    }

    // The lines below are executed on page load
    $('input, textarea').each(function () {
      checkForInput(this);
    });

    // The lines below (inside) are executed on change & keyup
    $('input, textarea').on('change keyup', function () {
      checkForInput(this);
    });


    // FOOTER HEIGHT CALCULATION	
    $('body').css({
      'margin-bottom': $('.footer').innerHeight()
    });


    // EQUALIZER TOGGLE
    var source = "audio/audio.mp3";
    var audio = new Audio(); // use the constructor in JavaScript, just easier that way
    audio.addEventListener("load", function () {
      audio.play();
    }, true);
    audio.src = source;
    audio.autoplay = true;
    audio.loop = true;
    audio.volume = 0.2;

    $('.equalizer').click();
    var playing = true;
    $('.equalizer').click(function () {
      if (playing == false) {
        audio.play();
        playing = true;

      } else {
        audio.pause();
        playing = false;
      }
    });


    // EQUALIZER
    function randomBetween(range) {
      var min = range[0],
        max = range[1];
      if (min < 0) {
        return min + Math.random() * (Math.abs(min) + max);
      } else {
        return min + Math.random() * max;
      }
    }

    $.fn.equalizerAnimation = function (speed, barsHeight) {
      var $equalizer = $(this);
      setInterval(function () {
        $equalizer.find('span').each(function (i) {
          $(this).css({
            height: randomBetween(barsHeight[i]) + 'px'
          });
        });
      }, speed);
      $equalizer.on('click', function () {
        $equalizer.toggleClass('paused');
      });
    };

    var barsHeight = [
      [2, 13],
      [5, 22],
      [17, 8],
      [4, 18],
      [11, 3]
    ];
    $('.equalizer').equalizerAnimation(180, barsHeight);


    // BACK BUTTON RELOAD
    window.onpageshow = function (event) {
      if (event.persisted) {
        window.location.reload()
      }
    };


    // PAGE TRANSITION
    $('body a').on('click', function (e) {


      var target = $(this).attr('target');
      var fancybox = $(this).data('fancybox');
      var url = this.getAttribute("href");
      if (target != '_blank' && typeof fancybox == 'undefined' && url.indexOf('#') && url.indexOf('javascript:void(0);') < 0) {


        e.preventDefault();
        var url = this.getAttribute("href");

        if (url.indexOf('#' && 'javascript:void(0);') != -1) {
          var hash = url.substring(url.indexOf('#'));


          if ($('body ' + hash).length != 0) {
            $('.page-transition').removeClass("active");
            $(".hamburger").toggleClass("open");
            $("body").toggleClass("overflow");
            $(".navigation-menu").removeClass("active");
            $(".navigation-menu .inner ul").css("transition-delay", "0s");
            $(".navigation-menu .inner blockquote").css("transition-delay", "0s");
            $(".navigation-menu .bg-layers span").css("transition-delay", "0.3s");

            $('html, body').animate({
              scrollTop: $(hash).offset().top
            }, 1000);
          }
        } else {

          $('.page-transition').toggleClass("active");
          setTimeout(function () {
            window.location = url;
          }, 1000);
        }
      }
    });


  });
  // END JQUERY	


  // SLIDER
  var mainslider = new Swiper('.gallery-top', {
    spaceBetween: 0,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
    loop: true,
    loopedSlides: 3,
    thumbs: {
      swiper: sliderthumbs
    }
  });


  // SLIDER THUMBS
  var sliderthumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 3,
    touchRatio: 0.2,
    slideToClickedSlide: true,
    loop: true,
    loopedSlides: 3,
    breakpoints: {
      1024: {
        slidesPerView: 3
      },
      768: {
        slidesPerView: 1
      },
      640: {
        slidesPerView: 1
      },
      320: {
        slidesPerView: 1
      }
    }
  });

  if ($(".gallery-top")[0]) {
    mainslider.controller.control = sliderthumbs;
    sliderthumbs.controller.control = mainslider;
  } else {

  }


  // OFFICE SLIDER
  new Swiper('.office-slider', {
    slidesPerView: '1',
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });


  // SLIDER
  var carouselslider = new Swiper('.carousel-slider', {
    spaceBetween: 0,
    slidesPerView: 3,
    centeredSlides: true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
    loop: true,
    breakpoints: {
      1024: {
        slidesPerView: 3
      },
      768: {
        slidesPerView: 2
      },
      640: {
        slidesPerView: 1
      },
      320: {
        slidesPerView: 1
      }
    }
  });


  // TESTIMONIALS
  new Swiper('.testimonials-slider', {
    slidesPerView: '1',
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });


  // COUNTER
  $(document).scroll(function () {
    $('.odometer').each(function () {
      var parent_section_postion = $(this).closest('section').position();
      var parent_section_top = parent_section_postion.top;
      if ($(document).scrollTop() > parent_section_top - 300) {
        if ($(this).data('status') == 'yes') {
          $(this).html($(this).data('count'));
          $(this).data('status', 'no');
        }
      }
    });
  });


  // WOW ANIMATION 
  wow = new WOW({
    animateClass: 'animated',
    offset: 50
  });
  wow.init();


  // PRELOADER
  $(window).load(function () {
    $("body").addClass("page-loaded");
  });


})(jQuery);


$(document).ready(function () {
  let items = $('.carousel-item');

  function getItemsPerView() {
    if (window.matchMedia("(max-width: 575px)").matches) {
      return 1; // Extra-small devices (phones)
    } else if (window.matchMedia("(min-width: 576px) and (max-width: 767px)").matches) {
      return 2; // Small devices (tablets)
    } else if (window.matchMedia("(min-width: 768px) and (max-width: 991px)").matches) {
      return 3; // Medium devices (smaller desktops)
    } else {
      return 6; // Large devices and up
    }
  }

  function updateActiveItems() {
    let itemsPerView = getItemsPerView();
    items.removeClass('active'); // Remove 'active' from all items
    items.slice(0, itemsPerView).addClass('active'); // Activate the first itemsPerView items
  }

  function showNext() {
    let itemsPerView = getItemsPerView();
    const firstActiveItem = items.filter('.active').first();
    const lastActiveItem = items.filter('.active').last();

    // If there's no next item, wrap to the first one
    if (lastActiveItem.next().length === 0) {
      items.removeClass('active');
      items.slice(0, itemsPerView).addClass('active'); // Show the first set of items
    } else {
      lastActiveItem.next().addClass('active');
      firstActiveItem.removeClass('active');
    }
  }

  function showPrev() {
    let itemsPerView = getItemsPerView();
    const firstActiveItem = items.filter('.active').first();
    const lastActiveItem = items.filter('.active').last();

    // If there's no previous item, wrap to the last one
    if (firstActiveItem.prev().length === 0) {
      items.removeClass('active');
      items.slice(-itemsPerView).addClass('active'); // Show the last set of items
    } else {
      firstActiveItem.prev().addClass('active');
      lastActiveItem.removeClass('active');
    }
  }

  $('.next-button').on('click', function () {
    showNext();
  });

  $('.prev-button').on('click', function () {
    showPrev();
  });

  // Auto-scroll
  function startAutoScroll() {
    setInterval(function () {
      showNext();
    }, 3000);
  }

  // Initialize the correct number of active items based on screen size
  updateActiveItems();

  // Update on resize
  $(window).on('resize', function () {
    updateActiveItems();
  });

  // Optional: Uncomment to enable auto-scroll
  startAutoScroll();
});
$(document).on('click','.toggle-serv-text',function(){
  $(this).siblings().removeClass('active-ind-cta-link')
  $(this).addClass('active-ind-cta-link')
  let text = $(this).data('toggle')
  if(text == 'text-1'){
    $(this).parent().siblings('.text-1').removeClass('d-none')
    $(this).parent().siblings('.text-2').addClass('d-none')
  }else{
    console.log( $(this).parent().siblings('.text-2'))
    $(this).parent().siblings('.text-2').removeClass('d-none')
    $(this).parent().siblings('.text-1').addClass('d-none')

  }
})
$(document).on('mouseenter', '.industrial-side-link', function() {
  $('.industrial-ul').removeClass('d-none');
});


$(document).on('mouseleave', '.industrial-side-link', function(event) {
  let industrialUl = $('.industrial-ul');

  // Check if the mouse is leaving to `.industrial-ul`
  if (!$(event.relatedTarget).closest('.industrial-ul').length) {
    industrialUl.addClass('d-none');
  }
});

// If the mouse leaves the `.industrial-ul`, hide it
$(document).on('mouseleave', '.industrial-ul', function(event) {
  let industrialSideLink = $('.industrial-side-link');
  // Check if the mouse is leaving to `.industrial-side-link`
  if (!$(event.relatedTarget).closest('.industrial-side-link').length) {
    $(this).addClass('d-none');
  }
});

$(document).on('mouseenter', '.educational-side-link', function() {
  $('.educational-ul').removeClass('d-none');
});


$(document).on('mouseleave', '.educational-side-link', function(event) {
  let industrialUl = $('.educational-ul');

  // Check if the mouse is leaving to `.educational-ul`
  if (!$(event.relatedTarget).closest('.educational-ul').length) {
    industrialUl.addClass('d-none');
  }
});

// If the mouse leaves the `.educational-ul`, hide it
$(document).on('mouseleave', '.educational-ul', function(event) {
  let industrialSideLink = $('.educational-side-link');
  // Check if the mouse is leaving to `.educational-side-link`
  if (!$(event.relatedTarget).closest('.educational-side-link').length) {
    $(this).addClass('d-none');
  }
});