<?php

class VenueHolderPageController extends PageController {

  public function getVenues(){
  	
      $venues = VenuePage::get()->filter(array('ClassName' => 'VenuePage'))->sort('RAND()');;
      return $venues;

   }	
}