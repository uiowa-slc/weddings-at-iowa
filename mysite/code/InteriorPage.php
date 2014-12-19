<?php
/**
 * Defines the HomePage page type
 */

class InteriorPage extends Page {
	private static $db = array(
		'Content1' => 'HTMLText',
		'Content2' => 'HTMLText',
		'SidebarTitle' => 'Text',

	);
	private static $has_one = array(

	);

	public function getCMSFields() {
		$fields = parent::getCMSFields();

		$fields->removeFieldFromTab("Root.Content.Main", "Content");

		$fields->addFieldToTab('Root.Content.PageContent', new HTMLEditorField('Content1', 'Content 1:'));
		$fields->addFieldToTab('Root.Content.Sidebar', new TextField('SidebarTitle', 'Sidebar Title:'));
		$fields->addFieldToTab('Root.Content.Sidebar', new HTMLEditorField('Content2', 'Sidebar Content:'));

		return $fields;
	}
}

class InteriorPage_Controller extends Page_Controller {

}
?>