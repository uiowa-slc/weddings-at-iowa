<li>
	<% if $Website %>
		<a href="{$Website}" style="text-decoration:inherit">
		<div class="large-2 columns icon">
			$Image.SetWidth(40)
		</div>
		<div class="large-10 columns">
			<h3>$Title</h3></a>
			$Content
		</div>

	<% else %>

		<div class="large-2 columns icon">
			$Image.SetWidth(40)
		</div>
		<div class="large-10 columns">
			<h3>$Title</h3>
			$Content
		</div>
		
	<% end_if %>
</li>
