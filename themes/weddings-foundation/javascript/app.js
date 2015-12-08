// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$( document ).ready(function() {
	$(document).foundation({
	  balancer: {
	      respectSiblingWidth:false
	  }
	});



var bLazy = new Blazy({
  selector: '.lazy',
    breakpoints: [{
        width: 420 // max-width
        ,
        src: 'data-src-small'
    }
   ]
});

 $('#venue-carousel').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 300,
    itemMargin: 5,
    asNavFor: '#venue-slider',
    start: function(){
      bLazy.revalidate();
    },
    after: function(){
      bLazy.revalidate();
    }  
  });
  $('#venue-slider').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    sync: "#venue-carousel",
    start: function(){
      bLazy.revalidate();
    },
    after: function(){
      bLazy.revalidate();
    }
  });

});

$(".gallery").carousel({
    show: {
    },
    pagination: false
});

// $(".venue-gallery").carousel({
//     show: {
//       "980px" : 3
//     },
//     pagination: false
// });



/*var cbpAnimatedHeader = (function() {

	var docElem = document.documentElement,
		header = document.querySelector( '.cbp-af-header' ),
		didScroll = false,
		changeHeaderOn = 100;

	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 250 );
			}
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) {
			classie.add( header, 'cbp-af-header-shrink' );
		}
		else {
			classie.remove( header, 'cbp-af-header-shrink' );
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();*/


