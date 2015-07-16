<?php
class VenuePage extends Page {

	private static $many_many = array (
		'Services' => 'ServicePage'
	);


	public function getCMSFields() {

		$fields = parent::getCMSFields();


		$serviceSource = ServicePage::get()->map()->toArray();
		
		$serviceField = ListboxField::create('Services', 'ServicePage', $serviceSource);
		$serviceField->setMultiple(true);
		$fields->addFieldToTab("Root.Main", $serviceField, 'Content');

		return $fields;

	}

}

class VenuePage_Controller extends Page_Controller {


}
