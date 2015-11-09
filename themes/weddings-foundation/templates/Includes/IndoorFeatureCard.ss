<!--Add a third "mixed" option for venues that have an indoor and outdoor component?-->

<li>
	<div class="large-2 columns icon show-for-large-up">
		<img src="{$ThemeDir}/images/info_icon.png" width="40px"/>
	</div>
	<div class="large-10 columns">
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
	</div>
</li>