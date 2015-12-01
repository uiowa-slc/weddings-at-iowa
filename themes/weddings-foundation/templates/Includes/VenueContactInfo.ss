<% if $Address || $PhoneNumber || $Email %>
				<div class="contact-info">
					<h3>Contact info:</h3>
					<p>
						<% if $ContactName %>$ContactName</br><% end_if %>
						<% if $Address %>$Address</br><% end_if %>
						<% if $CityState || $ZipCode %>$CityState $ZipCode</br></br><% end_if %>
						<% if $PhoneNumber %>$PhoneNumber</br><% end_if %>
						<% if $Email %>$Email</br><% end_if %>
						<% if $$Website %><a href="{$Website}" target="_blank">Visit website &rarr;</a><% end_if %>
					</p>
					<ul class="social-list">
						<% if $Facebook %>
						<li class="social-list-item">
							<a href="$Facebook" target="_blank" class="social-list-item-link">
								<img src="{$ThemeDir}/images/socicon-custom/facebook.png" />  &nbsp; &nbsp; Facebook
							</a>
						</li>
						<% end_if %>
						<% if $Twitter %>
						<li class="social-list-item">
							<a href="$Twitter" class="social-list-item-link">
								<img src="{$ThemeDir}/images/socicon-custom/twitter.png" />  &nbsp; &nbsp; Twitter
							</a>
						</li>
						<% end_if %>
						<% if $Instagram %>
						<li class="social-list-item">
							<a href="$Instagram" target="_blank" class="social-list-item-link">
								<img src="{$ThemeDir}/images/socicon-custom/instagram.png" />  &nbsp; &nbsp; Instagram
							</a>
						</li>
						<% end_if %>
					</ul>
				</div>

				<% end_if %>