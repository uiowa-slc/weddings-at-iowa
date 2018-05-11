<?php
class HomePageController extends PageController {

	public function getFeatures() {
		return HomePageFeature::get();
	}



}