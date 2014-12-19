<% loop $Children %>
	<section class="$URLSegment $FirstLast" style="background-image: url('$FeatureImage.URL');" id="{$URLSegment}">
		<div class="content-container">
			<div class="row">
				<div class="large-8 <% if $First %>large-push-4<% end_if %> columns">
					<h2>$Title</h2>
					<div class="location-text">$LocationText.Summary(100) <a href="$LocationLink">Learn More</a></div>
					<ul class="button-group show-for-large-up round">
						<li><a href="http://imu.uiowa.edu/event-services/weddings/" class="button small" target="_blank">Iowa Memorial Union</a></li>
						<li><a href="http://catering.uiowa.edu/weddings" class="button small" target="_blank">University Catering</a></li>
						<li><a href="http://iowahousehotel.com/" class="button small" target="_blank">Iowa House Hotel</a></li>
						<li><a href="http://uclub.uiowa.edu/weddings/" class="button small" target="_blank">The University Club</a></li>
					</ul>
					<div class="mobile-buttons hide-for-large-up">
						<hr />
						<a href="#">Iowa Memorial Union</a>, 
						<a href="#">University Catering</a>, 
						<a href="#">Iowa House Hotel</a>, 
						<a href="#">The University Club</a>
					</div>
				</div>
				<div class="large-4 <% if $First %>large-pull-8<% end_if %> columns">
				<div class="logo-container clearfix">
					<img src="{$ThemeDir}/images/logo.png" class="logo" alt="Logo for Weddings at Iowa" />
				</div>
			</div>
		</div>
	</section>
<% end_loop %>
<div class="global-nav show-for-large-up">
	<a href="http://uiowa.edu/" class="uiowa" target="_blank"><img src="{$ThemeDir}/images/uiowa.png" /></a>
</div>
<div class="show-for-large-up"><img src="{$ThemeDir}/images/arrow.png" class="arrow" /></div>