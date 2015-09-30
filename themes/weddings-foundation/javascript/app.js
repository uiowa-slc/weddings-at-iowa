// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();


var bLazy = new Blazy({
  selector: 'img,.lazy',
    breakpoints: [{
        width: 420 // max-width
        ,
        src: 'data-src-small'
    }
   ]
});
// Can also be used with $(document).ready()
$(window).load(function() {


});


var flkty = new Flickity( '.main-gallery', {
  // options
  cellAlign: 'center',
  wrapAround: true,
  contain: true,
  imagesLoaded: true,
  setGallerySize: false
});

var cbpAnimatedHeader = (function() {

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

})();
