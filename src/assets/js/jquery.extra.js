

 (function($) { "use strict";

  $(function() {
    var header = $(".start-style");
    $(window).scroll(function() {    
      var scroll = $(window).scrollTop();
    
      if (scroll >= 10) {
        header.removeClass('start-style').addClass("scroll-on");
      } else {
        header.removeClass("scroll-on").addClass('start-style');
      }
    });
  });   
    
  
  })(jQuery); 


jQuery('.ourpartners-carousel').owlCarousel({
    loop:false,
    autoplay:true,
    margin:10,
    dots:true,
    nav:false,
    navText:[],
    autoplayHoverPause: true,
    responsive:{
      0:{
        items:3
      },
      480:{
        items:3
      },
      992:{
        items:3
      },
      1199:{
        items:3
      }
    }
  });

	jQuery(document).ready(function() {
        jQuery(".menu li").find("ul").parent().append("<span></span>");
       jQuery(".menuButton").click(function() {
           jQuery( ".menuButton" ).toggleClass( "arrow_change" );
		 	jQuery(".menuButton + ul").slideToggle(); 
		});
	   jQuery(".menu ul li span").click(function(){
           if(jQuery("span").parent().children("ul").is(":visible")){
               jQuery(this).parent().siblings().children("ul").slideUp();
           }
            jQuery(this).parent().children("ul").slideToggle();  
    });
    });
 
 jQuery(".myAccount span").click(function() {
           jQuery( ".myAccount span" ).toggleClass( "arrow_change" );
		 	jQuery(".myAccountDropdown").slideToggle(); 
		});




//   $(document).ready(function () {
//   var sync1 = $("#sync1");
//   var sync2 = $("#sync2");
//   var slidesPerPage = 4; //globaly define number of elements per page
//   var syncedSecondary = true;

//   sync1
//     .owlCarousel({
//       items: 1,
//       slideSpeed: 2000,
//       nav: false,
//       autoplay: true,
//       dots: false,
//       loop: true,
//       responsiveRefreshRate: 200,
      
//     })
//     .on("changed.owl.carousel", syncPosition);

//   sync2
//     .on("initialized.owl.carousel", function () {
//       sync2.find(".owl-item").eq(0).addClass("current");
//     })
//     .owlCarousel({
//       items: slidesPerPage,
//       dots: false,
//       nav: false,
//       autoplay: true,
//       smartSpeed: 200,
//       slideSpeed: 500,
//       slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
//       responsiveRefreshRate: 100,
//       items: 5,
//       margin:0,
//     })
//     .on("changed.owl.carousel", syncPosition2);

//   function syncPosition(el) {
//     //if you set loop to false, you have to restore this next line
//     //var current = el.item.index;

//     //if you disable loop you have to comment this block
//     var count = el.item.count - 1;
//     var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

//     if (current < 0) {
//       current = count;
//     }
//     if (current > count) {
//       current = 0;
//     }

//     //end block

//     sync2
//       .find(".owl-item")
//       .removeClass("current")
//       .eq(current)
//       .addClass("current");
//     var onscreen = sync2.find(".owl-item.active").length - 1;
//     var start = sync2.find(".owl-item.active").first().index();
//     var end = sync2.find(".owl-item.active").last().index();

//     if (current > end) {
//       sync2.data("owl.carousel").to(current, 100, true);
//     }
//     if (current < start) {
//       sync2.data("owl.carousel").to(current - onscreen, 100, true);
//     }
//   }

//   function syncPosition2(el) {
//     if (syncedSecondary) {
//       var number = el.item.index;
//       sync1.data("owl.carousel").to(number, 100, true);
//     }
//   }

//   sync2.on("click", ".owl-item", function (e) {
//     e.preventDefault();
//     var number = $(this).index();
//     sync1.data("owl.carousel").to(number, 300, true);
//   });
// });







 $('.team-slider').owlCarousel({
        loop:false,
        margin:40,
        nav:false,
        dots:false,
       
        autoplay:true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 5000,
        smartSpeed: 2550,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })


 $(document).ready(function() {
  $(".gallery_area a").fancybox();
  $('[data-fancybox]').fancybox({
    youtube : {
        controls : 0,
        showinfo : 0
    },
    vimeo : {
        color : 'f00'
    }
});



});
     
// $('[data-fancybox]').fancybox({
//     youtube : {
//         controls : 0,
//         showinfo : 0
//     },
//     vimeo : {
//         color : 'f00'
//     }
// });