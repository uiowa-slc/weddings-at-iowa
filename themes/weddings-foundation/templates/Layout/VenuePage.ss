<% if $CoverImage %>
<!--Begin banner image and title-->
<div class="top-banner-image" style="background-image: url('$CoverImage.URL')">
	<div class="row top-banner-title">
		<div class="large-12 columns text-center">
			<!-- Please call pinit.js only once per page -->
		</div>
	</div>
</div>
<% end_if %>
<!--Begin description and services-->
<div class="row">

	<div class="large-6 large-centered columns end">
		<article>
			<h1> $Title </h1>
			<div class="initial-description">
				<% if $Content %>$Content<% end_if %>
			</div>
			<% if $Services %>
			<h3>Available services:</h3>
			<ul class="services">
				<% loop $Services %>
				<li>
					$Image.SetWidth(30) <a href="$Link" class="description-links"> $Title </a>
				</li>
				<% end_loop %>
			</ul>
			<% end_if %>
			<% if $Address || $PhoneNumber || $Email || $Facebook || $Twitter || $Instagram %>
			<div class="row">
				<div class="large-12 columns block-header-container">
					<h3 class="text-center">Connect with {$Title}</h3>
				</div>
			</div>
			<% end_if %>
			<div class="row">
				<% include VenueContactInfo %>
				<% include VenueSocialMedia %>				
			</div>
			<% include ShareIcons %>
			</article>
		</div>
	</div>


<!--Begin Flickity Slider-->
<% if $GalleryImages %>
	<div class="row">
		<div class="large-12 columns">
			<h1 class="text-center">Photos</h1>
			<div class="gallery">
				<% loop $GalleryImages %>
					<div class="gallery-cell">
						<!-- heres the image-->
						<img class="gallery-cell-image" src="$Fill(1920,1080).URL" alt="$Title" />
					</div>
				<% end_loop %>
			</div>
		</div>
	</div>

<% end_if %>
<!--Begin features and specifications-->
<div class="row">
	<div class="large-12 columns center-header">
		<h1>Features and specifications</h1>
	</div>
</div>
<div class="row">
	<div class="large-12 columns">
		<ul class="small-block-grid-2 medium-block-grid-3 features text-center">
			<% if $Cost %><% include CostFeatureCard %><% end_if %>
			<% if $Capacity %><% include CapFeatureCard %><% end_if %>
			<% include IndoorFeatureCard %>
			<% loop $Features %>
			<% include FeatureCard %>
			<% end_loop %>
		</ul>
	</div>
</div>
<!--Begin Testimonials-->
<% if $Testimonials %>
<div class="row">
	<div class="large-12 columns center-header">
		<h1>Testimonials</h1>
	</div>
</div>
<% end_if %>
<!--Begin Related Venues-->
<div class="row">
	<div class="large-12 columns center-header">
		<h1>Related venues</h1>
	</div>
</div>
<div class="row">
	<div class="large-12 columns">
		<ul class="resource-card-list text-center">
			<% loop $RelatedVenues.Limit(4) %>
			<% include Card %>
			<% end_loop %>
		</ul>
	</div>
</div>