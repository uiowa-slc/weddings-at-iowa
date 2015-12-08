<div class="testimonial">
	<div class="row">
		<div class="large-7<% if $EvenOdd == "Even" %> large-push-5<% end_if %> columns">
			<img data-src="$Image.CroppedFocusedImage(760,507).URL" src="{$ThemeDir}/images/placeholder.png" nopin="nopin" class="lazy photo">
		</div>
		<div class="large-5<% if $EvenOdd == "Even" %> large-pull-7<% end_if %> columns text-center">
			<blockquote>$Quote</blockquote>
			<p class="text-center"><img src="{$ThemeDir}/images/separator2.png" />
			<p class="author">$Name</p>
		</div>
	</div>
</div>