
  $(function () {


    // AOS ANIMATION
    AOS.init({
      disable: 'mobile',
      duration: 800,
      anchorPlacement: 'center-bottom'
    });

  


    // PROJECT SLIDE
    $('#project-slide').owlCarousel({
      loop: true,
      center: true,
      autoplayHoverPause: true,
      autoplay: true,
      margin: 30,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
          },
          768:{
              items:2,
          }
      }
    });

  });


    

