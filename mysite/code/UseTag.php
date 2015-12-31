<?php

class UseTag extends DataObject {

	private static $belongs_many_many = array (
		
		'VenuePages' => 'VenuePage',

	);

	private static $db = array (
		'Title' => 'Varchar',
	);


	public function Link() {
		return 'useTag/'.$this->URLSegment;
	}

	private static $extensions = array(
		'UseTagURLSegmentExtension',
	);

}