<?php

class VenuePage extends Page {

	private static $many_many = array(
		'Services'      => 'ServicePage',
		'Testimonial'   => 'Testimonial',
		'GalleryImages' => 'Image',
		'Features'      => 'Feature',

	);

	public static $many_many_extraFields = array(
		'Features'   => array(
			'SortOrder' => 'Int',
		)
	);

	private static $has_one = array(
		'Building' => 'Building',

	);

	private static $db = array(

		'Address'     => 'Text',
		'CityState'   => 'Text',
		'ZipCode'     => 'Text',
		'Email'       => 'Text',
		'PhoneNumber' => 'Text',
		'Capacity'    => 'Text',
		'Cost'        => 'Text',
		'PerUnit'     => 'Varchar(100)',
		//Turn the following into dropdown or boolean fields. or Checkboxes
		'Indoors'        => 'Boolean',
		'Catering'       => 'Boolean',
		'AirConditioned' => 'Boolean',
		'ContactName'    => 'Text',
		'Website'        => 'Text',
		'Facebook'       => 'Text',
		'Instagram'      => 'Text',
		'Twitter'        => 'Text',

	);

	public function getCMSFields() {

		//Requirements::javascript('weddings-at-iowa/themes/weddings-foundation/javascript/events.js');
		$fields = parent::getCMSFields();

		$fields->addFieldToTab('Root.Main', new HeaderField('Venue Contact Information'));
		$fields->addFieldToTab('Root.Main', new TextField('ContactName'));
		$fields->addFieldToTab('Root.Main', new TextField('Address'));
		$fields->addFieldToTab('Root.Main', new TextField('CityState', 'City, State'));
		$fields->addFieldToTab('Root.Main', new TextField('ZipCode'));
		$fields->addFieldToTab('Root.Main', new TextField('Email'));
		$fields->addFieldToTab('Root.Main', new TextField('PhoneNumber'));
		$fields->addFieldToTab('Root.Main', new TextField('Website'));

		$fields->addFieldToTab('Root.Main', new HeaderField('Social Media Information'));
		$fields->addFieldToTab('Root.Main', new TextField('Facebook'));
		$fields->addFieldToTab('Root.Main', new TextField('Twitter'));
		$fields->addFieldToTab('Root.Main', new TextField('Instagram'));

		$serviceSource  = ServicePage::get()->map()->toArray();
		$buildingSource = Building::get()->map()->toArray();

		$serviceField = ListboxField::create('Services', 'Services', $serviceSource);
		$serviceField->setMultiple(true);
		$fields->addFieldToTab("Root.Main", $serviceField, 'Content');

		$buildingField = ListboxField::create('Buildings', 'Building', $buildingSource);
		// $buildingField->setMultiple(true);
		$fields->addFieldToTab("Root.Main", $buildingField, 'Content');

		$fields->addFieldToTab('Root.Attachments', UploadField::create(
				'GalleryImages',
				'Gallery images for this page',
				$this->GalleryImages()

			));

		$fields->addFieldToTab('Root.Features', new HeaderField('Required Information'));
		$fields->addFieldToTab('Root.Features', new TextField('Cost'));
		$fields->addFieldToTab('Root.Features', new DropdownField(
				'PerUnit',
				'Per:',
				array(
					'event' => 'Event',
					'day'   => 'Day',
					'hour'  => 'Hour',
				)
			));
		$fields->addFieldToTab('Root.Features', new TextField('Capacity'));
		$fields->addFieldToTab('Root.Features', new CheckboxField('Indoors'));
		$fields->addFieldToTab('Root.Features', new CheckboxField('AirConditioned'));
		$fields->addFieldToTab('Root.Features', new CheckboxField('Catering'));

		$fields->addFieldToTab('Root.Features', new HeaderField('Custom Features'));
		$fields->addFieldToTab('Root.Features', GridField::create(
				'Features',
				'Features and Specifications',
				$this->Features(),
				GridFieldConfig_RelationEditor::create()->addComponent(new GridFieldSortableRows('SortOrder'))

			));

		return $fields;

	}

	public function getRelatedVenues() {
		$venues    = VenuePage::get();
		$buildings = Building::get();

		$relatedVenues = new ArrayList();

		//find the building correlating to this venue, and get all related venues
		foreach ($buildings as $building) {
			if ($building->Title == $this->Title) {

				$buildingVenues = $building->Venues();

				$relatedVenues->merge($buildingVenues);
			}
		}

		//loop through all venues and append if its not the current venue page
		foreach ($venues as $venue) {
			if ($venue->Title != $this->Title) {
				$relatedVenues->add($venue);
			}
		}

		//remove venues that were already added
		$relatedVenues->removeDuplicates();

		return $relatedVenues;

	}

}

class VenuePage_Controller extends Page_Controller {

}
