<!--Add a third "mixed" option for venues that have an indoor and outdoor component?-->

<li>

		<img src="{$ThemeDir}/dist/images/info_icon.png" width="40px"/><br />
		<h3>Venue Style</h3>
		<% if $Indoors %>
			<p>
				Venue is indoors </br>
				<% if $AirConditioned%>
					Air conditioning available
				<% else %>
					Air conditioning not available
				<% end_if %>
			</p>
		<% else %>
			<p>
				Venue is outdoors
			</p>
		<% end_if %>
</li>