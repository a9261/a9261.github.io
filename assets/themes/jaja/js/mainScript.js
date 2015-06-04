   $(function () {

      $('.btn-readmore').mousedown(function() {
          $(this).toggleClass("Anima-Shadow-z-1-in");
      });
      $('.btn-readmore').mouseup(function() {
          $( this ).toggleClass("Anima-Shadow-z-1-out");
      })
      $('.nav-btn').mousedown(function() {
          $(this).addClass("Anima-Shadow-z-2-in");
      });
      $('.nav-btn').mouseup(function() {
          $( this ).addClass("Anima-Shadow-z-2-out");
      })

       $('.nav-btn').click(function () {
          
          $('.nav-wrapper').removeClass('slideInLeft');

           $('.nav-wrapper').addClass('animated slideInLeft');
           $('.archive').addClass('animated slideInLeft');
           $('.categories').addClass('animated slideInLeft');
           $('.tags').addClass('animated slideInLeft');
           $('.about').addClass('animated slideInLeft');
           $('.clip').css('width', '100%');
           $('.clip').css('height', '100%');
       });
       $('.clip').click(function () {
           $('.nav-btn').removeClass('Anima-Shadow-z-2-in');
           $('.nav-btn').removeClass('Anima-Shadow-z-2-out');
           
           $('.nav-wrapper').addClass('animated slideOutLeft');

           $('.nav-wrapper').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
               $('.nav-wrapper').removeClass('animated slideOutLeft');
               $('.archive').removeClass('animated slideInLeft');
               $('.categories').removeClass('animated slideInLeft');
               $('.tags').removeClass('animated slideInLeft');
               $('.about').removeClass('animated slideInLeft');
           });
      
           $('.clip').css('width', '0%');
           $('.clip').css('height', '0%');
       });
       //$('.nav-wrapper').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
       //    $('.nav-wrapper').removeClass('animated slideInLeft');
       //});
   });