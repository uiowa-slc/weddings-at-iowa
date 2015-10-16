<!--Begin banner image and title-->
<div class="top-banner-image" style="background-image: url('{$ThemeDir}/images/Kinnick-banner.png')">
	<div class="row top-banner-title">
		<div class="large-12 columns top-banner-title-text">
			<h1> $Title </h1>
		</div>
	</div>
</div>




<!--Begin description and services-->
<div class="row">
	<% if $Content %>
	<div class="large-5 columns initial-description">
		$Content
	</div>
	<% end_if %>
	<% if $Services %>
	<div class="large-3 columns services">
		<h3>Available Services:</h3>
		<% loop $Services %>
			<div>
				$Image.SetWidth(30) <a href="$Link" class="description-links"> $Title </a>
			</div>
		<% end_loop %>
	</div>
	<% end_if %>
	<div class="large-4 columns contact-info">
		<div class="row">
			<div class="large-12 columns block-header-container">
				<h3 class="text-center">Connect with us:</h3>
			</div>
		</div>

		<div class="row">
		
			<% if $Address || $PhoneNumber || $Email %>
			<div class="large-7 columns large-centered">
				<h4><b>Contact Info:</b></h4>
				<p>
					$ContactName</br>
					$Address</br>
					$CityState $ZipCode</br></br>
					$PhoneNumber</br>
					$Email</br>
					<a href="http://{$Website}">$Website</a>
				</p>
			</div>
			<% end_if %>
			<div class="large-5 columns large-centered">
				<ul class="social-list">
					<li class="social-list-item">
						<a href="$Facebook" class="social-list-item-link">
							<img src="{$ThemeDir}/images/socicon-custom/facebook.png" />  &nbsp &nbsp Facebook 
						</a>
					</li>
					<li class="social-list-item"> 
						<a href="$Facebook" class="social-list-item-link">
							<img src="{$ThemeDir}/images/socicon-custom/twitter.png" />  &nbsp &nbsp Twitter 
						</a>
					</li>
					<li class="social-list-item">
						<a href="$Facebook" class="social-list-item-link">
							<img src="{$ThemeDir}/images/socicon-custom/instagram.png" />  &nbsp &nbsp Instagram 
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>

<!--Begin Flickity Slider-->
<div class="row">
	<div class="large-12 columns main-gallery">
		<% if $GalleryImages %>
			<% loop $GalleryImages %>	
				<div class="gallery-cell">
					<!-- heres the image-->
					<img class="gallery-cell-image" src="$URL" alt="$Title" />
				</div>
			<% end_loop %>
		<% end_if %>
	</div>
</div>

<!--Begin features and specifications-->
<div class="row">
	<div class="large-12 columns center-header">
		<h1>Features and Specifications</h1>
	</div>
</div>
<div class="row">
	<div class="large-12 columns">
		<ul class="small-block-grid-2 medium-block-grid-3 features">

			<% include CostFeatureCard %>
			<% include CapFeatureCard %>
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
		<h1>Related Venues</h1>
	</div>
</div>
<div class="row">
	<div class="large-12 columns">
		<ul class="resource-card-list">

			<% loop $RelatedVenues.Limit(4) %>
				<% include Card %>
			<% end_loop %>

		</ul>
	</div>
</div>

