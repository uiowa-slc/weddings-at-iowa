<div class="row">
	<div class="large-12 columns">
		<h1>Venues</h1>
		<ul class="resource-card-list">
			
			<% loop $getVenues %>
		  		<% include card %>
		  	<% end_loop %>
		</ul>
	</div>
</div>