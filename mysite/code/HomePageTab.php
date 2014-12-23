<?php
/**
 * Defines the Minisite page type
 */
class HomePageTab extends SiteTree {

	private static $defaults = array();

	private static $db = array(
		'LocationTitle' => 'Text',
		'LocationText' => 'HTMLText',
		'LocationLink' => 'Text',
	);

	private static $has_one = array(
		'FeatureImage' => 'Image',

	);

	public function getCMSFields() {
		$fields = parent::getCMSFields();

		//$fields->addFieldToTab('Root.Main', new TextField('LocationTitle', 'Location name:'));
		$fields->addFieldToTab('Root.Main', new TextField('LocationLink', 'Location URL'));
		$fields->addFieldToTab('Root.Main', new UploadField('FeatureImage', 'Location Large Image'));
		$fields->addFieldToTab('Root.Main', new HTMLEditorField('LocationText', 'Location text:'));
		$fields->removeByName("Content");

		return $fields;

	}

}

class HomePageTab_Controller extends Page_Controller {

	public function init() {
		parent::init();

	}

}
?>