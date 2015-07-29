<?php

class BuildingAdmin extends ModelAdmin {

	private static $menu_title = 'Buildings';

	private static $url_segment= 'buildings';

	private static $managed_models = array (
		'Building',
		);

}