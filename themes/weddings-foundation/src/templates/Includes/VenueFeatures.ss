<% if $ClassName == "VenuePage" %>
<p>
	<% if $Cost %><strong>Cost:</strong> $Cost <br /><% end_if %>
		<% if $Capacity %><strong>Capacity:</strong> $Capacity <br /><% end_if %>
		<% if $Indoors %>
			Venue is indoors <br />
			<% if $AirConditioned%>
				Air conditioning available<br />
			<% else %>
				Air conditioning not available<br />
			<% end_if %>
		<% else %>
			Venue is outdoors<br />
	<% end_if %>
</p>
<% end_if %>

<% loop $Features %>
	<strong>{$Title}:</strong>$Content
<% end_loop %>
<% if $UseTags %>
	<strong>Best for:</strong>
	<p><% loop $UseTags %>
		<a href="$Link" title="<% _t('VIEWALLPOSTTAGGED', 'View all posts tagged') %> '$Title'" rel="tag"><span itemprop="keywords">$Title</span></a><% if not Last %>,<% end_if %>
	<% end_loop %></p>
<% end_if %>