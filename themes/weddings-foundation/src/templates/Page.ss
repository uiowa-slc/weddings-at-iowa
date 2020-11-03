<!doctype html>
<html class="no-js" lang="$ContentLocale.ATT" dir="$i18nScriptDirection.ATT">
<head>
	$GlobalAnalytics
	<% base_tag %>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<% if $URLSegment = 'home' %>
		<title>$SiteConfig.Title - The University of Iowa</title>
	<% else %>
		<title>$Title - $SiteConfig.Title - The University of Iowa</title>
	<% end_if %>
	<meta name="description" content="$MetaDescription.ATT" />
	<%--http://ogp.me/--%>
	<meta property="og:site_name" content="$SiteConfig.Title.ATT" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="$Title.ATT" />
	<meta property="og:description" content="$MetaDescription.ATT" />
	<meta property="og:url" content="$AbsoluteLink.ATT" />
	<% if $Image %>
		<meta property="og:image" content="<% with $Image.Fit(1200,630) %>$AbsoluteURL.ATT<% end_with %>" />
		<meta property="og:width" content="1200" />
		<meta property="og:height" content="630" />
	<% else_if $CoverImage %>
		<meta property="og:image" content="<% with $CoverImage.Fit(1200,630) %>$AbsoluteURL.ATT<% end_with %>" />
		<meta property="og:image:width" content="1200" />
		<meta property="og:image:height" content="630" />
	<% end_if %>
	<link rel="icon" type="image/png" href="$ThemeDir/favicon.ico" />
	<link rel="stylesheet" type="text/css" href="{$ThemeDir}/dist/css/app.css">
	<script src="//use.typekit.net/vds3rxz.js"></script>
	<script>try{Typekit.load();}catch(e){}</script>
</head>
<body class="$ClassName.ATT <%if $CoverImage %>with-cover-image<% end_if %>">
	<% include UiowaBar %>
	<% if $ClassName != "VenuePage" %>
		<% include TopBar %>
	<% end_if %>
	

	<div class="main typography" role="main">
		$Layout
	</div>
	$BetterNavigator
	<% include Footer %>
	$Analytics

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
	<script src="{$ThemeDir}/dist/scripts/main.min.js"></script>
	<!-- Please call pinit.js only once per page -->
	<script type="text/javascript" async defer  data-pin-height="28" data-pin-hover="true" data-pin-custom="true" src="//assets.pinterest.com/js/pinit.js"></script>
</body>
</html>
