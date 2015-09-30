<?php

class Feature extends DataObject {

	private static $belongs_many_many = array (
		'Feature' => 'VenuePage',

	);

	private static $has_one = array (

		'VenuePage' => 'VenuePage',
		'Image' => 'Image',
	);

	private static $db = array (
		'Title' => 'Varchar',
		'Content' => 'HTMLText',
		'Website' => 'Varchar'
		
	);

	private static $field_labels = array (
		'Image.CMSThumbnail' => 'Image'
	);

	private static $summary_fields = array (
		'Image.CMSThumbnail',
		'Title',
		'Content',
		'Website',
	);
	/*public function getCMSFields() {
		return FieldList::create(
			UploadField::create('Thumbnail'),
			TextField::create('Title'),
			TextField::create('Content'),
			TextField::create('Website')
		);
	}*/

}