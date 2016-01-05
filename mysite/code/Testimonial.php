<?php

class Testimonial extends DataObject {
	private static $db = array(
		'Quote'     => 'Text',
		'Name'      => 'Text',
		'SortOrder' => 'Int',
	);

	private static $has_one = array(
		'Venue' => 'VenuePage',
		'Image' => 'Image',
	);

	private static $summary_fields = array(
		'Image.CMSThumbnail',
		'Name',
		'Quote',
	);

}