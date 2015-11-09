<% if $Address || $PhoneNumber || $Email %>
				<div class="large-7 columns contact-info">
					<h3>Contact info:</h3>
					<p>
						<% if $ContactName %>$ContactName</br><% end_if %>
						<% if $Address %>$Address</br><% end_if %>
						<% if $CityState || $ZipCode %>$CityState $ZipCode</br></br><% end_if %>
						<% if $PhoneNumber %>$PhoneNumber</br><% end_if %>
						<% if $Email %>$Email</br><% end_if %>
						<% if $$Website %><a href="{$Website}" target="_blank">Visit website &rarr;</a><% end_if %>
					</p>
				</div>
				<% end_if %>