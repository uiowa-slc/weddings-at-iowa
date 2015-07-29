<?php

class TestimonialAdmin extends ModelAdmin {

	private static $menu_title = 'Testimonials';

	private static $url_segment= 'testimonials';

	private static $managed_models = array (
		'Testimonial',
		);

}