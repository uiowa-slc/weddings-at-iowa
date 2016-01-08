<?php
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

class ServiceHolderPage_Controller extends VenueHolderPage_Controller {

}