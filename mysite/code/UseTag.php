<?php

class UseTag extends DataObject {

	private static $belongs_many_many = array (
		'UseTag' => 'VenuePage',

	);

	private static $db = array (
		'Title' => 'Varchar',
	);


	public function Link() {
		return 'useTag/'.$this->URLSegment;
	}

}