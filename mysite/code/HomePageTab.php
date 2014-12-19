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

		$fields->addFieldToTab('Root.Main', new TextField('LocationTitle', 'Bold First Title:'));
		$fields->addFieldToTab('Root.Main', new TextField('LocationLink', 'Location URL'));
		$fields->addFieldToTab('Root.Main', new HTMLEditorField('LocationText', 'Secondary Title:'));
		$fields->addFieldToTab('Root.Images', new UploadField('FeatureImage', 'Feature Box Image'));
		$fields->removeFieldFromTab("Root.Content", "Content");

		return $fields;

	}

}

class HomePageTab_Controller extends Page_Controller {

	public function init() {
		parent::init();

	}

}
?>