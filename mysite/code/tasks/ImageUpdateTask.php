<?php

use SilverStripe\Dev\BuildTask;

class ImageUpdateTask extends BuildTask {

	protected $title       = 'Image Update';
	protected $description = 'Convert associated images to Media items';

	protected $enabled = true;

	function run($request) {
		$venues = VenuePage::get();

		foreach ($venues as $venue) {
			print('working on venue: '.$venue->Title.'<br />');

			$venueImages = $venue->GalleryImages();
			foreach ($venueImages as $venueImage) {
				$newMediaItem          = new VenueMedia();
				$newMediaItem->VenueID = $venue->ID;
				$newMediaItem->ImageID = $venueImage->ID;
				$newMediaItem->write();
			}

		}
	}

}