<div class="gallery homepage-hero-slider">

<% loop $Features %>
    <div data-pin-hover="true" class="cell">
    	
    	<div class="feature-bg" style="background-image: url('$Image.CroppedFocusedImage(1920,1080).URL'); background-position: $CoverImage.PercentageX% $CoverImage.PercentageY%;">
    	
			<div class="feature-text">
		    	<a href="$Link"><h2>$Title</h2>
		    	$Content
		    	<p>Continue reading...</p>
		    	</a>
		    	<p><img src="{$ThemeDir}/images/separator-small.png" /></p>
		    	<% include ShareIcons %>
			</div>

		</div>
		
	</div>
<% end_loop %>
</div>

<% if $AllTestimonials %>
	<% loop $AllTestimonials.Limit(1) %>
		<div class="testimonial">
			<div class="row collapse">
				<div class="$EvenOdd large-7 columns">

					<a href="$Venue.Link"><img width="760" height="507" src="$Image.CroppedFocusedImage(760,507).URL" nopin="nopin" class="photo"></a>
				</div>
				<div class="large-5 columns text-center">
					<h2 class="section-title"><a href="$Venue.Link">Testimonial: $Venue.Title &rarr;</a></h2>
					<a href="$Venue.Link">
					<blockquote>$Quote</blockquote>
					<p class="text-center"><img src="{$ThemeDir}/images/separator2.png" /></p>
					<p class="author">$Name</p>
				</div>
			</div>
		</div>
	<% end_loop %>
<% end_if %>
<%--<div class="pic-wrapper">
	<div class="pic-wrapper-content-container">
		<div class="row">
			<div class="large-12 columns">
				<h2 class="text-center">Your big day, the Iowa way.</h2>
				<p class="text-center">Featured venues: <a href="#">Danforth Chapel</a>, <a href="#">Iowa Memorial Union</a></p>
			</div>
		</div>
	</div>
  <a href="#"><figure class="pic-1"></figure></a>
   <a href="#"><figure class="pic-2"></figure></a>
   <a href="#"><figure class="pic-3"></figure></a>
   <a href="#"><figure class="pic-4"></figure></a>
</div>--%>

<div class="row collapse">
	<div class="large-12 columns">
		<div class="row">
			<div class="large-12 columns">
				<h2 class="section-title"><a href="venues/">Venues &rarr;</a></h2>
			</div>
		</div>
		<ul class="resource-card-list">
			
			<% loop $AllVenues.Limit(4) %>
		  		<% include Card %>
		  	<% end_loop %>
		  	
		</ul>
		<div class="row">
			<div class="large-12 columns">
				<h2 class="section-title"><a href="services/">Services &rarr;</a></h2>
			</div>
		</div>
		<ul class="resource-card-list">
			
			 <% loop $AllServices.Limit(4) %>
		  		<% include Card %>
		  	<% end_loop %>
		</ul>
		<!--<p class="text-center"><a href="services/">See all services &rarr;</a></p>-->
	</div>
</div>

<%--<div class="testimonial-container" style="background-image: url('{$ThemeDir}/images/home-slider-2.jpg')">
	<% loop $Testimonials.Limit(1) %>
		<% include TestimonialCard %>
  	<% end_loop %>
</div>
<p class="text-center"><a href="testimonials/">See what people are saying &rarr;</a></p>--%>