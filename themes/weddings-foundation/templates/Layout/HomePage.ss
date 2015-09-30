<div class="gallery homepage-hero-slider">

    <div data-pin-hover="true" class="cell lazy" data-src="{$ThemeDir}/images/home-slider-1.jpg">
    	<div class="homepage-hero-slider-content" >
	    	<p>Plan your big day, the Iowa way.</p>
	    	<a href="#" class="button large">Learn more about Danforth Chapel</a><br />
	    	<a href="//www.pinterest.com/pin/create/button/?url=http%3A%2F%2Fweddingsatiowa.com%2F&media=http%3A%2F%2Fweddingsatiowa.com%2Fassets%2FUploads%2F9622071955-25c89f8b78-k.jpg&description=Next%20stop%3A%20Pinterest" class="button" >Pin Danforth Chapel</a>
    	</div>
    </div>
    <div data-pin-hover="true" class="cell" style="background-image: url('{$ThemeDir}/images/home-slider-2.jpg')">
    	<div class="homepage-hero-slider-content">
	    	<p>Weddings Here</p>
	    	<a href="#">Learn More</a>
    	</div>
    </div>
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
</div>
--%>
<div class="row">
	<div class="large-12 columns">
		<ul class="resource-card-list">
			<h2 class="text-center section-title">Featured venues</h2>
			<% loop $Venues.Limit(4) %>
		  		<% include Card %>
		  	<% end_loop %>
		  	<p class="text-center"><a href="venues/">See all venues &rarr;</a></p>
		</ul>
		<ul class="resource-card-list">
			<h2 class="text-center section-title">Services</h2>
			 <% loop $Services.Limit(4) %>
		  		<% include Card %>
		  	<% end_loop %>
		  	<p class="text-center"><a href="services/">See all services &rarr;</a></p>
		</ul>
	</div>
</div>
<div class="testimonial-container" style="background-image: url('{$ThemeDir}/images/home-slider-2.jpg')">
	<% loop $Testimonials.Limit(1) %>
		<% include TestimonialCard %>
  	<% end_loop %>
	<p class="text-center"><a href="testimonials/">See what people are saying &rarr;</a></p>
</div>