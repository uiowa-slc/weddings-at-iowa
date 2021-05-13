
<% cached %>
<footer class="footer" role="contentinfo">
	<div class="footer__container footer__container--with-social">
		<div class="footer__info">
			<h2 style="color: white;">Weddings at Iowa</h2>
				<div class="footer__summary"><p>The Division of Student Life fosters student success by creating and promoting inclusive educationally purposeful services and activities within and beyond the classroom.</p>

<p>For questions about this website, write to <a href="mailto:imu-web@uiowa.edu">imu-web@uiowa.edu</a>.</p>

<p>For questions about a specific venue, please contact the person listed on the venue's page.</p>
</div>
			
			<div class="footer__address" itemscope itemtype="http://schema.org/PostalAddress">
				<% with $SiteConfig %>
				<p>
					<% if $Address1 || $PhoneNumber || $PhoneNumberAlt || $Fax || $EmailAddress %>
						$Title<br />
						<span itemprop="streetAddress">$Address1</span>
						<% if $City %><br /><span itemprop="addressLocality">$City</span><% end_if %><% if $State %>, <span itemprop="addressRegion">$State</span><% end_if %><% if $Zipcode %> <span itemprop="postalCode">$Zipcode</span><% end_if %><br />
						<% if $PhoneNumber %>
							<br /><% if $PhoneLabel %>$PhoneLabel <% end_if %><span itemprop="telephone">$PhoneNumber</span>
						<% end_if %>
						<% if $PhoneNumberAlt %>
							<br /><% if $PhoneLabelAlt %>$PhoneLabelAlt <% end_if %>$PhoneNumberAlt
						<% end_if %>
						<% if $Fax %>
							<br />Fax: <span itemprop="faxNumber">$Fax</span>
						<% end_if %>
						<% if $EmailAddress %>
							<br /><a href="mailto:$EmailAddress"><span itemprop="email">$EmailAddress</span></a>
						<% end_if %>
					<% end_if %>
				</p>
				<% end_with %>
			</div>
		</div>
		<div class="footer__navigation <% if $SiteConfig.ButtonUrlOne || $SiteConfig.ButtonUrlTwo || $SiteConfig.ButtonUrlThree %>footer__navigation--with-buttons <% end_if %>">
			<div class="">
				<h3 class="footer__heading">Quick Links</h3>
			</div>
			<div class="footer__links">
				<ul class="clearfix">
					<% loop Menu(1) %>
						<li><a href="$Link">$MenuTitle</a></li>
					<% end_loop %>
				</ul>
			</div>

			<% if $$SiteConfig.ButtonUrlOne || $SiteConfig.ButtonUrlTwo || $SiteConfig.ButtonUrlThree %>
		
				<div class="footer__buttons">
					<% if $SiteConfig.ButtonUrlOne %>
						<a href="$SiteConfig.ButtonUrlOne" class="footer__give" target="_blank">$SiteConfig.ButtonTextOne</a>
					<% end_if %>
					<% if $SiteConfig.ButtonUrlTwo %>
						<a href="$SiteConfig.ButtonUrlTwo" class="footer__give" target="_blank">$SiteConfig.ButtonTextTwo</a>
					<% end_if %>
					<% if $SiteConfig.ButtonUrlThree %>
						<a href="$SiteConfig.ButtonUrlThree" class="footer__give" target="_blank">$SiteConfig.ButtonTextThree</a>
					<% end_if %>
				</div>
			<% end_if %>
		</div>


			<div class="footer__socialmedia" itemscope itemtype="http://schema.org/Organization">
				<link itemprop="url" href="$AbsoluteBaseURL">
				<h3 class="footer__heading">Social Media</h3>
				<ul class="">

		
						<li><a href="https://www.instagram.com/weddingsatiowa/" target="_blank" class="footer__instagram" itemprop="sameAs">Instagram</a></li>
			

						<li><a href="https://www.pinterest.com/weddingsatiowa/" target="_blank" class="footer__pinterest" itemprop="sameAs">Pinterest</a></li>
				

				</ul>
				<% if $SiteConfig.Disclaimer %>
					<div class="footer__disclaimer">
						$SiteConfig.Disclaimer
					</div>
				<% end_if %>
			</div>

	</div>
	<div class="footer__copyrightcontainer <% if $SiteConfig.MailChimpFormEmbed %>footer__copyrightcontainer--newsletter<% end_if %>">
		<div class="footer__copyrightrow">
			<div class="footer__copy">
				<p>&copy; $Now.Year <a href="http://www.uiowa.edu/" target="_blank">The University of Iowa</a>. All Rights Reserved. <a href="http://www.uiowa.edu/homepage/online-privacy-information" class="footer__bar-link" target="_blank" rel="noopener">Privacy Information</a> <a href="https://opsmanual.uiowa.edu/community-policies/nondiscrimination-statement" class="footer__bar-link" target="_blank" rel="noopener">Nondiscrimination Statement</a> <a href="https://uiowa.edu/accessibility" target="_blank" class="footer__bar-link" >Accessibility</a> <a href="https://uiowa.edu/accessibility" target="_blank" class="footer__bar-link" >Accessibility</a> <a href="https://nativeamericancouncil.org.uiowa.edu/" class="footer__bar-link" target="_blank" rel="noopener">UI Indigenous Land Acknowledgement</a> Created by <a href="https://slc.studentlife.uiowa.edu/" target="_blank" rel="noopener">Student Life Communications</a></p>
			</div>
			<% if $SiteConfig.MailChimpFormEmbed %>
			<div class="footer__newsletter">
				$SiteConfig.MailChimpFormEmbed
			</div>
			<% end_if %>
		</div>
	</div>
</footer>
<% end_cached %>