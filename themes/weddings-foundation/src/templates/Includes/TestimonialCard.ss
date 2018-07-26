<div class="testimonial">
	<div class="row">
		<div class="$EvenOdd large-7<% if $EvenOdd == "even" %> large-push-5<% end_if %> columns">
			<img class="photo" width="760" height="507" src="$Image.CroppedFocusedImage(760,507).URL"  nopin="nopin" >
		</div>
		<div class="large-5<% if $EvenOdd == "even" %> large-pull-7<% end_if %> columns text-center">
			<blockquote>$Quote</blockquote>
			<p class="text-center"><img src="{$ThemeDir}/dist/images/separator2.png" />
			<p class="author">$Name</p>
		</div>
	</div>
</div>