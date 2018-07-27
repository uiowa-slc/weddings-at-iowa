<div class="top-bar-container"><nav class="top-bar" role="navigation" data-topbar><ul class="title-area"><li class="name"><h1><a href="{$baseUrl}">Weddings at Iowa</a></h1></li><li class="toggle-topbar menu-icon"><a href=""><span>Menu</span></a></li></ul><section class="top-bar-section"> <%-- Left Nav Section --%> <ul class="left"> <% loop Menu(1) %> <li class="<% if $LinkingMode == "current" || $LinkingMode == "section" %>active<% end_if %>"><a href="$Link" title="Go to the $Title.ATT">$MenuTitle</a></li> <% if not $Last %><li class="divider"></li><% end_if %> <% end_loop %> <%--<li class="has-form">
				  <div class="row collapse">
				    <div class="small-12 columns">
				      <input type="text" placeholder="Find wedding services, vendors, venues">
				    </div>
				    <div class="show-for-sr">
				      <a href="#" class="alert button expand">Search</a>
				    </div>
				  </div>
				</li>--%> </ul> <% include TopBarSecondaryLinksWhite %> </section></nav></div>