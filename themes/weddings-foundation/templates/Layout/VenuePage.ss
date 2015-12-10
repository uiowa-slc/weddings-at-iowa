<% if $CoverImage %>
<!--Begin banner image and title-->
<div class="top-banner-image" style="background-image: url('$CoverImage.URL')">
	<% include TopBar %>
	<div class="row top-banner-title">
		<div class="large-12 columns text-center">
			<!-- Please call pinit.js only once per page -->
		</div>
	</div>
</div>
<% end_if %>
<!--Begin description and services-->
<div class="row">

	<div class="large-2 columns">
		<div class="contact-info">

				<h3 class="text-center">Share this $singular_name</h3>
				<% include ShareIcons %>

				<% if $Services %>
				<hr />
				<h3>Recommended services:</h3>
				<ul class="services">
					<% loop $Services %>
					<li>
						$Image.SetWidth(30) <a href="$Link" class="description-links"> $Title </a>
					</li>
					<% end_loop %>
				</ul>
				<% end_if %>
		</div>

	</div>
	<div class="large-6 large-offset-1 columns">
		<article>
			<h1> $Title </h1>
			<div class="initial-description">
				<% if $Content %>$Content<% end_if %>
			</div>
			<% if $Services %>
			<div class="services">

			</div>
			<% end_if %>
			<% if $Address || $PhoneNumber || $Email || $Facebook || $Twitter || $Instagram %>
			<% end_if %>

			</article>
		</div>
		<div class="large-2 large-offset-1 columns">

				<% include VenueContactInfo %>

		</div>
	</div>


<!--Begin Flickity Slider-->
<% if $GalleryImages %>
			<div id="venue-slider" class="flexslider">
				<ul class="slides">
				<% loop $VenueMedia %>
					<li>


						<div class="slide-content-container" style="background-image: url('$Image.Fill(1920,1080).AbsoluteURL');">

						<% if $MediaEmbed %>

							$MediaEmbed
						<% else %>
						<a data-pin-do="buttonPin" href="https://www.pinterest.com/pin/create/button/?url=$AbsoluteLink&media=$Image.Fill(600,338).AbsoluteURL&description=$Title" data-pin-custom="true" class="card-pin pin-screen">
								<img src="{$ThemeDir}/images/pin.png" width="100" height="100" data-pin-nopin="true">
						</a>

						<% end_if %>

						</div>
					</li>
				<% end_loop %>
				</ul>
			</div>
			<div id="venue-carousel" class="flexslider">
				<ul class="slides">
				<% loop $VenueMedia %>
					<li>
						<!-- heres the image-->
						<img src="$Image.CroppedFocusedImage(640,360).URL" alt="$Title" />
					</li>
				<% end_loop %>
				</ul>
			</div>

<% end_if %>
<%--
<!--Begin features and specifications-->
<div class="row">
	<div class="large-12 columns center-header">
		<% loop $VenueMedia %>
			$Image <br />
			$MediaEmbed

		<% end_loop %>
	</div>
</div>

--%>
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
		<h1>You might also like:</h1>
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