<?php
class ServicePage extends Page {

	private static $belongs_many_many = array (
		'Venues' => 'VenuePage'
	);

	private static $has_one = array (
		'Image' => 'Image'
	);
	
	public function getCMSFields() {

		$fields = parent::getCMSFields();


		$venueSource = VenuePage::get()->map()->toArray();
		

		$venueField = ListboxField::create('Venues', 'VenuePage', $venueSource);
		$venueField->setMultiple(true);
		$fields->addFieldToTab("Root.Attachments", $Image = UploadField::create('Image', 'Thumbnail (PNG only)'));
		$fields->addFieldToTab("Root.Main", $venueField, 'Content');


		$Image
			->setFolderName('Thumbnail-images')
			->getValidator()->setAllowedExtensions(array('png'));


		return $fields;

	}
	
}

class ServicePage_Controller extends Page_Controller {


}