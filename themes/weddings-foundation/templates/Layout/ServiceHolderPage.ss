<section class="row">
	<div class="large-12 columns">
		<h1 class="section-title">$Title</h1>
		<ul class="resource-card-list">
			<% loop $Children %>
		  		<% include Card %>
		  	<% end_loop %>
		</ul>
	</div>
</section>
<section class="row">
	<div class="large-12 columns">
		<h1 class="section-title">Related Venues</h1>
		<ul class="resource-card-list">
			<% loop $ServiceVenues %>
		  		<% include Card %>
		  	<% end_loop %>
		</ul>
	</div>
</section>
