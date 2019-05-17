<li class="">

			<img src="{$ThemeDir}/dist/images/info_icon.png" width="40px"/> <br />
			<h3>Venue cost</h3>
			<p>
				<% if $Cost%>
					{$Cost} <% if $PerUnit %>per $PerUnit<% end_if %></br>
				<% end_if %>
				<i>Contact us for additional details.</i>
			</p>
</li>