<?php

use SilverStripe\ORM\ArrayList;
class ServiceHolderPage extends VenueHolderPage {

	public function getServiceVenues() {
		$children = $this->Children();
		$venues   = new ArrayList();

		foreach ($children as $child) {
			$childVenues = $child->Venues();
			foreach ($childVenues as $childVenue) {
				$venues->push($childVenue);
			}

		}

		$venues->removeDuplicates();

		return $venues;
	}

}
