<?php
class ServicePage extends SiteTree {

	private static $belongs_many_many = array (
		'Venues' => 'VenuePage'
	);

	public function getCMSFields() {

		$fields = parent::getCMSFields();


		$venueSource = VenuePage::get()->map()->toArray();
		

		$venueField = ListboxField::create('Venues', 'VenuePage', $venueSource);
		$venueField->setMultiple(true);
		$fields->addFieldToTab("Root.Main", $venueField, 'Content');

		return $fields;

	}
	
}

class ServicePage_Controller extends Page_Controller {


}