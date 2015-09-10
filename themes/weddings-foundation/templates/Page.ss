<!doctype html>
<html class="no-js" lang="$ContentLocale.ATT" dir="$i18nScriptDirection.ATT">
<head>
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
	<meta property="og:image" content="<% with $Image.SetSize(500,500) %>$AbsoluteURL.ATT<% end_with %>" />
	<% end_if %>
	<link rel="icon" type="image/png" href="$ThemeDir/favicon.ico" />
	<%--See [Requirements](http://doc.silverstripe.org/framework/en/reference/requirements) for loading from controller--%>
	<link rel="stylesheet" href="$ThemeDir/css/app.css" />
	<script src="//use.typekit.net/vds3rxz.js"></script>
	<script>try{Typekit.load();}catch(e){}</script>
	<!--<script src="$ThemeDir/bower_components/modernizr/modernizr.js"></script>-->
</head>
<body class="$ClassName.ATT">
	<%-- include DivisionBarFoundation --%>
	<!--<header class="header" role="banner">
		<div class="row text-center">
			<a href="{$BaseHref}"><img src="{$ThemeDir}/images/logo.png" data-pin-hover="false" /></a>
		</div>	
	</header>-->

	<div class="cbp-af-header">
		<div class="cbp-af-inner">

			<div class="row">
				<div class="xlarge-3 medium-2 columns dept-logo uiowa">
					<p><img src="{$ThemeDir}/images/uiowa.png" alt="The University of Iowa" /></p>
				</div>
				<div class="xlarge-6 medium-8 columns">
					<h1 class="text-center"><a href="{$BaseHref}">Weddings <small><em>at</em></small> Iowa</a></h1>
				</div>
				<div class="xlarge-3 medium-2 columns dept-logo dsl">
				<p><img src="{$ThemeDir}/images/dsl.png" alt="Division of Student Life" /></p>
				</div>					
			</div>
		</div>
	</div>




	<div class="main typography" role="main">
		$Layout
	</div>

	<% include Footer %>
	<% include MdBar %>



	<%--See [Requirements](http://doc.silverstripe.org/framework/en/reference/requirements) for loading from controller--%>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
	<script src="$ThemeDir/build/build.src.js"></script>
	<!-- Please call pinit.js only once per page -->
	<script type="text/javascript" async defer  data-pin-color="white" data-pin-height="28" data-pin-hover="true" src="//assets.pinterest.com/js/pinit.js"></script>
</body>
</html>
