<div class="gallery homepage-hero-slider">

<% loop $Features %>
    <div data-pin-hover="true" class="cell">
    	
    	<div class="feature-bg" style="background-image: url('$Image.URL');">
    	
			<div class="feature-text">
		    	<a href="$Link"><h2>$Title</h2>
		    	$Content
		    	<p>Continue reading...</p>
		    	</a>
		    	<% include ShareIcons %>
			</div>

		</div>
		
	</div>
<% end_loop %>
</div>

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
		<ul class="resource-card-list">
			<h2 class="text-center section-title">More Venues</h2>
			<% loop $Venues.Limit(4) %>
		  		<% include Card %>
		  	<% end_loop %>
		  	
		</ul>
		<p class="text-center"><a href="venues/">See all venues &rarr;</a></p>
		<ul class="resource-card-list">
			<h2 class="text-center section-title">Services</h2>
			 <% loop $Services.Limit(4) %>
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