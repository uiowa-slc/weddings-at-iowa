<?php

class Testimonial extends DataObject {

	private static $belongs_many_many = array (
		'Venues' => 'VenuePage',

	);

	private static $has_one = array (
		'Photo' => 'Image',

	);

	private static $db = array (
		'Quote' => 'Text',
		'Name' => 'Text',
		
	);

}