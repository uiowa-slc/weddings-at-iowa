<?php

class Page extends SiteTree {

	private static $db = array(
	);

	private static $has_one = array(
	);

}

class Page_Controller extends ContentController {

	public function init() {
		parent::init();

		// Note: you should use SS template require tags inside your templates
		// instead of putting Requirements calls here.  However these are
		// included so that our older themes still work
		Requirements::themedCSS("form");

	}

	function RSSFeedImport($numItems) {

		$feedURL = "feed://uima.blogspot.com/feeds/posts/default?alt=rss";
		$output = new DataObjectSet();

		include_once Director::getAbsFile(SAPPHIRE_DIR . '/thirdparty/simplepie/SimplePie.php');

		$t1 = microtime(true);
		$feed = new SimplePie($feedURL, TEMP_FOLDER);
		$feed->init();
		if ($items = $feed->get_items(0, $numItems)) {
			foreach ($items as $item) {

				// Cast the Date
				$date = new Date('Date');
				$date->setValue($item->get_date());

				// Cast the Title
				$title = new Text('Title');
				$title->setValue($item->get_title());

				// Cast the description and strip
				$desc = new Text('Description');
				$desc->setValue(strip_tags($item->get_description()));

				$output->push(new ArrayData(array(
					'Title' => $title,
					'Date' => $date,
					'Link' => $item->get_link(),
					'Description' => $desc,
				)));
			}
			return $output;
		}
	}

	/**
	 * Site search form
	 */
	function SearchForm() {
		$searchText = isset($_REQUEST['Search']) ? $_REQUEST['Search'] : 'Search';
		$fields = new FieldSet(
			new TextField("Search", "", $searchText)
		);
		$actions = new FieldSet(
			new FormAction('results', 'Search')
		);

		return new SearchForm($this, "SearchForm", $fields, $actions);
	}

	/**
	 * Process and render search results
	 */
	function results($data, $form) {
		$data = array(
			'Results' => $form->getResults(),
			'Query' => $form->getSearchQuery(),
			'Title' => 'Search Results',
		);

		return $this->customise($data)->renderWith(array('Page_results', 'Page'));
	}
	function randomImage() {
		/*$imageNumber = rand(1,20);
		$imageName = '<img src="/themes/dpa/images/background_'.$imageNumber.'.jpg" class="bg" />';

		return $imageName;*/
		return DataObject::get('BackgroundImage', null, 'RAND()', null, 1);

	}

}

?>