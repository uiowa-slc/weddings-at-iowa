<!--Begin banner image and title-->
<div class="top-banner-image" style="background-image: url('{$ThemeDir}/images/Kinnick-banner.png')">
	<div class="row top-banner-title">
		<div class="large-12 columns text-center">
			<!-- Please call pinit.js only once per page -->
		</div>
	</div>
</div>
<!--Begin description and services-->
<div class="row">
	<div class="large-3 columns">
		<% include ShareIcons %>
	</div>
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
				<% if $Address || $PhoneNumber || $Email %>
				<div class="large-7 columns contact-info">
					<h3>Contact info:</h3>
					<p>
						<% if $ContactName %>$ContactName</br><% end_if %>
						<% if $Address %>$Address</br><% end_if %>
						<% if $CityState || $ZipCode %>$CityState $ZipCode</br></br><% end_if %>
						<% if $PhoneNumber %>$PhoneNumber</br><% end_if %>
						<% if $Email %>$Email</br><% end_if %>
						<% if $$Website %><a href="{$Website}" target="_blank">Visit website &rarr;</a><% end_if %>
					</p>
				</div><
				<% end_if %>
				<div class="large-5 columns">
					<ul class="social-list">
						<% if $Facebook %>
						<li class="social-list-item">
							<a href="$Facebook" target="_blank" class="social-list-item-link">
								<img src="{$ThemeDir}/images/socicon-custom/facebook.png" />  &nbsp; &nbsp; Facebook
							</a>
						</li>
						<% end_if %>
						<% if $Twitter %>
						<li class="social-list-item">
							<a href="$Twitter" class="social-list-item-link">
								<img src="{$ThemeDir}/images/socicon-custom/twitter.png" />  &nbsp; &nbsp; Twitter
							</a>
						</li>
						<% end_if %>
						<% if $Instagram %>
						<li class="social-list-item">
							<a href="$Instagram" target="_blank" class="social-list-item-link">
								<img src="{$ThemeDir}/images/socicon-custom/instagram.png" />  &nbsp; &nbsp; Instagram
							</a>
						</li>
						<% end_if %>
					</ul>
				</div>
			</div>
		</div>
	</div>
</article>
</div>
<!--Begin Flickity Slider-->
<% if $GalleryImages %>
	<div class="row">
		<div class="large-12 columns main-gallery">
			<% loop $GalleryImages %>
				<div class="gallery-cell">
					<!-- heres the image-->
					<img class="gallery-cell-image" src="$URL" alt="$Title" />
				</div>
			<% end_loop %>
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