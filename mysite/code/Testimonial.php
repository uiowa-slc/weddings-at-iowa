<?php

use SilverStripe\Assets\Image;
use SilverStripe\ORM\DataObject;

class Testimonial extends DataObject {
	private static $db = array(
		'Quote'     => 'Text',
		'Name'      => 'Text',
		'SortOrder' => 'Int',
	);

	private static $has_one = array(
		'Venue' => 'VenuePage',
		'Image' => Image::class,
	);

	private static $summary_fields = array(
		'Image.CMSThumbnail',
		'Name',
		'Quote',
	);

}