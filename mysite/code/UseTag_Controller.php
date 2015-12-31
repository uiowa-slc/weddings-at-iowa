<?php

class UseTag_Controller extends ContentController {
	
	private static $allowed_actions = array(
		'tag'
	);

	
	private static $url_handlers = array(
		'$UseTag!' => 'tag'
	);

	public function tag() {
		$useTagName = $this->getRequest()->param('UseTag');

		$tag = UseTag::get()->filter(array('URLSegment' => $useTagName))->First();

		if($tag) {
			$venues = $tag->VenuePages();
			return $this->customise(new ArrayData(array(
				'UseTag' => $tag,
				'VenuePages' => $venues
			)))->renderWith(array("UseTag", "Page"));
		}
	}
}