<div class="gallery homepage-hero-slider">

    <div data-pin-hover="true" class="cell lazy" data-src="{$ThemeDir}/images/home-slider-1.jpg">
    	<div class="homepage-hero-slider-content" >
	    	<p>Plan your big day, the Iowa way.</p>
	    	<a href="#" class="button large">Learn more about Danforth Chapel</a>
    	</div>
    </div>
    <div data-pin-hover="true" class="cell" style="background-image: url('{$ThemeDir}/images/home-slider-2.jpg')">
    	<div class="homepage-hero-slider-content">
	    	<p>Weddings Here</p>
	    	<a href="#">Learn More</a>
    	</div>
    </div>
</div>
<div class="row">
	<div class="large-12 columns">
		<hr />
		<ul class="resource-card-list">
			<h2 class="text-center">Featured Venues</h2>
			<% loop $Venues.Limit(4) %>
		  		<% include Card %>
		  	<% end_loop %>
		</ul>
		<ul class="resource-card-list">
			<h2 class="text-center">Services</h2>
			 <% loop $Services.Limit(4) %>
		  		<% include Card %>
		  	<% end_loop %>
		</ul>

		<div data-pin-hover="true" class="cell lazy" style="background-image: url('{$ThemeDir}/images/home-slider-2.jpg')">
			<div class="homepage-hero-slider-content" >
			<ul class="testimonials">
				<h2 class="text-center">Featured Testimonials</h2>
				<% loop $Testimonials.Limit(1) %>
			  		<div class="text-center"> 
			  			<li class="resource-card">
							<a href='{$URLSegment}'>
							<h3>$Title</h3>
							<p> Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis.</p>
							</a>
						</li>
			  		<div> 
			  		
			  	<% end_loop %>
			</ul>
			</div>
		</div>


	</div>

</div>

<%-- 

		<ul class="resource-card-list">
			<h2 class="text-center">Featured Testimonials</h2>
			<% loop $Testimonials.Limit(4) %>
		  		<% include Card %>
		  		
		  	<% end_loop %>
		</ul> --%>