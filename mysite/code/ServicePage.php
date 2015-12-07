<?php
class ServicePage extends VenuePage {

	private static $belongs_many_many = array(
		'Venues' => 'VenuePage',
	);
	private static $singular_name = 'Service';

	public function getCMSFields() {

		$fields = parent::getCMSFields();

		$venueSource = VenuePage::get()->map()->toArray();

		$venueField = ListboxField::create('Venues', 'VenuePage', $venueSource);
		$venueField->setMultiple(true);
		$fields->addFieldToTab("Root.Main", $venueField, 'Content');

	}

}

class ServicePage_Controller extends VenuePage_Controller {

}