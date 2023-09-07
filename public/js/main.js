 
  $('.top').owlCarousel({
    loop:true,
    margin:10,
    autoplay: false,
    autoplayTimeout: 5000,
    nav:false,
    animateOut: 'fadeOut',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  })

  
  $('.room').owlCarousel({
    loop:true,
    margin:10,
    autoplay: true,
    autoplayTimeout: 5000,
    animateOut: 'fadeOut',
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
  })

  $('.gal').owlCarousel({
    loop:true,
    margin:10,
    autoplay: true,
    autoplayTimeout: 5000,
    nav:false,
    margin:30,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  })


  if ($("[data-fancybox]").length) {
    $("[data-fancybox]").fancybox();
}