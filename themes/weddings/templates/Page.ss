<!DOCTYPE html>
<!--[if IE 9]><html class="ie9" lang="en"> <![endif]-->
<!--[if IE 8]><html class="ie8" lang="en"> <![endif]-->
<!--[if gt IE 9]><!--> <html lang="en"> <!--<![endif]-->
<head>
	<meta charset="utf-8">
	
	<meta name="description" content="" /> 
	<meta name="viewport" content="width=device-width">
	<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />
	<% base_tag %>
	<link rel="shortcut icon" href="{$ThemeDir}/images/favicon.ico" />
	<title>$SiteConfig.Title - The University of Iowa</title>
	<link rel="stylesheet" type="text/css" href="{$ThemeDir}/css/app.css" />
	<script src="{$ThemeDir}/bower_components/modernizr/modernizr.js"></script>
</head>

<body class="$ClassName">
$Layout
	<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script type="text/javascript" src="{$ThemeDir}/build/build.js"></script>
	<% include GoogleAnalytics %>
</body>
</html>
