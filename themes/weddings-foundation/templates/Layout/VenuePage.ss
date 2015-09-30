<!--Begin banner image and title-->
	<div class="top-banner-image" style="background-image: url('{$ThemeDir}/images/Kinnick-banner.png')">
		<div class="row top-banner-title">
		<div class="large-12 columns top-banner-title-text">
			<h1> $Title </h1>
		</div>
	</div>
	</div>
	

	<div class="row">

	<!--Begin description and services-->
	<div class="large-12 columns">
		<div class="large-5 columns initial-description">
			$Content
		</div>
		<div class="large-3 columns services">
			<h3>Available Services:</h3>
			<% loop $Services %>
				<div>
					$Image.SetWidth(30) <a href="$Link" class="description-links"> $Title </a>
				</div>
			<% end_loop %>
		</div>
		<div class="large-4 columns contact-info">
			<h3>Connect with us:</h3>
			<div class="large-7 columns">
				<h5><b>Contact Info:</b></h5>
				<p>
					$ContactName</br>
					$Address</br>
					$CityState $ZipCode</br></br>
					$PhoneNumber</br>
					$Email</br>
					<a href="http://{$Website}">$Website</a>
				</p>
			</div>
			<div class="large-5 columns">
				<h5><b>Social Media:</b></h5>
				<ul style="list-style-type:none; margin-left:0px">
					<li style="margin-bottom:10px">
						<a href="$Facebook" style="text-decoration:none; color: #333">
							<img src="{$ThemeDir}/images/socicon-custom/facebook.png" />  &nbsp &nbsp Facebook 
						</a>
					</li>
					<li style="margin-bottom:10px"> 
						<a href="$Facebook" style="text-decoration:none; color: #333">
							<img src="{$ThemeDir}/images/socicon-custom/twitter.png" />  &nbsp &nbsp Twitter 
						</a>
					</li>
					<li style="margin-bottom:10px">
						<a href="$Facebook" style="text-decoration:none; color: #333">
							<img src="{$ThemeDir}/images/socicon-custom/instagram.png" />  &nbsp &nbsp Instagram 
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>

	<!--Begin Flickity Slider-->
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

	<!--Begin features and specifications-->
	<div class="large-12 columns center-header">
		<h1>Features and Specifications</h1>
	</div>
	<div class="large-12 columns">
		<ul class="small-block-grid-2 medium-block-grid-3">

			<% include CostFeatureCard %>
			<% include CapFeatureCard %>
			<% include IndoorFeatureCard %>


			<% loop $Features %>
				<% include FeatureCard %>
			<% end_loop %>
		</ul>
	</div>

	<!--Begin Testimonials-->
	<div class="large-12 columns center-header">
		<h1>Testimonials</h1>
	</div>

	<!--Begin Related Venues-->
	<div class="large-12 columns center-header">
		<h1>Related Venues</h1>
	</div>
	<div class="large-12 columns">
		<ul class="resource-card-list">

			<% loop $RelatedVenues.Limit(4) %>
				<% include Card %>
			<% end_loop %>

		</ul>
	</div>
</div>
