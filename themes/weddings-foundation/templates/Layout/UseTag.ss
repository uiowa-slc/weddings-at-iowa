<div class="row">
	<div class="large-12 columns">
		<h1 class="section-title">$UseTag.Title</h1>
	</div>
	<ul class="resource-card-list">
		
		<% loop $Children %>
	  		<% include Card %>
	  	<% end_loop %>
	</ul>
</div>
