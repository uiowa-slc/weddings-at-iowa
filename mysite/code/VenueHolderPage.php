<?php
class VenueHolderPage extends Page {


}

class VenueHolderPage_Controller extends Page_Controller {

  public function getVenues(){
  	
      $venues = VenuePage::get()->filter(array('ClassName' => 'VenuePage'))->sort('RAND()');;
      return $venues;

   }	
}

