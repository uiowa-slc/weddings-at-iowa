<?php

use SilverStripe\Forms\GridField\GridFieldConfig_RecordEditor;
use SilverStripe\Forms\GridField\GridField;

/**
 * Defines the HomePage page type
 */

class HomePage extends Page {
	private static $db = array(
		'Content1' => 'HTMLText',
		'Content2' => 'HTMLText',
		'Content3' => 'HTMLText',
		'Content4' => 'HTMLText',

	);

	public function getCMSFields() {
		$fields = parent::getCMSFields();

		$fields->removeByName('Content');

		$homePageFeatureGridFieldConfig = GridFieldConfig_RecordEditor::create();
		$homePageFeatureGridFieldConfig->addComponent(new GridFieldSortableRows('SortOrder'));
		$homePageFeatureGridField = new GridField("HomePageFeature", "Features below the background image (Only the first three are shown)", HomePageFeature::get(), $homePageFeatureGridFieldConfig);
		$fields->addFieldToTab("Root.Main", $homePageFeatureGridField);
		return $fields;
	}
}

?>