<?php

class VenuePage extends Page {

	private static $db = array(

		'Address'     => 'Text',
		'CityState'   => 'Text',
		'ZipCode'     => 'Text',
		'Email'       => 'Text',
		'PhoneNumber' => 'Text',
		'Capacity'    => 'Text',
		'Cost'        => 'Text',
		'PerUnit'     => 'Varchar(100)',
		'PhotoCredit' => 'Text',
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

	private static $has_one = array(
		'CoverImage' => 'Image',
		'Building'   => 'Building',
	);

	private static $has_many = array(
		'Testimonials' => 'Testimonial',
		'VenueMedia'   => 'VenueMedia',
		'Video'        => 'VideoEmbed',
	);

	private static $many_many = array(
		'Services'      => 'ServicePage',
		'GalleryImages' => 'Image',
		'Features'      => 'Feature',
		'UseTags' => 'UseTag',
	);

	public static $many_many_extraFields = array(
		'Features'   => array(
			'SortOrder' => 'Int',
		)
	);

	private static $singular_name = 'Venue';

	public function getCMSFields() {

		//Requirements::javascript('weddings-at-iowa/themes/weddings-foundation/javascript/events.js');
		$fields = parent::getCMSFields();

		$fields->addFieldToTab('Root.Main', new UploadField('CoverImage', 'Cover Image (1920 x 1080)'), 'Content');

		$fields->addFieldToTab('Root.Contact', new HeaderField('Venue Contact Information'));
		$fields->addFieldToTab('Root.Contact', new TextField('ContactName'));
		$fields->addFieldToTab('Root.Contact', new TextField('Address'));
		$fields->addFieldToTab('Root.Contact', new TextField('CityState', 'City, State'));
		$fields->addFieldToTab('Root.Contact', new TextField('ZipCode'));
		$fields->addFieldToTab('Root.Contact', new TextField('Email'));
		$fields->addFieldToTab('Root.Contact', new TextField('PhoneNumber'));
		$fields->addFieldToTab('Root.Contact', new TextField('Website'));

		$fields->addFieldToTab('Root.Social', new HeaderField('Social Media Information'));
		$fields->addFieldToTab('Root.Social', new TextField('Facebook'));
		$fields->addFieldToTab('Root.Social', new TextField('Twitter'));
		$fields->addFieldToTab('Root.Social', new TextField('Instagram'));

		$fields->addFieldToTab('Root.Main', new TextField('PhotoCredit'));

		$serviceSource = ServicePage::get()->map()->toArray();

		$serviceField = ListboxField::create('Services', 'Services', $serviceSource);
		$serviceField->setMultiple(true);
		$fields->addFieldToTab("Root.Main", $serviceField, 'Content');





		$buildingSource = Building::get()->map()->toArray();
		$buildingField  = DropdownField::create('Buildings', 'Building', $buildingSource)->setEmptyString('(None)');
		$fields->addFieldToTab("Root.Main", $buildingField, 'Content');

		/*$fields->addFieldToTab('Root.Media', UploadField::create(
		'GalleryImages',
		'Gallery images for this page',
		$this->GalleryImages()

		));*/

		$mediaFieldConf = GridFieldConfig_RelationEditor::create(40);
		$mediaFieldConf->addComponent(new GridFieldSortableRows('SortOrder'));
		$mediaFieldConf->addComponent(new GridFieldBulkUpload('Image'));

		//$mediaFieldConf->removeComponentsByType('GridFieldAddNewButton')->addComponent(new GridFieldAddNewMultiClass());
		//$mediaFieldConf->setClasses(array('Image', 'VideoEmbed'));

		$fields->addFieldToTab('Root.Media', new GridField('VenueMediaObjects', 'Photos and Videos', $this->VenueMedia(), $mediaFieldConf));

		$testimonialFieldConf = GridFieldConfig_RelationEditor::create(5);
		$testimonialFieldConf->addComponent(new GridFieldSortableRows('SortOrder'));
		$fields->addFieldToTab('Root.Testimonials', new GridField('Testimonials', 'Testimonials', $this->Testimonials(), $testimonialFieldConf));

		$fields->addFieldToTab('Root.Features', new HeaderField('Required Information'));
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

		$useTagField = TagField::create('UseTags', 'Use Tags', UseTag::get(),$this->UseTags())
		    ->setShouldLazyLoad(true) // tags should be lazy loaded
		    ->setCanCreate(true);     // new tag DataObjects can be created
		$fields->addFieldToTab("Root.Features", $useTagField, 'Features');

		return $fields;

	} 

	public function getRelatedVenues() {
		$venues    = VenuePage::get()->filter(array('CoverImageID:not' => 0));
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
