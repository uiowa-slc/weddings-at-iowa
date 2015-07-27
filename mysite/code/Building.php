<?php
class Building extends DataOject {

	private static $has_many = array (
		'Venues' => 'VenuePage',

		);


	private static $db = array (
		'Title' => 'Integer',
		'Description' => 'HTMLText',
		'WebsiteLink' => 'Text',

		);


}

