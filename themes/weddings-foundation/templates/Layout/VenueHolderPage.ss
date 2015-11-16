<div class="row">
	<div class="large-12 columns">
		<h1>Venues</h1>
	</div>
	<ul class="resource-card-list">
		
		<% loop $getVenues %>
	  		<% include Card %>
	  	<% end_loop %>
	</ul>
</div>
