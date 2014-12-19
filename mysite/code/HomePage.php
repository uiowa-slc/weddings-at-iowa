<?php
/**
 * Defines the HomePage page type
 */
 
class HomePage extends Page {
 private static $db = array(
   'Content1' => 'HTMLText',
   'Content2' => 'HTMLText',
   'Content3' => 'HTMLText',
   'Content4' => 'HTMLText',
  
);
   private static $has_one = array(
 
   );
   
   public function getCMSFields() {
   $fields = parent::getCMSFields();
   
   $fields->removeFieldFromTab("Root.Main","Content");
   
 	$fields->addFieldToTab('Root.LeftColumn', new HTMLEditorField('Content1','Content 1:'));
	$fields->addFieldToTab('Root.RightColumn', new HTMLEditorField('Content2','Content 2:'));
	$fields->addFieldToTab('Root.RightColumn2', new HTMLEditorField('Content3','Content 3:'));
	$fields->addFieldToTab('Root.LeftColumn2', new HTMLEditorField('Content4','Content 4:'));

    	
   return $fields;
}
}
 
class HomePage_Controller extends Page_Controller {
	public function Tabs(){
      return HomePageTab::get()->filter(array('ParentID' => $this->ID))->First();
	}	
}




?>