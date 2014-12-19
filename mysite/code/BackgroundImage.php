<?php
/**
 * Defines the Minisite page type
 */
class BackgroundImage extends Page {

	private static $defaults = array();

	private static $db = array(
		'PhotoTitle' => 'Text',
		'PhotoCredit' => 'Text',
	);

	private static $has_one = array(
		'BGImage' => 'Image',
	);

	function getCMSFields() {
		$fields = parent::getCMSFields();
		$fields->addFieldToTab('Root.Content.Main', new UploadField('BGImage', 'Image 1024x628 pixels'));
		$fields->addFieldToTab('Root.Content.Main', new TextField('PhotoTitle', 'Photo title '));
		$fields->addFieldToTab('Root.Content.Main', new TextField('PhotoCredit', 'Photo Credit '));
		$fields->removeFieldFromTab('Root.Content', 'Content');

		return $fields;
	}
}

class BackgroundImage_Controller extends Page_Controller {
	public function init() {
		parent::init();

	}
}
?>