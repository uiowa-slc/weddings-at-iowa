<?php
class ServiceHolderPage extends Page {



}

class ServiceHolderPage_Controller extends Page_Controller {
   public function getServices(){
      $services = ServicePage::get();
      return $services;
   }
}