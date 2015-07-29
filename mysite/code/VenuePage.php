<?php

class VenuePage extends Page {

	private static $many_many = array (
		'Services' => 'ServicePage',
		'Testimonial' => 'Testimonial',


	);

	private static $has_one = array (
		'Building' => 'Building',
		
	);

	private static $db = array (

		'Address' => 'Text',
		'Email' => 'Text',
		'PhoneNumber' => 'Text',
		'Features' => 'HTMLText',
		'Overview' => 'Text',
		'Capacity' => 'Text',
		'Cost' => 'Text',
		'Website' => 'Text',

	);

	public function getCMSFields() {

		$fields = parent::getCMSFields();


		$fields->addFieldToTab('Root.Main', new TextField('Address'));
		$fields->addFieldToTab('Root.Main', new TextField('Email'));
		$fields->addFieldToTab('Root.Main', new TextField('PhoneNumber'));
		$fields->addFieldToTab('Root.Main', new HTMLEditorField('Features'));
		$fields->addFieldToTab('Root.Main', new TextField('Overview'));
		$fields->addFieldToTab('Root.Main', new TextField('Capacity'));
		$fields->addFieldToTab('Root.Main', new TextField('Cost'));
		$fields->addFieldToTab('Root.Main', new TextField('Website'));




		$serviceSource = ServicePage::get()->map()->toArray();
		$buildingSource = Building::get()->map()->toArray();
		
		$serviceField = ListboxField::create('Services', 'ServicePage', $serviceSource);
		$serviceField->setMultiple(true);
		$fields->addFieldToTab("Root.Main", $serviceField, 'Content');

		$buildingField = ListboxField::create('Buildings', 'Building', $buildingSource);
		// $buildingField->setMultiple(true);
		$fields->addFieldToTab("Root.Main", $buildingField, 'Content');

		return $fields;

	}

}

class VenuePage_Controller extends Page_Controller {


}
