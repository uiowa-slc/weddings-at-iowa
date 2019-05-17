<?php

use SilverStripe\CMS\Controllers\ContentController;
use SilverStripe\View\Requirements;
class PageController extends ContentController
{
    /**
     * An array of actions that can be accessed via a request. Each array element should be an action name, and the
     * permissions or conditions required to allow the user to access it.
     *
     * <code>
     * [
     *     'action', // anyone can access this action
     *     'action' => true, // same as above
     *     'action' => 'ADMIN', // you must have ADMIN permissions to access this action
     *     'action' => '->checkAction' // you can only access this action if $this->checkAction() returns true
     * ];
     * </code>
     *
     * @var array
     */
    private static $allowed_actions = [];

    protected function init() {
        parent::init();

        // Note: you should use SS template require tags inside your templates
        // instead of putting Requirements calls here.  However these are
        // included so that our older themes still work
        // Requirements::themedCSS("form");

    }
    public function AllVenues() {
        $venues = VenuePage::get()->filter(array('ClassName' => 'VenuePage'))->sort('RAND()');
        return $venues;

    }

    public function AllServices() {
        $services = ServicePage::get()->filter(array('ClassName' => 'ServicePage'))->sort('RAND()');
        return $services;
    }

    public function AllTestimonials() {
        $testimonials = Testimonial::get()->sort('RAND()');
        return $testimonials;
    }
}
