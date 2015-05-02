   $(function () {
       $('.nav-btn').click(function () {
           //$('.nav-wrapper').removeClass('animated slideOutLeft');
           $('.nav-wrapper').addClass('animated slideInLeft');
            
           $('.archive').addClass('animated slideInLeft');
           $('.categories').addClass('animated slideInLeft');
           $('.tags').addClass('animated slideInLeft');
           $('.about').addClass('animated slideInLeft');

           $('.clip').css('width', '100%');
           $('.clip').css('height', '100%');
       });
       $('.clip').click(function () {

           $('.nav-wrapper').addClass('slideOutLeft');
           $('.nav-wrapper').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
               $('.nav-wrapper').removeClass('animated slideInLeft slideOutLeft');

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