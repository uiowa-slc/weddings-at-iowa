<?php

class Page extends SiteTree {

	private static $db = array(
	);

	private static $has_one = array(
	);

}

class Page_Controller extends ContentController {

	public function init() {
		parent::init();

		// Note: you should use SS template require tags inside your templates
		// instead of putting Requirements calls here.  However these are
		// included so that our older themes still work
		Requirements::themedCSS("form");

	}
	public function AllVenues() {
		$venues = VenuePage::get()->filter(array('ClassName' => 'VenuePage'));
		return $venues;

	}

	public function AllServices() {
		$services = ServicePage::get()->filter(array('ClassName' => 'ServicePage'));
		return $services;
	}

	public function AllTestimonials() {
		$testimonials = Testimonial::get()->sort('RAND()');
		return $testimonials;
	}

}

?>