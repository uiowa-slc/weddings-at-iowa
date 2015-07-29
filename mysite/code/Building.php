<?php
class Building extends DataObject {

	private static $has_one = array (
		'Venues' => 'VenuePage',
		
		);


	private static $db = array (
		'Title' => 'Text',
		'Description' => 'HTMLText',
		'WebsiteLink' => 'Text',

		);


}

