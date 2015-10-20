<li>
	<div class="row">
		<div class="large-2 columns icon">
			<img src="{$ThemeDir}/images/info_icon.png" width="40px"/>
		</div>
		<div class="large-10 columns">
			<h3>Venue cost</h3>
			<p>
				<% if $Cost%>
					{$Cost} <% if $PerUnit %>per $PerUnit<% end_if %></br>
				<% end_if %>
				<i>Contact us for additional details.</i>
			</p>
		</div>
	</div>
</li>