<div class="row">	
	<div class="large-12 columns">
		<h1>Services</h1>
	</div>
		<ul class="resource-card-list">
			
			 <% loop $getServices %>
		  		<% include card %>
		  	<% end_loop %>
		</ul>
	</div>
