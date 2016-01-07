<% if $CoverImage %>
<!--Begin banner image and title-->
<div class="top-banner-image lazy" data-src="$CoverImage.CroppedFocusedImage(1920,1080).URL" style="background-image: url('$CoverImage.CroppedFocusedImage(640,360).URL'); background-position: $CoverImage.PercentageX% $CoverImage.PercentageY%;">
	<% include TopBar %>
	<% if $PhotoCredit %>
			<h4 style="position: absolute; right: 0; bottom: 0; padding-right: 10px; color: white; text-shadow: 2px 2px #0f0f0a;">$PhotoCredit</h4>
	<% end_if %>

</div>
<% else %>
	<% include TopBar %>
<% end_if %>
<!--Begin description and services-->
<div class="row">
	<div class="large-6 large-push-3 columns">
		<article role="main">
			<h1> $Title </h1>
			<div class="initial-description">
				<% if $Content %>$Content<% end_if %>
				<p class="text-center"><img class="description-sep" src="{$ThemeDir}/images/separator-mono2.png" nopin="nopin" /></p>
				<% if $PreferredContactInformation %>
					<div class="preferred-contact text-center">
						<% if $PreferredContactInformation == "Phone" %>
							<a href="tel:$PhoneNumber" class="btn btn-large">Call us at $PhoneNumber</a>
						<% else_if $PreferredContactInformation == "Facebook" %>
							<a href="$Facebook" class="btn btn-large">Visit our Facebook Page</a>
						<% else_if $PreferredContactInformation == "Email" %>
							<a href="mailto:$Email" class="btn btn-large">Email us</a>
						<% end_if %>
					</div>
				<% end_if %>
				</div>	
			<div class="row">		
				<div class="large-12 columns">
					<h2 class="section-title">Features <% if $Address %>&amp; Location<% end_if %></h2>
				</div>
			</div>

			<div class="row venue-features-container">
				<div class="large-6 columns <% if not $Address %>large-centered end<% end_if %>">
					<div class="text-center">
						<% include VenueFeatures %>
					</div>
				</div>
				<% if $Address %>
				<div class="large-6 columns">
						<div class="text-center">
								$AddressMap(400,300)
								<a href="//maps.google.com/?q=$FullAddress">$FullAddress</a>
							</div>
						</div>
				</div>
				<% end_if %>
			


		</article>
	</div>
	<div class="large-2 large-pull-6 columns">

		<div class="contact-info">

				<h3 class="text-center">Share this $singular_name</h3>
				<% include ShareIcons %>

				<% if $Services %>

				<h3>Recommended services:</h3>
				<ul class="services">
					<% loop $Services %>
					<li>
						<a href="$Link"><img src="$CoverImage.CroppedFocusedImage(640,360).URL" /></a>
						<h4><a href="$Link" class="description-links"> $Title </a></h4>
					</li>
					<% end_loop %>
				</ul>
				<% end_if %>
				<p class="text-center"><img src="{$ThemeDir}/images/separator-small.png" /></p>



		</div>

	</div>

		<div class="large-2 large-offset-1 columns">

				<% include VenueContactInfo %>

		</div>
	</div>


<!--Begin Flickity Slider-->
<% if $VenueMedia %>
		<div class="row">
			<div class="large-12 xlarge-10 xlarge-centered columns">
				<h2 class="section-title">Photos and videos</h2>


			<div id="venue-slider" class="flexslider">
				<ul class="slides">
				<% loop $VenueMedia %>
					<li>


						<div class="slide-content-container lazy" data-src="$Image.CroppedFocusedImage(1920,1080).AbsoluteURL" style="background-image: url('{$ThemeDir}/images/placeholder.png'); background-position: $Image.PercentageX% $Image.PercentageY%;">
						
						<% if $PhotoCredit %>
						<h4 style="position: absolute; bottom: 0px; right: 0px; padding-right: 10px; color: white; text-shadow: 2px 2px #0f0f0a;">$PhotoCredit</h4>
						<% end_if %>

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
						<img src="{$ThemeDir}/images/placeholder.png" data-src="$Image.CroppedFocusedImage(640,360).URL" nopin="nopin" class="lazy" alt="$Title" />
					</li>
				<% end_loop %>
				</ul>
			</div>
			</div>
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
	<% loop $Testimonials %>
		<% include TestimonialCard %>
	<% end_loop %>
<% end_if %>
<!--Begin Related Items-->
<section class="related-items">
	<div class="row collapse">
		<div class="large-12 columns">
			<% if $ClassName == "ServicePage" %>
				<div class="row">
					<div class="large-12 columns">
						<h2 class="section-title"><a href="services/">More Services &rarr;</a></h2>
					</div>
				</div>
				<ul class="resource-card-list">
					<% loop $AllServices.Limit(4) %>
				  		<% include Card %>
				  	<% end_loop %>	  	
				</ul>
			<% else_if $ClassName == "VenuePage" %>
				<div class="row">
					<div class="large-12 columns">
						<h2 class="section-title"><a href="venues/">More Venues &rarr;</a></h2>
					</div>
				</div>
				<ul class="resource-card-list">
					<% loop $getMoreVenues.Limit(4) %>
				  		<% include Card %>
				  	<% end_loop %>	  	
				</ul>
			<% end_if %>
		</div>
	</div>
</section>