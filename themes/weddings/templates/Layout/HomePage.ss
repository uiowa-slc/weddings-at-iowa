<% loop $Children %>
	<section class="$URLSegment" style="background-image: url('$FeatureImage.URL');">

		<div class="content-container">
			<div class="row">
				<div class="large-8 columns">
					<h2>$Title</h2>
					<p>$LocationText</p>
				</div>
				<div class="large-4 logo-container columns">
					<img src="{$ThemeDir}/images/logo5.png" alt="Logo for Weddings at Iowa" />
				</div>
			</div>
		</div>
	</section>
<% end_loop %>

