<?php

use SilverStripe\Forms\ListboxField;
use SilverStripe\Forms\TextField;
use SilverStripe\Forms\FieldList;
use SilverStripe\ORM\DataObject;
class Building extends DataObject {

	private static $has_many = array(
		'Venues' => 'VenuePage',

	);

	private static $db = array(
		'Title'       => 'Text',
		'Description' => 'HTMLText',
		'WebsiteLink' => 'Text',

	);

	private static $summary_fields = array(
		'Title',
		//'Venues'
	);

	public function getCMSFields() {
		$relatedBuildings = function () {
			return VenuePage::get()->map()->toArray();
		};
		$buildingListboxField = ListboxField::create('Venues', 'Related venues', $relatedBuildings())
			->setMultiple(true);
		return new FieldList(
			new TextField('Title', 'Title'),
			$buildingListboxField
		);
	}
}
