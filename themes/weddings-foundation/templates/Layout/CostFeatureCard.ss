<li>
	<div class="large-2 columns icon">
		<img src="{$ThemeDir}/images/info_icon.png" width="40px"/>
	</div>
	<div class="large-10 columns">
		<h3>Venue Cost</h3>
		<p>
			<% if $Cost%>
				{$Cost} per $PerUnit </br>
			<% end_if %>
			<i>Contact us for additional details.</i>
		</p>
	</div>
</li>