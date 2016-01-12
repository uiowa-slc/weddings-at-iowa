<?php

class Building_Controller extends ContentController {
	
	private static $allowed_actions = array(
		'building'
	);

	
	private static $url_handlers = array(
		'$Building!' => 'building'
	);

	public function building() {
		$buildingName = $this->getRequest()->param('Building');

		$building = Building::get()->filter(array('URLSegment' => $buildingName))->First();

		if($building) {
			$venues = $building->VenuePages();
			return $this->customise(new ArrayData(array(
				'Building' => $building,
				'VenuePages' => $venues
			)))->renderWith(array("Building", "Page"));
		}
	}
}