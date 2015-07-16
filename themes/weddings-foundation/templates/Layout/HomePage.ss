<h1 class="header">Marraige at Iowa</h1>
<div class="bg-container">
	<span class="tagline">GET MARRIED TODAY</span>
		
</div>

<div class="row">
	
	<ul class="resource-card-list">
		<h5>Venues</h5>
		<% loop $getVenues.Limit(4) %>
	  		<% include card %>
	  	<% end_loop %>
	</ul>
	<ul class="resource-card-list">
		<h5>Services</h5>
		 <% loop $getServices.Limit(4) %>
	  		<% include card %>
	  	<% end_loop %>
	</ul>

</div>