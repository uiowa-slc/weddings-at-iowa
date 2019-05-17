<?php

use SilverStripe\Assets\Image;
use SilverStripe\AssetAdmin\Forms\UploadField;
use SilverStripe\Forms\HeaderField;
use SilverStripe\Forms\TextField;
use SilverStripe\Control\Email\Email;
use SilverStripe\Forms\DropdownField;
use SilverStripe\Forms\ListboxField;
use SilverStripe\Forms\GridField\GridFieldConfig_RelationEditor;
use Colymba\BulkUpload\BulkUploader;
use SilverStripe\Forms\GridField\GridField;
use SilverStripe\Forms\CheckboxField;
use SilverStripe\TagField\TagField;
use SilverStripe\ORM\ArrayList;
use SilverStripe\View\Requirements;
use UndefinedOffset\SortableGridField\Forms\GridFieldSortableRows;
use SilverStripe\Core\Config\Config;
class VenuePage extends Page {

	private static $db = array(

		'Email'                       => 'Text',
		'PhoneNumber'                 => 'Text',
		'Capacity'                    => 'Text',
		'Cost'                        => 'Text',
		'PerUnit'                     => 'Varchar(100)',
		'PhotoCredit'                 => 'Text',
		'PreferredContactInformation' => 'Text',
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
		'CoverImage' => Image::class,
		'Building'   => 'Building',

	);

	private static $has_many = array(

		'VenueMedia'   => 'VenueMedia',
		'Video'        => 'VideoEmbed',
		'Testimonials' => 'Testimonial',
		'VenueMedia'   => 'VenueMedia',
		'Video'        => 'VideoEmbed',
	);

	private static $many_many = array(
		'Services'      => 'ServicePage',
		'GalleryImages' => Image::class,
		'Features'      => 'Feature',
		'UseTags'       => 'UseTag',
	);

	private static $many_many_extraFields = array(
		'Features'   => array(
			'SortOrder' => 'Int',
		)
	);

	private static $singular_name = 'Venue';
	private static $plural_name   = 'Venues';

	public function getCMSFields() {

		//Requirements::javascript('weddings-at-iowa/themes/weddings-foundation/javascript/events.js');
		$fields = parent::getCMSFields();

		$fields->addFieldToTab('Root.Main', new UploadField('CoverImage', 'Cover Image (1920 x 1080)'), 'Content');

		$fields->addFieldToTab('Root.Contact', new HeaderField('Venue Contact Information', 2));
		$fields->addFieldToTab('Root.Contact', new TextField('ContactName'));
		$fields->addFieldToTab('Root.Contact', new TextField(Email::class));
		$fields->addFieldToTab('Root.Contact', new TextField('PhoneNumber'));
		$fields->addFieldToTab('Root.Contact', new TextField('Website'));

		$objects = array(
			'(Select one)' => 'Select one',
			'Phone'        => 'Phone',
			'Facebook'     => 'Facebook',
			'Email'        => Email::class);
		$fields->addFieldToTab('Root.Contact',
			new DropdownField('PreferredContactInformation', 'Preferred Contact Information', $objects));

		$fields->addFieldToTab('Root.Social', new HeaderField('Social Media Information', 2));
		$fields->addFieldToTab('Root.Social', new TextField('Facebook'));
		$fields->addFieldToTab('Root.Social', new TextField('Twitter'));
		$fields->addFieldToTab('Root.Social', new TextField('Instagram'));

		$fields->addFieldToTab('Root.Main', new TextField('PhotoCredit'));

		$serviceSource = ServicePage::get()->map()->toArray();

		$serviceField = ListboxField::create('Services', 'Services', $serviceSource);
		//$serviceField->setMultiple(true);
		$fields->addFieldToTab("Root.Main", $serviceField, 'Content');

		$buildingSource = Building::get()->map()->toArray();
		$buildingField  = DropdownField::create('BuildingID', 'Building', $buildingSource)->setEmptyString('(None)');
		$fields->addFieldToTab("Root.Main", $buildingField, 'Content');

		/*$fields->addFieldToTab('Root.Media', UploadField::create(
		'GalleryImages',
		'Gallery images for this page',
		$this->GalleryImages()

		));*/

		$mediaFieldConf = GridFieldConfig_RelationEditor::create(40);
		$mediaFieldConf->addComponent(new GridFieldSortableRows('SortOrder'));
		$mediaFieldConf->addComponent(new BulkUploader(Image::class));

		//$mediaFieldConf->removeComponentsByType('GridFieldAddNewButton')->addComponent(new GridFieldAddNewMultiClass());
		//$mediaFieldConf->setClasses(array('Image', 'VideoEmbed'));

		$fields->addFieldToTab('Root.Media', new GridField('VenueMediaObjects', 'Photos and Videos', $this->VenueMedia(), $mediaFieldConf));

		$testimonialFieldConf = GridFieldConfig_RelationEditor::create(5);
		$testimonialFieldConf->addComponent(new GridFieldSortableRows('SortOrder'));
		$fields->addFieldToTab('Root.Testimonials', new GridField('Testimonials', 'Testimonials', $this->Testimonials(), $testimonialFieldConf));

		$fields->addFieldToTab('Root.Features', new HeaderField('Required Information', 3));
		$fields->addFieldToTab('Root.Features', new TextField('Capacity'));
		$fields->addFieldToTab('Root.Features', new CheckboxField('Indoors'));
		$fields->addFieldToTab('Root.Features', new CheckboxField('AirConditioned'));
		$fields->addFieldToTab('Root.Features', new CheckboxField('Catering'));
		$useTagField = TagField::create('UseTags', 'This venue is used for (ex: Ceremonies, Receptions, etc):', UseTag::get(), $this->UseTags())
		                                                                                                                            ->setShouldLazyLoad(true)// tags should be lazy loaded
		                                                                                                                            ->setCanCreate(true);// new tag DataObjects can be created
		$fields->addFieldToTab("Root.Features", $useTagField);

		$fields->addFieldToTab('Root.Features', new HeaderField('Custom Features', 3));
		$fields->addFieldToTab('Root.Features', GridField::create(
				'Features',
				'Features and Specifications',
				$this->Features(),
				GridFieldConfig_RelationEditor::create()->addComponent(new GridFieldSortableRows('SortOrder'))

			));

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

	public function getMoreVenues(){

		$filteredVenues = new ArrayList();

		$venues = VenuePage::get()->filter(array('ClassName' => 'VenuePage'))->sort('RAND()');

		foreach ($venues as $venue) {
			if ($venue->Title != $this->Title) {

				$filteredVenues->add($venue);

			}
		}

		return $filteredVenues;
	}

    public function CustomAddressMap($width = 320, $height = 240, $scale = 1)
    {

        $data = $this->owner->customise(array(
            'Width'    => $width,
            'Height'   => $height,
            'Scale'    => $scale,
            'Address'  => rawurlencode($this->getFullAddress()),
            'Key'      => Config::inst()->get('Symbiote\Addressable\GoogleGeocodeService', 'google_api_key')
        ));
        return $data->renderWith('Symbiote/Addressable/AddressMap');
    }
}
