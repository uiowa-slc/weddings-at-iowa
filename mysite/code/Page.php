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

	function randomImage() {
		/*$imageNumber = rand(1,20);
		$imageName = '<img src="/themes/dpa/images/background_'.$imageNumber.'.jpg" class="bg" />';

		return $imageName;*/
		return DataObject::get('BackgroundImage', null, 'RAND()', null, 1);

	}

}

?>