<?php

class Testimonial extends DataObject {

	private static $belongs_many_many = array (
		'Venues' => 'VenuePage',

	);

	private static $db = array (
		'Quote' => 'Text',
		'Name' => 'Text',
		'Photo' => 'Photo',
	);

}