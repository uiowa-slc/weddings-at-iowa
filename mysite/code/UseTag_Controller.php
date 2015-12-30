<?php

class UseTag_Controller extends ContentController {

	private static $allowed_actions = array(
		'useTag'
	);

	
	private static $url_handlers = array(
		'$UseTag!' => 'useTag'
	);

	public function useTag() {
		$useTagName = $this->getRequest()->param('UseTag');

		$useTag = UseTag::get()->filter(array('URLSegment' => $useTagName))->First();

		if($useTag) {
			$venuePages = $useTag->VenuePages();
			return $this->customise(new ArrayData(array(
				'UseTag' => $useTag,
				'VenuePages' => $venuePages
			)))->renderWith(array("UseTag", "Page"));
		}
	}
}