
<footer class="footer clearfix" role="contentinfo">
	<div class="row">
		<div class="medium-6 large-5 columns">
			<a href="http://studentlife.uiowa.edu" class="hide-print footer-logo"><img src="{$ThemeDir}/images/dosl-uiowa.png" alt="Division Of Student Life"></a><br>
			<% if $SiteConfig.GroupSummary %>
				$SiteConfig.GroupSummary
			<% else %>
				<p>The Division of Student Life fosters student success by creating and promoting inclusive educationally purposeful services and activities within and beyond the classroom.</p>
			<% end_if %>
			<p>For questions about this website, write to <a href="mailto:imu-web@uiowa.edu">imu-web@uiowa.edu</a></p>
			<p>For questions about a specific venue, please contact the person listed on the venue's page.</p>

			</p>
			<p>$SiteConfig.Address
				<% if $SiteConfig.PhoneNumber %>
					<br />Phone: $SiteConfig.PhoneNumber
				<% end_if %>
				<% if $SiteConfig.EmailAddress %>
					<br />Email: <a href="mailto:{$SiteConfig.EmailAddress}">$SiteConfig.EmailAddress</a>
				<% end_if %>
			</p>
		</div>
		<div class="medium-6 large-4 columns">
			<div class="row">
				<div class="small-6 columns">
					<ul class="border-list">
						<% loop Menu(1) %>
							<li><a href="$Link">$MenuTitle</a></li>
						<% end_loop %>
					</ul>
				</div>
				<div class="small-6 columns">
 					<ul class="border-list">
						<li><a href="https://www.instagram.com/weddingsatiowa/" target="_blank">Instagram</a></li>
						<li><a href="https://twitter.com/uistudentlife" target="_blank">Pinterest</a></li>
						
					</ul>
				</div>
			</div>
		</div>
		<div class="medium-12 large-3 columns">
			<!-- Begin MailChimp Signup Form -->
			<link href="//cdn-images.mailchimp.com/embedcode/slim-081711.css" rel="stylesheet" type="text/css">
			<style type="text/css">
		
				/* Add your own MailChimp form style overrides in your site stylesheet or in this style block.
				   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
			</style>
			<div id="mc_embed_signup">
			<form action="//uiowa.us2.list-manage.com/subscribe/post?u=c61b1cddac92babd42d7d628e&amp;id=bf2be521a9" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
			   <div id="mc_embed_signup_scroll">
				<label for="mce-EMAIL"><h3>Subscribe to our mailing list</h3></label>
				<input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>
			   <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
			   <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_c61b1cddac92babd42d7d628e_bf2be521a9" tabindex="-1" value=""></div>
			   <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
			   </div>
			</form>
			</div>

			<!--End mc_embed_signup-->
		</div>
	</div>
	<div class="row">
		<div class="small-12 columns">
			<hr>
			<p>&copy; $Now.Year The University of Iowa. All Rights Reserved. <a href="http://www.uiowa.edu/homepage/online-privacy-information" target="_blank">Privacy Information</a></p>
		</div>
	</div>
</footer>