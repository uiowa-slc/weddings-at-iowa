$(document).ready(function() {

    // Hide the directory navigation
    // $('.division-directory').hide();


    // Show/Hide the directory navigation on-click
    $('.directory-toggle').click(function() {
        $(this).toggleClass("active");
        $('.division-directory').toggleClass("active");
        return false;
    });


    // For small screens - show/hide the search on-click
    $('.search-toggle').click(function() {
        $(this).toggleClass('active');
        $('.division-search').slideToggle();
        return false;
    });


    // For small screens - show the directory
    $('.division-menu').on('click', '.has-subnav a', function() {
        $(this).next().slideToggle('slow');
        $(this).toggleClass('active');

    });

});
!function(a,b,c,d){"use strict";function e(a){return("string"==typeof a||a instanceof String)&&(a=a.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g,"")),a}var f=function(b){for(var c=b.length,d=a("head");c--;)0===d.has("."+b[c]).length&&d.append('<meta class="'+b[c]+'" />')};f(["foundation-mq-small","foundation-mq-small-only","foundation-mq-medium","foundation-mq-medium-only","foundation-mq-large","foundation-mq-large-only","foundation-mq-xlarge","foundation-mq-xlarge-only","foundation-mq-xxlarge","foundation-data-attribute-namespace"]),a(function(){"undefined"!=typeof FastClick&&"undefined"!=typeof c.body&&FastClick.attach(c.body)});var g=function(b,d){if("string"==typeof b){if(d){var e;if(d.jquery){if(e=d[0],!e)return d}else e=d;return a(e.querySelectorAll(b))}return a(c.querySelectorAll(b))}return a(b,d)},h=function(a){var b=[];return a||b.push("data"),this.namespace.length>0&&b.push(this.namespace),b.push(this.name),b.join("-")},i=function(a){for(var b=a.split("-"),c=b.length,d=[];c--;)0!==c?d.push(b[c]):this.namespace.length>0?d.push(this.namespace,b[c]):d.push(b[c]);return d.reverse().join("-")},j=function(b,c){var d=this,e=function(){var e=g(this),f=!e.data(d.attr_name(!0)+"-init");e.data(d.attr_name(!0)+"-init",a.extend({},d.settings,c||b,d.data_options(e))),f&&d.events(this)};return g(this.scope).is("["+this.attr_name()+"]")?e.call(this.scope):g("["+this.attr_name()+"]",this.scope).each(e),"string"==typeof b?this[b].call(this,c):void 0},k=function(a,b){function c(){b(a[0])}function d(){if(this.one("load",c),/MSIE (\d+\.\d+);/.test(navigator.userAgent)){var a=this.attr("src"),b=a.match(/\?/)?"&":"?";b+="random="+(new Date).getTime(),this.attr("src",a+b)}}return a.attr("src")?void(a[0].complete||4===a[0].readyState?c():d.call(a)):void c()};/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license */
b.matchMedia||(b.matchMedia=function(){var a=b.styleMedia||b.media;if(!a){var d=c.createElement("style"),e=c.getElementsByTagName("script")[0],f=null;d.type="text/css",d.id="matchmediajs-test",e.parentNode.insertBefore(d,e),f="getComputedStyle"in b&&b.getComputedStyle(d,null)||d.currentStyle,a={matchMedium:function(a){var b="@media "+a+"{ #matchmediajs-test { width: 1px; } }";return d.styleSheet?d.styleSheet.cssText=b:d.textContent=b,"1px"===f.width}}}return function(b){return{matches:a.matchMedium(b||"all"),media:b||"all"}}}()),function(a){function c(){d&&(g(c),i&&a.fx.tick())}for(var d,e=0,f=["webkit","moz"],g=b.requestAnimationFrame,h=b.cancelAnimationFrame,i="undefined"!=typeof a.fx;e<f.length&&!g;e++)g=b[f[e]+"RequestAnimationFrame"],h=h||b[f[e]+"CancelAnimationFrame"]||b[f[e]+"CancelRequestAnimationFrame"];g?(b.requestAnimationFrame=g,b.cancelAnimationFrame=h,i&&(a.fx.timer=function(b){b()&&a.timers.push(b)&&!d&&(d=!0,c())},a.fx.stop=function(){d=!1})):(b.requestAnimationFrame=function(a){var c=(new Date).getTime(),d=Math.max(0,16-(c-e)),f=b.setTimeout(function(){a(c+d)},d);return e=c+d,f},b.cancelAnimationFrame=function(a){clearTimeout(a)})}(a),b.Foundation={name:"Foundation",version:"5.5.2",media_queries:{small:g(".foundation-mq-small").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),"small-only":g(".foundation-mq-small-only").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),medium:g(".foundation-mq-medium").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),"medium-only":g(".foundation-mq-medium-only").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),large:g(".foundation-mq-large").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),"large-only":g(".foundation-mq-large-only").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),xlarge:g(".foundation-mq-xlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),"xlarge-only":g(".foundation-mq-xlarge-only").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),xxlarge:g(".foundation-mq-xxlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,"")},stylesheet:a("<style></style>").appendTo("head")[0].sheet,global:{namespace:d},init:function(a,c,d,e,f){var h=[a,d,e,f],i=[];if(this.rtl=/rtl/i.test(g("html").attr("dir")),this.scope=a||this.scope,this.set_namespace(),c&&"string"==typeof c&&!/reflow/i.test(c))this.libs.hasOwnProperty(c)&&i.push(this.init_lib(c,h));else for(var j in this.libs)i.push(this.init_lib(j,c));return g(b).load(function(){g(b).trigger("resize.fndtn.clearing").trigger("resize.fndtn.dropdown").trigger("resize.fndtn.equalizer").trigger("resize.fndtn.interchange").trigger("resize.fndtn.joyride").trigger("resize.fndtn.magellan").trigger("resize.fndtn.topbar").trigger("resize.fndtn.slider")}),a},init_lib:function(b,c){return this.libs.hasOwnProperty(b)?(this.patch(this.libs[b]),c&&c.hasOwnProperty(b)?("undefined"!=typeof this.libs[b].settings?a.extend(!0,this.libs[b].settings,c[b]):"undefined"!=typeof this.libs[b].defaults&&a.extend(!0,this.libs[b].defaults,c[b]),this.libs[b].init.apply(this.libs[b],[this.scope,c[b]])):(c=c instanceof Array?c:new Array(c),this.libs[b].init.apply(this.libs[b],c))):function(){}},patch:function(a){a.scope=this.scope,a.namespace=this.global.namespace,a.rtl=this.rtl,a.data_options=this.utils.data_options,a.attr_name=h,a.add_namespace=i,a.bindings=j,a.S=this.utils.S},inherit:function(a,b){for(var c=b.split(" "),d=c.length;d--;)this.utils.hasOwnProperty(c[d])&&(a[c[d]]=this.utils[c[d]])},set_namespace:function(){var b=this.global.namespace===d?a(".foundation-data-attribute-namespace").css("font-family"):this.global.namespace;this.global.namespace=b===d||/false/i.test(b)?"":b},libs:{},utils:{S:g,throttle:function(a,b){var c=null;return function(){var d=this,e=arguments;null==c&&(c=setTimeout(function(){a.apply(d,e),c=null},b))}},debounce:function(a,b,c){var d,e;return function(){var f=this,g=arguments,h=function(){d=null,c||(e=a.apply(f,g))},i=c&&!d;return clearTimeout(d),d=setTimeout(h,b),i&&(e=a.apply(f,g)),e}},data_options:function(b,c){function d(a){return!isNaN(a-0)&&null!==a&&""!==a&&a!==!1&&a!==!0}function e(b){return"string"==typeof b?a.trim(b):b}c=c||"options";var f,g,h,i={},j=function(a){var b=Foundation.global.namespace;return a.data(b.length>0?b+"-"+c:c)},k=j(b);if("object"==typeof k)return k;for(h=(k||":").split(";"),f=h.length;f--;)g=h[f].split(":"),g=[g[0],g.slice(1).join(":")],/true/i.test(g[1])&&(g[1]=!0),/false/i.test(g[1])&&(g[1]=!1),d(g[1])&&(-1===g[1].indexOf(".")?g[1]=parseInt(g[1],10):g[1]=parseFloat(g[1])),2===g.length&&g[0].length>0&&(i[e(g[0])]=e(g[1]));return i},register_media:function(b,c){Foundation.media_queries[b]===d&&(a("head").append('<meta class="'+c+'"/>'),Foundation.media_queries[b]=e(a("."+c).css("font-family")))},add_custom_rule:function(a,b){if(b===d&&Foundation.stylesheet)Foundation.stylesheet.insertRule(a,Foundation.stylesheet.cssRules.length);else{var c=Foundation.media_queries[b];c!==d&&Foundation.stylesheet.insertRule("@media "+Foundation.media_queries[b]+"{ "+a+" }",Foundation.stylesheet.cssRules.length)}},image_loaded:function(a,b){function c(a){for(var b=a.length,c=b-1;c>=0;c--)if(a.attr("height")===d)return!1;return!0}var e=this,f=a.length;(0===f||c(a))&&b(a),a.each(function(){k(e.S(this),function(){f-=1,0===f&&b(a)})})},random_str:function(){return this.fidx||(this.fidx=0),this.prefix=this.prefix||[this.name||"F",(+new Date).toString(36)].join("-"),this.prefix+(this.fidx++).toString(36)},match:function(a){return b.matchMedia(a).matches},is_small_up:function(){return this.match(Foundation.media_queries.small)},is_medium_up:function(){return this.match(Foundation.media_queries.medium)},is_large_up:function(){return this.match(Foundation.media_queries.large)},is_xlarge_up:function(){return this.match(Foundation.media_queries.xlarge)},is_xxlarge_up:function(){return this.match(Foundation.media_queries.xxlarge)},is_small_only:function(){return!(this.is_medium_up()||this.is_large_up()||this.is_xlarge_up()||this.is_xxlarge_up())},is_medium_only:function(){return this.is_medium_up()&&!this.is_large_up()&&!this.is_xlarge_up()&&!this.is_xxlarge_up()},is_large_only:function(){return this.is_medium_up()&&this.is_large_up()&&!this.is_xlarge_up()&&!this.is_xxlarge_up()},is_xlarge_only:function(){return this.is_medium_up()&&this.is_large_up()&&this.is_xlarge_up()&&!this.is_xxlarge_up()},is_xxlarge_only:function(){return this.is_medium_up()&&this.is_large_up()&&this.is_xlarge_up()&&this.is_xxlarge_up()}}},a.fn.foundation=function(){var a=Array.prototype.slice.call(arguments,0);return this.each(function(){return Foundation.init.apply(Foundation,[this].concat(a)),this})}}(jQuery,window,window.document),function(a,b,c,d){"use strict";Foundation.libs.abide={name:"abide",version:"5.5.2",settings:{live_validate:!0,validate_on_blur:!0,focus_on_invalid:!0,error_labels:!0,error_class:"error",timeout:1e3,patterns:{alpha:/^[a-zA-Z]+$/,alpha_numeric:/^[a-zA-Z0-9]+$/,integer:/^[-+]?\d+$/,number:/^[-+]?\d*(?:[\.\,]\d+)?$/,card:/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,cvv:/^([0-9]){3,4}$/,email:/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,url:/^(https?|ftp|file|ssh):\/\/([-;:&=\+\$,\w]+@{1})?([-A-Za-z0-9\.]+)+:?(\d+)?((\/[-\+~%\/\.\w]+)?\??([-\+=&;%@\.\w]+)?#?([\w]+)?)?/,domain:/^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,datetime:/^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,date:/(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,time:/^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,dateISO:/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,month_day_year:/^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,day_month_year:/^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,color:/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/},validators:{equalTo:function(a,b,d){var e=c.getElementById(a.getAttribute(this.add_namespace("data-equalto"))).value,f=a.value,g=e===f;return g}}},timer:null,init:function(a,b,c){this.bindings(b,c)},events:function(b){function c(a,b){clearTimeout(d.timer),d.timer=setTimeout(function(){d.validate([a],b)}.bind(a),f.timeout)}var d=this,e=d.S(b).attr("novalidate","novalidate"),f=e.data(this.attr_name(!0)+"-init")||{};this.invalid_attr=this.add_namespace("data-invalid"),e.off(".abide").on("submit.fndtn.abide",function(a){var b=/ajax/i.test(d.S(this).attr(d.attr_name()));return d.validate(d.S(this).find("input, textarea, select").not(":hidden, [data-abide-ignore]").get(),a,b)}).on("validate.fndtn.abide",function(a){"manual"===f.validate_on&&d.validate([a.target],a)}).on("reset",function(b){return d.reset(a(this),b)}).find("input, textarea, select").not(":hidden, [data-abide-ignore]").off(".abide").on("blur.fndtn.abide change.fndtn.abide",function(a){f.validate_on_blur&&f.validate_on_blur===!0&&c(this,a),"change"===f.validate_on&&c(this,a)}).on("keydown.fndtn.abide",function(a){f.live_validate&&f.live_validate===!0&&9!=a.which&&c(this,a),"tab"===f.validate_on&&9===a.which?c(this,a):"change"===f.validate_on&&c(this,a)}).on("focus",function(b){navigator.userAgent.match(/iPad|iPhone|Android|BlackBerry|Windows Phone|webOS/i)&&a("html, body").animate({scrollTop:a(b.target).offset().top},100)})},reset:function(b,c){var d=this;b.removeAttr(d.invalid_attr),a("["+d.invalid_attr+"]",b).removeAttr(d.invalid_attr),a("."+d.settings.error_class,b).not("small").removeClass(d.settings.error_class),a(":input",b).not(":button, :submit, :reset, :hidden, [data-abide-ignore]").val("").removeAttr(d.invalid_attr)},validate:function(a,b,c){for(var d=this.parse_patterns(a),e=d.length,f=this.S(a[0]).closest("form"),g=/submit/.test(b.type),h=0;e>h;h++)if(!d[h]&&(g||c))return this.settings.focus_on_invalid&&a[h].focus(),f.trigger("invalid.fndtn.abide"),this.S(a[h]).closest("form").attr(this.invalid_attr,""),!1;return(g||c)&&f.trigger("valid.fndtn.abide"),f.removeAttr(this.invalid_attr),c?!1:!0},parse_patterns:function(a){for(var b=a.length,c=[];b--;)c.push(this.pattern(a[b]));return this.check_validation_and_apply_styles(c)},pattern:function(a){var b=a.getAttribute("type"),c="string"==typeof a.getAttribute("required"),d=a.getAttribute("pattern")||"";return this.settings.patterns.hasOwnProperty(d)&&d.length>0?[a,this.settings.patterns[d],c]:d.length>0?[a,new RegExp(d),c]:this.settings.patterns.hasOwnProperty(b)?[a,this.settings.patterns[b],c]:(d=/.*/,[a,d,c])},check_validation_and_apply_styles:function(b){var c=b.length,d=[],e=this.S(b[0][0]).closest("[data-"+this.attr_name(!0)+"]");for(e.data(this.attr_name(!0)+"-init")||{};c--;){var f,g,h=b[c][0],i=b[c][2],j=h.value.trim(),k=this.S(h).parent(),l=h.getAttribute(this.add_namespace("data-abide-validator")),m="radio"===h.type,n="checkbox"===h.type,o=this.S('label[for="'+h.getAttribute("id")+'"]'),p=i?h.value.length>0:!0,q=[];if(h.getAttribute(this.add_namespace("data-equalto"))&&(l="equalTo"),f=k.is("label")?k.parent():k,m&&i)q.push(this.valid_radio(h,i));else if(n&&i)q.push(this.valid_checkbox(h,i));else if(l){for(var r=l.split(" "),s=!0,t=!0,u=0;u<r.length;u++)g=this.settings.validators[r[u]].apply(this,[h,i,f]),q.push(g),t=g&&s,s=g;t?(this.S(h).removeAttr(this.invalid_attr),f.removeClass("error"),o.length>0&&this.settings.error_labels&&o.removeClass(this.settings.error_class).removeAttr("role"),a(h).triggerHandler("valid")):(this.S(h).attr(this.invalid_attr,""),f.addClass("error"),o.length>0&&this.settings.error_labels&&o.addClass(this.settings.error_class).attr("role","alert"),a(h).triggerHandler("invalid"))}else if(q.push(b[c][1].test(j)&&p||!i&&h.value.length<1||a(h).attr("disabled")?!0:!1),q=[q.every(function(a){return a})],q[0])this.S(h).removeAttr(this.invalid_attr),h.setAttribute("aria-invalid","false"),h.removeAttribute("aria-describedby"),f.removeClass(this.settings.error_class),o.length>0&&this.settings.error_labels&&o.removeClass(this.settings.error_class).removeAttr("role"),a(h).triggerHandler("valid");else{this.S(h).attr(this.invalid_attr,""),h.setAttribute("aria-invalid","true");var v=f.find("small."+this.settings.error_class,"span."+this.settings.error_class),w=v.length>0?v[0].id:"";w.length>0&&h.setAttribute("aria-describedby",w),f.addClass(this.settings.error_class),o.length>0&&this.settings.error_labels&&o.addClass(this.settings.error_class).attr("role","alert"),a(h).triggerHandler("invalid")}d=d.concat(q)}return d},valid_checkbox:function(b,c){var b=this.S(b),d=b.is(":checked")||!c||b.get(0).getAttribute("disabled");return d?(b.removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class),a(b).triggerHandler("valid")):(b.attr(this.invalid_attr,"").parent().addClass(this.settings.error_class),a(b).triggerHandler("invalid")),d},valid_radio:function(b,c){for(var d=b.getAttribute("name"),e=this.S(b).closest("[data-"+this.attr_name(!0)+"]").find("[name='"+d+"']"),f=e.length,g=!1,h=!1,i=0;f>i;i++)e[i].getAttribute("disabled")?(h=!0,g=!0):e[i].checked?g=!0:h&&(g=!1);for(var i=0;f>i;i++)g?(this.S(e[i]).removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class),a(e[i]).triggerHandler("valid")):(this.S(e[i]).attr(this.invalid_attr,"").parent().addClass(this.settings.error_class),a(e[i]).triggerHandler("invalid"));return g},valid_equal:function(a,b,d){var e=c.getElementById(a.getAttribute(this.add_namespace("data-equalto"))).value,f=a.value,g=e===f;return g?(this.S(a).removeAttr(this.invalid_attr),d.removeClass(this.settings.error_class),label.length>0&&settings.error_labels&&label.removeClass(this.settings.error_class)):(this.S(a).attr(this.invalid_attr,""),d.addClass(this.settings.error_class),label.length>0&&settings.error_labels&&label.addClass(this.settings.error_class)),g},valid_oneof:function(a,b,c,d){var a=this.S(a),e=this.S("["+this.add_namespace("data-oneof")+"]"),f=e.filter(":checked").length>0;if(f?a.removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class):a.attr(this.invalid_attr,"").parent().addClass(this.settings.error_class),!d){var g=this;e.each(function(){g.valid_oneof.call(g,this,null,null,!0)})}return f},reflow:function(a,b){var c=this,d=c.S("["+this.attr_name()+"]").attr("novalidate","novalidate");c.S(d).each(function(a,b){c.events(b)})}}}(jQuery,window,window.document),function(a,b,c,d){"use strict";Foundation.libs.accordion={name:"accordion",version:"5.5.2",settings:{content_class:"content",active_class:"active",multi_expand:!1,toggleable:!0,callback:function(){}},init:function(a,b,c){this.bindings(b,c)},events:function(b){var c=this,d=this.S;c.create(this.S(b)),d(this.scope).off(".fndtn.accordion").on("click.fndtn.accordion","["+this.attr_name()+"] > dd > a, ["+this.attr_name()+"] > li > a",function(b){var e=d(this).closest("["+c.attr_name()+"]"),f=c.attr_name()+"="+e.attr(c.attr_name()),g=e.data(c.attr_name(!0)+"-init")||c.settings,h=d("#"+this.href.split("#")[1]),i=a("> dd, > li",e),j=i.children("."+g.content_class),k=j.filter("."+g.active_class);return b.preventDefault(),e.attr(c.attr_name())&&(j=j.add("["+f+"] dd > ."+g.content_class+", ["+f+"] li > ."+g.content_class),i=i.add("["+f+"] dd, ["+f+"] li")),g.toggleable&&h.is(k)?(h.parent("dd, li").toggleClass(g.active_class,!1),h.toggleClass(g.active_class,!1),d(this).attr("aria-expanded",function(a,b){return"true"===b?"false":"true"}),g.callback(h),h.triggerHandler("toggled",[e]),void e.triggerHandler("toggled",[h])):(g.multi_expand||(j.removeClass(g.active_class),i.removeClass(g.active_class),i.children("a").attr("aria-expanded","false")),h.addClass(g.active_class).parent().addClass(g.active_class),g.callback(h),h.triggerHandler("toggled",[e]),e.triggerHandler("toggled",[h]),void d(this).attr("aria-expanded","true"))})},create:function(b){var c=this,d=b,e=a("> .accordion-navigation",d),f=d.data(c.attr_name(!0)+"-init")||c.settings;e.children("a").attr("aria-expanded","false"),e.has("."+f.content_class+"."+f.active_class).children("a").attr("aria-expanded","true"),f.multi_expand&&b.attr("aria-multiselectable","true")},off:function(){},reflow:function(){}}}(jQuery,window,window.document),function(a,b,c,d){"use strict";Foundation.libs.alert={name:"alert",version:"5.5.2",settings:{callback:function(){}},init:function(a,b,c){this.bindings(b,c)},events:function(){var b=this,c=this.S;a(this.scope).off(".alert").on("click.fndtn.alert","["+this.attr_name()+"] .close",function(a){var d=c(this).closest("["+b.attr_name()+"]"),e=d.data(b.attr_name(!0)+"-init")||b.settings;a.preventDefault(),Modernizr.csstransitions?(d.addClass("alert-close"),d.on("transitionend webkitTransitionEnd oTransitionEnd",function(a){c(this).trigger("close.fndtn.alert").remove(),e.callback()})):d.fadeOut(300,function(){c(this).trigger("close.fndtn.alert").remove(),e.callback()})})},reflow:function(){}}}(jQuery,window,window.document),function(a,b,c,d){"use strict";Foundation.libs.clearing={name:"clearing",version:"5.5.2",settings:{templates:{viewing:'<a href="#" class="clearing-close">&times;</a><div class="visible-img" style="display: none"><div class="clearing-touch-label"></div><img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" /><p class="clearing-caption"></p><a href="#" class="clearing-main-prev"><span></span></a><a href="#" class="clearing-main-next"><span></span></a></div><img class="clearing-preload-next" style="display: none" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" /><img class="clearing-preload-prev" style="display: none" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" />'},close_selectors:".clearing-close, div.clearing-blackout",open_selectors:"",skip_selector:"",touch_label:"",init:!1,locked:!1},init:function(a,b,c){var d=this;Foundation.inherit(this,"throttle image_loaded"),this.bindings(b,c),d.S(this.scope).is("["+this.attr_name()+"]")?this.assemble(d.S("li",this.scope)):d.S("["+this.attr_name()+"]",this.scope).each(function(){d.assemble(d.S("li",this))})},events:function(d){var e=this,f=e.S,g=a(".scroll-container");g.length>0&&(this.scope=g),f(this.scope).off(".clearing").on("click.fndtn.clearing","ul["+this.attr_name()+"] li "+this.settings.open_selectors,function(a,b,c){var b=b||f(this),c=c||b,d=b.next("li"),g=b.closest("["+e.attr_name()+"]").data(e.attr_name(!0)+"-init"),h=f(a.target);a.preventDefault(),g||(e.init(),g=b.closest("["+e.attr_name()+"]").data(e.attr_name(!0)+"-init")),c.hasClass("visible")&&b[0]===c[0]&&d.length>0&&e.is_open(b)&&(c=d,h=f("img",c)),e.open(h,b,c),e.update_paddles(c)}).on("click.fndtn.clearing",".clearing-main-next",function(a){e.nav(a,"next")}).on("click.fndtn.clearing",".clearing-main-prev",function(a){e.nav(a,"prev")}).on("click.fndtn.clearing",this.settings.close_selectors,function(a){Foundation.libs.clearing.close(a,this)}),a(c).on("keydown.fndtn.clearing",function(a){e.keydown(a)}),f(b).off(".clearing").on("resize.fndtn.clearing",function(){e.resize()}),this.swipe_events(d)},swipe_events:function(a){var b=this,c=b.S;c(this.scope).on("touchstart.fndtn.clearing",".visible-img",function(a){a.touches||(a=a.originalEvent);var b={start_page_x:a.touches[0].pageX,start_page_y:a.touches[0].pageY,start_time:(new Date).getTime(),delta_x:0,is_scrolling:d};c(this).data("swipe-transition",b),a.stopPropagation()}).on("touchmove.fndtn.clearing",".visible-img",function(a){if(a.touches||(a=a.originalEvent),!(a.touches.length>1||a.scale&&1!==a.scale)){var d=c(this).data("swipe-transition");if("undefined"==typeof d&&(d={}),d.delta_x=a.touches[0].pageX-d.start_page_x,Foundation.rtl&&(d.delta_x=-d.delta_x),"undefined"==typeof d.is_scrolling&&(d.is_scrolling=!!(d.is_scrolling||Math.abs(d.delta_x)<Math.abs(a.touches[0].pageY-d.start_page_y))),!d.is_scrolling&&!d.active){a.preventDefault();var e=d.delta_x<0?"next":"prev";d.active=!0,b.nav(a,e)}}}).on("touchend.fndtn.clearing",".visible-img",function(a){c(this).data("swipe-transition",{}),a.stopPropagation()})},assemble:function(b){var c=b.parent();if(!c.parent().hasClass("carousel")){c.after('<div id="foundationClearingHolder"></div>');var d=c.detach(),e="";if(null!=d[0]){e=d[0].outerHTML;var f=this.S("#foundationClearingHolder"),g=c.data(this.attr_name(!0)+"-init"),h={grid:'<div class="carousel">'+e+"</div>",viewing:g.templates.viewing},i='<div class="clearing-assembled"><div>'+h.viewing+h.grid+"</div></div>",j=this.settings.touch_label;Modernizr.touch&&(i=a(i).find(".clearing-touch-label").html(j).end()),f.after(i).remove()}}},open:function(b,d,e){function f(){setTimeout(function(){this.image_loaded(m,function(){1!==m.outerWidth()||o?g.call(this,m):f.call(this)}.bind(this))}.bind(this),100)}function g(b){var c=a(b);c.css("visibility","visible"),c.trigger("imageVisible"),i.css("overflow","hidden"),j.addClass("clearing-blackout"),k.addClass("clearing-container"),l.show(),this.fix_height(e).caption(h.S(".clearing-caption",l),h.S("img",e)).center_and_label(b,n).shift(d,e,function(){e.closest("li").siblings().removeClass("visible"),e.closest("li").addClass("visible")}),l.trigger("opened.fndtn.clearing")}var h=this,i=a(c.body),j=e.closest(".clearing-assembled"),k=h.S("div",j).first(),l=h.S(".visible-img",k),m=h.S("img",l).not(b),n=h.S(".clearing-touch-label",k),o=!1,p={};a("body").on("touchmove",function(a){a.preventDefault()}),m.error(function(){o=!0}),this.locked()||(l.trigger("open.fndtn.clearing"),p=this.load(b),p.interchange?m.attr("data-interchange",p.interchange).foundation("interchange","reflow"):m.attr("src",p.src).attr("data-interchange",""),m.css("visibility","hidden"),f.call(this))},close:function(b,d){b.preventDefault();var e,f,g=function(a){return/blackout/.test(a.selector)?a:a.closest(".clearing-blackout")}(a(d)),h=a(c.body);return d===b.target&&g&&(h.css("overflow",""),e=a("div",g).first(),f=a(".visible-img",e),f.trigger("close.fndtn.clearing"),this.settings.prev_index=0,a("ul["+this.attr_name()+"]",g).attr("style","").closest(".clearing-blackout").removeClass("clearing-blackout"),e.removeClass("clearing-container"),f.hide(),f.trigger("closed.fndtn.clearing")),a("body").off("touchmove"),!1},is_open:function(a){return a.parent().prop("style").length>0},keydown:function(b){var c=a(".clearing-blackout ul["+this.attr_name()+"]"),d=this.rtl?37:39,e=this.rtl?39:37,f=27;b.which===d&&this.go(c,"next"),b.which===e&&this.go(c,"prev"),b.which===f&&this.S("a.clearing-close").trigger("click.fndtn.clearing")},nav:function(b,c){var d=a("ul["+this.attr_name()+"]",".clearing-blackout");b.preventDefault(),this.go(d,c)},resize:function(){var b=a("img",".clearing-blackout .visible-img"),c=a(".clearing-touch-label",".clearing-blackout");b.length&&(this.center_and_label(b,c),b.trigger("resized.fndtn.clearing"))},fix_height:function(a){var b=a.parent().children(),c=this;return b.each(function(){var a=c.S(this),b=a.find("img");a.height()>b.outerHeight()&&a.addClass("fix-height")}).closest("ul").width(100*b.length+"%"),this},update_paddles:function(a){a=a.closest("li");var b=a.closest(".carousel").siblings(".visible-img");a.next().length>0?this.S(".clearing-main-next",b).removeClass("disabled"):this.S(".clearing-main-next",b).addClass("disabled"),a.prev().length>0?this.S(".clearing-main-prev",b).removeClass("disabled"):this.S(".clearing-main-prev",b).addClass("disabled")},center_and_label:function(a,b){return b.css(!this.rtl&&b.length>0?{marginLeft:-(b.outerWidth()/2),marginTop:-(a.outerHeight()/2)-b.outerHeight()-10}:{marginRight:-(b.outerWidth()/2),marginTop:-(a.outerHeight()/2)-b.outerHeight()-10,left:"auto",right:"50%"}),this},load:function(a){var b,c,d;return"A"===a[0].nodeName?(b=a.attr("href"),c=a.data("clearing-interchange")):(d=a.closest("a"),b=d.attr("href"),c=d.data("clearing-interchange")),this.preload(a),{src:b?b:a.attr("src"),interchange:b?c:a.data("clearing-interchange")}},preload:function(a){this.img(a.closest("li").next(),"next").img(a.closest("li").prev(),"prev")},img:function(b,c){if(b.length){var d,e,f,g=a(".clearing-preload-"+c),h=this.S("a",b);h.length?(d=h.attr("href"),e=h.data("clearing-interchange")):(f=this.S("img",b),d=f.attr("src"),e=f.data("clearing-interchange")),e?g.attr("data-interchange",e):(g.attr("src",d),g.attr("data-interchange",""))}return this},caption:function(a,b){var c=b.attr("data-caption");return c?a.html(c).show():a.text("").hide(),this},go:function(a,b){var c=this.S(".visible",a),d=c[b]();this.settings.skip_selector&&0!=d.find(this.settings.skip_selector).length&&(d=d[b]()),d.length&&this.S("img",d).trigger("click.fndtn.clearing",[c,d]).trigger("change.fndtn.clearing")},shift:function(a,b,c){var d,e=b.parent(),f=this.settings.prev_index||b.index(),g=this.direction(e,a,b),h=this.rtl?"right":"left",i=parseInt(e.css("left"),10),j=b.outerWidth(),k={};b.index()===f||/skip/.test(g)?/skip/.test(g)&&(d=b.index()-this.settings.up_count,this.lock(),d>0?(k[h]=-(d*j),e.animate(k,300,this.unlock())):(k[h]=0,e.animate(k,300,this.unlock()))):/left/.test(g)?(this.lock(),k[h]=i+j,e.animate(k,300,this.unlock())):/right/.test(g)&&(this.lock(),k[h]=i-j,e.animate(k,300,this.unlock())),c()},direction:function(a,b,c){var d,e=this.S("li",a),f=e.outerWidth()+e.outerWidth()/4,g=Math.floor(this.S(".clearing-container").outerWidth()/f)-1,h=e.index(c);return this.settings.up_count=g,d=this.adjacent(this.settings.prev_index,h)?h>g&&h>this.settings.prev_index?"right":h>g-1&&h<=this.settings.prev_index?"left":!1:"skip",this.settings.prev_index=h,d},adjacent:function(a,b){for(var c=b+1;c>=b-1;c--)if(c===a)return!0;return!1},lock:function(){this.settings.locked=!0},unlock:function(){this.settings.locked=!1},locked:function(){return this.settings.locked},off:function(){this.S(this.scope).off(".fndtn.clearing"),this.S(b).off(".fndtn.clearing")},reflow:function(){this.init()}}}(jQuery,window,window.document),function(a,b,c,d){"use strict";Foundation.libs.dropdown={name:"dropdown",version:"5.5.2",settings:{active_class:"open",disabled_class:"disabled",mega_class:"mega",align:"bottom",is_hover:!1,hover_timeout:150,opened:function(){},closed:function(){}},init:function(b,c,d){Foundation.inherit(this,"throttle"),a.extend(!0,this.settings,c,d),this.bindings(c,d)},events:function(d){var e=this,f=e.S;f(this.scope).off(".dropdown").on("click.fndtn.dropdown","["+this.attr_name()+"]",function(b){var c=f(this).data(e.attr_name(!0)+"-init")||e.settings;(!c.is_hover||Modernizr.touch)&&(b.preventDefault(),f(this).parent("[data-reveal-id]").length&&b.stopPropagation(),e.toggle(a(this)))}).on("mouseenter.fndtn.dropdown","["+this.attr_name()+"], ["+this.attr_name()+"-content]",function(a){var b,c,d=f(this);clearTimeout(e.timeout),d.data(e.data_attr())?(b=f("#"+d.data(e.data_attr())),c=d):(b=d,c=f("["+e.attr_name()+'="'+b.attr("id")+'"]'));var g=c.data(e.attr_name(!0)+"-init")||e.settings;f(a.currentTarget).data(e.data_attr())&&g.is_hover&&e.closeall.call(e),g.is_hover&&e.open.apply(e,[b,c])}).on("mouseleave.fndtn.dropdown","["+this.attr_name()+"], ["+this.attr_name()+"-content]",function(a){var b,c=f(this);if(c.data(e.data_attr()))b=c.data(e.data_attr(!0)+"-init")||e.settings;else var d=f("["+e.attr_name()+'="'+f(this).attr("id")+'"]'),b=d.data(e.attr_name(!0)+"-init")||e.settings;e.timeout=setTimeout(function(){c.data(e.data_attr())?b.is_hover&&e.close.call(e,f("#"+c.data(e.data_attr()))):b.is_hover&&e.close.call(e,c)}.bind(this),b.hover_timeout)}).on("click.fndtn.dropdown",function(b){var d=f(b.target).closest("["+e.attr_name()+"-content]"),g=d.find("a");return g.length>0&&"false"!==d.attr("aria-autoclose")&&e.close.call(e,f("["+e.attr_name()+"-content]")),b.target!==c&&!a.contains(c.documentElement,b.target)||f(b.target).closest("["+e.attr_name()+"]").length>0?void 0:!f(b.target).data("revealId")&&d.length>0&&(f(b.target).is("["+e.attr_name()+"-content]")||a.contains(d.first()[0],b.target))?void b.stopPropagation():void e.close.call(e,f("["+e.attr_name()+"-content]"))}).on("opened.fndtn.dropdown","["+e.attr_name()+"-content]",function(){e.settings.opened.call(this)}).on("closed.fndtn.dropdown","["+e.attr_name()+"-content]",function(){e.settings.closed.call(this)}),f(b).off(".dropdown").on("resize.fndtn.dropdown",e.throttle(function(){e.resize.call(e)},50)),this.resize()},close:function(b){var c=this;b.each(function(d){var e=a("["+c.attr_name()+"="+b[d].id+"]")||a("aria-controls="+b[d].id+"]");e.attr("aria-expanded","false"),c.S(this).hasClass(c.settings.active_class)&&(c.S(this).css(Foundation.rtl?"right":"left","-99999px").attr("aria-hidden","true").removeClass(c.settings.active_class).prev("["+c.attr_name()+"]").removeClass(c.settings.active_class).removeData("target"),c.S(this).trigger("closed.fndtn.dropdown",[b]))}),b.removeClass("f-open-"+this.attr_name(!0))},closeall:function(){var b=this;a.each(b.S(".f-open-"+this.attr_name(!0)),function(){b.close.call(b,b.S(this))})},open:function(a,b){this.css(a.addClass(this.settings.active_class),b),a.prev("["+this.attr_name()+"]").addClass(this.settings.active_class),a.data("target",b.get(0)).trigger("opened.fndtn.dropdown",[a,b]),a.attr("aria-hidden","false"),b.attr("aria-expanded","true"),a.focus(),a.addClass("f-open-"+this.attr_name(!0))},data_attr:function(){return this.namespace.length>0?this.namespace+"-"+this.name:this.name},toggle:function(a){if(!a.hasClass(this.settings.disabled_class)){var b=this.S("#"+a.data(this.data_attr()));0!==b.length&&(this.close.call(this,this.S("["+this.attr_name()+"-content]").not(b)),b.hasClass(this.settings.active_class)?(this.close.call(this,b),b.data("target")!==a.get(0)&&this.open.call(this,b,a)):this.open.call(this,b,a))}},resize:function(){var b=this.S("["+this.attr_name()+"-content].open"),c=a(b.data("target"));b.length&&c.length&&this.css(b,c)},css:function(a,b){var c=Math.max((b.width()-a.width())/2,8),d=b.data(this.attr_name(!0)+"-init")||this.settings,e=a.parent().css("overflow-y")||a.parent().css("overflow");if(this.clear_idx(),this.small()){var f=this.dirs.bottom.call(a,b,d);a.attr("style","").removeClass("drop-left drop-right drop-top").css({position:"absolute",width:"95%","max-width":"none",top:f.top}),a.css(Foundation.rtl?"right":"left",c)}else if("visible"!==e){var g=b[0].offsetTop+b[0].offsetHeight;a.attr("style","").css({position:"absolute",top:g}),a.css(Foundation.rtl?"right":"left",c)}else this.style(a,b,d);return a},style:function(b,c,d){var e=a.extend({position:"absolute"},this.dirs[d.align].call(b,c,d));b.attr("style","").css(e)},dirs:{_base:function(a){var d=this.offsetParent(),e=d.offset(),f=a.offset();f.top-=e.top,f.left-=e.left,f.missRight=!1,f.missTop=!1,f.missLeft=!1,f.leftRightFlag=!1;var g;g=c.getElementsByClassName("row")[0]?c.getElementsByClassName("row")[0].clientWidth:b.innerWidth;var h=(b.innerWidth-g)/2,i=g;return this.hasClass("mega")||(a.offset().top<=this.outerHeight()&&(f.missTop=!0,i=b.innerWidth-h,f.leftRightFlag=!0),a.offset().left+this.outerWidth()>a.offset().left+h&&a.offset().left-h>this.outerWidth()&&(f.missRight=!0,f.missLeft=!1),a.offset().left-this.outerWidth()<=0&&(f.missLeft=!0,f.missRight=!1)),f},top:function(a,b){var c=Foundation.libs.dropdown,d=c.dirs._base.call(this,a);return this.addClass("drop-top"),1==d.missTop&&(d.top=d.top+a.outerHeight()+this.outerHeight(),this.removeClass("drop-top")),1==d.missRight&&(d.left=d.left-this.outerWidth()+a.outerWidth()),(a.outerWidth()<this.outerWidth()||c.small()||this.hasClass(b.mega_menu))&&c.adjust_pip(this,a,b,d),Foundation.rtl?{left:d.left-this.outerWidth()+a.outerWidth(),top:d.top-this.outerHeight()}:{left:d.left,top:d.top-this.outerHeight()}},bottom:function(a,b){var c=Foundation.libs.dropdown,d=c.dirs._base.call(this,a);return 1==d.missRight&&(d.left=d.left-this.outerWidth()+a.outerWidth()),(a.outerWidth()<this.outerWidth()||c.small()||this.hasClass(b.mega_menu))&&c.adjust_pip(this,a,b,d),
c.rtl?{left:d.left-this.outerWidth()+a.outerWidth(),top:d.top+a.outerHeight()}:{left:d.left,top:d.top+a.outerHeight()}},left:function(a,b){var c=Foundation.libs.dropdown.dirs._base.call(this,a);return this.addClass("drop-left"),1==c.missLeft&&(c.left=c.left+this.outerWidth(),c.top=c.top+a.outerHeight(),this.removeClass("drop-left")),{left:c.left-this.outerWidth(),top:c.top}},right:function(a,b){var c=Foundation.libs.dropdown.dirs._base.call(this,a);this.addClass("drop-right"),1==c.missRight?(c.left=c.left-this.outerWidth(),c.top=c.top+a.outerHeight(),this.removeClass("drop-right")):c.triggeredRight=!0;var d=Foundation.libs.dropdown;return(a.outerWidth()<this.outerWidth()||d.small()||this.hasClass(b.mega_menu))&&d.adjust_pip(this,a,b,c),{left:c.left+a.outerWidth(),top:c.top}}},adjust_pip:function(a,b,c,d){var e=Foundation.stylesheet,f=8;a.hasClass(c.mega_class)?f=d.left+b.outerWidth()/2-8:this.small()&&(f+=d.left-8),this.rule_idx=e.cssRules.length;var g=".f-dropdown.open:before",h=".f-dropdown.open:after",i="left: "+f+"px;",j="left: "+(f-1)+"px;";1==d.missRight&&(f=a.outerWidth()-23,g=".f-dropdown.open:before",h=".f-dropdown.open:after",i="left: "+f+"px;",j="left: "+(f-1)+"px;"),1==d.triggeredRight&&(g=".f-dropdown.open:before",h=".f-dropdown.open:after",i="left:-12px;",j="left:-14px;"),e.insertRule?(e.insertRule([g,"{",i,"}"].join(" "),this.rule_idx),e.insertRule([h,"{",j,"}"].join(" "),this.rule_idx+1)):(e.addRule(g,i,this.rule_idx),e.addRule(h,j,this.rule_idx+1))},clear_idx:function(){var a=Foundation.stylesheet;"undefined"!=typeof this.rule_idx&&(a.deleteRule(this.rule_idx),a.deleteRule(this.rule_idx),delete this.rule_idx)},small:function(){return matchMedia(Foundation.media_queries.small).matches&&!matchMedia(Foundation.media_queries.medium).matches},off:function(){this.S(this.scope).off(".fndtn.dropdown"),this.S("html, body").off(".fndtn.dropdown"),this.S(b).off(".fndtn.dropdown"),this.S("[data-dropdown-content]").off(".fndtn.dropdown")},reflow:function(){}}}(jQuery,window,window.document),function(a,b,c,d){"use strict";Foundation.libs.equalizer={name:"equalizer",version:"5.5.2",settings:{use_tallest:!0,before_height_change:a.noop,after_height_change:a.noop,equalize_on_stack:!1,act_on_hidden_el:!1},init:function(a,b,c){Foundation.inherit(this,"image_loaded"),this.bindings(b,c),this.reflow()},events:function(){this.S(b).off(".equalizer").on("resize.fndtn.equalizer",function(a){this.reflow()}.bind(this))},equalize:function(b){var c,d,e=!1,f=b.data("equalizer"),g=b.data(this.attr_name(!0)+"-init")||this.settings;if(c=b.find(g.act_on_hidden_el?f?"["+this.attr_name()+'-watch="'+f+'"]':"["+this.attr_name()+"-watch]":f?"["+this.attr_name()+'-watch="'+f+'"]:visible':"["+this.attr_name()+"-watch]:visible"),0!==c.length&&(g.before_height_change(),b.trigger("before-height-change.fndth.equalizer"),c.height("inherit"),g.equalize_on_stack!==!1||(d=c.first().offset().top,c.each(function(){return a(this).offset().top!==d?(e=!0,!1):void 0}),!e))){var h=c.map(function(){return a(this).outerHeight(!1)}).get();if(g.use_tallest){var i=Math.max.apply(null,h);c.css("height",i)}else{var j=Math.min.apply(null,h);c.css("height",j)}g.after_height_change(),b.trigger("after-height-change.fndtn.equalizer")}},reflow:function(){var b=this;this.S("["+this.attr_name()+"]",this.scope).each(function(){var c=a(this),d=c.data("equalizer-mq"),e=!0;d&&(d="is_"+d.replace(/-/g,"_"),Foundation.utils.hasOwnProperty(d)&&(e=!1)),b.image_loaded(b.S("img",this),function(){if(e||Foundation.utils[d]())b.equalize(c);else{var a=c.find("["+b.attr_name()+"-watch]:visible");a.css("height","auto")}})})}}}(jQuery,window,window.document),function(a,b,c,d){"use strict";Foundation.libs.interchange={name:"interchange",version:"5.5.2",cache:{},images_loaded:!1,nodes_loaded:!1,settings:{load_attr:"interchange",named_queries:{"default":"only screen",small:Foundation.media_queries.small,"small-only":Foundation.media_queries["small-only"],medium:Foundation.media_queries.medium,"medium-only":Foundation.media_queries["medium-only"],large:Foundation.media_queries.large,"large-only":Foundation.media_queries["large-only"],xlarge:Foundation.media_queries.xlarge,"xlarge-only":Foundation.media_queries["xlarge-only"],xxlarge:Foundation.media_queries.xxlarge,landscape:"only screen and (orientation: landscape)",portrait:"only screen and (orientation: portrait)",retina:"only screen and (-webkit-min-device-pixel-ratio: 2),only screen and (min--moz-device-pixel-ratio: 2),only screen and (-o-min-device-pixel-ratio: 2/1),only screen and (min-device-pixel-ratio: 2),only screen and (min-resolution: 192dpi),only screen and (min-resolution: 2dppx)"},directives:{replace:function(b,c,d){if(null!==b&&/IMG/.test(b[0].nodeName)){var e=b[0].src;if(new RegExp(c,"i").test(e))return;return b.attr("src",c),d(b[0].src)}var f=b.data(this.data_attr+"-last-path"),g=this;if(f!=c)return/\.(gif|jpg|jpeg|tiff|png)([?#].*)?/i.test(c)?(a(b).css("background-image","url("+c+")"),b.data("interchange-last-path",c),d(c)):a.get(c,function(a){b.html(a),b.data(g.data_attr+"-last-path",c),d()})}}},init:function(b,c,d){Foundation.inherit(this,"throttle random_str"),this.data_attr=this.set_data_attr(),a.extend(!0,this.settings,c,d),this.bindings(c,d),this.reflow()},get_media_hash:function(){var a="";for(var b in this.settings.named_queries)a+=matchMedia(this.settings.named_queries[b]).matches.toString();return a},events:function(){var c,d=this;return a(b).off(".interchange").on("resize.fndtn.interchange",d.throttle(function(){var a=d.get_media_hash();a!==c&&d.resize(),c=a},50)),this},resize:function(){var b=this.cache;if(!this.images_loaded||!this.nodes_loaded)return void setTimeout(a.proxy(this.resize,this),50);for(var c in b)if(b.hasOwnProperty(c)){var d=this.results(c,b[c]);d&&this.settings.directives[d.scenario[1]].call(this,d.el,d.scenario[0],function(a){if(arguments[0]instanceof Array)var b=arguments[0];else var b=Array.prototype.slice.call(arguments,0);return function(){a.el.trigger(a.scenario[1],b)}}(d))}},results:function(a,b){var c=b.length;if(c>0)for(var d=this.S("["+this.add_namespace("data-uuid")+'="'+a+'"]');c--;){var e,f=b[c][2];if(e=matchMedia(this.settings.named_queries.hasOwnProperty(f)?this.settings.named_queries[f]:f),e.matches)return{el:d,scenario:b[c]}}return!1},load:function(a,b){return("undefined"==typeof this["cached_"+a]||b)&&this["update_"+a](),this["cached_"+a]},update_images:function(){var a=this.S("img["+this.data_attr+"]"),b=a.length,c=b,d=0,e=this.data_attr;for(this.cache={},this.cached_images=[],this.images_loaded=0===b;c--;){if(d++,a[c]){var f=a[c].getAttribute(e)||"";f.length>0&&this.cached_images.push(a[c])}d===b&&(this.images_loaded=!0,this.enhance("images"))}return this},update_nodes:function(){var a=this.S("["+this.data_attr+"]").not("img"),b=a.length,c=b,d=0,e=this.data_attr;for(this.cached_nodes=[],this.nodes_loaded=0===b;c--;){d++;var f=a[c].getAttribute(e)||"";f.length>0&&this.cached_nodes.push(a[c]),d===b&&(this.nodes_loaded=!0,this.enhance("nodes"))}return this},enhance:function(c){for(var d=this["cached_"+c].length;d--;)this.object(a(this["cached_"+c][d]));return a(b).trigger("resize.fndtn.interchange")},convert_directive:function(a){var b=this.trim(a);return b.length>0?b:"replace"},parse_scenario:function(a){var b=a[0].match(/(.+),\s*(\w+)\s*$/),c=a[1].match(/(.*)\)/);if(b)var d=b[1],e=b[2];else var f=a[0].split(/,\s*$/),d=f[0],e="";return[this.trim(d),this.convert_directive(e),this.trim(c[1])]},object:function(a){var b=this.parse_data_attr(a),c=[],d=b.length;if(d>0)for(;d--;){var e=b[d].split(/,\s?\(/);if(e.length>1){var f=this.parse_scenario(e);c.push(f)}}return this.store(a,c)},store:function(a,b){var c=this.random_str(),d=a.data(this.add_namespace("uuid",!0));return this.cache[d]?this.cache[d]:(a.attr(this.add_namespace("data-uuid"),c),this.cache[c]=b)},trim:function(b){return"string"==typeof b?a.trim(b):b},set_data_attr:function(a){return a?this.namespace.length>0?this.namespace+"-"+this.settings.load_attr:this.settings.load_attr:this.namespace.length>0?"data-"+this.namespace+"-"+this.settings.load_attr:"data-"+this.settings.load_attr},parse_data_attr:function(a){for(var b=a.attr(this.attr_name()).split(/\[(.*?)\]/),c=b.length,d=[];c--;)b[c].replace(/[\W\d]+/,"").length>4&&d.push(b[c]);return d},reflow:function(){this.load("images",!0),this.load("nodes",!0)}}}(jQuery,window,window.document),function(a,b,c,d){"use strict";Foundation.libs.joyride={name:"joyride",version:"5.5.2",defaults:{expose:!1,modal:!0,keyboard:!0,tip_location:"bottom",nub_position:"auto",scroll_speed:1500,scroll_animation:"linear",timer:0,start_timer_on_click:!0,start_offset:0,next_button:!0,prev_button:!0,tip_animation:"fade",pause_after:[],exposed:[],tip_animation_fade_speed:300,cookie_monster:!1,cookie_name:"joyride",cookie_domain:!1,cookie_expires:365,tip_container:"body",abort_on_close:!0,tip_location_patterns:{top:["bottom"],bottom:[],left:["right","top","bottom"],right:["left","top","bottom"]},post_ride_callback:function(){},post_step_callback:function(){},pre_step_callback:function(){},pre_ride_callback:function(){},post_expose_callback:function(){},template:{link:'<a href="#close" class="joyride-close-tip">&times;</a>',timer:'<div class="joyride-timer-indicator-wrap"><span class="joyride-timer-indicator"></span></div>',tip:'<div class="joyride-tip-guide"><span class="joyride-nub"></span></div>',wrapper:'<div class="joyride-content-wrapper"></div>',button:'<a href="#" class="small button joyride-next-tip"></a>',prev_button:'<a href="#" class="small button joyride-prev-tip"></a>',modal:'<div class="joyride-modal-bg"></div>',expose:'<div class="joyride-expose-wrapper"></div>',expose_cover:'<div class="joyride-expose-cover"></div>'},expose_add_class:""},init:function(b,c,d){Foundation.inherit(this,"throttle random_str"),this.settings=this.settings||a.extend({},this.defaults,d||c),this.bindings(c,d)},go_next:function(){this.settings.$li.next().length<1?this.end():this.settings.timer>0?(clearTimeout(this.settings.automate),this.hide(),this.show(),this.startTimer()):(this.hide(),this.show())},go_prev:function(){this.settings.$li.prev().length<1||(this.settings.timer>0?(clearTimeout(this.settings.automate),this.hide(),this.show(null,!0),this.startTimer()):(this.hide(),this.show(null,!0)))},events:function(){var c=this;a(this.scope).off(".joyride").on("click.fndtn.joyride",".joyride-next-tip, .joyride-modal-bg",function(a){a.preventDefault(),this.go_next()}.bind(this)).on("click.fndtn.joyride",".joyride-prev-tip",function(a){a.preventDefault(),this.go_prev()}.bind(this)).on("click.fndtn.joyride",".joyride-close-tip",function(a){a.preventDefault(),this.end(this.settings.abort_on_close)}.bind(this)).on("keyup.fndtn.joyride",function(a){if(this.settings.keyboard&&this.settings.riding)switch(a.which){case 39:a.preventDefault(),this.go_next();break;case 37:a.preventDefault(),this.go_prev();break;case 27:a.preventDefault(),this.end(this.settings.abort_on_close)}}.bind(this)),a(b).off(".joyride").on("resize.fndtn.joyride",c.throttle(function(){if(a("["+c.attr_name()+"]").length>0&&c.settings.$next_tip&&c.settings.riding){if(c.settings.exposed.length>0){var b=a(c.settings.exposed);b.each(function(){var b=a(this);c.un_expose(b),c.expose(b)})}c.is_phone()?c.pos_phone():c.pos_default(!1)}},100))},start:function(){var b=this,c=a("["+this.attr_name()+"]",this.scope),d=["timer","scrollSpeed","startOffset","tipAnimationFadeSpeed","cookieExpires"],e=d.length;!c.length>0||(this.settings.init||this.events(),this.settings=c.data(this.attr_name(!0)+"-init"),this.settings.$content_el=c,this.settings.$body=a(this.settings.tip_container),this.settings.body_offset=a(this.settings.tip_container).position(),this.settings.$tip_content=this.settings.$content_el.find("> li"),this.settings.paused=!1,this.settings.attempts=0,this.settings.riding=!0,"function"!=typeof a.cookie&&(this.settings.cookie_monster=!1),(!this.settings.cookie_monster||this.settings.cookie_monster&&!a.cookie(this.settings.cookie_name))&&(this.settings.$tip_content.each(function(c){var f=a(this);this.settings=a.extend({},b.defaults,b.data_options(f));for(var g=e;g--;)b.settings[d[g]]=parseInt(b.settings[d[g]],10);b.create({$li:f,index:c})}),!this.settings.start_timer_on_click&&this.settings.timer>0?(this.show("init"),this.startTimer()):this.show("init")))},resume:function(){this.set_li(),this.show()},tip_template:function(b){var c,d;return b.tip_class=b.tip_class||"",c=a(this.settings.template.tip).addClass(b.tip_class),d=a.trim(a(b.li).html())+this.prev_button_text(b.prev_button_text,b.index)+this.button_text(b.button_text)+this.settings.template.link+this.timer_instance(b.index),c.append(a(this.settings.template.wrapper)),c.first().attr(this.add_namespace("data-index"),b.index),a(".joyride-content-wrapper",c).append(d),c[0]},timer_instance:function(b){var c;return c=0===b&&this.settings.start_timer_on_click&&this.settings.timer>0||0===this.settings.timer?"":a(this.settings.template.timer)[0].outerHTML},button_text:function(b){return this.settings.tip_settings.next_button?(b=a.trim(b)||"Next",b=a(this.settings.template.button).append(b)[0].outerHTML):b="",b},prev_button_text:function(b,c){return this.settings.tip_settings.prev_button?(b=a.trim(b)||"Previous",b=0==c?a(this.settings.template.prev_button).append(b).addClass("disabled")[0].outerHTML:a(this.settings.template.prev_button).append(b)[0].outerHTML):b="",b},create:function(b){this.settings.tip_settings=a.extend({},this.settings,this.data_options(b.$li));var c=b.$li.attr(this.add_namespace("data-button"))||b.$li.attr(this.add_namespace("data-text")),d=b.$li.attr(this.add_namespace("data-button-prev"))||b.$li.attr(this.add_namespace("data-prev-text")),e=b.$li.attr("class"),f=a(this.tip_template({tip_class:e,index:b.index,button_text:c,prev_button_text:d,li:b.$li}));a(this.settings.tip_container).append(f)},show:function(b,c){var e=null;if(this.settings.$li===d||-1===a.inArray(this.settings.$li.index(),this.settings.pause_after))if(this.settings.paused?this.settings.paused=!1:this.set_li(b,c),this.settings.attempts=0,this.settings.$li.length&&this.settings.$target.length>0){if(b&&(this.settings.pre_ride_callback(this.settings.$li.index(),this.settings.$next_tip),this.settings.modal&&this.show_modal()),this.settings.pre_step_callback(this.settings.$li.index(),this.settings.$next_tip),this.settings.modal&&this.settings.expose&&this.expose(),this.settings.tip_settings=a.extend({},this.settings,this.data_options(this.settings.$li)),this.settings.timer=parseInt(this.settings.timer,10),this.settings.tip_settings.tip_location_pattern=this.settings.tip_location_patterns[this.settings.tip_settings.tip_location],!/body/i.test(this.settings.$target.selector)){var f=a(".joyride-modal-bg");/pop/i.test(this.settings.tipAnimation)?f.hide():f.fadeOut(this.settings.tipAnimationFadeSpeed),this.scroll_to()}this.is_phone()?this.pos_phone(!0):this.pos_default(!0),e=this.settings.$next_tip.find(".joyride-timer-indicator"),/pop/i.test(this.settings.tip_animation)?(e.width(0),this.settings.timer>0?(this.settings.$next_tip.show(),setTimeout(function(){e.animate({width:e.parent().width()},this.settings.timer,"linear")}.bind(this),this.settings.tip_animation_fade_speed)):this.settings.$next_tip.show()):/fade/i.test(this.settings.tip_animation)&&(e.width(0),this.settings.timer>0?(this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed).show(),setTimeout(function(){e.animate({width:e.parent().width()},this.settings.timer,"linear")}.bind(this),this.settings.tip_animation_fade_speed)):this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed)),this.settings.$current_tip=this.settings.$next_tip}else this.settings.$li&&this.settings.$target.length<1?this.show(b,c):this.end();else this.settings.paused=!0},is_phone:function(){return matchMedia(Foundation.media_queries.small).matches&&!matchMedia(Foundation.media_queries.medium).matches},hide:function(){this.settings.modal&&this.settings.expose&&this.un_expose(),this.settings.modal||a(".joyride-modal-bg").hide(),this.settings.$current_tip.css("visibility","hidden"),setTimeout(a.proxy(function(){this.hide(),this.css("visibility","visible")},this.settings.$current_tip),0),this.settings.post_step_callback(this.settings.$li.index(),this.settings.$current_tip)},set_li:function(a,b){a?(this.settings.$li=this.settings.$tip_content.eq(this.settings.start_offset),this.set_next_tip(),this.settings.$current_tip=this.settings.$next_tip):(b?this.settings.$li=this.settings.$li.prev():this.settings.$li=this.settings.$li.next(),this.set_next_tip()),this.set_target()},set_next_tip:function(){this.settings.$next_tip=a(".joyride-tip-guide").eq(this.settings.$li.index()),this.settings.$next_tip.data("closed","")},set_target:function(){var b=this.settings.$li.attr(this.add_namespace("data-class")),d=this.settings.$li.attr(this.add_namespace("data-id")),e=function(){return d?a(c.getElementById(d)):b?a("."+b).first():a("body")};this.settings.$target=e()},scroll_to:function(){var c,d;c=a(b).height()/2,d=Math.ceil(this.settings.$target.offset().top-c+this.settings.$next_tip.outerHeight()),0!=d&&a("html, body").stop().animate({scrollTop:d},this.settings.scroll_speed,"swing")},paused:function(){return-1===a.inArray(this.settings.$li.index()+1,this.settings.pause_after)},restart:function(){this.hide(),this.settings.$li=d,this.show("init")},pos_default:function(a){var b=this.settings.$next_tip.find(".joyride-nub"),c=Math.ceil(b.outerWidth()/2),d=Math.ceil(b.outerHeight()/2),e=a||!1;if(e&&(this.settings.$next_tip.css("visibility","hidden"),this.settings.$next_tip.show()),/body/i.test(this.settings.$target.selector))this.settings.$li.length&&this.pos_modal(b);else{var f=this.settings.tip_settings.tipAdjustmentY?parseInt(this.settings.tip_settings.tipAdjustmentY):0,g=this.settings.tip_settings.tipAdjustmentX?parseInt(this.settings.tip_settings.tipAdjustmentX):0;this.bottom()?(this.settings.$next_tip.css(this.rtl?{top:this.settings.$target.offset().top+d+this.settings.$target.outerHeight()+f,left:this.settings.$target.offset().left+this.settings.$target.outerWidth()-this.settings.$next_tip.outerWidth()+g}:{top:this.settings.$target.offset().top+d+this.settings.$target.outerHeight()+f,left:this.settings.$target.offset().left+g}),this.nub_position(b,this.settings.tip_settings.nub_position,"top")):this.top()?(this.settings.$next_tip.css(this.rtl?{top:this.settings.$target.offset().top-this.settings.$next_tip.outerHeight()-d+f,left:this.settings.$target.offset().left+this.settings.$target.outerWidth()-this.settings.$next_tip.outerWidth()}:{top:this.settings.$target.offset().top-this.settings.$next_tip.outerHeight()-d+f,left:this.settings.$target.offset().left+g}),this.nub_position(b,this.settings.tip_settings.nub_position,"bottom")):this.right()?(this.settings.$next_tip.css({top:this.settings.$target.offset().top+f,left:this.settings.$target.outerWidth()+this.settings.$target.offset().left+c+g}),this.nub_position(b,this.settings.tip_settings.nub_position,"left")):this.left()&&(this.settings.$next_tip.css({top:this.settings.$target.offset().top+f,left:this.settings.$target.offset().left-this.settings.$next_tip.outerWidth()-c+g}),this.nub_position(b,this.settings.tip_settings.nub_position,"right")),!this.visible(this.corners(this.settings.$next_tip))&&this.settings.attempts<this.settings.tip_settings.tip_location_pattern.length&&(b.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"),this.settings.tip_settings.tip_location=this.settings.tip_settings.tip_location_pattern[this.settings.attempts],this.settings.attempts++,this.pos_default())}e&&(this.settings.$next_tip.hide(),this.settings.$next_tip.css("visibility","visible"))},pos_phone:function(b){var c=this.settings.$next_tip.outerHeight(),d=(this.settings.$next_tip.offset(),this.settings.$target.outerHeight()),e=a(".joyride-nub",this.settings.$next_tip),f=Math.ceil(e.outerHeight()/2),g=b||!1;e.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"),g&&(this.settings.$next_tip.css("visibility","hidden"),this.settings.$next_tip.show()),/body/i.test(this.settings.$target.selector)?this.settings.$li.length&&this.pos_modal(e):this.top()?(this.settings.$next_tip.offset({top:this.settings.$target.offset().top-c-f}),e.addClass("bottom")):(this.settings.$next_tip.offset({top:this.settings.$target.offset().top+d+f}),e.addClass("top")),g&&(this.settings.$next_tip.hide(),this.settings.$next_tip.css("visibility","visible"))},pos_modal:function(a){this.center(),a.hide(),this.show_modal()},show_modal:function(){if(!this.settings.$next_tip.data("closed")){var b=a(".joyride-modal-bg");if(b.length<1){var b=a(this.settings.template.modal);b.appendTo("body")}/pop/i.test(this.settings.tip_animation)?b.show():b.fadeIn(this.settings.tip_animation_fade_speed)}},expose:function(){var c,d,e,f,g,h="expose-"+this.random_str(6);if(arguments.length>0&&arguments[0]instanceof a)e=arguments[0];else{if(!this.settings.$target||/body/i.test(this.settings.$target.selector))return!1;e=this.settings.$target}return e.length<1?(b.console&&console.error("element not valid",e),!1):(c=a(this.settings.template.expose),this.settings.$body.append(c),c.css({top:e.offset().top,left:e.offset().left,width:e.outerWidth(!0),height:e.outerHeight(!0)}),d=a(this.settings.template.expose_cover),f={zIndex:e.css("z-index"),position:e.css("position")},g=null==e.attr("class")?"":e.attr("class"),e.css("z-index",parseInt(c.css("z-index"))+1),"static"==f.position&&e.css("position","relative"),e.data("expose-css",f),e.data("orig-class",g),e.attr("class",g+" "+this.settings.expose_add_class),d.css({top:e.offset().top,left:e.offset().left,width:e.outerWidth(!0),height:e.outerHeight(!0)}),this.settings.modal&&this.show_modal(),this.settings.$body.append(d),c.addClass(h),d.addClass(h),e.data("expose",h),this.settings.post_expose_callback(this.settings.$li.index(),this.settings.$next_tip,e),void this.add_exposed(e))},un_expose:function(){var c,d,e,f,g,h=!1;if(arguments.length>0&&arguments[0]instanceof a)d=arguments[0];else{if(!this.settings.$target||/body/i.test(this.settings.$target.selector))return!1;d=this.settings.$target}return d.length<1?(b.console&&console.error("element not valid",d),!1):(c=d.data("expose"),e=a("."+c),arguments.length>1&&(h=arguments[1]),h===!0?a(".joyride-expose-wrapper,.joyride-expose-cover").remove():e.remove(),f=d.data("expose-css"),"auto"==f.zIndex?d.css("z-index",""):d.css("z-index",f.zIndex),f.position!=d.css("position")&&("static"==f.position?d.css("position",""):d.css("position",f.position)),g=d.data("orig-class"),d.attr("class",g),d.removeData("orig-classes"),d.removeData("expose"),d.removeData("expose-z-index"),void this.remove_exposed(d))},add_exposed:function(b){this.settings.exposed=this.settings.exposed||[],b instanceof a||"object"==typeof b?this.settings.exposed.push(b[0]):"string"==typeof b&&this.settings.exposed.push(b)},remove_exposed:function(b){var c,d;for(b instanceof a?c=b[0]:"string"==typeof b&&(c=b),this.settings.exposed=this.settings.exposed||[],d=this.settings.exposed.length;d--;)if(this.settings.exposed[d]==c)return void this.settings.exposed.splice(d,1)},center:function(){var c=a(b);return this.settings.$next_tip.css({top:(c.height()-this.settings.$next_tip.outerHeight())/2+c.scrollTop(),left:(c.width()-this.settings.$next_tip.outerWidth())/2+c.scrollLeft()}),!0},bottom:function(){return/bottom/i.test(this.settings.tip_settings.tip_location)},top:function(){return/top/i.test(this.settings.tip_settings.tip_location)},right:function(){return/right/i.test(this.settings.tip_settings.tip_location)},left:function(){return/left/i.test(this.settings.tip_settings.tip_location)},corners:function(c){var d=a(b),e=d.height()/2,f=Math.ceil(this.settings.$target.offset().top-e+this.settings.$next_tip.outerHeight()),g=d.width()+d.scrollLeft(),h=d.height()+f,i=d.height()+d.scrollTop(),j=d.scrollTop();return j>f&&(j=0>f?0:f),h>i&&(i=h),[c.offset().top<j,g<c.offset().left+c.outerWidth(),i<c.offset().top+c.outerHeight(),d.scrollLeft()>c.offset().left]},visible:function(a){for(var b=a.length;b--;)if(a[b])return!1;return!0},nub_position:function(a,b,c){a.addClass("auto"===b?c:b)},startTimer:function(){this.settings.$li.length?this.settings.automate=setTimeout(function(){this.hide(),this.show(),this.startTimer()}.bind(this),this.settings.timer):clearTimeout(this.settings.automate)},end:function(b){this.settings.cookie_monster&&a.cookie(this.settings.cookie_name,"ridden",{expires:this.settings.cookie_expires,domain:this.settings.cookie_domain}),this.settings.timer>0&&clearTimeout(this.settings.automate),this.settings.modal&&this.settings.expose&&this.un_expose(),a(this.scope).off("keyup.joyride"),this.settings.$next_tip.data("closed",!0),this.settings.riding=!1,a(".joyride-modal-bg").hide(),this.settings.$current_tip.hide(),("undefined"==typeof b||b===!1)&&(this.settings.post_step_callback(this.settings.$li.index(),this.settings.$current_tip),this.settings.post_ride_callback(this.settings.$li.index(),this.settings.$current_tip)),a(".joyride-tip-guide").remove()},off:function(){a(this.scope).off(".joyride"),a(b).off(".joyride"),a(".joyride-close-tip, .joyride-next-tip, .joyride-modal-bg").off(".joyride"),a(".joyride-tip-guide, .joyride-modal-bg").remove(),clearTimeout(this.settings.automate),this.settings={}},reflow:function(){}}}(jQuery,window,window.document),function(a,b,c,d){"use strict";Foundation.libs["magellan-expedition"]={name:"magellan-expedition",version:"5.5.2",settings:{active_class:"active",threshold:0,destination_threshold:20,throttle_delay:30,fixed_top:0,offset_by_height:!0,duration:700,easing:"swing"},init:function(a,b,c){Foundation.inherit(this,"throttle"),this.bindings(b,c)},events:function(){var b=this,c=b.S,d=b.settings;b.set_expedition_position(),c(b.scope).off(".magellan").on("click.fndtn.magellan","["+b.add_namespace("data-magellan-arrival")+"] a[href*=#]",function(c){var d=this.hostname===location.hostname||!this.hostname,e=b.filterPathname(location.pathname)===b.filterPathname(this.pathname),f=this.hash.replace(/(:|\.|\/)/g,"\\$1"),g=this;if(d&&e&&f){c.preventDefault();var h=a(this).closest("["+b.attr_name()+"]"),i=h.data("magellan-expedition-init"),j=this.hash.split("#").join(""),k=a('a[name="'+j+'"]');0===k.length&&(k=a("#"+j));var l=k.offset().top-i.destination_threshold+1;i.offset_by_height&&(l-=h.outerHeight()),a("html, body").stop().animate({scrollTop:l},i.duration,i.easing,function(){history.pushState?history.pushState(null,null,g.pathname+"#"+j):location.hash=g.pathname+"#"+j})}}).on("scroll.fndtn.magellan",b.throttle(this.check_for_arrivals.bind(this),d.throttle_delay))},check_for_arrivals:function(){var a=this;a.update_arrivals(),a.update_expedition_positions()},set_expedition_position:function(){var b=this;a("["+this.attr_name()+"=fixed]",b.scope).each(function(c,d){var e,f,g=a(this),h=g.data("magellan-expedition-init"),i=g.attr("styles");g.attr("style",""),e=g.offset().top+h.threshold,f=parseInt(g.data("magellan-fixed-top")),isNaN(f)||(b.settings.fixed_top=f),g.data(b.data_attr("magellan-top-offset"),e),g.attr("style",i)})},update_expedition_positions:function(){var c=this,d=a(b).scrollTop();a("["+this.attr_name()+"=fixed]",c.scope).each(function(){var b=a(this),e=b.data("magellan-expedition-init"),f=b.attr("style"),g=b.data("magellan-top-offset");if(d+c.settings.fixed_top>=g){var h=b.prev("["+c.add_namespace("data-magellan-expedition-clone")+"]");0===h.length&&(h=b.clone(),h.removeAttr(c.attr_name()),h.attr(c.add_namespace("data-magellan-expedition-clone"),""),b.before(h)),b.css({position:"fixed",top:e.fixed_top}).addClass("fixed")}else b.prev("["+c.add_namespace("data-magellan-expedition-clone")+"]").remove(),b.attr("style",f).css("position","").css("top","").removeClass("fixed")})},update_arrivals:function(){var c=this,d=a(b).scrollTop();a("["+this.attr_name()+"]",c.scope).each(function(){var b=a(this),e=b.data(c.attr_name(!0)+"-init"),f=c.offsets(b,d),g=b.find("["+c.add_namespace("data-magellan-arrival")+"]"),h=!1;f.each(function(a,d){if(d.viewport_offset>=d.top_offset){var f=b.find("["+c.add_namespace("data-magellan-arrival")+"]");return f.not(d.arrival).removeClass(e.active_class),d.arrival.addClass(e.active_class),h=!0,!0}}),h||g.removeClass(e.active_class)})},offsets:function(b,c){var d=this,e=b.data(d.attr_name(!0)+"-init"),f=c;return b.find("["+d.add_namespace("data-magellan-arrival")+"]").map(function(c,g){var h=a(this).data(d.data_attr("magellan-arrival")),i=a("["+d.add_namespace("data-magellan-destination")+"="+h+"]");if(i.length>0){var j=i.offset().top-e.destination_threshold;return e.offset_by_height&&(j-=b.outerHeight()),j=Math.floor(j),{destination:i,arrival:a(this),top_offset:j,viewport_offset:f}}}).sort(function(a,b){return a.top_offset<b.top_offset?-1:a.top_offset>b.top_offset?1:0})},data_attr:function(a){return this.namespace.length>0?this.namespace+"-"+a:a},off:function(){this.S(this.scope).off(".magellan"),this.S(b).off(".magellan")},filterPathname:function(a){return a=a||"",a.replace(/^\//,"").replace(/(?:index|default).[a-zA-Z]{3,4}$/,"").replace(/\/$/,"")},reflow:function(){var b=this;a("["+b.add_namespace("data-magellan-expedition-clone")+"]",b.scope).remove()}}}(jQuery,window,window.document),function(a,b,c,d){"use strict";Foundation.libs.offcanvas={name:"offcanvas",version:"5.5.2",settings:{open_method:"move",close_on_click:!1},init:function(a,b,c){this.bindings(b,c)},events:function(){var b=this,c=b.S,d="",e="",f="";"move"===this.settings.open_method?(d="move-",e="right",f="left"):"overlap_single"===this.settings.open_method?(d="offcanvas-overlap-",e="right",f="left"):"overlap"===this.settings.open_method&&(d="offcanvas-overlap"),c(this.scope).off(".offcanvas").on("click.fndtn.offcanvas",".left-off-canvas-toggle",function(f){b.click_toggle_class(f,d+e),"overlap"!==b.settings.open_method&&c(".left-submenu").removeClass(d+e),a(".left-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".left-off-canvas-menu a",function(f){var g=b.get_settings(f),h=c(this).parent();!g.close_on_click||h.hasClass("has-submenu")||h.hasClass("back")?c(this).parent().hasClass("has-submenu")?(f.preventDefault(),c(this).siblings(".left-submenu").toggleClass(d+e)):h.hasClass("back")&&(f.preventDefault(),h.parent().removeClass(d+e)):(b.hide.call(b,d+e,b.get_wrapper(f)),h.parent().removeClass(d+e)),a(".left-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".right-off-canvas-toggle",function(e){b.click_toggle_class(e,d+f),"overlap"!==b.settings.open_method&&c(".right-submenu").removeClass(d+f),a(".right-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".right-off-canvas-menu a",function(e){var g=b.get_settings(e),h=c(this).parent();!g.close_on_click||h.hasClass("has-submenu")||h.hasClass("back")?c(this).parent().hasClass("has-submenu")?(e.preventDefault(),c(this).siblings(".right-submenu").toggleClass(d+f)):h.hasClass("back")&&(e.preventDefault(),h.parent().removeClass(d+f)):(b.hide.call(b,d+f,b.get_wrapper(e)),h.parent().removeClass(d+f)),a(".right-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".exit-off-canvas",function(g){b.click_remove_class(g,d+f),c(".right-submenu").removeClass(d+f),e&&(b.click_remove_class(g,d+e),c(".left-submenu").removeClass(d+f)),a(".right-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".exit-off-canvas",function(c){b.click_remove_class(c,d+f),a(".left-off-canvas-toggle").attr("aria-expanded","false"),e&&(b.click_remove_class(c,d+e),a(".right-off-canvas-toggle").attr("aria-expanded","false"))})},toggle:function(a,b){b=b||this.get_wrapper(),b.is("."+a)?this.hide(a,b):this.show(a,b)},show:function(a,b){b=b||this.get_wrapper(),b.trigger("open.fndtn.offcanvas"),b.addClass(a)},hide:function(a,b){b=b||this.get_wrapper(),b.trigger("close.fndtn.offcanvas"),b.removeClass(a)},click_toggle_class:function(a,b){
a.preventDefault();var c=this.get_wrapper(a);this.toggle(b,c)},click_remove_class:function(a,b){a.preventDefault();var c=this.get_wrapper(a);this.hide(b,c)},get_settings:function(a){var b=this.S(a.target).closest("["+this.attr_name()+"]");return b.data(this.attr_name(!0)+"-init")||this.settings},get_wrapper:function(a){var b=this.S(a?a.target:this.scope).closest(".off-canvas-wrap");return 0===b.length&&(b=this.S(".off-canvas-wrap")),b},reflow:function(){}}}(jQuery,window,window.document),function(a,b,c,d){"use strict";var e=function(){},f=function(e,f){if(e.hasClass(f.slides_container_class))return this;var j,k,l,m,n,o,p=this,q=e,r=0,s=!1;p.slides=function(){return q.children(f.slide_selector)},p.slides().first().addClass(f.active_slide_class),p.update_slide_number=function(b){f.slide_number&&(k.find("span:first").text(parseInt(b)+1),k.find("span:last").text(p.slides().length)),f.bullets&&(l.children().removeClass(f.bullets_active_class),a(l.children().get(b)).addClass(f.bullets_active_class))},p.update_active_link=function(b){var c=a('[data-orbit-link="'+p.slides().eq(b).attr("data-orbit-slide")+'"]');c.siblings().removeClass(f.bullets_active_class),c.addClass(f.bullets_active_class)},p.build_markup=function(){q.wrap('<div class="'+f.container_class+'"></div>'),j=q.parent(),q.addClass(f.slides_container_class),f.stack_on_small&&j.addClass(f.stack_on_small_class),f.navigation_arrows&&(j.append(a('<a href="#"><span></span></a>').addClass(f.prev_class)),j.append(a('<a href="#"><span></span></a>').addClass(f.next_class))),f.timer&&(m=a("<div>").addClass(f.timer_container_class),m.append("<span>"),m.append(a("<div>").addClass(f.timer_progress_class)),m.addClass(f.timer_paused_class),j.append(m)),f.slide_number&&(k=a("<div>").addClass(f.slide_number_class),k.append("<span></span> "+f.slide_number_text+" <span></span>"),j.append(k)),f.bullets&&(l=a("<ol>").addClass(f.bullets_container_class),j.append(l),l.wrap('<div class="orbit-bullets-container"></div>'),p.slides().each(function(b,c){var d=a("<li>").attr("data-orbit-slide",b).on("click",p.link_bullet);l.append(d)}))},p._goto=function(b,c){if(b===r)return!1;"object"==typeof o&&o.restart();var d=p.slides(),e="next";if(s=!0,r>b&&(e="prev"),b>=d.length){if(!f.circular)return!1;b=0}else if(0>b){if(!f.circular)return!1;b=d.length-1}var g=a(d.get(r)),h=a(d.get(b));g.css("zIndex",2),g.removeClass(f.active_slide_class),h.css("zIndex",4).addClass(f.active_slide_class),q.trigger("before-slide-change.fndtn.orbit"),f.before_slide_change(),p.update_active_link(b);var i=function(){var a=function(){r=b,s=!1,c===!0&&(o=p.create_timer(),o.start()),p.update_slide_number(r),q.trigger("after-slide-change.fndtn.orbit",[{slide_number:r,total_slides:d.length}]),f.after_slide_change(r,d.length)};q.outerHeight()!=h.outerHeight()&&f.variable_height?q.animate({height:h.outerHeight()},250,"linear",a):a()};if(1===d.length)return i(),!1;var j=function(){"next"===e&&n.next(g,h,i),"prev"===e&&n.prev(g,h,i)};h.outerHeight()>q.outerHeight()&&f.variable_height?q.animate({height:h.outerHeight()},250,"linear",j):j()},p.next=function(a){a.stopImmediatePropagation(),a.preventDefault(),p._goto(r+1)},p.prev=function(a){a.stopImmediatePropagation(),a.preventDefault(),p._goto(r-1)},p.link_custom=function(b){b.preventDefault();var c=a(this).attr("data-orbit-link");if("string"==typeof c&&""!=(c=a.trim(c))){var d=j.find("[data-orbit-slide="+c+"]");-1!=d.index()&&p._goto(d.index())}},p.link_bullet=function(b){var c=a(this).attr("data-orbit-slide");if("string"==typeof c&&""!=(c=a.trim(c)))if(isNaN(parseInt(c))){var d=j.find("[data-orbit-slide="+c+"]");-1!=d.index()&&p._goto(d.index()+1)}else p._goto(parseInt(c))},p.timer_callback=function(){p._goto(r+1,!0)},p.compute_dimensions=function(){var b=a(p.slides().get(r)),c=b.outerHeight();f.variable_height||p.slides().each(function(){a(this).outerHeight()>c&&(c=a(this).outerHeight())}),q.height(c)},p.create_timer=function(){var a=new g(j.find("."+f.timer_container_class),f,p.timer_callback);return a},p.stop_timer=function(){"object"==typeof o&&o.stop()},p.toggle_timer=function(){var a=j.find("."+f.timer_container_class);a.hasClass(f.timer_paused_class)?("undefined"==typeof o&&(o=p.create_timer()),o.start()):"object"==typeof o&&o.stop()},p.init=function(){p.build_markup(),f.timer&&(o=p.create_timer(),Foundation.utils.image_loaded(this.slides().children("img"),o.start)),n=new i(f,q),"slide"===f.animation&&(n=new h(f,q)),j.on("click","."+f.next_class,p.next),j.on("click","."+f.prev_class,p.prev),f.next_on_click&&j.on("click","."+f.slides_container_class+" [data-orbit-slide]",p.link_bullet),j.on("click",p.toggle_timer),f.swipe&&j.on("touchstart.fndtn.orbit",function(a){a.touches||(a=a.originalEvent);var b={start_page_x:a.touches[0].pageX,start_page_y:a.touches[0].pageY,start_time:(new Date).getTime(),delta_x:0,is_scrolling:d};j.data("swipe-transition",b),a.stopPropagation()}).on("touchmove.fndtn.orbit",function(a){if(a.touches||(a=a.originalEvent),!(a.touches.length>1||a.scale&&1!==a.scale)){var b=j.data("swipe-transition");if("undefined"==typeof b&&(b={}),b.delta_x=a.touches[0].pageX-b.start_page_x,"undefined"==typeof b.is_scrolling&&(b.is_scrolling=!!(b.is_scrolling||Math.abs(b.delta_x)<Math.abs(a.touches[0].pageY-b.start_page_y))),!b.is_scrolling&&!b.active){a.preventDefault();var c=b.delta_x<0?r+1:r-1;b.active=!0,p._goto(c)}}}).on("touchend.fndtn.orbit",function(a){j.data("swipe-transition",{}),a.stopPropagation()}),j.on("mouseenter.fndtn.orbit",function(a){f.timer&&f.pause_on_hover&&p.stop_timer()}).on("mouseleave.fndtn.orbit",function(a){f.timer&&f.resume_on_mouseout&&o.start()}),a(c).on("click","[data-orbit-link]",p.link_custom),a(b).on("load resize",p.compute_dimensions),Foundation.utils.image_loaded(this.slides().children("img"),p.compute_dimensions),Foundation.utils.image_loaded(this.slides().children("img"),function(){j.prev("."+f.preloader_class).css("display","none"),p.update_slide_number(0),p.update_active_link(0),q.trigger("ready.fndtn.orbit")})},p.init()},g=function(a,b,c){var d,e,f=this,g=b.timer_speed,h=a.find("."+b.timer_progress_class),i=-1;this.update_progress=function(a){var b=h.clone();b.attr("style",""),b.css("width",a+"%"),h.replaceWith(b),h=b},this.restart=function(){clearTimeout(e),a.addClass(b.timer_paused_class),i=-1,f.update_progress(0)},this.start=function(){return a.hasClass(b.timer_paused_class)?(i=-1===i?g:i,a.removeClass(b.timer_paused_class),d=(new Date).getTime(),h.animate({width:"100%"},i,"linear"),e=setTimeout(function(){f.restart(),c()},i),void a.trigger("timer-started.fndtn.orbit")):!0},this.stop=function(){if(a.hasClass(b.timer_paused_class))return!0;clearTimeout(e),a.addClass(b.timer_paused_class);var c=(new Date).getTime();i-=c-d;var h=100-i/g*100;f.update_progress(h),a.trigger("timer-stopped.fndtn.orbit")}},h=function(b,c){var d=b.animation_speed,e=1===a("html[dir=rtl]").length,f=e?"marginRight":"marginLeft",g={};g[f]="0%",this.next=function(a,b,c){a.animate({marginLeft:"-100%"},d),b.animate(g,d,function(){a.css(f,"100%"),c()})},this.prev=function(a,b,c){a.animate({marginLeft:"100%"},d),b.css(f,"-100%"),b.animate(g,d,function(){a.css(f,"100%"),c()})}},i=function(b,c){{var d=b.animation_speed;1===a("html[dir=rtl]").length}this.next=function(a,b,c){b.css({margin:"0%",opacity:"0.01"}),b.animate({opacity:"1"},d,"linear",function(){a.css("margin","100%"),c()})},this.prev=function(a,b,c){b.css({margin:"0%",opacity:"0.01"}),b.animate({opacity:"1"},d,"linear",function(){a.css("margin","100%"),c()})}};Foundation.libs=Foundation.libs||{},Foundation.libs.orbit={name:"orbit",version:"5.5.2",settings:{animation:"slide",timer_speed:1e4,pause_on_hover:!0,resume_on_mouseout:!1,next_on_click:!0,animation_speed:500,stack_on_small:!1,navigation_arrows:!0,slide_number:!0,slide_number_text:"of",container_class:"orbit-container",stack_on_small_class:"orbit-stack-on-small",next_class:"orbit-next",prev_class:"orbit-prev",timer_container_class:"orbit-timer",timer_paused_class:"paused",timer_progress_class:"orbit-progress",slides_container_class:"orbit-slides-container",preloader_class:"preloader",slide_selector:"*",bullets_container_class:"orbit-bullets",bullets_active_class:"active",slide_number_class:"orbit-slide-number",caption_class:"orbit-caption",active_slide_class:"active",orbit_transition_class:"orbit-transitioning",bullets:!0,circular:!0,timer:!0,variable_height:!1,swipe:!0,before_slide_change:e,after_slide_change:e},init:function(a,b,c){this.bindings(b,c)},events:function(a){var b=new f(this.S(a),this.S(a).data("orbit-init"));this.S(a).data(this.name+"-instance",b)},reflow:function(){var a=this;if(a.S(a.scope).is("[data-orbit]")){var b=a.S(a.scope),c=b.data(a.name+"-instance");c.compute_dimensions()}else a.S("[data-orbit]",a.scope).each(function(b,c){var d=a.S(c),e=(a.data_options(d),d.data(a.name+"-instance"));e.compute_dimensions()})}}}(jQuery,window,window.document),function(a,b,c,d){"use strict";function e(a){var b=/fade/i.test(a),c=/pop/i.test(a);return{animate:b||c,pop:c,fade:b}}Foundation.libs.reveal={name:"reveal",version:"5.5.2",locked:!1,settings:{animation:"fadeAndPop",animation_speed:250,close_on_background_click:!0,close_on_esc:!0,dismiss_modal_class:"close-reveal-modal",multiple_opened:!1,bg_class:"reveal-modal-bg",root_element:"body",open:function(){},opened:function(){},close:function(){},closed:function(){},on_ajax_error:a.noop,bg:a(".reveal-modal-bg"),css:{open:{opacity:0,visibility:"visible",display:"block"},close:{opacity:1,visibility:"hidden",display:"none"}}},init:function(b,c,d){a.extend(!0,this.settings,c,d),this.bindings(c,d)},events:function(a){var b=this,d=b.S;return d(this.scope).off(".reveal").on("click.fndtn.reveal","["+this.add_namespace("data-reveal-id")+"]:not([disabled])",function(a){if(a.preventDefault(),!b.locked){var c=d(this),e=c.data(b.data_attr("reveal-ajax")),f=c.data(b.data_attr("reveal-replace-content"));if(b.locked=!0,"undefined"==typeof e)b.open.call(b,c);else{var g=e===!0?c.attr("href"):e;b.open.call(b,c,{url:g},{replaceContentSel:f})}}}),d(c).on("click.fndtn.reveal",this.close_targets(),function(a){if(a.preventDefault(),!b.locked){var c=d("["+b.attr_name()+"].open").data(b.attr_name(!0)+"-init")||b.settings,e=d(a.target)[0]===d("."+c.bg_class)[0];if(e){if(!c.close_on_background_click)return;a.stopPropagation()}b.locked=!0,b.close.call(b,e?d("["+b.attr_name()+"].open:not(.toback)"):d(this).closest("["+b.attr_name()+"]"))}}),d("["+b.attr_name()+"]",this.scope).length>0?d(this.scope).on("open.fndtn.reveal",this.settings.open).on("opened.fndtn.reveal",this.settings.opened).on("opened.fndtn.reveal",this.open_video).on("close.fndtn.reveal",this.settings.close).on("closed.fndtn.reveal",this.settings.closed).on("closed.fndtn.reveal",this.close_video):d(this.scope).on("open.fndtn.reveal","["+b.attr_name()+"]",this.settings.open).on("opened.fndtn.reveal","["+b.attr_name()+"]",this.settings.opened).on("opened.fndtn.reveal","["+b.attr_name()+"]",this.open_video).on("close.fndtn.reveal","["+b.attr_name()+"]",this.settings.close).on("closed.fndtn.reveal","["+b.attr_name()+"]",this.settings.closed).on("closed.fndtn.reveal","["+b.attr_name()+"]",this.close_video),!0},key_up_on:function(a){var b=this;return b.S("body").off("keyup.fndtn.reveal").on("keyup.fndtn.reveal",function(a){var c=b.S("["+b.attr_name()+"].open"),d=c.data(b.attr_name(!0)+"-init")||b.settings;d&&27===a.which&&d.close_on_esc&&!b.locked&&b.close.call(b,c)}),!0},key_up_off:function(a){return this.S("body").off("keyup.fndtn.reveal"),!0},open:function(c,d){var e,f=this;c?"undefined"!=typeof c.selector?e=f.S("#"+c.data(f.data_attr("reveal-id"))).first():(e=f.S(this.scope),d=c):e=f.S(this.scope);var g=e.data(f.attr_name(!0)+"-init");if(g=g||this.settings,e.hasClass("open")&&c.attr("data-reveal-id")==e.attr("id"))return f.close(e);if(!e.hasClass("open")){var h=f.S("["+f.attr_name()+"].open");if("undefined"==typeof e.data("css-top")&&e.data("css-top",parseInt(e.css("top"),10)).data("offset",this.cache_offset(e)),e.attr("tabindex","0").attr("aria-hidden","false"),this.key_up_on(e),e.on("open.fndtn.reveal",function(a){"fndtn.reveal"!==a.namespace}),e.on("open.fndtn.reveal").trigger("open.fndtn.reveal"),h.length<1&&this.toggle_bg(e,!0),"string"==typeof d&&(d={url:d}),"undefined"!=typeof d&&d.url){var i="undefined"!=typeof d.success?d.success:null;a.extend(d,{success:function(b,c,d){if(a.isFunction(i)){var j=i(b,c,d);"string"==typeof j&&(b=j)}"undefined"!=typeof options&&"undefined"!=typeof options.replaceContentSel?e.find(options.replaceContentSel).html(b):e.html(b),f.S(e).foundation("section","reflow"),f.S(e).children().foundation(),h.length>0&&(g.multiple_opened?f.to_back(h):f.hide(h,g.css.close)),f.show(e,g.css.open)}}),g.on_ajax_error!==a.noop&&a.extend(d,{error:g.on_ajax_error}),a.ajax(d)}else h.length>0&&(g.multiple_opened?f.to_back(h):f.hide(h,g.css.close)),this.show(e,g.css.open)}f.S(b).trigger("resize")},close:function(b){var b=b&&b.length?b:this.S(this.scope),c=this.S("["+this.attr_name()+"].open"),d=b.data(this.attr_name(!0)+"-init")||this.settings,e=this;c.length>0&&(b.removeAttr("tabindex","0").attr("aria-hidden","true"),this.locked=!0,this.key_up_off(b),b.trigger("close.fndtn.reveal"),(d.multiple_opened&&1===c.length||!d.multiple_opened||b.length>1)&&(e.toggle_bg(b,!1),e.to_front(b)),d.multiple_opened?(e.hide(b,d.css.close,d),e.to_front(a(a.makeArray(c).reverse()[1]))):e.hide(c,d.css.close,d))},close_targets:function(){var a="."+this.settings.dismiss_modal_class;return this.settings.close_on_background_click?a+", ."+this.settings.bg_class:a},toggle_bg:function(b,c){0===this.S("."+this.settings.bg_class).length&&(this.settings.bg=a("<div />",{"class":this.settings.bg_class}).appendTo("body").hide());var e=this.settings.bg.filter(":visible").length>0;c!=e&&((c==d?e:!c)?this.hide(this.settings.bg):this.show(this.settings.bg))},show:function(c,d){if(d){var f=c.data(this.attr_name(!0)+"-init")||this.settings,g=f.root_element,h=this;if(0===c.parent(g).length){var i=c.wrap('<div style="display: none;" />').parent();c.on("closed.fndtn.reveal.wrapped",function(){c.detach().appendTo(i),c.unwrap().unbind("closed.fndtn.reveal.wrapped")}),c.detach().appendTo(g)}var j=e(f.animation);if(j.animate||(this.locked=!1),j.pop){d.top=a(b).scrollTop()-c.data("offset")+"px";var k={top:a(b).scrollTop()+c.data("css-top")+"px",opacity:1};return setTimeout(function(){return c.css(d).animate(k,f.animation_speed,"linear",function(){h.locked=!1,c.trigger("opened.fndtn.reveal")}).addClass("open")},f.animation_speed/2)}if(j.fade){d.top=a(b).scrollTop()+c.data("css-top")+"px";var k={opacity:1};return setTimeout(function(){return c.css(d).animate(k,f.animation_speed,"linear",function(){h.locked=!1,c.trigger("opened.fndtn.reveal")}).addClass("open")},f.animation_speed/2)}return c.css(d).show().css({opacity:1}).addClass("open").trigger("opened.fndtn.reveal")}var f=this.settings;return e(f.animation).fade?c.fadeIn(f.animation_speed/2):(this.locked=!1,c.show())},to_back:function(a){a.addClass("toback")},to_front:function(a){a.removeClass("toback")},hide:function(c,d){if(d){var f=c.data(this.attr_name(!0)+"-init"),g=this;f=f||this.settings;var h=e(f.animation);if(h.animate||(this.locked=!1),h.pop){var i={top:-a(b).scrollTop()-c.data("offset")+"px",opacity:0};return setTimeout(function(){return c.animate(i,f.animation_speed,"linear",function(){g.locked=!1,c.css(d).trigger("closed.fndtn.reveal")}).removeClass("open")},f.animation_speed/2)}if(h.fade){var i={opacity:0};return setTimeout(function(){return c.animate(i,f.animation_speed,"linear",function(){g.locked=!1,c.css(d).trigger("closed.fndtn.reveal")}).removeClass("open")},f.animation_speed/2)}return c.hide().css(d).removeClass("open").trigger("closed.fndtn.reveal")}var f=this.settings;return e(f.animation).fade?c.fadeOut(f.animation_speed/2):c.hide()},close_video:function(b){var c=a(".flex-video",b.target),d=a("iframe",c);d.length>0&&(d.attr("data-src",d[0].src),d.attr("src",d.attr("src")),c.hide())},open_video:function(b){var c=a(".flex-video",b.target),e=c.find("iframe");if(e.length>0){var f=e.attr("data-src");if("string"==typeof f)e[0].src=e.attr("data-src");else{var g=e[0].src;e[0].src=d,e[0].src=g}c.show()}},data_attr:function(a){return this.namespace.length>0?this.namespace+"-"+a:a},cache_offset:function(a){var b=a.show().height()+parseInt(a.css("top"),10)+a.scrollY;return a.hide(),b},off:function(){a(this.scope).off(".fndtn.reveal")},reflow:function(){}}}(jQuery,window,window.document),function(a,b,c,d){"use strict";Foundation.libs.slider={name:"slider",version:"5.5.2",settings:{start:0,end:100,step:1,precision:null,initial:null,display_selector:"",vertical:!1,trigger_input_change:!1,on_change:function(){}},cache:{},init:function(a,b,c){Foundation.inherit(this,"throttle"),this.bindings(b,c),this.reflow()},events:function(){var c=this;a(this.scope).off(".slider").on("mousedown.fndtn.slider touchstart.fndtn.slider pointerdown.fndtn.slider","["+c.attr_name()+"]:not(.disabled, [disabled]) .range-slider-handle",function(b){c.cache.active||(b.preventDefault(),c.set_active_slider(a(b.target)))}).on("mousemove.fndtn.slider touchmove.fndtn.slider pointermove.fndtn.slider",function(d){if(c.cache.active)if(d.preventDefault(),a.data(c.cache.active[0],"settings").vertical){var e=0;d.pageY||(e=b.scrollY),c.calculate_position(c.cache.active,c.get_cursor_position(d,"y")+e)}else c.calculate_position(c.cache.active,c.get_cursor_position(d,"x"))}).on("mouseup.fndtn.slider touchend.fndtn.slider pointerup.fndtn.slider",function(a){c.remove_active_slider()}).on("change.fndtn.slider",function(a){c.settings.on_change()}),c.S(b).on("resize.fndtn.slider",c.throttle(function(a){c.reflow()},300)),this.S("["+this.attr_name()+"]").each(function(){var b=a(this),d=b.children(".range-slider-handle")[0],e=c.initialize_settings(d);""!=e.display_selector&&a(e.display_selector).each(function(){this.hasOwnProperty("value")&&a(this).change(function(){b.foundation("slider","set_value",a(this).val())})})})},get_cursor_position:function(a,b){var c,d="page"+b.toUpperCase(),e="client"+b.toUpperCase();return"undefined"!=typeof a[d]?c=a[d]:"undefined"!=typeof a.originalEvent[e]?c=a.originalEvent[e]:a.originalEvent.touches&&a.originalEvent.touches[0]&&"undefined"!=typeof a.originalEvent.touches[0][e]?c=a.originalEvent.touches[0][e]:a.currentPoint&&"undefined"!=typeof a.currentPoint[b]&&(c=a.currentPoint[b]),c},set_active_slider:function(a){this.cache.active=a},remove_active_slider:function(){this.cache.active=null},calculate_position:function(b,c){var d=this,e=a.data(b[0],"settings"),f=(a.data(b[0],"handle_l"),a.data(b[0],"handle_o"),a.data(b[0],"bar_l")),g=a.data(b[0],"bar_o");requestAnimationFrame(function(){var a;a=Foundation.rtl&&!e.vertical?d.limit_to((g+f-c)/f,0,1):d.limit_to((c-g)/f,0,1),a=e.vertical?1-a:a;var h=d.normalized_value(a,e.start,e.end,e.step,e.precision);d.set_ui(b,h)})},set_ui:function(b,c){var d=a.data(b[0],"settings"),e=a.data(b[0],"handle_l"),f=a.data(b[0],"bar_l"),g=this.normalized_percentage(c,d.start,d.end),h=g*(f-e)-1,i=100*g,j=b.parent(),k=b.parent().children("input[type=hidden]");Foundation.rtl&&!d.vertical&&(h=-h),h=d.vertical?-h+f-e+1:h,this.set_translate(b,h,d.vertical),d.vertical?b.siblings(".range-slider-active-segment").css("height",i+"%"):b.siblings(".range-slider-active-segment").css("width",i+"%"),j.attr(this.attr_name(),c).trigger("change.fndtn.slider"),k.val(c),d.trigger_input_change&&k.trigger("change.fndtn.slider"),b[0].hasAttribute("aria-valuemin")||b.attr({"aria-valuemin":d.start,"aria-valuemax":d.end}),b.attr("aria-valuenow",c),""!=d.display_selector&&a(d.display_selector).each(function(){this.hasAttribute("value")?a(this).val(c):a(this).text(c)})},normalized_percentage:function(a,b,c){return Math.min(1,(a-b)/(c-b))},normalized_value:function(a,b,c,d,e){var f=c-b,g=a*f,h=(g-g%d)/d,i=g%d,j=i>=.5*d?d:0;return(h*d+j+b).toFixed(e)},set_translate:function(b,c,d){d?a(b).css("-webkit-transform","translateY("+c+"px)").css("-moz-transform","translateY("+c+"px)").css("-ms-transform","translateY("+c+"px)").css("-o-transform","translateY("+c+"px)").css("transform","translateY("+c+"px)"):a(b).css("-webkit-transform","translateX("+c+"px)").css("-moz-transform","translateX("+c+"px)").css("-ms-transform","translateX("+c+"px)").css("-o-transform","translateX("+c+"px)").css("transform","translateX("+c+"px)")},limit_to:function(a,b,c){return Math.min(Math.max(a,b),c)},initialize_settings:function(b){var c,d=a.extend({},this.settings,this.data_options(a(b).parent()));return null===d.precision&&(c=(""+d.step).match(/\.([\d]*)/),d.precision=c&&c[1]?c[1].length:0),d.vertical?(a.data(b,"bar_o",a(b).parent().offset().top),a.data(b,"bar_l",a(b).parent().outerHeight()),a.data(b,"handle_o",a(b).offset().top),a.data(b,"handle_l",a(b).outerHeight())):(a.data(b,"bar_o",a(b).parent().offset().left),a.data(b,"bar_l",a(b).parent().outerWidth()),a.data(b,"handle_o",a(b).offset().left),a.data(b,"handle_l",a(b).outerWidth())),a.data(b,"bar",a(b).parent()),a.data(b,"settings",d)},set_initial_position:function(b){var c=a.data(b.children(".range-slider-handle")[0],"settings"),d="number"!=typeof c.initial||isNaN(c.initial)?Math.floor(.5*(c.end-c.start)/c.step)*c.step+c.start:c.initial,e=b.children(".range-slider-handle");this.set_ui(e,d)},set_value:function(b){var c=this;a("["+c.attr_name()+"]",this.scope).each(function(){a(this).attr(c.attr_name(),b)}),a(this.scope).attr(c.attr_name())&&a(this.scope).attr(c.attr_name(),b),c.reflow()},reflow:function(){var b=this;b.S("["+this.attr_name()+"]").each(function(){var c=a(this).children(".range-slider-handle")[0],d=a(this).attr(b.attr_name());b.initialize_settings(c),d?b.set_ui(a(c),parseFloat(d)):b.set_initial_position(a(this))})}}}(jQuery,window,window.document),function(a,b,c,d){"use strict";Foundation.libs.tab={name:"tab",version:"5.5.2",settings:{active_class:"active",callback:function(){},deep_linking:!1,scroll_to_content:!0,is_hover:!1},default_tab_hashes:[],init:function(a,c,d){var e=this,f=this.S;f("["+this.attr_name()+"] > .active > a",this.scope).each(function(){e.default_tab_hashes.push(this.hash)}),e.entry_location=b.location.href,this.bindings(c,d),this.handle_location_hash_change()},events:function(){var a=this,c=this.S,d=function(b,d){var e=c(d).closest("["+a.attr_name()+"]").data(a.attr_name(!0)+"-init");(!e.is_hover||Modernizr.touch)&&(b.preventDefault(),b.stopPropagation(),a.toggle_active_tab(c(d).parent()))};c(this.scope).off(".tab").on("keydown.fndtn.tab","["+this.attr_name()+"] > * > a",function(a){var b=this,c=a.keyCode||a.which;9==c&&(a.preventDefault(),d(a,b))}).on("click.fndtn.tab","["+this.attr_name()+"] > * > a",function(a){var b=this;d(a,b)}).on("mouseenter.fndtn.tab","["+this.attr_name()+"] > * > a",function(b){var d=c(this).closest("["+a.attr_name()+"]").data(a.attr_name(!0)+"-init");d.is_hover&&a.toggle_active_tab(c(this).parent())}),c(b).on("hashchange.fndtn.tab",function(b){b.preventDefault(),a.handle_location_hash_change()})},handle_location_hash_change:function(){var b=this,c=this.S;c("["+this.attr_name()+"]",this.scope).each(function(){var e=c(this).data(b.attr_name(!0)+"-init");if(e.deep_linking){var f;if(f=e.scroll_to_content?b.scope.location.hash:b.scope.location.hash.replace("fndtn-",""),""!=f){var g=c(f);if(g.hasClass("content")&&g.parent().hasClass("tabs-content"))b.toggle_active_tab(a("["+b.attr_name()+"] > * > a[href="+f+"]").parent());else{var h=g.closest(".content").attr("id");h!=d&&b.toggle_active_tab(a("["+b.attr_name()+"] > * > a[href=#"+h+"]").parent(),f)}}else for(var i=0;i<b.default_tab_hashes.length;i++)b.toggle_active_tab(a("["+b.attr_name()+"] > * > a[href="+b.default_tab_hashes[i]+"]").parent())}})},toggle_active_tab:function(e,f){var g=this,h=g.S,i=e.closest("["+this.attr_name()+"]"),j=e.find("a"),k=e.children("a").first(),l="#"+k.attr("href").split("#")[1],m=h(l),n=e.siblings(),o=i.data(this.attr_name(!0)+"-init"),p=function(b){var d,e=a(this),f=a(this).parents("li").prev().children('[role="tab"]'),g=a(this).parents("li").next().children('[role="tab"]');switch(b.keyCode){case 37:d=f;break;case 39:d=g;break;default:d=!1}d.length&&(e.attr({tabindex:"-1","aria-selected":null}),d.attr({tabindex:"0","aria-selected":!0}).focus()),a('[role="tabpanel"]').attr("aria-hidden","true"),a("#"+a(c.activeElement).attr("href").substring(1)).attr("aria-hidden",null)},q=function(a){var c=b.location.href===g.entry_location,d=o.scroll_to_content?g.default_tab_hashes[0]:c?b.location.hash:"fndtn-"+g.default_tab_hashes[0].replace("#","");c&&a===d||(b.location.hash=a)};k.data("tab-content")&&(l="#"+k.data("tab-content").split("#")[1],m=h(l)),o.deep_linking&&(o.scroll_to_content?(q(f||l),f==d||f==l?e.parent()[0].scrollIntoView():h(l)[0].scrollIntoView()):q(f!=d?"fndtn-"+f.replace("#",""):"fndtn-"+l.replace("#",""))),e.addClass(o.active_class).triggerHandler("opened"),j.attr({"aria-selected":"true",tabindex:0}),n.removeClass(o.active_class),n.find("a").attr({"aria-selected":"false",tabindex:-1}),m.siblings().removeClass(o.active_class).attr({"aria-hidden":"true",tabindex:-1}),m.addClass(o.active_class).attr("aria-hidden","false").removeAttr("tabindex"),o.callback(e),m.triggerHandler("toggled",[m]),i.triggerHandler("toggled",[e]),j.off("keydown").on("keydown",p)},data_attr:function(a){return this.namespace.length>0?this.namespace+"-"+a:a},off:function(){},reflow:function(){}}}(jQuery,window,window.document),function(a,b,c,d){"use strict";Foundation.libs.tooltip={name:"tooltip",version:"5.5.2",settings:{additional_inheritable_classes:[],tooltip_class:".tooltip",append_to:"body",touch_close_text:"Tap To Close",disable_for_touch:!1,hover_delay:200,show_on:"all",tip_template:function(a,b){return'<span data-selector="'+a+'" id="'+a+'" class="'+Foundation.libs.tooltip.settings.tooltip_class.substring(1)+'" role="tooltip">'+b+'<span class="nub"></span></span>'}},cache:{},init:function(a,b,c){Foundation.inherit(this,"random_str"),this.bindings(b,c)},should_show:function(b,c){var d=a.extend({},this.settings,this.data_options(b));return"all"===d.show_on?!0:this.small()&&"small"===d.show_on?!0:this.medium()&&"medium"===d.show_on?!0:this.large()&&"large"===d.show_on?!0:!1},medium:function(){return matchMedia(Foundation.media_queries.medium).matches},large:function(){return matchMedia(Foundation.media_queries.large).matches},events:function(b){function c(a,b,c){a.timer||(c?(a.timer=null,e.showTip(b)):a.timer=setTimeout(function(){a.timer=null,e.showTip(b)}.bind(a),e.settings.hover_delay))}function d(a,b){a.timer&&(clearTimeout(a.timer),a.timer=null),e.hide(b)}var e=this,f=e.S;e.create(this.S(b)),a(this.scope).off(".tooltip").on("mouseenter.fndtn.tooltip mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip","["+this.attr_name()+"]",function(b){var g=f(this),h=a.extend({},e.settings,e.data_options(g)),i=!1;if(Modernizr.touch&&/touchstart|MSPointerDown/i.test(b.type)&&f(b.target).is("a"))return!1;if(/mouse/i.test(b.type)&&e.ie_touch(b))return!1;if(g.hasClass("open"))Modernizr.touch&&/touchstart|MSPointerDown/i.test(b.type)&&b.preventDefault(),e.hide(g);else{if(h.disable_for_touch&&Modernizr.touch&&/touchstart|MSPointerDown/i.test(b.type))return;if(!h.disable_for_touch&&Modernizr.touch&&/touchstart|MSPointerDown/i.test(b.type)&&(b.preventDefault(),f(h.tooltip_class+".open").hide(),i=!0,a(".open["+e.attr_name()+"]").length>0)){var j=f(a(".open["+e.attr_name()+"]")[0]);e.hide(j)}/enter|over/i.test(b.type)?c(this,g):"mouseout"===b.type||"mouseleave"===b.type?d(this,g):c(this,g,!0)}}).on("mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip","["+this.attr_name()+"].open",function(b){return/mouse/i.test(b.type)&&e.ie_touch(b)?!1:void(("touch"!=a(this).data("tooltip-open-event-type")||"mouseleave"!=b.type)&&("mouse"==a(this).data("tooltip-open-event-type")&&/MSPointerDown|touchstart/i.test(b.type)?e.convert_to_touch(a(this)):d(this,a(this))))}).on("DOMNodeRemoved DOMAttrModified","["+this.attr_name()+"]:not(a)",function(a){d(this,f(this))})},ie_touch:function(a){return!1},showTip:function(a){var b=this.getTip(a);return this.should_show(a,b)?this.show(a):void 0},getTip:function(b){var c=this.selector(b),d=a.extend({},this.settings,this.data_options(b)),e=null;return c&&(e=this.S('span[data-selector="'+c+'"]'+d.tooltip_class)),"object"==typeof e?e:!1},selector:function(a){var b=a.attr(this.attr_name())||a.attr("data-selector");return"string"!=typeof b&&(b=this.random_str(6),a.attr("data-selector",b).attr("aria-describedby",b)),b},create:function(c){var d=this,e=a.extend({},this.settings,this.data_options(c)),f=this.settings.tip_template;"string"==typeof e.tip_template&&b.hasOwnProperty(e.tip_template)&&(f=b[e.tip_template]);var g=a(f(this.selector(c),a("<div></div>").html(c.attr("title")).html())),h=this.inheritable_classes(c);g.addClass(h).appendTo(e.append_to),Modernizr.touch&&(g.append('<span class="tap-to-close">'+e.touch_close_text+"</span>"),g.on("touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip",function(a){d.hide(c)})),c.removeAttr("title").attr("title","")},reposition:function(b,c,d){var e,f,g,h,i;if(c.css("visibility","hidden").show(),e=b.data("width"),f=c.children(".nub"),g=f.outerHeight(),h=f.outerHeight(),c.css(this.small()?{width:"100%"}:{width:e?e:"auto"}),i=function(a,b,c,d,e,f){return a.css({top:b?b:"auto",bottom:d?d:"auto",left:e?e:"auto",right:c?c:"auto"}).end()},i(c,b.offset().top+b.outerHeight()+10,"auto","auto",b.offset().left),this.small())i(c,b.offset().top+b.outerHeight()+10,"auto","auto",12.5,a(this.scope).width()),c.addClass("tip-override"),i(f,-g,"auto","auto",b.offset().left);else{var j=b.offset().left;Foundation.rtl&&(f.addClass("rtl"),j=b.offset().left+b.outerWidth()-c.outerWidth()),i(c,b.offset().top+b.outerHeight()+10,"auto","auto",j),f.attr("style")&&f.removeAttr("style"),c.removeClass("tip-override"),d&&d.indexOf("tip-top")>-1?(Foundation.rtl&&f.addClass("rtl"),i(c,b.offset().top-c.outerHeight(),"auto","auto",j).removeClass("tip-override")):d&&d.indexOf("tip-left")>-1?(i(c,b.offset().top+b.outerHeight()/2-c.outerHeight()/2,"auto","auto",b.offset().left-c.outerWidth()-g).removeClass("tip-override"),f.removeClass("rtl")):d&&d.indexOf("tip-right")>-1&&(i(c,b.offset().top+b.outerHeight()/2-c.outerHeight()/2,"auto","auto",b.offset().left+b.outerWidth()+g).removeClass("tip-override"),f.removeClass("rtl"))}c.css("visibility","visible").hide()},small:function(){return matchMedia(Foundation.media_queries.small).matches&&!matchMedia(Foundation.media_queries.medium).matches},inheritable_classes:function(b){var c=a.extend({},this.settings,this.data_options(b)),d=["tip-top","tip-left","tip-bottom","tip-right","radius","round"].concat(c.additional_inheritable_classes),e=b.attr("class"),f=e?a.map(e.split(" "),function(b,c){return-1!==a.inArray(b,d)?b:void 0}).join(" "):"";return a.trim(f)},convert_to_touch:function(b){var c=this,d=c.getTip(b),e=a.extend({},c.settings,c.data_options(b));0===d.find(".tap-to-close").length&&(d.append('<span class="tap-to-close">'+e.touch_close_text+"</span>"),d.on("click.fndtn.tooltip.tapclose touchstart.fndtn.tooltip.tapclose MSPointerDown.fndtn.tooltip.tapclose",function(a){c.hide(b)})),b.data("tooltip-open-event-type","touch")},show:function(a){var b=this.getTip(a);"touch"==a.data("tooltip-open-event-type")&&this.convert_to_touch(a),this.reposition(a,b,a.attr("class")),a.addClass("open"),b.fadeIn(150)},hide:function(a){var b=this.getTip(a);b.fadeOut(150,function(){b.find(".tap-to-close").remove(),b.off("click.fndtn.tooltip.tapclose MSPointerDown.fndtn.tapclose"),a.removeClass("open")})},off:function(){var b=this;this.S(this.scope).off(".fndtn.tooltip"),this.S(this.settings.tooltip_class).each(function(c){a("["+b.attr_name()+"]").eq(c).attr("title",a(this).text())}).remove()},reflow:function(){}}}(jQuery,window,window.document),function(a,b,c,d){"use strict";Foundation.libs.topbar={name:"topbar",version:"5.5.2",settings:{index:0,start_offset:0,
sticky_class:"sticky",custom_back_text:!0,back_text:"Back",mobile_show_parent_link:!0,is_hover:!0,scrolltop:!0,sticky_on:"all",dropdown_autoclose:!0},init:function(b,c,d){Foundation.inherit(this,"add_custom_rule register_media throttle");var e=this;e.register_media("topbar","foundation-mq-topbar"),this.bindings(c,d),e.S("["+this.attr_name()+"]",this.scope).each(function(){{var b=a(this),c=b.data(e.attr_name(!0)+"-init");e.S("section, .top-bar-section",this)}b.data("index",0);var d=b.parent();d.hasClass("fixed")||e.is_sticky(b,d,c)?(e.settings.sticky_class=c.sticky_class,e.settings.sticky_topbar=b,b.data("height",d.outerHeight()),b.data("stickyoffset",d.offset().top)):b.data("height",b.outerHeight()),c.assembled||e.assemble(b),c.is_hover?e.S(".has-dropdown",b).addClass("not-click"):e.S(".has-dropdown",b).removeClass("not-click"),e.add_custom_rule(".f-topbar-fixed { padding-top: "+b.data("height")+"px }"),d.hasClass("fixed")&&e.S("body").addClass("f-topbar-fixed")})},is_sticky:function(a,b,c){var d=b.hasClass(c.sticky_class),e=matchMedia(Foundation.media_queries.small).matches,f=matchMedia(Foundation.media_queries.medium).matches,g=matchMedia(Foundation.media_queries.large).matches;return d&&"all"===c.sticky_on?!0:d&&this.small()&&-1!==c.sticky_on.indexOf("small")&&e&&!f&&!g?!0:d&&this.medium()&&-1!==c.sticky_on.indexOf("medium")&&e&&f&&!g?!0:d&&this.large()&&-1!==c.sticky_on.indexOf("large")&&e&&f&&g?!0:!1},toggle:function(c){var d,e=this;d=c?e.S(c).closest("["+this.attr_name()+"]"):e.S("["+this.attr_name()+"]");var f=d.data(this.attr_name(!0)+"-init"),g=e.S("section, .top-bar-section",d);e.breakpoint()&&(e.rtl?(g.css({right:"0%"}),a(">.name",g).css({right:"100%"})):(g.css({left:"0%"}),a(">.name",g).css({left:"100%"})),e.S("li.moved",g).removeClass("moved"),d.data("index",0),d.toggleClass("expanded").css("height","")),f.scrolltop?d.hasClass("expanded")?d.parent().hasClass("fixed")&&(f.scrolltop?(d.parent().removeClass("fixed"),d.addClass("fixed"),e.S("body").removeClass("f-topbar-fixed"),b.scrollTo(0,0)):d.parent().removeClass("expanded")):d.hasClass("fixed")&&(d.parent().addClass("fixed"),d.removeClass("fixed"),e.S("body").addClass("f-topbar-fixed")):(e.is_sticky(d,d.parent(),f)&&d.parent().addClass("fixed"),d.parent().hasClass("fixed")&&(d.hasClass("expanded")?(d.addClass("fixed"),d.parent().addClass("expanded"),e.S("body").addClass("f-topbar-fixed")):(d.removeClass("fixed"),d.parent().removeClass("expanded"),e.update_sticky_positioning())))},timer:null,events:function(c){var d=this,e=this.S;e(this.scope).off(".topbar").on("click.fndtn.topbar","["+this.attr_name()+"] .toggle-topbar",function(a){a.preventDefault(),d.toggle(this)}).on("click.fndtn.topbar contextmenu.fndtn.topbar",'.top-bar .top-bar-section li a[href^="#"],['+this.attr_name()+'] .top-bar-section li a[href^="#"]',function(b){var c=a(this).closest("li"),e=c.closest("["+d.attr_name()+"]"),f=e.data(d.attr_name(!0)+"-init");if(f.dropdown_autoclose&&f.is_hover){var g=a(this).closest(".hover");g.removeClass("hover")}!d.breakpoint()||c.hasClass("back")||c.hasClass("has-dropdown")||d.toggle()}).on("click.fndtn.topbar","["+this.attr_name()+"] li.has-dropdown",function(b){var c=e(this),f=e(b.target),g=c.closest("["+d.attr_name()+"]"),h=g.data(d.attr_name(!0)+"-init");return f.data("revealId")?void d.toggle():void(d.breakpoint()||(!h.is_hover||Modernizr.touch)&&(b.stopImmediatePropagation(),c.hasClass("hover")?(c.removeClass("hover").find("li").removeClass("hover"),c.parents("li.hover").removeClass("hover")):(c.addClass("hover"),a(c).siblings().removeClass("hover"),"A"===f[0].nodeName&&f.parent().hasClass("has-dropdown")&&b.preventDefault())))}).on("click.fndtn.topbar","["+this.attr_name()+"] .has-dropdown>a",function(a){if(d.breakpoint()){a.preventDefault();var b=e(this),c=b.closest("["+d.attr_name()+"]"),f=c.find("section, .top-bar-section"),g=(b.next(".dropdown").outerHeight(),b.closest("li"));c.data("index",c.data("index")+1),g.addClass("moved"),d.rtl?(f.css({right:-(100*c.data("index"))+"%"}),f.find(">.name").css({right:100*c.data("index")+"%"})):(f.css({left:-(100*c.data("index"))+"%"}),f.find(">.name").css({left:100*c.data("index")+"%"})),c.css("height",b.siblings("ul").outerHeight(!0)+c.data("height"))}}),e(b).off(".topbar").on("resize.fndtn.topbar",d.throttle(function(){d.resize.call(d)},50)).trigger("resize.fndtn.topbar").load(function(){e(this).trigger("resize.fndtn.topbar")}),e("body").off(".topbar").on("click.fndtn.topbar",function(a){var b=e(a.target).closest("li").closest("li.hover");b.length>0||e("["+d.attr_name()+"] li.hover").removeClass("hover")}),e(this.scope).on("click.fndtn.topbar","["+this.attr_name()+"] .has-dropdown .back",function(a){a.preventDefault();var b=e(this),c=b.closest("["+d.attr_name()+"]"),f=c.find("section, .top-bar-section"),g=(c.data(d.attr_name(!0)+"-init"),b.closest("li.moved")),h=g.parent();c.data("index",c.data("index")-1),d.rtl?(f.css({right:-(100*c.data("index"))+"%"}),f.find(">.name").css({right:100*c.data("index")+"%"})):(f.css({left:-(100*c.data("index"))+"%"}),f.find(">.name").css({left:100*c.data("index")+"%"})),0===c.data("index")?c.css("height",""):c.css("height",h.outerHeight(!0)+c.data("height")),setTimeout(function(){g.removeClass("moved")},300)}),e(this.scope).find(".dropdown a").focus(function(){a(this).parents(".has-dropdown").addClass("hover")}).blur(function(){a(this).parents(".has-dropdown").removeClass("hover")})},resize:function(){var a=this;a.S("["+this.attr_name()+"]").each(function(){var b,d=a.S(this),e=d.data(a.attr_name(!0)+"-init"),f=d.parent("."+a.settings.sticky_class);if(!a.breakpoint()){var g=d.hasClass("expanded");d.css("height","").removeClass("expanded").find("li").removeClass("hover"),g&&a.toggle(d)}a.is_sticky(d,f,e)&&(f.hasClass("fixed")?(f.removeClass("fixed"),b=f.offset().top,a.S(c.body).hasClass("f-topbar-fixed")&&(b-=d.data("height")),d.data("stickyoffset",b),f.addClass("fixed")):(b=f.offset().top,d.data("stickyoffset",b)))})},breakpoint:function(){return!matchMedia(Foundation.media_queries.topbar).matches},small:function(){return matchMedia(Foundation.media_queries.small).matches},medium:function(){return matchMedia(Foundation.media_queries.medium).matches},large:function(){return matchMedia(Foundation.media_queries.large).matches},assemble:function(b){var c=this,d=b.data(this.attr_name(!0)+"-init"),e=c.S("section, .top-bar-section",b);e.detach(),c.S(".has-dropdown>a",e).each(function(){var b,e=c.S(this),f=e.siblings(".dropdown"),g=e.attr("href");f.find(".title.back").length||(b=a(1==d.mobile_show_parent_link&&g?'<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5></li><li class="parent-link hide-for-medium-up"><a class="parent-link js-generated" href="'+g+'">'+e.html()+"</a></li>":'<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5>'),a("h5>a",b).html(1==d.custom_back_text?d.back_text:"&laquo; "+e.html()),f.prepend(b))}),e.appendTo(b),this.sticky(),this.assembled(b)},assembled:function(b){b.data(this.attr_name(!0),a.extend({},b.data(this.attr_name(!0)),{assembled:!0}))},height:function(b){var c=0,d=this;return a("> li",b).each(function(){c+=d.S(this).outerHeight(!0)}),c},sticky:function(){var a=this;this.S(b).on("scroll",function(){a.update_sticky_positioning()})},update_sticky_positioning:function(){var a="."+this.settings.sticky_class,c=this.S(b),d=this;if(d.settings.sticky_topbar&&d.is_sticky(this.settings.sticky_topbar,this.settings.sticky_topbar.parent(),this.settings)){var e=this.settings.sticky_topbar.data("stickyoffset")+this.settings.start_offset;d.S(a).hasClass("expanded")||(c.scrollTop()>e?d.S(a).hasClass("fixed")||(d.S(a).addClass("fixed"),d.S("body").addClass("f-topbar-fixed")):c.scrollTop()<=e&&d.S(a).hasClass("fixed")&&(d.S(a).removeClass("fixed"),d.S("body").removeClass("f-topbar-fixed")))}},off:function(){this.S(this.scope).off(".fndtn.topbar"),this.S(b).off(".fndtn.topbar")},reflow:function(){}}}(jQuery,window,window.document);
/*!
  hey, [be]Lazy.js - v1.3.1 - 2015.02.01 
  A lazy loading and multi-serving image script
  (c) Bjoern Klinggaard - @bklinggaard - http://dinbror.dk/blazy
*/
;(function(root, blazy) {
	if (typeof define === 'function' && define.amd) {
        // AMD. Register bLazy as an anonymous module
        define(blazy);
	} else if (typeof exports === 'object') {
		// Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node. 
		module.exports = blazy();
	} else {
        // Browser globals. Register bLazy on window
        root.Blazy = blazy();
	}
})(this, function () {
	'use strict';
	
	//vars
	var source, options, viewport, images, count, isRetina, destroyed;
	//throttle vars
	var validateT, saveViewportOffsetT;
	
	// constructor
	function Blazy(settings) {
		//IE7- fallback for missing querySelectorAll support
		if (!document.querySelectorAll) {
			var s=document.createStyleSheet();
			document.querySelectorAll = function(r, c, i, j, a) {
				a=document.all, c=[], r = r.replace(/\[for\b/gi, '[htmlFor').split(',');
				for (i=r.length; i--;) {
					s.addRule(r[i], 'k:v');
					for (j=a.length; j--;) a[j].currentStyle.k && c.push(a[j]);
						s.removeRule(0);
				}
				return c;
			};
		}
		//init vars
		destroyed 				= true;
		images 					= [];
		viewport				= {};
		//options
		options 				= settings 				|| {};
		options.error	 		= options.error 		|| false;
		options.offset			= options.offset 		|| 100;
		options.success			= options.success 		|| false;
	  	options.selector 		= options.selector 		|| '.b-lazy';
		options.separator 		= options.separator 	|| '|';
		options.container		= options.container 	?  document.querySelectorAll(options.container) : false;
		options.errorClass 		= options.errorClass 	|| 'b-error';
		options.breakpoints		= options.breakpoints	|| false;
		options.successClass 	= options.successClass 	|| 'b-loaded';
		options.src = source 	= options.src			|| 'data-src';
		isRetina				= window.devicePixelRatio > 1;
		viewport.top 			= 0 - options.offset;
		viewport.left 			= 0 - options.offset;
		//throttle, ensures that we don't call the functions too often
		validateT				= throttle(validate, 25); 
		saveViewportOffsetT			= throttle(saveViewportOffset, 50);

		saveViewportOffset();	
				
		//handle multi-served image src
		each(options.breakpoints, function(object){
			if(object.width >= window.screen.width) {
				source = object.src;
				return false;
			}
		});
		
		// start lazy load
		initialize();	
  	}
	
	/* public functions
	************************************/
	Blazy.prototype.revalidate = function() {
 		initialize();
   	};
	Blazy.prototype.load = function(element, force){
		if(!isElementLoaded(element)) loadImage(element, force);
	};
	Blazy.prototype.destroy = function(){
		if(options.container){
			each(options.container, function(object){
				unbindEvent(object, 'scroll', validateT);
			});
		}
		unbindEvent(window, 'scroll', validateT);
		unbindEvent(window, 'resize', validateT);
		unbindEvent(window, 'resize', saveViewportOffsetT);
		count = 0;
		images.length = 0;
		destroyed = true;
	};
	
	/* private helper functions
	************************************/
	function initialize(){
		// First we create an array of images to lazy load
		createImageArray(options.selector);
		// Then we bind resize and scroll events if not already binded
		if(destroyed) {
			destroyed = false;
			if(options.container) {
	 			each(options.container, function(object){
	 				bindEvent(object, 'scroll', validateT);
	 			});
	 		}
			bindEvent(window, 'resize', saveViewportOffsetT);
			bindEvent(window, 'resize', validateT);
	 		bindEvent(window, 'scroll', validateT);
		}
		// And finally, we start to lazy load. Should bLazy ensure domready?
		validate();	
	}
	
	function validate() {
		for(var i = 0; i<count; i++){
			var image = images[i];
 			if(elementInView(image) || isElementLoaded(image)) {
				Blazy.prototype.load(image);
 				images.splice(i, 1);
 				count--;
 				i--;
 			} 
 		}
		if(count === 0) {
			Blazy.prototype.destroy();
		}
	}
	
	function loadImage(ele, force){
		// if element is visible
		if(force || (ele.offsetWidth > 0 && ele.offsetHeight > 0)) {
			var dataSrc = ele.getAttribute(source) || ele.getAttribute(options.src); // fallback to default data-src
			if(dataSrc) {
				var dataSrcSplitted = dataSrc.split(options.separator);
				var src = dataSrcSplitted[isRetina && dataSrcSplitted.length > 1 ? 1 : 0];
				var img = new Image();
				// cleanup markup, remove data source attributes
				each(options.breakpoints, function(object){
					ele.removeAttribute(object.src);
				});
				ele.removeAttribute(options.src);
				img.onerror = function() {
					if(options.error) options.error(ele, "invalid");
					ele.className = ele.className + ' ' + options.errorClass;
				}; 
				img.onload = function() {
					// Is element an image or should we add the src as a background image?
			      		ele.nodeName.toLowerCase() === 'img' ? ele.src = src : ele.style.backgroundImage = 'url("' + src + '")';	
					ele.className = ele.className + ' ' + options.successClass;	
					if(options.success) options.success(ele);
				};
				img.src = src; //preload image
			} else {
				if(options.error) options.error(ele, "missing");
				ele.className = ele.className + ' ' + options.errorClass;
			}
		}
	 }
			
	function elementInView(ele) {
		var rect = ele.getBoundingClientRect();
		
		return (
			// Intersection
			rect.right >= viewport.left
			&& rect.bottom >= viewport.top
			&& rect.left <= viewport.right
			&& rect.top <= viewport.bottom
		 );
	 }
	 
	 function isElementLoaded(ele) {
		 return (' ' + ele.className + ' ').indexOf(' ' + options.successClass + ' ') !== -1;
	 }
	 
	 function createImageArray(selector) {
 		var nodelist 	= document.querySelectorAll(selector);
 		count 			= nodelist.length;
 		//converting nodelist to array
 		for(var i = count; i--; images.unshift(nodelist[i])){}
	 }
	 
	 function saveViewportOffset(){
		 viewport.bottom = (window.innerHeight || document.documentElement.clientHeight) + options.offset;
		 viewport.right = (window.innerWidth || document.documentElement.clientWidth) + options.offset;
	 }
	 
	 function bindEvent(ele, type, fn) {
		 if (ele.attachEvent) {
         		ele.attachEvent && ele.attachEvent('on' + type, fn);
       	 	} else {
         	       ele.addEventListener(type, fn, false);
       		}
	 }
	 
	 function unbindEvent(ele, type, fn) {
		 if (ele.detachEvent) {
         		ele.detachEvent && ele.detachEvent('on' + type, fn);
       	 	} else {
         	       ele.removeEventListener(type, fn, false);
       		}
	 }
	 
	 function each(object, fn){
 		if(object && fn) {
 			var l = object.length;
 			for(var i = 0; i<l && fn(object[i], i) !== false; i++){}
 		}
	 }
	 
	 function throttle(fn, minDelay) {
     		 var lastCall = 0;
		 return function() {
			 var now = +new Date();
         		 if (now - lastCall < minDelay) {
           			 return;
			 }
         		 lastCall = now;
         		 fn.apply(images, arguments);
       		 };
	 }
  	
	 return Blazy;
});

/*!
 * Flickity PACKAGED v1.1.0
 * Touch, responsive, flickable galleries
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * http://flickity.metafizzy.co
 * Copyright 2015 Metafizzy
 */

/**
 * Bridget makes jQuery widgets
 * v1.1.0
 * MIT license
 */

( function( window ) {



// -------------------------- utils -------------------------- //

var slice = Array.prototype.slice;

function noop() {}

// -------------------------- definition -------------------------- //

function defineBridget( $ ) {

// bail if no jQuery
if ( !$ ) {
  return;
}

// -------------------------- addOptionMethod -------------------------- //

/**
 * adds option method -> $().plugin('option', {...})
 * @param {Function} PluginClass - constructor class
 */
function addOptionMethod( PluginClass ) {
  // don't overwrite original option method
  if ( PluginClass.prototype.option ) {
    return;
  }

  // option setter
  PluginClass.prototype.option = function( opts ) {
    // bail out if not an object
    if ( !$.isPlainObject( opts ) ){
      return;
    }
    this.options = $.extend( true, this.options, opts );
  };
}

// -------------------------- plugin bridge -------------------------- //

// helper function for logging errors
// $.error breaks jQuery chaining
var logError = typeof console === 'undefined' ? noop :
  function( message ) {
    console.error( message );
  };

/**
 * jQuery plugin bridge, access methods like $elem.plugin('method')
 * @param {String} namespace - plugin name
 * @param {Function} PluginClass - constructor class
 */
function bridge( namespace, PluginClass ) {
  // add to jQuery fn namespace
  $.fn[ namespace ] = function( options ) {
    if ( typeof options === 'string' ) {
      // call plugin method when first argument is a string
      // get arguments for method
      var args = slice.call( arguments, 1 );

      for ( var i=0, len = this.length; i < len; i++ ) {
        var elem = this[i];
        var instance = $.data( elem, namespace );
        if ( !instance ) {
          logError( "cannot call methods on " + namespace + " prior to initialization; " +
            "attempted to call '" + options + "'" );
          continue;
        }
        if ( !$.isFunction( instance[options] ) || options.charAt(0) === '_' ) {
          logError( "no such method '" + options + "' for " + namespace + " instance" );
          continue;
        }

        // trigger method with arguments
        var returnValue = instance[ options ].apply( instance, args );

        // break look and return first value if provided
        if ( returnValue !== undefined ) {
          return returnValue;
        }
      }
      // return this if no return value
      return this;
    } else {
      return this.each( function() {
        var instance = $.data( this, namespace );
        if ( instance ) {
          // apply options & init
          instance.option( options );
          instance._init();
        } else {
          // initialize new instance
          instance = new PluginClass( this, options );
          $.data( this, namespace, instance );
        }
      });
    }
  };

}

// -------------------------- bridget -------------------------- //

/**
 * converts a Prototypical class into a proper jQuery plugin
 *   the class must have a ._init method
 * @param {String} namespace - plugin name, used in $().pluginName
 * @param {Function} PluginClass - constructor class
 */
$.bridget = function( namespace, PluginClass ) {
  addOptionMethod( PluginClass );
  bridge( namespace, PluginClass );
};

return $.bridget;

}

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( 'jquery-bridget/jquery.bridget',[ 'jquery' ], defineBridget );
} else if ( typeof exports === 'object' ) {
  defineBridget( require('jquery') );
} else {
  // get jquery from browser global
  defineBridget( window.jQuery );
}

})( window );

/*!
 * classie v1.0.1
 * class helper functions
 * from bonzo https://github.com/ded/bonzo
 * MIT license
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true, unused: true */
/*global define: false, module: false */

( function( window ) {



// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( 'classie/classie',classie );
} else if ( typeof exports === 'object' ) {
  // CommonJS
  module.exports = classie;
} else {
  // browser global
  window.classie = classie;
}

})( window );

/*!
 * EventEmitter v4.2.11 - git.io/ee
 * Unlicense - http://unlicense.org/
 * Oliver Caldwell - http://oli.me.uk/
 * @preserve
 */

;(function () {
    

    /**
     * Class for managing events.
     * Can be extended to provide event functionality in other classes.
     *
     * @class EventEmitter Manages event registering and emitting.
     */
    function EventEmitter() {}

    // Shortcuts to improve speed and size
    var proto = EventEmitter.prototype;
    var exports = this;
    var originalGlobalValue = exports.EventEmitter;

    /**
     * Finds the index of the listener for the event in its storage array.
     *
     * @param {Function[]} listeners Array of listeners to search through.
     * @param {Function} listener Method to look for.
     * @return {Number} Index of the specified listener, -1 if not found
     * @api private
     */
    function indexOfListener(listeners, listener) {
        var i = listeners.length;
        while (i--) {
            if (listeners[i].listener === listener) {
                return i;
            }
        }

        return -1;
    }

    /**
     * Alias a method while keeping the context correct, to allow for overwriting of target method.
     *
     * @param {String} name The name of the target method.
     * @return {Function} The aliased method
     * @api private
     */
    function alias(name) {
        return function aliasClosure() {
            return this[name].apply(this, arguments);
        };
    }

    /**
     * Returns the listener array for the specified event.
     * Will initialise the event object and listener arrays if required.
     * Will return an object if you use a regex search. The object contains keys for each matched event. So /ba[rz]/ might return an object containing bar and baz. But only if you have either defined them with defineEvent or added some listeners to them.
     * Each property in the object response is an array of listener functions.
     *
     * @param {String|RegExp} evt Name of the event to return the listeners from.
     * @return {Function[]|Object} All listener functions for the event.
     */
    proto.getListeners = function getListeners(evt) {
        var events = this._getEvents();
        var response;
        var key;

        // Return a concatenated array of all matching events if
        // the selector is a regular expression.
        if (evt instanceof RegExp) {
            response = {};
            for (key in events) {
                if (events.hasOwnProperty(key) && evt.test(key)) {
                    response[key] = events[key];
                }
            }
        }
        else {
            response = events[evt] || (events[evt] = []);
        }

        return response;
    };

    /**
     * Takes a list of listener objects and flattens it into a list of listener functions.
     *
     * @param {Object[]} listeners Raw listener objects.
     * @return {Function[]} Just the listener functions.
     */
    proto.flattenListeners = function flattenListeners(listeners) {
        var flatListeners = [];
        var i;

        for (i = 0; i < listeners.length; i += 1) {
            flatListeners.push(listeners[i].listener);
        }

        return flatListeners;
    };

    /**
     * Fetches the requested listeners via getListeners but will always return the results inside an object. This is mainly for internal use but others may find it useful.
     *
     * @param {String|RegExp} evt Name of the event to return the listeners from.
     * @return {Object} All listener functions for an event in an object.
     */
    proto.getListenersAsObject = function getListenersAsObject(evt) {
        var listeners = this.getListeners(evt);
        var response;

        if (listeners instanceof Array) {
            response = {};
            response[evt] = listeners;
        }

        return response || listeners;
    };

    /**
     * Adds a listener function to the specified event.
     * The listener will not be added if it is a duplicate.
     * If the listener returns true then it will be removed after it is called.
     * If you pass a regular expression as the event name then the listener will be added to all events that match it.
     *
     * @param {String|RegExp} evt Name of the event to attach the listener to.
     * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.addListener = function addListener(evt, listener) {
        var listeners = this.getListenersAsObject(evt);
        var listenerIsWrapped = typeof listener === 'object';
        var key;

        for (key in listeners) {
            if (listeners.hasOwnProperty(key) && indexOfListener(listeners[key], listener) === -1) {
                listeners[key].push(listenerIsWrapped ? listener : {
                    listener: listener,
                    once: false
                });
            }
        }

        return this;
    };

    /**
     * Alias of addListener
     */
    proto.on = alias('addListener');

    /**
     * Semi-alias of addListener. It will add a listener that will be
     * automatically removed after its first execution.
     *
     * @param {String|RegExp} evt Name of the event to attach the listener to.
     * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.addOnceListener = function addOnceListener(evt, listener) {
        return this.addListener(evt, {
            listener: listener,
            once: true
        });
    };

    /**
     * Alias of addOnceListener.
     */
    proto.once = alias('addOnceListener');

    /**
     * Defines an event name. This is required if you want to use a regex to add a listener to multiple events at once. If you don't do this then how do you expect it to know what event to add to? Should it just add to every possible match for a regex? No. That is scary and bad.
     * You need to tell it what event names should be matched by a regex.
     *
     * @param {String} evt Name of the event to create.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.defineEvent = function defineEvent(evt) {
        this.getListeners(evt);
        return this;
    };

    /**
     * Uses defineEvent to define multiple events.
     *
     * @param {String[]} evts An array of event names to define.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.defineEvents = function defineEvents(evts) {
        for (var i = 0; i < evts.length; i += 1) {
            this.defineEvent(evts[i]);
        }
        return this;
    };

    /**
     * Removes a listener function from the specified event.
     * When passed a regular expression as the event name, it will remove the listener from all events that match it.
     *
     * @param {String|RegExp} evt Name of the event to remove the listener from.
     * @param {Function} listener Method to remove from the event.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.removeListener = function removeListener(evt, listener) {
        var listeners = this.getListenersAsObject(evt);
        var index;
        var key;

        for (key in listeners) {
            if (listeners.hasOwnProperty(key)) {
                index = indexOfListener(listeners[key], listener);

                if (index !== -1) {
                    listeners[key].splice(index, 1);
                }
            }
        }

        return this;
    };

    /**
     * Alias of removeListener
     */
    proto.off = alias('removeListener');

    /**
     * Adds listeners in bulk using the manipulateListeners method.
     * If you pass an object as the second argument you can add to multiple events at once. The object should contain key value pairs of events and listeners or listener arrays. You can also pass it an event name and an array of listeners to be added.
     * You can also pass it a regular expression to add the array of listeners to all events that match it.
     * Yeah, this function does quite a bit. That's probably a bad thing.
     *
     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add to multiple events at once.
     * @param {Function[]} [listeners] An optional array of listener functions to add.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.addListeners = function addListeners(evt, listeners) {
        // Pass through to manipulateListeners
        return this.manipulateListeners(false, evt, listeners);
    };

    /**
     * Removes listeners in bulk using the manipulateListeners method.
     * If you pass an object as the second argument you can remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
     * You can also pass it an event name and an array of listeners to be removed.
     * You can also pass it a regular expression to remove the listeners from all events that match it.
     *
     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to remove from multiple events at once.
     * @param {Function[]} [listeners] An optional array of listener functions to remove.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.removeListeners = function removeListeners(evt, listeners) {
        // Pass through to manipulateListeners
        return this.manipulateListeners(true, evt, listeners);
    };

    /**
     * Edits listeners in bulk. The addListeners and removeListeners methods both use this to do their job. You should really use those instead, this is a little lower level.
     * The first argument will determine if the listeners are removed (true) or added (false).
     * If you pass an object as the second argument you can add/remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
     * You can also pass it an event name and an array of listeners to be added/removed.
     * You can also pass it a regular expression to manipulate the listeners of all events that match it.
     *
     * @param {Boolean} remove True if you want to remove listeners, false if you want to add.
     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add/remove from multiple events at once.
     * @param {Function[]} [listeners] An optional array of listener functions to add/remove.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.manipulateListeners = function manipulateListeners(remove, evt, listeners) {
        var i;
        var value;
        var single = remove ? this.removeListener : this.addListener;
        var multiple = remove ? this.removeListeners : this.addListeners;

        // If evt is an object then pass each of its properties to this method
        if (typeof evt === 'object' && !(evt instanceof RegExp)) {
            for (i in evt) {
                if (evt.hasOwnProperty(i) && (value = evt[i])) {
                    // Pass the single listener straight through to the singular method
                    if (typeof value === 'function') {
                        single.call(this, i, value);
                    }
                    else {
                        // Otherwise pass back to the multiple function
                        multiple.call(this, i, value);
                    }
                }
            }
        }
        else {
            // So evt must be a string
            // And listeners must be an array of listeners
            // Loop over it and pass each one to the multiple method
            i = listeners.length;
            while (i--) {
                single.call(this, evt, listeners[i]);
            }
        }

        return this;
    };

    /**
     * Removes all listeners from a specified event.
     * If you do not specify an event then all listeners will be removed.
     * That means every event will be emptied.
     * You can also pass a regex to remove all events that match it.
     *
     * @param {String|RegExp} [evt] Optional name of the event to remove all listeners for. Will remove from every event if not passed.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.removeEvent = function removeEvent(evt) {
        var type = typeof evt;
        var events = this._getEvents();
        var key;

        // Remove different things depending on the state of evt
        if (type === 'string') {
            // Remove all listeners for the specified event
            delete events[evt];
        }
        else if (evt instanceof RegExp) {
            // Remove all events matching the regex.
            for (key in events) {
                if (events.hasOwnProperty(key) && evt.test(key)) {
                    delete events[key];
                }
            }
        }
        else {
            // Remove all listeners in all events
            delete this._events;
        }

        return this;
    };

    /**
     * Alias of removeEvent.
     *
     * Added to mirror the node API.
     */
    proto.removeAllListeners = alias('removeEvent');

    /**
     * Emits an event of your choice.
     * When emitted, every listener attached to that event will be executed.
     * If you pass the optional argument array then those arguments will be passed to every listener upon execution.
     * Because it uses `apply`, your array of arguments will be passed as if you wrote them out separately.
     * So they will not arrive within the array on the other side, they will be separate.
     * You can also pass a regular expression to emit to all events that match it.
     *
     * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
     * @param {Array} [args] Optional array of arguments to be passed to each listener.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.emitEvent = function emitEvent(evt, args) {
        var listeners = this.getListenersAsObject(evt);
        var listener;
        var i;
        var key;
        var response;

        for (key in listeners) {
            if (listeners.hasOwnProperty(key)) {
                i = listeners[key].length;

                while (i--) {
                    // If the listener returns true then it shall be removed from the event
                    // The function is executed either with a basic call or an apply if there is an args array
                    listener = listeners[key][i];

                    if (listener.once === true) {
                        this.removeListener(evt, listener.listener);
                    }

                    response = listener.listener.apply(this, args || []);

                    if (response === this._getOnceReturnValue()) {
                        this.removeListener(evt, listener.listener);
                    }
                }
            }
        }

        return this;
    };

    /**
     * Alias of emitEvent
     */
    proto.trigger = alias('emitEvent');

    /**
     * Subtly different from emitEvent in that it will pass its arguments on to the listeners, as opposed to taking a single array of arguments to pass on.
     * As with emitEvent, you can pass a regex in place of the event name to emit to all events that match it.
     *
     * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
     * @param {...*} Optional additional arguments to be passed to each listener.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.emit = function emit(evt) {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(evt, args);
    };

    /**
     * Sets the current value to check against when executing listeners. If a
     * listeners return value matches the one set here then it will be removed
     * after execution. This value defaults to true.
     *
     * @param {*} value The new value to check for when executing listeners.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.setOnceReturnValue = function setOnceReturnValue(value) {
        this._onceReturnValue = value;
        return this;
    };

    /**
     * Fetches the current value to check against when executing listeners. If
     * the listeners return value matches this one then it should be removed
     * automatically. It will return true by default.
     *
     * @return {*|Boolean} The current value to check for or the default, true.
     * @api private
     */
    proto._getOnceReturnValue = function _getOnceReturnValue() {
        if (this.hasOwnProperty('_onceReturnValue')) {
            return this._onceReturnValue;
        }
        else {
            return true;
        }
    };

    /**
     * Fetches the events object and creates one if required.
     *
     * @return {Object} The events storage object.
     * @api private
     */
    proto._getEvents = function _getEvents() {
        return this._events || (this._events = {});
    };

    /**
     * Reverts the global {@link EventEmitter} to its previous value and returns a reference to this version.
     *
     * @return {Function} Non conflicting EventEmitter class.
     */
    EventEmitter.noConflict = function noConflict() {
        exports.EventEmitter = originalGlobalValue;
        return EventEmitter;
    };

    // Expose the class either via AMD, CommonJS or the global object
    if (typeof define === 'function' && define.amd) {
        define('eventEmitter/EventEmitter',[],function () {
            return EventEmitter;
        });
    }
    else if (typeof module === 'object' && module.exports){
        module.exports = EventEmitter;
    }
    else {
        exports.EventEmitter = EventEmitter;
    }
}.call(this));

/*!
 * eventie v1.0.6
 * event binding helper
 *   eventie.bind( elem, 'click', myFn )
 *   eventie.unbind( elem, 'click', myFn )
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true */
/*global define: false, module: false */

( function( window ) {



var docElem = document.documentElement;

var bind = function() {};

function getIEEvent( obj ) {
  var event = window.event;
  // add event.target
  event.target = event.target || event.srcElement || obj;
  return event;
}

if ( docElem.addEventListener ) {
  bind = function( obj, type, fn ) {
    obj.addEventListener( type, fn, false );
  };
} else if ( docElem.attachEvent ) {
  bind = function( obj, type, fn ) {
    obj[ type + fn ] = fn.handleEvent ?
      function() {
        var event = getIEEvent( obj );
        fn.handleEvent.call( fn, event );
      } :
      function() {
        var event = getIEEvent( obj );
        fn.call( obj, event );
      };
    obj.attachEvent( "on" + type, obj[ type + fn ] );
  };
}

var unbind = function() {};

if ( docElem.removeEventListener ) {
  unbind = function( obj, type, fn ) {
    obj.removeEventListener( type, fn, false );
  };
} else if ( docElem.detachEvent ) {
  unbind = function( obj, type, fn ) {
    obj.detachEvent( "on" + type, obj[ type + fn ] );
    try {
      delete obj[ type + fn ];
    } catch ( err ) {
      // can't delete window object properties
      obj[ type + fn ] = undefined;
    }
  };
}

var eventie = {
  bind: bind,
  unbind: unbind
};

// ----- module definition ----- //

if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( 'eventie/eventie',eventie );
} else if ( typeof exports === 'object' ) {
  // CommonJS
  module.exports = eventie;
} else {
  // browser global
  window.eventie = eventie;
}

})( window );

/*!
 * getStyleProperty v1.0.4
 * original by kangax
 * http://perfectionkills.com/feature-testing-css-properties/
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false, exports: false, module: false */

( function( window ) {



var prefixes = 'Webkit Moz ms Ms O'.split(' ');
var docElemStyle = document.documentElement.style;

function getStyleProperty( propName ) {
  if ( !propName ) {
    return;
  }

  // test standard property first
  if ( typeof docElemStyle[ propName ] === 'string' ) {
    return propName;
  }

  // capitalize
  propName = propName.charAt(0).toUpperCase() + propName.slice(1);

  // test vendor specific properties
  var prefixed;
  for ( var i=0, len = prefixes.length; i < len; i++ ) {
    prefixed = prefixes[i] + propName;
    if ( typeof docElemStyle[ prefixed ] === 'string' ) {
      return prefixed;
    }
  }
}

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( 'get-style-property/get-style-property',[],function() {
    return getStyleProperty;
  });
} else if ( typeof exports === 'object' ) {
  // CommonJS for Component
  module.exports = getStyleProperty;
} else {
  // browser global
  window.getStyleProperty = getStyleProperty;
}

})( window );

/*!
 * getSize v1.2.2
 * measure size of elements
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */
/*global define: false, exports: false, require: false, module: false, console: false */

( function( window, undefined ) {



// -------------------------- helpers -------------------------- //

// get a number from a string, not a percentage
function getStyleSize( value ) {
  var num = parseFloat( value );
  // not a percent like '100%', and a number
  var isValid = value.indexOf('%') === -1 && !isNaN( num );
  return isValid && num;
}

function noop() {}

var logError = typeof console === 'undefined' ? noop :
  function( message ) {
    console.error( message );
  };

// -------------------------- measurements -------------------------- //

var measurements = [
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'paddingBottom',
  'marginLeft',
  'marginRight',
  'marginTop',
  'marginBottom',
  'borderLeftWidth',
  'borderRightWidth',
  'borderTopWidth',
  'borderBottomWidth'
];

function getZeroSize() {
  var size = {
    width: 0,
    height: 0,
    innerWidth: 0,
    innerHeight: 0,
    outerWidth: 0,
    outerHeight: 0
  };
  for ( var i=0, len = measurements.length; i < len; i++ ) {
    var measurement = measurements[i];
    size[ measurement ] = 0;
  }
  return size;
}



function defineGetSize( getStyleProperty ) {

// -------------------------- setup -------------------------- //

var isSetup = false;

var getStyle, boxSizingProp, isBoxSizeOuter;

/**
 * setup vars and functions
 * do it on initial getSize(), rather than on script load
 * For Firefox bug https://bugzilla.mozilla.org/show_bug.cgi?id=548397
 */
function setup() {
  // setup once
  if ( isSetup ) {
    return;
  }
  isSetup = true;

  var getComputedStyle = window.getComputedStyle;
  getStyle = ( function() {
    var getStyleFn = getComputedStyle ?
      function( elem ) {
        return getComputedStyle( elem, null );
      } :
      function( elem ) {
        return elem.currentStyle;
      };

      return function getStyle( elem ) {
        var style = getStyleFn( elem );
        if ( !style ) {
          logError( 'Style returned ' + style +
            '. Are you running this code in a hidden iframe on Firefox? ' +
            'See http://bit.ly/getsizebug1' );
        }
        return style;
      };
  })();

  // -------------------------- box sizing -------------------------- //

  boxSizingProp = getStyleProperty('boxSizing');

  /**
   * WebKit measures the outer-width on style.width on border-box elems
   * IE & Firefox measures the inner-width
   */
  if ( boxSizingProp ) {
    var div = document.createElement('div');
    div.style.width = '200px';
    div.style.padding = '1px 2px 3px 4px';
    div.style.borderStyle = 'solid';
    div.style.borderWidth = '1px 2px 3px 4px';
    div.style[ boxSizingProp ] = 'border-box';

    var body = document.body || document.documentElement;
    body.appendChild( div );
    var style = getStyle( div );

    isBoxSizeOuter = getStyleSize( style.width ) === 200;
    body.removeChild( div );
  }

}

// -------------------------- getSize -------------------------- //

function getSize( elem ) {
  setup();

  // use querySeletor if elem is string
  if ( typeof elem === 'string' ) {
    elem = document.querySelector( elem );
  }

  // do not proceed on non-objects
  if ( !elem || typeof elem !== 'object' || !elem.nodeType ) {
    return;
  }

  var style = getStyle( elem );

  // if hidden, everything is 0
  if ( style.display === 'none' ) {
    return getZeroSize();
  }

  var size = {};
  size.width = elem.offsetWidth;
  size.height = elem.offsetHeight;

  var isBorderBox = size.isBorderBox = !!( boxSizingProp &&
    style[ boxSizingProp ] && style[ boxSizingProp ] === 'border-box' );

  // get all measurements
  for ( var i=0, len = measurements.length; i < len; i++ ) {
    var measurement = measurements[i];
    var value = style[ measurement ];
    value = mungeNonPixel( elem, value );
    var num = parseFloat( value );
    // any 'auto', 'medium' value will be 0
    size[ measurement ] = !isNaN( num ) ? num : 0;
  }

  var paddingWidth = size.paddingLeft + size.paddingRight;
  var paddingHeight = size.paddingTop + size.paddingBottom;
  var marginWidth = size.marginLeft + size.marginRight;
  var marginHeight = size.marginTop + size.marginBottom;
  var borderWidth = size.borderLeftWidth + size.borderRightWidth;
  var borderHeight = size.borderTopWidth + size.borderBottomWidth;

  var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;

  // overwrite width and height if we can get it from style
  var styleWidth = getStyleSize( style.width );
  if ( styleWidth !== false ) {
    size.width = styleWidth +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth );
  }

  var styleHeight = getStyleSize( style.height );
  if ( styleHeight !== false ) {
    size.height = styleHeight +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight );
  }

  size.innerWidth = size.width - ( paddingWidth + borderWidth );
  size.innerHeight = size.height - ( paddingHeight + borderHeight );

  size.outerWidth = size.width + marginWidth;
  size.outerHeight = size.height + marginHeight;

  return size;
}

// IE8 returns percent values, not pixels
// taken from jQuery's curCSS
function mungeNonPixel( elem, value ) {
  // IE8 and has percent value
  if ( window.getComputedStyle || value.indexOf('%') === -1 ) {
    return value;
  }
  var style = elem.style;
  // Remember the original values
  var left = style.left;
  var rs = elem.runtimeStyle;
  var rsLeft = rs && rs.left;

  // Put in the new values to get a computed value out
  if ( rsLeft ) {
    rs.left = elem.currentStyle.left;
  }
  style.left = value;
  value = style.pixelLeft;

  // Revert the changed values
  style.left = left;
  if ( rsLeft ) {
    rs.left = rsLeft;
  }

  return value;
}

return getSize;

}

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD for RequireJS
  define( 'get-size/get-size',[ 'get-style-property/get-style-property' ], defineGetSize );
} else if ( typeof exports === 'object' ) {
  // CommonJS for Component
  module.exports = defineGetSize( require('desandro-get-style-property') );
} else {
  // browser global
  window.getSize = defineGetSize( window.getStyleProperty );
}

})( window );

/*!
 * docReady v1.0.4
 * Cross browser DOMContentLoaded event emitter
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true*/
/*global define: false, require: false, module: false */

( function( window ) {



var document = window.document;
// collection of functions to be triggered on ready
var queue = [];

function docReady( fn ) {
  // throw out non-functions
  if ( typeof fn !== 'function' ) {
    return;
  }

  if ( docReady.isReady ) {
    // ready now, hit it
    fn();
  } else {
    // queue function when ready
    queue.push( fn );
  }
}

docReady.isReady = false;

// triggered on various doc ready events
function onReady( event ) {
  // bail if already triggered or IE8 document is not ready just yet
  var isIE8NotReady = event.type === 'readystatechange' && document.readyState !== 'complete';
  if ( docReady.isReady || isIE8NotReady ) {
    return;
  }

  trigger();
}

function trigger() {
  docReady.isReady = true;
  // process queue
  for ( var i=0, len = queue.length; i < len; i++ ) {
    var fn = queue[i];
    fn();
  }
}

function defineDocReady( eventie ) {
  // trigger ready if page is ready
  if ( document.readyState === 'complete' ) {
    trigger();
  } else {
    // listen for events
    eventie.bind( document, 'DOMContentLoaded', onReady );
    eventie.bind( document, 'readystatechange', onReady );
    eventie.bind( window, 'load', onReady );
  }

  return docReady;
}

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( 'doc-ready/doc-ready',[ 'eventie/eventie' ], defineDocReady );
} else if ( typeof exports === 'object' ) {
  module.exports = defineDocReady( require('eventie') );
} else {
  // browser global
  window.docReady = defineDocReady( window.eventie );
}

})( window );

/**
 * matchesSelector v1.0.3
 * matchesSelector( element, '.selector' )
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */
/*global define: false, module: false */

( function( ElemProto ) {

  

  var matchesMethod = ( function() {
    // check for the standard method name first
    if ( ElemProto.matches ) {
      return 'matches';
    }
    // check un-prefixed
    if ( ElemProto.matchesSelector ) {
      return 'matchesSelector';
    }
    // check vendor prefixes
    var prefixes = [ 'webkit', 'moz', 'ms', 'o' ];

    for ( var i=0, len = prefixes.length; i < len; i++ ) {
      var prefix = prefixes[i];
      var method = prefix + 'MatchesSelector';
      if ( ElemProto[ method ] ) {
        return method;
      }
    }
  })();

  // ----- match ----- //

  function match( elem, selector ) {
    return elem[ matchesMethod ]( selector );
  }

  // ----- appendToFragment ----- //

  function checkParent( elem ) {
    // not needed if already has parent
    if ( elem.parentNode ) {
      return;
    }
    var fragment = document.createDocumentFragment();
    fragment.appendChild( elem );
  }

  // ----- query ----- //

  // fall back to using QSA
  // thx @jonathantneal https://gist.github.com/3062955
  function query( elem, selector ) {
    // append to fragment if no parent
    checkParent( elem );

    // match elem with all selected elems of parent
    var elems = elem.parentNode.querySelectorAll( selector );
    for ( var i=0, len = elems.length; i < len; i++ ) {
      // return true if match
      if ( elems[i] === elem ) {
        return true;
      }
    }
    // otherwise return false
    return false;
  }

  // ----- matchChild ----- //

  function matchChild( elem, selector ) {
    checkParent( elem );
    return match( elem, selector );
  }

  // ----- matchesSelector ----- //

  var matchesSelector;

  if ( matchesMethod ) {
    // IE9 supports matchesSelector, but doesn't work on orphaned elems
    // check for that
    var div = document.createElement('div');
    var supportsOrphans = match( div, 'div' );
    matchesSelector = supportsOrphans ? match : matchChild;
  } else {
    matchesSelector = query;
  }

  // transport
  if ( typeof define === 'function' && define.amd ) {
    // AMD
    define( 'matches-selector/matches-selector',[],function() {
      return matchesSelector;
    });
  } else if ( typeof exports === 'object' ) {
    module.exports = matchesSelector;
  }
  else {
    // browser global
    window.matchesSelector = matchesSelector;
  }

})( Element.prototype );

/**
 * Fizzy UI utils v1.0.1
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true, strict: true */

( function( window, factory ) {
  /*global define: false, module: false, require: false */
  
  // universal module definition

  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'fizzy-ui-utils/utils',[
      'doc-ready/doc-ready',
      'matches-selector/matches-selector'
    ], function( docReady, matchesSelector ) {
      return factory( window, docReady, matchesSelector );
    });
  } else if ( typeof exports == 'object' ) {
    // CommonJS
    module.exports = factory(
      window,
      require('doc-ready'),
      require('desandro-matches-selector')
    );
  } else {
    // browser global
    window.fizzyUIUtils = factory(
      window,
      window.docReady,
      window.matchesSelector
    );
  }

}( window, function factory( window, docReady, matchesSelector ) {



var utils = {};

// ----- extend ----- //

// extends objects
utils.extend = function( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
};

// ----- modulo ----- //

utils.modulo = function( num, div ) {
  return ( ( num % div ) + div ) % div;
};

// ----- isArray ----- //
  
var objToString = Object.prototype.toString;
utils.isArray = function( obj ) {
  return objToString.call( obj ) == '[object Array]';
};

// ----- makeArray ----- //

// turn element or nodeList into an array
utils.makeArray = function( obj ) {
  var ary = [];
  if ( utils.isArray( obj ) ) {
    // use object if already an array
    ary = obj;
  } else if ( obj && typeof obj.length == 'number' ) {
    // convert nodeList to array
    for ( var i=0, len = obj.length; i < len; i++ ) {
      ary.push( obj[i] );
    }
  } else {
    // array of single index
    ary.push( obj );
  }
  return ary;
};

// ----- indexOf ----- //

// index of helper cause IE8
utils.indexOf = Array.prototype.indexOf ? function( ary, obj ) {
    return ary.indexOf( obj );
  } : function( ary, obj ) {
    for ( var i=0, len = ary.length; i < len; i++ ) {
      if ( ary[i] === obj ) {
        return i;
      }
    }
    return -1;
  };

// ----- removeFrom ----- //

utils.removeFrom = function( ary, obj ) {
  var index = utils.indexOf( ary, obj );
  if ( index != -1 ) {
    ary.splice( index, 1 );
  }
};

// ----- isElement ----- //

// http://stackoverflow.com/a/384380/182183
utils.isElement = ( typeof HTMLElement == 'function' || typeof HTMLElement == 'object' ) ?
  function isElementDOM2( obj ) {
    return obj instanceof HTMLElement;
  } :
  function isElementQuirky( obj ) {
    return obj && typeof obj == 'object' &&
      obj.nodeType == 1 && typeof obj.nodeName == 'string';
  };

// ----- setText ----- //

utils.setText = ( function() {
  var setTextProperty;
  function setText( elem, text ) {
    // only check setTextProperty once
    setTextProperty = setTextProperty || ( document.documentElement.textContent !== undefined ? 'textContent' : 'innerText' );
    elem[ setTextProperty ] = text;
  }
  return setText;
})();

// ----- getParent ----- //

utils.getParent = function( elem, selector ) {
  while ( elem != document.body ) {
    elem = elem.parentNode;
    if ( matchesSelector( elem, selector ) ) {
      return elem;
    }
  }
};

// ----- getQueryElement ----- //

// use element as selector string
utils.getQueryElement = function( elem ) {
  if ( typeof elem == 'string' ) {
    return document.querySelector( elem );
  }
  return elem;
};

// ----- handleEvent ----- //

// enable .ontype to trigger from .addEventListener( elem, 'type' )
utils.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

// ----- filterFindElements ----- //

utils.filterFindElements = function( elems, selector ) {
  // make array of elems
  elems = utils.makeArray( elems );
  var ffElems = [];

  for ( var i=0, len = elems.length; i < len; i++ ) {
    var elem = elems[i];
    // check that elem is an actual element
    if ( !utils.isElement( elem ) ) {
      continue;
    }
    // filter & find items if we have a selector
    if ( selector ) {
      // filter siblings
      if ( matchesSelector( elem, selector ) ) {
        ffElems.push( elem );
      }
      // find children
      var childElems = elem.querySelectorAll( selector );
      // concat childElems to filterFound array
      for ( var j=0, jLen = childElems.length; j < jLen; j++ ) {
        ffElems.push( childElems[j] );
      }
    } else {
      ffElems.push( elem );
    }
  }

  return ffElems;
};

// ----- debounceMethod ----- //

utils.debounceMethod = function( _class, methodName, threshold ) {
  // original method
  var method = _class.prototype[ methodName ];
  var timeoutName = methodName + 'Timeout';

  _class.prototype[ methodName ] = function() {
    var timeout = this[ timeoutName ];
    if ( timeout ) {
      clearTimeout( timeout );
    }
    var args = arguments;

    var _this = this;
    this[ timeoutName ] = setTimeout( function() {
      method.apply( _this, args );
      delete _this[ timeoutName ];
    }, threshold || 100 );
  };
};

// ----- htmlInit ----- //

// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
utils.toDashed = function( str ) {
  return str.replace( /(.)([A-Z])/g, function( match, $1, $2 ) {
    return $1 + '-' + $2;
  }).toLowerCase();
};

var console = window.console;
/**
 * allow user to initialize classes via .js-namespace class
 * htmlInit( Widget, 'widgetName' )
 * options are parsed from data-namespace-option attribute
 */
utils.htmlInit = function( WidgetClass, namespace ) {
  docReady( function() {
    var dashedNamespace = utils.toDashed( namespace );
    var elems = document.querySelectorAll( '.js-' + dashedNamespace );
    var dataAttr = 'data-' + dashedNamespace + '-options';

    for ( var i=0, len = elems.length; i < len; i++ ) {
      var elem = elems[i];
      var attr = elem.getAttribute( dataAttr );
      var options;
      try {
        options = attr && JSON.parse( attr );
      } catch ( error ) {
        // log error, do not initialize
        if ( console ) {
          console.error( 'Error parsing ' + dataAttr + ' on ' +
            elem.nodeName.toLowerCase() + ( elem.id ? '#' + elem.id : '' ) + ': ' +
            error );
        }
        continue;
      }
      // initialize
      var instance = new WidgetClass( elem, options );
      // make available via $().data('layoutname')
      var jQuery = window.jQuery;
      if ( jQuery ) {
        jQuery.data( elem, namespace, instance );
      }
    }
  });
};

// -----  ----- //

return utils;

}));

( function( window, factory ) {
  
  // universal module definition

  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'flickity/js/cell',[
      'get-size/get-size'
    ], function( getSize ) {
      return factory( window, getSize );
    });
  } else if ( typeof exports == 'object' ) {
    // CommonJS
    module.exports = factory(
      window,
      require('get-size')
    );
  } else {
    // browser global
    window.Flickity = window.Flickity || {};
    window.Flickity.Cell = factory(
      window,
      window.getSize
    );
  }

}( window, function factory( window, getSize ) {



function Cell( elem, parent ) {
  this.element = elem;
  this.parent = parent;

  this.create();
}

var isIE8 = 'attachEvent' in window;

Cell.prototype.create = function() {
  this.element.style.position = 'absolute';
  // IE8 prevent child from changing focus http://stackoverflow.com/a/17525223/182183
  if ( isIE8 ) {
    this.element.setAttribute( 'unselectable', 'on' );
  }
  this.x = 0;
  this.shift = 0;
};

Cell.prototype.destroy = function() {
  // reset style
  this.element.style.position = '';
  var side = this.parent.originSide;
  this.element.style[ side ] = '';
};

Cell.prototype.getSize = function() {
  this.size = getSize( this.element );
};

Cell.prototype.setPosition = function( x ) {
  this.x = x;
  this.setDefaultTarget();
  this.renderPosition( x );
};

Cell.prototype.setDefaultTarget = function() {
  var marginProperty = this.parent.originSide == 'left' ? 'marginLeft' : 'marginRight';
  this.target = this.x + this.size[ marginProperty ] +
    this.size.width * this.parent.cellAlign;
};

Cell.prototype.renderPosition = function( x ) {
  // render position of cell with in slider
  var side = this.parent.originSide;
  this.element.style[ side ] = this.parent.getPositionValue( x );
};

/**
 * @param {Integer} factor - 0, 1, or -1
**/
Cell.prototype.wrapShift = function( shift ) {
  this.shift = shift;
  this.renderPosition( this.x + this.parent.slideableWidth * shift );
};

Cell.prototype.remove = function() {
  this.element.parentNode.removeChild( this.element );
};

return Cell;

}));

( function( window, factory ) {
  
  // universal module definition

  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'flickity/js/animate',[
      'get-style-property/get-style-property',
      'fizzy-ui-utils/utils'
    ], function( getStyleProperty, utils ) {
      return factory( window, getStyleProperty, utils );
    });
  } else if ( typeof exports == 'object' ) {
    // CommonJS
    module.exports = factory(
      window,
      require('desandro-get-style-property'),
      require('fizzy-ui-utils')
    );
  } else {
    // browser global
    window.Flickity = window.Flickity || {};
    window.Flickity.animatePrototype = factory(
      window,
      window.getStyleProperty,
      window.fizzyUIUtils
    );
  }

}( window, function factory( window, getStyleProperty, utils ) {



// -------------------------- requestAnimationFrame -------------------------- //

// https://gist.github.com/1866474

var lastTime = 0;
var prefixes = 'webkit moz ms o'.split(' ');
// get unprefixed rAF and cAF, if present
var requestAnimationFrame = window.requestAnimationFrame;
var cancelAnimationFrame = window.cancelAnimationFrame;
// loop through vendor prefixes and get prefixed rAF and cAF
var prefix;
for( var i = 0; i < prefixes.length; i++ ) {
  if ( requestAnimationFrame && cancelAnimationFrame ) {
    break;
  }
  prefix = prefixes[i];
  requestAnimationFrame = requestAnimationFrame || window[ prefix + 'RequestAnimationFrame' ];
  cancelAnimationFrame  = cancelAnimationFrame  || window[ prefix + 'CancelAnimationFrame' ] ||
                            window[ prefix + 'CancelRequestAnimationFrame' ];
}

// fallback to setTimeout and clearTimeout if either request/cancel is not supported
if ( !requestAnimationFrame || !cancelAnimationFrame )  {
  requestAnimationFrame = function( callback ) {
    var currTime = new Date().getTime();
    var timeToCall = Math.max( 0, 16 - ( currTime - lastTime ) );
    var id = window.setTimeout( function() {
      callback( currTime + timeToCall );
    }, timeToCall );
    lastTime = currTime + timeToCall;
    return id;
  };

  cancelAnimationFrame = function( id ) {
    window.clearTimeout( id );
  };
}

// -------------------------- animate -------------------------- //

var proto = {};

proto.startAnimation = function() {
  if ( this.isAnimating ) {
    return;
  }

  this.isAnimating = true;
  this.restingFrames = 0;
  this.animate();
};

proto.animate = function() {
  this.applyDragForce();
  this.applySelectedAttraction();

  var previousX = this.x;

  this.integratePhysics();
  this.positionSlider();
  this.settle( previousX );
  // animate next frame
  if ( this.isAnimating ) {
    var _this = this;
    requestAnimationFrame( function animateFrame() {
      _this.animate();
    });
  }

  /** /
  // log animation frame rate
  var now = new Date();
  if ( this.then ) {
    console.log( ~~( 1000 / (now-this.then)) + 'fps' )
  }
  this.then = now;
  /**/
};


var transformProperty = getStyleProperty('transform');
var is3d = !!getStyleProperty('perspective');

proto.positionSlider = function() {
  var x = this.x;
  // wrap position around
  if ( this.options.wrapAround && this.cells.length > 1 ) {
    x = utils.modulo( x, this.slideableWidth );
    x = x - this.slideableWidth;
    this.shiftWrapCells( x );
  }

  x = x + this.cursorPosition;

  // reverse if right-to-left and using transform
  x = this.options.rightToLeft && transformProperty ? -x : x;

  var value = this.getPositionValue( x );

  if ( transformProperty ) {
    // use 3D tranforms for hardware acceleration on iOS
    // but use 2D when settled, for better font-rendering
    this.slider.style[ transformProperty ] = is3d && this.isAnimating ?
      'translate3d(' + value + ',0,0)' : 'translateX(' + value + ')';
  } else {
    this.slider.style[ this.originSide ] = value;
  }
};

proto.positionSliderAtSelected = function() {
  if ( !this.cells.length ) {
    return;
  }
  var selectedCell = this.cells[ this.selectedIndex ];
  this.x = -selectedCell.target;
  this.positionSlider();
};

proto.getPositionValue = function( position ) {
  if ( this.options.percentPosition ) {
    // percent position, round to 2 digits, like 12.34%
    return ( Math.round( ( position / this.size.innerWidth ) * 10000 ) * 0.01 )+ '%';
  } else {
    // pixel positioning
    return Math.round( position ) + 'px';
  }
};

proto.settle = function( previousX ) {
  // keep track of frames where x hasn't moved
  if ( !this.isPointerDown && Math.round( this.x * 100 ) == Math.round( previousX * 100 ) ) {
    this.restingFrames++;
  }
  // stop animating if resting for 3 or more frames
  if ( this.restingFrames > 2 ) {
    this.isAnimating = false;
    delete this.isFreeScrolling;
    // render position with translateX when settled
    if ( is3d ) {
      this.positionSlider();
    }
    this.dispatchEvent('settle');
  }
};

proto.shiftWrapCells = function( x ) {
  // shift before cells
  var beforeGap = this.cursorPosition + x;
  this._shiftCells( this.beforeShiftCells, beforeGap, -1 );
  // shift after cells
  var afterGap = this.size.innerWidth - ( x + this.slideableWidth + this.cursorPosition );
  this._shiftCells( this.afterShiftCells, afterGap, 1 );
};

proto._shiftCells = function( cells, gap, shift ) {
  for ( var i=0, len = cells.length; i < len; i++ ) {
    var cell = cells[i];
    var cellShift = gap > 0 ? shift : 0;
    cell.wrapShift( cellShift );
    gap -= cell.size.outerWidth;
  }
};

proto._unshiftCells = function( cells ) {
  if ( !cells || !cells.length ) {
    return;
  }
  for ( var i=0, len = cells.length; i < len; i++ ) {
    cells[i].wrapShift( 0 );
  }
};

// -------------------------- physics -------------------------- //

proto.integratePhysics = function() {
  this.velocity += this.accel;
  this.x += this.velocity;
  this.velocity *= this.getFrictionFactor();
  // reset acceleration
  this.accel = 0;
};

proto.applyForce = function( force ) {
  this.accel += force;
};

proto.getFrictionFactor = function() {
  return 1 - this.options[ this.isFreeScrolling ? 'freeScrollFriction' : 'friction' ];
};


proto.getRestingPosition = function() {
  // my thanks to Steven Wittens, who simplified this math greatly
  return this.x + this.velocity / ( 1 - this.getFrictionFactor() );
};

proto.applyDragForce = function() {
  if ( !this.isPointerDown ) {
    return;
  }
  // change the position to drag position by applying force
  var dragVelocity = this.dragX - this.x;
  var dragForce = dragVelocity - this.velocity;
  this.applyForce( dragForce );
};

proto.applySelectedAttraction = function() {
  // do not attract if pointer down or no cells
  var len = this.cells.length;
  if ( this.isPointerDown || this.isFreeScrolling || !len ) {
    return;
  }
  var cell = this.cells[ this.selectedIndex ];
  var wrap = this.options.wrapAround && len > 1 ?
    this.slideableWidth * Math.floor( this.selectedIndex / len ) : 0;
  var distance = ( cell.target + wrap ) * -1 - this.x;
  var force = distance * this.options.selectedAttraction;
  this.applyForce( force );
};

return proto;

}));

/*!
 * Flickity v1.1.0
 * Touch, responsive, flickable galleries
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * http://flickity.metafizzy.co
 * Copyright 2015 Metafizzy
 */

( function( window, factory ) {
  
  // universal module definition

  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'flickity/js/flickity',[
      'classie/classie',
      'eventEmitter/EventEmitter',
      'eventie/eventie',
      'get-size/get-size',
      'fizzy-ui-utils/utils',
      './cell',
      './animate'
    ], function( classie, EventEmitter, eventie, getSize, utils, Cell, animatePrototype ) {
      return factory( window, classie, EventEmitter, eventie, getSize, utils, Cell, animatePrototype );
    });
  } else if ( typeof exports == 'object' ) {
    // CommonJS
    module.exports = factory(
      window,
      require('desandro-classie'),
      require('wolfy87-eventemitter'),
      require('eventie'),
      require('get-size'),
      require('fizzy-ui-utils'),
      require('./cell'),
      require('./animate')
    );
  } else {
    // browser global
    var _Flickity = window.Flickity;

    window.Flickity = factory(
      window,
      window.classie,
      window.EventEmitter,
      window.eventie,
      window.getSize,
      window.fizzyUIUtils,
      _Flickity.Cell,
      _Flickity.animatePrototype
    );
  }

}( window, function factory( window, classie, EventEmitter, eventie, getSize,
  utils, Cell, animatePrototype ) {



// vars
var jQuery = window.jQuery;
var getComputedStyle = window.getComputedStyle;
var console = window.console;

function moveElements( elems, toElem ) {
  elems = utils.makeArray( elems );
  while ( elems.length ) {
    toElem.appendChild( elems.shift() );
  }
}

// -------------------------- Flickity -------------------------- //

// globally unique identifiers
var GUID = 0;
// internal store of all Flickity intances
var instances = {};

function Flickity( element, options ) {
  var queryElement = utils.getQueryElement( element );
  if ( !queryElement ) {
    if ( console ) {
      console.error( 'Bad element for Flickity: ' + ( queryElement || element ) );
    }
    return;
  }
  this.element = queryElement;
  // add jQuery
  if ( jQuery ) {
    this.$element = jQuery( this.element );
  }
  // options
  this.options = utils.extend( {}, this.constructor.defaults );
  this.option( options );

  // kick things off
  this._create();
}

Flickity.defaults = {
  accessibility: true,
  cellAlign: 'center',
  // cellSelector: undefined,
  // contain: false,
  freeScrollFriction: 0.075, // friction when free-scrolling
  friction: 0.28, // friction when selecting
  // initialIndex: 0,
  percentPosition: true,
  resize: true,
  selectedAttraction: 0.025,
  setGallerySize: true
  // watchCSS: false,
  // wrapAround: false
};

// hash of methods triggered on _create()
Flickity.createMethods = [];

// inherit EventEmitter
utils.extend( Flickity.prototype, EventEmitter.prototype );

Flickity.prototype._create = function() {
  // add id for Flickity.data
  var id = this.guid = ++GUID;
  this.element.flickityGUID = id; // expando
  instances[ id ] = this; // associate via id
  // initial properties
  this.selectedIndex = this.options.initialIndex || 0;
  // how many frames slider has been in same position
  this.restingFrames = 0;
  // initial physics properties
  this.x = 0;
  this.velocity = 0;
  this.accel = 0;
  this.originSide = this.options.rightToLeft ? 'right' : 'left';
  // create viewport & slider
  this.viewport = document.createElement('div');
  this.viewport.className = 'flickity-viewport';
  Flickity.setUnselectable( this.viewport );
  this._createSlider();

  if ( this.options.resize || this.options.watchCSS ) {
    eventie.bind( window, 'resize', this );
    this.isResizeBound = true;
  }

  for ( var i=0, len = Flickity.createMethods.length; i < len; i++ ) {
    var method = Flickity.createMethods[i];
    this[ method ]();
  }

  if ( this.options.watchCSS ) {
    this.watchCSS();
  } else {
    this.activate();
  }

};

/**
 * set options
 * @param {Object} opts
 */
Flickity.prototype.option = function( opts ) {
  utils.extend( this.options, opts );
};

Flickity.prototype.activate = function() {
  if ( this.isActive ) {
    return;
  }
  this.isActive = true;
  classie.add( this.element, 'flickity-enabled' );
  if ( this.options.rightToLeft ) {
    classie.add( this.element, 'flickity-rtl' );
  }

  this.getSize();
  // move initial cell elements so they can be loaded as cells
  var cellElems = this._filterFindCellElements( this.element.children );
  moveElements( cellElems, this.slider );
  this.viewport.appendChild( this.slider );
  this.element.appendChild( this.viewport );
  // get cells from children
  this.reloadCells();

  if ( this.options.accessibility ) {
    // allow element to focusable
    this.element.tabIndex = 0;
    // listen for key presses
    eventie.bind( this.element, 'keydown', this );
  }

  this.emit('activate');

  this.positionSliderAtSelected();
  this.select( this.selectedIndex );
};

// slider positions the cells
Flickity.prototype._createSlider = function() {
  // slider element does all the positioning
  var slider = document.createElement('div');
  slider.className = 'flickity-slider';
  slider.style[ this.originSide ] = 0;
  this.slider = slider;
};

Flickity.prototype._filterFindCellElements = function( elems ) {
  return utils.filterFindElements( elems, this.options.cellSelector );
};

// goes through all children
Flickity.prototype.reloadCells = function() {
  // collection of item elements
  this.cells = this._makeCells( this.slider.children );
  this.positionCells();
  this._getWrapShiftCells();
  this.setGallerySize();
};

/**
 * turn elements into Flickity.Cells
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - collection of new Flickity Cells
 */
Flickity.prototype._makeCells = function( elems ) {
  var cellElems = this._filterFindCellElements( elems );

  // create new Flickity for collection
  var cells = [];
  for ( var i=0, len = cellElems.length; i < len; i++ ) {
    var elem = cellElems[i];
    var cell = new Cell( elem, this );
    cells.push( cell );
  }

  return cells;
};

Flickity.prototype.getLastCell = function() {
  return this.cells[ this.cells.length - 1 ];
};

// positions all cells
Flickity.prototype.positionCells = function() {
  // size all cells
  this._sizeCells( this.cells );
  // position all cells
  this._positionCells( 0 );
};

/**
 * position certain cells
 * @param {Integer} index - which cell to start with
 */
Flickity.prototype._positionCells = function( index ) {
  index = index || 0;
  // also measure maxCellHeight
  // start 0 if positioning all cells
  this.maxCellHeight = index ? this.maxCellHeight || 0 : 0;
  var cellX = 0;
  // get cellX
  if ( index > 0 ) {
    var startCell = this.cells[ index - 1 ];
    cellX = startCell.x + startCell.size.outerWidth;
  }
  var cell;
  for ( var len = this.cells.length, i=index; i < len; i++ ) {
    cell = this.cells[i];
    cell.setPosition( cellX );
    cellX += cell.size.outerWidth;
    this.maxCellHeight = Math.max( cell.size.outerHeight, this.maxCellHeight );
  }
  // keep track of cellX for wrap-around
  this.slideableWidth = cellX;
  // contain cell target
  this._containCells();
};

/**
 * cell.getSize() on multiple cells
 * @param {Array} cells
 */
Flickity.prototype._sizeCells = function( cells ) {
  for ( var i=0, len = cells.length; i < len; i++ ) {
    var cell = cells[i];
    cell.getSize();
  }
};

// alias _init for jQuery plugin .flickity()
Flickity.prototype._init =
Flickity.prototype.reposition = function() {
  this.positionCells();
  this.positionSliderAtSelected();
};

Flickity.prototype.getSize = function() {
  this.size = getSize( this.element );
  this.setCellAlign();
  this.cursorPosition = this.size.innerWidth * this.cellAlign;
};

var cellAlignShorthands = {
  // cell align, then based on origin side
  center: {
    left: 0.5,
    right: 0.5
  },
  left: {
    left: 0,
    right: 1
  },
  right: {
    right: 0,
    left: 1
  }
};

Flickity.prototype.setCellAlign = function() {
  var shorthand = cellAlignShorthands[ this.options.cellAlign ];
  this.cellAlign = shorthand ? shorthand[ this.originSide ] : this.options.cellAlign;
};

Flickity.prototype.setGallerySize = function() {
  if ( this.options.setGallerySize ) {
    this.viewport.style.height = this.maxCellHeight + 'px';
  }
};

Flickity.prototype._getWrapShiftCells = function() {
  // only for wrap-around
  if ( !this.options.wrapAround ) {
    return;
  }
  // unshift previous cells
  this._unshiftCells( this.beforeShiftCells );
  this._unshiftCells( this.afterShiftCells );
  // get before cells
  // initial gap
  var gapX = this.cursorPosition;
  var cellIndex = this.cells.length - 1;
  this.beforeShiftCells = this._getGapCells( gapX, cellIndex, -1 );
  // get after cells
  // ending gap between last cell and end of gallery viewport
  gapX = this.size.innerWidth - this.cursorPosition;
  // start cloning at first cell, working forwards
  this.afterShiftCells = this._getGapCells( gapX, 0, 1 );
};

Flickity.prototype._getGapCells = function( gapX, cellIndex, increment ) {
  // keep adding cells until the cover the initial gap
  var cells = [];
  while ( gapX > 0 ) {
    var cell = this.cells[ cellIndex ];
    if ( !cell ) {
      break;
    }
    cells.push( cell );
    cellIndex += increment;
    gapX -= cell.size.outerWidth;
  }
  return cells;
};

// ----- contain ----- //

// contain cell targets so no excess sliding
Flickity.prototype._containCells = function() {
  if ( !this.options.contain || this.options.wrapAround || !this.cells.length ) {
    return;
  }
  var startMargin = this.options.rightToLeft ? 'marginRight' : 'marginLeft';
  var endMargin = this.options.rightToLeft ? 'marginLeft' : 'marginRight';
  var firstCellStartMargin = this.cells[0].size[ startMargin ];
  var lastCell = this.getLastCell();
  var contentWidth = this.slideableWidth - lastCell.size[ endMargin ];
  var endLimit = contentWidth - this.size.innerWidth * ( 1 - this.cellAlign );
  // content is less than gallery size
  var isContentSmaller = contentWidth < this.size.innerWidth;
  // contain each cell target
  for ( var i=0, len = this.cells.length; i < len; i++ ) {
    var cell = this.cells[i];
    // reset default target
    cell.setDefaultTarget();
    if ( isContentSmaller ) {
      // all cells fit inside gallery
      cell.target = contentWidth * this.cellAlign;
    } else {
      // contain to bounds
      cell.target = Math.max( cell.target, this.cursorPosition + firstCellStartMargin );
      cell.target = Math.min( cell.target, endLimit );
    }
  }
};

// -----  ----- //

/**
 * emits events via eventEmitter and jQuery events
 * @param {String} type - name of event
 * @param {Event} event - original event
 * @param {Array} args - extra arguments
 */
Flickity.prototype.dispatchEvent = function( type, event, args ) {
  var emitArgs = [ event ].concat( args );
  this.emitEvent( type, emitArgs );

  if ( jQuery && this.$element ) {
    if ( event ) {
      // create jQuery event
      var $event = jQuery.Event( event );
      $event.type = type;
      this.$element.trigger( $event, args );
    } else {
      // just trigger with type if no event available
      this.$element.trigger( type, args );
    }
  }
};

// -------------------------- select -------------------------- //

/**
 * @param {Integer} index - index of the cell
 * @param {Boolean} isWrap - will wrap-around to last/first if at the end
 */
Flickity.prototype.select = function( index, isWrap ) {
  if ( !this.isActive ) {
    return;
  }
  // wrap position so slider is within normal area
  var len = this.cells.length;
  if ( this.options.wrapAround && len > 1 ) {
    if ( index < 0 ) {
      this.x -= this.slideableWidth;
    } else if ( index >= len ) {
      this.x += this.slideableWidth;
    }
  }

  if ( this.options.wrapAround || isWrap ) {
    index = utils.modulo( index, len );
  }

  if ( this.cells[ index ] ) {
    this.selectedIndex = index;
    this.setSelectedCell();
    this.startAnimation();
    this.dispatchEvent('cellSelect');
  }
};

Flickity.prototype.previous = function( isWrap ) {
  this.select( this.selectedIndex - 1, isWrap );
};

Flickity.prototype.next = function( isWrap ) {
  this.select( this.selectedIndex + 1, isWrap );
};

Flickity.prototype.setSelectedCell = function() {
  this._removeSelectedCellClass();
  this.selectedCell = this.cells[ this.selectedIndex ];
  this.selectedElement = this.selectedCell.element;
  classie.add( this.selectedElement, 'is-selected' );
};

Flickity.prototype._removeSelectedCellClass = function() {
  if ( this.selectedCell ) {
    classie.remove( this.selectedCell.element, 'is-selected' );
  }
};

// -------------------------- get cells -------------------------- //

/**
 * get Flickity.Cell, given an Element
 * @param {Element} elem
 * @returns {Flickity.Cell} item
 */
Flickity.prototype.getCell = function( elem ) {
  // loop through cells to get the one that matches
  for ( var i=0, len = this.cells.length; i < len; i++ ) {
    var cell = this.cells[i];
    if ( cell.element == elem ) {
      return cell;
    }
  }
};

/**
 * get collection of Flickity.Cells, given Elements
 * @param {Element, Array, NodeList} elems
 * @returns {Array} cells - Flickity.Cells
 */
Flickity.prototype.getCells = function( elems ) {
  elems = utils.makeArray( elems );
  var cells = [];
  for ( var i=0, len = elems.length; i < len; i++ ) {
    var elem = elems[i];
    var cell = this.getCell( elem );
    if ( cell ) {
      cells.push( cell );
    }
  }
  return cells;
};

/**
 * get cell elements
 * @returns {Array} cellElems
 */
Flickity.prototype.getCellElements = function() {
  var cellElems = [];
  for ( var i=0, len = this.cells.length; i < len; i++ ) {
    cellElems.push( this.cells[i].element );
  }
  return cellElems;
};

/**
 * get parent cell from an element
 * @param {Element} elem
 * @returns {Flickit.Cell} cell
 */
Flickity.prototype.getParentCell = function( elem ) {
  // first check if elem is cell
  var cell = this.getCell( elem );
  if ( cell ) {
    return cell;
  }
  // try to get parent cell elem
  elem = utils.getParent( elem, '.flickity-slider > *' );
  return this.getCell( elem );
};

/**
 * get cells adjacent to a cell
 * @param {Integer} adjCount - number of adjacent cells
 * @param {Integer} index - index of cell to start
 * @returns {Array} cells - array of Flickity.Cells
 */
Flickity.prototype.getAdjacentCellElements = function( adjCount, index ) {
  if ( !adjCount ) {
    return [ this.selectedElement ];
  }
  index = index === undefined ? this.selectedIndex : index;

  var len = this.cells.length;
  if ( 1 + ( adjCount * 2 ) >= len ) {
    return this.getCellElements();
  }

  var cellElems = [];
  for ( var i = index - adjCount; i <= index + adjCount ; i++ ) {
    var cellIndex = this.options.wrapAround ? utils.modulo( i, len ) : i;
    var cell = this.cells[ cellIndex ];
    if ( cell ) {
      cellElems.push( cell.element );
    }
  }
  return cellElems;
};

// -------------------------- events -------------------------- //

Flickity.prototype.uiChange = function() {
  this.emit('uiChange');
};

Flickity.prototype.childUIPointerDown = function( event ) {
  this.emitEvent( 'childUIPointerDown', [ event ] );
};

// ----- resize ----- //

Flickity.prototype.onresize = function() {
  this.watchCSS();
  this.resize();
};

utils.debounceMethod( Flickity, 'onresize', 150 );

Flickity.prototype.resize = function() {
  if ( !this.isActive ) {
    return;
  }
  this.getSize();
  // wrap values
  if ( this.options.wrapAround ) {
    this.x = utils.modulo( this.x, this.slideableWidth );
  }
  this.positionCells();
  this._getWrapShiftCells();
  this.setGallerySize();
  this.positionSliderAtSelected();
};

var supportsConditionalCSS = Flickity.supportsConditionalCSS = ( function() {
  var supports;
  return function checkSupport() {
    if ( supports !== undefined ) {
      return supports;
    }
    if ( !getComputedStyle ) {
      supports = false;
      return;
    }
    // style body's :after and check that
    var style = document.createElement('style');
    var cssText = document.createTextNode('body:after { content: "foo"; display: none; }');
    style.appendChild( cssText );
    document.head.appendChild( style );
    var afterContent = getComputedStyle( document.body, ':after' ).content;
    // check if able to get :after content
    supports = afterContent.indexOf('foo') != -1;
    document.head.removeChild( style );
    return supports;
  };
})();

// watches the :after property, activates/deactivates
Flickity.prototype.watchCSS = function() {
  var watchOption = this.options.watchCSS;
  if ( !watchOption ) {
    return;
  }
  var supports = supportsConditionalCSS();
  if ( !supports ) {
    // activate if watch option is fallbackOn
    var method = watchOption == 'fallbackOn' ? 'activate' : 'deactivate';
    this[ method ]();
    return;
  }

  var afterContent = getComputedStyle( this.element, ':after' ).content;
  // activate if :after { content: 'flickity' }
  if ( afterContent.indexOf('flickity') != -1 ) {
    this.activate();
  } else {
    this.deactivate();
  }
};

// ----- keydown ----- //

// go previous/next if left/right keys pressed
Flickity.prototype.onkeydown = function( event ) {
  // only work if element is in focus
  if ( !this.options.accessibility ||
    ( document.activeElement && document.activeElement != this.element ) ) {
    return;
  }

  if ( event.keyCode == 37 ) {
    // go left
    var leftMethod = this.options.rightToLeft ? 'next' : 'previous';
    this.uiChange();
    this[ leftMethod ]();
  } else if ( event.keyCode == 39 ) {
    // go right
    var rightMethod = this.options.rightToLeft ? 'previous' : 'next';
    this.uiChange();
    this[ rightMethod ]();
  }
};

// -------------------------- destroy -------------------------- //

// deactivate all Flickity functionality, but keep stuff available
Flickity.prototype.deactivate = function() {
  if ( !this.isActive ) {
    return;
  }
  classie.remove( this.element, 'flickity-enabled' );
  classie.remove( this.element, 'flickity-rtl' );
  // destroy cells
  for ( var i=0, len = this.cells.length; i < len; i++ ) {
    var cell = this.cells[i];
    cell.destroy();
  }
  this._removeSelectedCellClass();
  this.element.removeChild( this.viewport );
  // move child elements back into element
  moveElements( this.slider.children, this.element );
  if ( this.options.accessibility ) {
    this.element.removeAttribute('tabIndex');
    eventie.unbind( this.element, 'keydown', this );
  }
  // set flags
  this.isActive = false;
  this.emit('deactivate');
};

Flickity.prototype.destroy = function() {
  this.deactivate();
  if ( this.isResizeBound ) {
    eventie.unbind( window, 'resize', this );
  }
  this.emit('destroy');
  if ( jQuery && this.$element ) {
    jQuery.removeData( this.element, 'flickity' );
  }
  delete this.element.flickityGUID;
  delete instances[ this.guid ];
};

// -------------------------- prototype -------------------------- //

utils.extend( Flickity.prototype, animatePrototype );

// -------------------------- extras -------------------------- //

// quick check for IE8
var isIE8 = 'attachEvent' in window;

Flickity.setUnselectable = function( elem ) {
  if ( !isIE8 ) {
    return;
  }
  // IE8 prevent child from changing focus http://stackoverflow.com/a/17525223/182183
  elem.setAttribute( 'unselectable', 'on' );
};

/**
 * get Flickity instance from element
 * @param {Element} elem
 * @returns {Flickity}
 */
Flickity.data = function( elem ) {
  elem = utils.getQueryElement( elem );
  var id = elem && elem.flickityGUID;
  return id && instances[ id ];
};

utils.htmlInit( Flickity, 'flickity' );

if ( jQuery && jQuery.bridget ) {
  jQuery.bridget( 'flickity', Flickity );
}

Flickity.Cell = Cell;

return Flickity;

}));

/*!
 * Unipointer v1.1.0
 * base class for doing one thing with pointer event
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true, strict: true */
/*global define: false, module: false, require: false */

( function( window, factory ) {
  
  // universal module definition

  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'unipointer/unipointer',[
      'eventEmitter/EventEmitter',
      'eventie/eventie'
    ], function( EventEmitter, eventie ) {
      return factory( window, EventEmitter, eventie );
    });
  } else if ( typeof exports == 'object' ) {
    // CommonJS
    module.exports = factory(
      window,
      require('wolfy87-eventemitter'),
      require('eventie')
    );
  } else {
    // browser global
    window.Unipointer = factory(
      window,
      window.EventEmitter,
      window.eventie
    );
  }

}( window, function factory( window, EventEmitter, eventie ) {



function noop() {}

function Unipointer() {}

// inherit EventEmitter
Unipointer.prototype = new EventEmitter();

Unipointer.prototype.bindStartEvent = function( elem ) {
  this._bindStartEvent( elem, true );
};

Unipointer.prototype.unbindStartEvent = function( elem ) {
  this._bindStartEvent( elem, false );
};

/**
 * works as unbinder, as you can ._bindStart( false ) to unbind
 * @param {Boolean} isBind - will unbind if falsey
 */
Unipointer.prototype._bindStartEvent = function( elem, isBind ) {
  // munge isBind, default to true
  isBind = isBind === undefined ? true : !!isBind;
  var bindMethod = isBind ? 'bind' : 'unbind';

  if ( window.navigator.pointerEnabled ) {
    // W3C Pointer Events, IE11. See https://coderwall.com/p/mfreca
    eventie[ bindMethod ]( elem, 'pointerdown', this );
  } else if ( window.navigator.msPointerEnabled ) {
    // IE10 Pointer Events
    eventie[ bindMethod ]( elem, 'MSPointerDown', this );
  } else {
    // listen for both, for devices like Chrome Pixel
    eventie[ bindMethod ]( elem, 'mousedown', this );
    eventie[ bindMethod ]( elem, 'touchstart', this );
  }
};

// trigger handler methods for events
Unipointer.prototype.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

// returns the touch that we're keeping track of
Unipointer.prototype.getTouch = function( touches ) {
  for ( var i=0, len = touches.length; i < len; i++ ) {
    var touch = touches[i];
    if ( touch.identifier == this.pointerIdentifier ) {
      return touch;
    }
  }
};

// ----- start event ----- //

Unipointer.prototype.onmousedown = function( event ) {
  // dismiss clicks from right or middle buttons
  var button = event.button;
  if ( button && ( button !== 0 && button !== 1 ) ) {
    return;
  }
  this._pointerDown( event, event );
};

Unipointer.prototype.ontouchstart = function( event ) {
  this._pointerDown( event, event.changedTouches[0] );
};

Unipointer.prototype.onMSPointerDown =
Unipointer.prototype.onpointerdown = function( event ) {
  this._pointerDown( event, event );
};

/**
 * pointer start
 * @param {Event} event
 * @param {Event or Touch} pointer
 */
Unipointer.prototype._pointerDown = function( event, pointer ) {
  // dismiss other pointers
  if ( this.isPointerDown ) {
    return;
  }

  this.isPointerDown = true;
  // save pointer identifier to match up touch events
  this.pointerIdentifier = pointer.pointerId !== undefined ?
    // pointerId for pointer events, touch.indentifier for touch events
    pointer.pointerId : pointer.identifier;

  this.pointerDown( event, pointer );
};

Unipointer.prototype.pointerDown = function( event, pointer ) {
  this._bindPostStartEvents( event );
  this.emitEvent( 'pointerDown', [ event, pointer ] );
};

// hash of events to be bound after start event
var postStartEvents = {
  mousedown: [ 'mousemove', 'mouseup' ],
  touchstart: [ 'touchmove', 'touchend', 'touchcancel' ],
  pointerdown: [ 'pointermove', 'pointerup', 'pointercancel' ],
  MSPointerDown: [ 'MSPointerMove', 'MSPointerUp', 'MSPointerCancel' ]
};

Unipointer.prototype._bindPostStartEvents = function( event ) {
  if ( !event ) {
    return;
  }
  // get proper events to match start event
  var events = postStartEvents[ event.type ];
  // IE8 needs to be bound to document
  var node = event.preventDefault ? window : document;
  // bind events to node
  for ( var i=0, len = events.length; i < len; i++ ) {
    var evnt = events[i];
    eventie.bind( node, evnt, this );
  }
  // save these arguments
  this._boundPointerEvents = {
    events: events,
    node: node
  };
};

Unipointer.prototype._unbindPostStartEvents = function() {
  var args = this._boundPointerEvents;
  // IE8 can trigger dragEnd twice, check for _boundEvents
  if ( !args || !args.events ) {
    return;
  }

  for ( var i=0, len = args.events.length; i < len; i++ ) {
    var event = args.events[i];
    eventie.unbind( args.node, event, this );
  }
  delete this._boundPointerEvents;
};

// ----- move event ----- //

Unipointer.prototype.onmousemove = function( event ) {
  this._pointerMove( event, event );
};

Unipointer.prototype.onMSPointerMove =
Unipointer.prototype.onpointermove = function( event ) {
  if ( event.pointerId == this.pointerIdentifier ) {
    this._pointerMove( event, event );
  }
};

Unipointer.prototype.ontouchmove = function( event ) {
  var touch = this.getTouch( event.changedTouches );
  if ( touch ) {
    this._pointerMove( event, touch );
  }
};

/**
 * pointer move
 * @param {Event} event
 * @param {Event or Touch} pointer
 * @private
 */
Unipointer.prototype._pointerMove = function( event, pointer ) {
  this.pointerMove( event, pointer );
};

// public
Unipointer.prototype.pointerMove = function( event, pointer ) {
  this.emitEvent( 'pointerMove', [ event, pointer ] );
};

// ----- end event ----- //


Unipointer.prototype.onmouseup = function( event ) {
  this._pointerUp( event, event );
};

Unipointer.prototype.onMSPointerUp =
Unipointer.prototype.onpointerup = function( event ) {
  if ( event.pointerId == this.pointerIdentifier ) {
    this._pointerUp( event, event );
  }
};

Unipointer.prototype.ontouchend = function( event ) {
  var touch = this.getTouch( event.changedTouches );
  if ( touch ) {
    this._pointerUp( event, touch );
  }
};

/**
 * pointer up
 * @param {Event} event
 * @param {Event or Touch} pointer
 * @private
 */
Unipointer.prototype._pointerUp = function( event, pointer ) {
  this._pointerDone();
  this.pointerUp( event, pointer );
};

// public
Unipointer.prototype.pointerUp = function( event, pointer ) {
  this.emitEvent( 'pointerUp', [ event, pointer ] );
};

// ----- pointer done ----- //

// triggered on pointer up & pointer cancel
Unipointer.prototype._pointerDone = function() {
  // reset properties
  this.isPointerDown = false;
  delete this.pointerIdentifier;
  // remove events
  this._unbindPostStartEvents();
  this.pointerDone();
};

Unipointer.prototype.pointerDone = noop;

// ----- pointer cancel ----- //

Unipointer.prototype.onMSPointerCancel =
Unipointer.prototype.onpointercancel = function( event ) {
  if ( event.pointerId == this.pointerIdentifier ) {
    this._pointerCancel( event, event );
  }
};

Unipointer.prototype.ontouchcancel = function( event ) {
  var touch = this.getTouch( event.changedTouches );
  if ( touch ) {
    this._pointerCancel( event, touch );
  }
};

/**
 * pointer cancel
 * @param {Event} event
 * @param {Event or Touch} pointer
 * @private
 */
Unipointer.prototype._pointerCancel = function( event, pointer ) {
  this._pointerDone();
  this.pointerCancel( event, pointer );
};

// public
Unipointer.prototype.pointerCancel = function( event, pointer ) {
  this.emitEvent( 'pointerCancel', [ event, pointer ] );
};

// -----  ----- //

// utility function for getting x/y cooridinates from event, because IE8
Unipointer.getPointerPoint = function( pointer ) {
  return {
    x: pointer.pageX !== undefined ? pointer.pageX : pointer.clientX,
    y: pointer.pageY !== undefined ? pointer.pageY : pointer.clientY
  };
};

// -----  ----- //

return Unipointer;

}));

/*!
 * Unidragger v1.1.3
 * Draggable base class
 * MIT license
 */

/*jshint browser: true, unused: true, undef: true, strict: true */

( function( window, factory ) {
  /*global define: false, module: false, require: false */
  
  // universal module definition

  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'unidragger/unidragger',[
      'eventie/eventie',
      'unipointer/unipointer'
    ], function( eventie, Unipointer ) {
      return factory( window, eventie, Unipointer );
    });
  } else if ( typeof exports == 'object' ) {
    // CommonJS
    module.exports = factory(
      window,
      require('eventie'),
      require('unipointer')
    );
  } else {
    // browser global
    window.Unidragger = factory(
      window,
      window.eventie,
      window.Unipointer
    );
  }

}( window, function factory( window, eventie, Unipointer ) {



// -----  ----- //

function noop() {}

// handle IE8 prevent default
function preventDefaultEvent( event ) {
  if ( event.preventDefault ) {
    event.preventDefault();
  } else {
    event.returnValue = false;
  }
}

// -------------------------- Unidragger -------------------------- //

function Unidragger() {}

// inherit Unipointer & EventEmitter
Unidragger.prototype = new Unipointer();

// ----- bind start ----- //

Unidragger.prototype.bindHandles = function() {
  this._bindHandles( true );
};

Unidragger.prototype.unbindHandles = function() {
  this._bindHandles( false );
};

var navigator = window.navigator;
/**
 * works as unbinder, as you can .bindHandles( false ) to unbind
 * @param {Boolean} isBind - will unbind if falsey
 */
Unidragger.prototype._bindHandles = function( isBind ) {
  // munge isBind, default to true
  isBind = isBind === undefined ? true : !!isBind;
  // extra bind logic
  var binderExtra;
  if ( navigator.pointerEnabled ) {
    binderExtra = function( handle ) {
      // disable scrolling on the element
      handle.style.touchAction = isBind ? 'none' : '';
    };
  } else if ( navigator.msPointerEnabled ) {
    binderExtra = function( handle ) {
      // disable scrolling on the element
      handle.style.msTouchAction = isBind ? 'none' : '';
    };
  } else {
    binderExtra = function() {
      // TODO re-enable img.ondragstart when unbinding
      if ( isBind ) {
        disableImgOndragstart( handle );
      }
    };
  }
  // bind each handle
  var bindMethod = isBind ? 'bind' : 'unbind';
  for ( var i=0, len = this.handles.length; i < len; i++ ) {
    var handle = this.handles[i];
    this._bindStartEvent( handle, isBind );
    binderExtra( handle );
    eventie[ bindMethod ]( handle, 'click', this );
  }
};

// remove default dragging interaction on all images in IE8
// IE8 does its own drag thing on images, which messes stuff up

function noDragStart() {
  return false;
}

// TODO replace this with a IE8 test
var isIE8 = 'attachEvent' in document.documentElement;

// IE8 only
var disableImgOndragstart = !isIE8 ? noop : function( handle ) {

  if ( handle.nodeName == 'IMG' ) {
    handle.ondragstart = noDragStart;
  }

  var images = handle.querySelectorAll('img');
  for ( var i=0, len = images.length; i < len; i++ ) {
    var img = images[i];
    img.ondragstart = noDragStart;
  }
};

// ----- start event ----- //

/**
 * pointer start
 * @param {Event} event
 * @param {Event or Touch} pointer
 */
Unidragger.prototype.pointerDown = function( event, pointer ) {
  this._dragPointerDown( event, pointer );
  // kludge to blur focused inputs in dragger
  var focused = document.activeElement;
  if ( focused && focused.blur ) {
    focused.blur();
  }
  // bind move and end events
  this._bindPostStartEvents( event );
  this.emitEvent( 'pointerDown', [ event, pointer ] );
};

// base pointer down logic
Unidragger.prototype._dragPointerDown = function( event, pointer ) {
  // track to see when dragging starts
  this.pointerDownPoint = Unipointer.getPointerPoint( pointer );

  // prevent default, unless touchstart or <select>
  var isTouchstart = event.type == 'touchstart';
  var targetNodeName = event.target.nodeName;
  if ( !isTouchstart && targetNodeName != 'SELECT' ) {
    preventDefaultEvent( event );
  }
};

// ----- move event ----- //

/**
 * drag move
 * @param {Event} event
 * @param {Event or Touch} pointer
 */
Unidragger.prototype.pointerMove = function( event, pointer ) {
  var moveVector = this._dragPointerMove( event, pointer );
  this.emitEvent( 'pointerMove', [ event, pointer, moveVector ] );
  this._dragMove( event, pointer, moveVector );
};

// base pointer move logic
Unidragger.prototype._dragPointerMove = function( event, pointer ) {
  var movePoint = Unipointer.getPointerPoint( pointer );
  var moveVector = {
    x: movePoint.x - this.pointerDownPoint.x,
    y: movePoint.y - this.pointerDownPoint.y
  };
  // start drag if pointer has moved far enough to start drag
  if ( !this.isDragging && this.hasDragStarted( moveVector ) ) {
    this._dragStart( event, pointer );
  }
  return moveVector;
};

// condition if pointer has moved far enough to start drag
Unidragger.prototype.hasDragStarted = function( moveVector ) {
  return Math.abs( moveVector.x ) > 3 || Math.abs( moveVector.y ) > 3;
};


// ----- end event ----- //

/**
 * pointer up
 * @param {Event} event
 * @param {Event or Touch} pointer
 */
Unidragger.prototype.pointerUp = function( event, pointer ) {
  this.emitEvent( 'pointerUp', [ event, pointer ] );
  this._dragPointerUp( event, pointer );
};

Unidragger.prototype._dragPointerUp = function( event, pointer ) {
  if ( this.isDragging ) {
    this._dragEnd( event, pointer );
  } else {
    // pointer didn't move enough for drag to start
    this._staticClick( event, pointer );
  }
};

// -------------------------- drag -------------------------- //

// dragStart
Unidragger.prototype._dragStart = function( event, pointer ) {
  this.isDragging = true;
  this.dragStartPoint = Unidragger.getPointerPoint( pointer );
  // prevent clicks
  this.isPreventingClicks = true;

  this.dragStart( event, pointer );
};

Unidragger.prototype.dragStart = function( event, pointer ) {
  this.emitEvent( 'dragStart', [ event, pointer ] );
};

// dragMove
Unidragger.prototype._dragMove = function( event, pointer, moveVector ) {
  // do not drag if not dragging yet
  if ( !this.isDragging ) {
    return;
  }

  this.dragMove( event, pointer, moveVector );
};

Unidragger.prototype.dragMove = function( event, pointer, moveVector ) {
  preventDefaultEvent( event );
  this.emitEvent( 'dragMove', [ event, pointer, moveVector ] );
};

// dragEnd
Unidragger.prototype._dragEnd = function( event, pointer ) {
  // set flags
  this.isDragging = false;
  // re-enable clicking async
  var _this = this;
  setTimeout( function() {
    delete _this.isPreventingClicks;
  });

  this.dragEnd( event, pointer );
};

Unidragger.prototype.dragEnd = function( event, pointer ) {
  this.emitEvent( 'dragEnd', [ event, pointer ] );
};

// ----- onclick ----- //

// handle all clicks and prevent clicks when dragging
Unidragger.prototype.onclick = function( event ) {
  if ( this.isPreventingClicks ) {
    preventDefaultEvent( event );
  }
};

// ----- staticClick ----- //

// triggered after pointer down & up with no/tiny movement
Unidragger.prototype._staticClick = function( event, pointer ) {
  // allow click in <input>s and <textarea>s
  var nodeName = event.target.nodeName;
  if ( nodeName == 'INPUT' || nodeName == 'TEXTAREA' ) {
    event.target.focus();
  }
  this.staticClick( event, pointer );
};

Unidragger.prototype.staticClick = function( event, pointer ) {
  this.emitEvent( 'staticClick', [ event, pointer ] );
};

// -----  ----- //

Unidragger.getPointerPoint = function( pointer ) {
  return {
    x: pointer.pageX !== undefined ? pointer.pageX : pointer.clientX,
    y: pointer.pageY !== undefined ? pointer.pageY : pointer.clientY
  };
};

// -----  ----- //

Unidragger.getPointerPoint = Unipointer.getPointerPoint;

return Unidragger;

}));

( function( window, factory ) {
  
  // universal module definition

  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'flickity/js/drag',[
      'classie/classie',
      'eventie/eventie',
      './flickity',
      'unidragger/unidragger',
      'fizzy-ui-utils/utils'
    ], function( classie, eventie, Flickity, Unidragger, utils ) {
      return factory( window, classie, eventie, Flickity, Unidragger, utils );
    });
  } else if ( typeof exports == 'object' ) {
    // CommonJS
    module.exports = factory(
      window,
      require('desandro-classie'),
      require('eventie'),
      require('./flickity'),
      require('unidragger'),
      require('fizzy-ui-utils')
    );
  } else {
    // browser global
    window.Flickity = factory(
      window,
      window.classie,
      window.eventie,
      window.Flickity,
      window.Unidragger,
      window.fizzyUIUtils
    );
  }

}( window, function factory( window, classie, eventie, Flickity, Unidragger, utils ) {



// handle IE8 prevent default
function preventDefaultEvent( event ) {
  if ( event.preventDefault ) {
    event.preventDefault();
  } else {
    event.returnValue = false;
  }
}

// ----- defaults ----- //

utils.extend( Flickity.defaults, {
  draggable: true,
  touchVerticalScroll: true
});

// ----- create ----- //

Flickity.createMethods.push('_createDrag');

// -------------------------- drag prototype -------------------------- //

utils.extend( Flickity.prototype, Unidragger.prototype );

// --------------------------  -------------------------- //

Flickity.prototype._createDrag = function() {
  this.on( 'activate', this.bindDrag );
  this.on( 'uiChange', this._uiChangeDrag );
  this.on( 'childUIPointerDown', this._childUIPointerDownDrag );
  this.on( 'deactivate', this.unbindDrag );
};

Flickity.prototype.bindDrag = function() {
  if ( !this.options.draggable || this.isDragBound ) {
    return;
  }
  classie.add( this.element, 'is-draggable' );
  this.handles = [ this.viewport ];
  this.bindHandles();
  this.isDragBound = true;
};

Flickity.prototype.unbindDrag = function() {
  if ( !this.isDragBound ) {
    return;
  }
  classie.remove( this.element, 'is-draggable' );
  this.unbindHandles();
  delete this.isDragBound;
};

Flickity.prototype._uiChangeDrag = function() {
  delete this.isFreeScrolling;
};

Flickity.prototype._childUIPointerDownDrag = function( event ) {
  preventDefaultEvent( event );
  this.pointerDownFocus( event );
};

// -------------------------- pointer events -------------------------- //

Flickity.prototype.pointerDown = function( event, pointer ) {
  this._dragPointerDown( event, pointer );

  // kludge to blur focused inputs in dragger
  var focused = document.activeElement;
  if ( focused && focused.blur && focused != this.element &&
    // do not blur body for IE9 & 10, #117
    focused != document.body ) {
    focused.blur();
  }
  this.pointerDownFocus( event );
  // stop if it was moving
  this.dragX = this.x;
  classie.add( this.viewport, 'is-pointer-down' );
  // bind move and end events
  this._bindPostStartEvents( event );
  this.dispatchEvent( 'pointerDown', event, [ pointer ] );
};

var touchStartEvents = {
  touchstart: true,
  MSPointerDown: true
};

var focusNodes = {
  INPUT: true,
  SELECT: true
};

Flickity.prototype.pointerDownFocus = function( event ) {
  // focus element, if not touch, and its not an input or select
  if ( this.options.accessibility && !touchStartEvents[ event.type ] &&
      !focusNodes[ event.target.nodeName ] ) {
    this.element.focus();
  }
};

// ----- move ----- //

Flickity.prototype.pointerMove = function( event, pointer ) {
  var moveVector = this._dragPointerMove( event, pointer );
  this.touchVerticalScrollMove( event, pointer, moveVector );
  this._dragMove( event, pointer, moveVector );
  this.dispatchEvent( 'pointerMove', event, [ pointer, moveVector ] );
};

Flickity.prototype.hasDragStarted = function( moveVector ) {
  return !this.isTouchScrolling && Math.abs( moveVector.x ) > 3;
};

// ----- up ----- //

Flickity.prototype.pointerUp = function( event, pointer ) {
  delete this.isTouchScrolling;
  classie.remove( this.viewport, 'is-pointer-down' );
  this.dispatchEvent( 'pointerUp', event, [ pointer ] );
  this._dragPointerUp( event, pointer );
};

// -------------------------- vertical scroll -------------------------- //

var touchScrollEvents = {
  // move events
  // mousemove: true,
  touchmove: true,
  MSPointerMove: true
};

// position of pointer, relative to window
function getPointerWindowY( pointer ) {
  var pointerPoint = Unidragger.getPointerPoint( pointer );
  return pointerPoint.y - window.pageYOffset;
}

Flickity.prototype.touchVerticalScrollMove = function( event, pointer, moveVector ) {
  // do not scroll if already dragging, if disabled
  var touchVerticalScroll = this.options.touchVerticalScroll;
  // if touchVerticalScroll is 'withDrag', allow scrolling and dragging
  var canNotScroll = touchVerticalScroll == 'withDrag' ? !touchVerticalScroll :
    this.isDragging || !touchVerticalScroll;
  if ( canNotScroll || !touchScrollEvents[ event.type ] ) {
    return;
  }
  // don't start vertical scrolling until pointer has moved 10 pixels in a direction
  if ( !this.isTouchScrolling && Math.abs( moveVector.y ) > 10 ) {
    // start touch vertical scrolling
    // scroll & pointerY when started
    this.startScrollY = window.pageYOffset;
    this.pointerWindowStartY = getPointerWindowY( pointer );
    // start scroll animation
    this.isTouchScrolling = true;
  }
};

// -------------------------- dragging -------------------------- //

Flickity.prototype.dragStart = function( event, pointer ) {
  this.dragStartPosition = this.x;
  this.startAnimation();
  this.dispatchEvent( 'dragStart', event, [ pointer ] );
};

Flickity.prototype.dragMove = function( event, pointer, moveVector ) {
  preventDefaultEvent( event );

  this.previousDragX = this.dragX;
  // reverse if right-to-left
  var direction = this.options.rightToLeft ? -1 : 1;
  var dragX = this.dragStartPosition + moveVector.x * direction;

  if ( !this.options.wrapAround && this.cells.length ) {
    // slow drag
    var originBound = Math.max( -this.cells[0].target, this.dragStartPosition );
    dragX = dragX > originBound ? ( dragX + originBound ) * 0.5 : dragX;
    var endBound = Math.min( -this.getLastCell().target, this.dragStartPosition );
    dragX = dragX < endBound ? ( dragX + endBound ) * 0.5 : dragX;
  }

  this.dragX = dragX;

  this.dragMoveTime = new Date();
  this.dispatchEvent( 'dragMove', event, [ pointer, moveVector ] );
};

Flickity.prototype.dragEnd = function( event, pointer ) {
  if ( this.options.freeScroll ) {
    this.isFreeScrolling = true;
  }
  // set selectedIndex based on where flick will end up
  var index = this.dragEndRestingSelect();

  if ( this.options.freeScroll && !this.options.wrapAround ) {
    // if free-scroll & not wrap around
    // do not free-scroll if going outside of bounding cells
    // so bounding cells can attract slider, and keep it in bounds
    var restingX = this.getRestingDragPosition();
    this.isFreeScrolling = -restingX > this.cells[0].target &&
      -restingX < this.getLastCell().target;
  } else if ( !this.options.freeScroll && index == this.selectedIndex ) {
    // boost selection if selected index has not changed
    index += this.dragEndBoostSelect();
  }
  delete this.previousDragX;
  // apply selection
  // TODO refactor this, selecting here feels weird
  this.select( index );
  this.dispatchEvent( 'dragEnd', event, [ pointer ] );
};

Flickity.prototype.dragEndRestingSelect = function() {
  var restingX = this.getRestingDragPosition();
  // how far away from selected cell
  var distance = Math.abs( this.getCellDistance( -restingX, this.selectedIndex ) );
  // get closet resting going up and going down
  var positiveResting = this._getClosestResting( restingX, distance, 1 );
  var negativeResting = this._getClosestResting( restingX, distance, -1 );
  // use closer resting for wrap-around
  var index = positiveResting.distance < negativeResting.distance ?
    positiveResting.index : negativeResting.index;
  return index;
};

Flickity.prototype.getRestingDragPosition = function() {
  var dragVelocity = this.dragX - this.x;
  return this.x + dragVelocity / ( 1 - this.getFrictionFactor() );
};

/**
 * given resting X and distance to selected cell
 * get the distance and index of the closest cell
 * @param {Number} restingX - estimated post-flick resting position
 * @param {Number} distance - distance to selected cell
 * @param {Integer} increment - +1 or -1, going up or down
 * @returns {Object} - { distance: {Number}, index: {Integer} }
 */
Flickity.prototype._getClosestResting = function( restingX, distance, increment ) {
  var index = this.selectedIndex;
  var minDistance = Infinity;
  var condition = this.options.contain && !this.options.wrapAround ?
    // if contain, keep going if distance is equal to minDistance
    function( d, md ) { return d <= md; } : function( d, md ) { return d < md; };
  while ( condition( distance, minDistance ) ) {
    // measure distance to next cell
    index += increment;
    minDistance = distance;
    distance = this.getCellDistance( -restingX, index );
    if ( distance === null ) {
      break;
    }
    distance = Math.abs( distance );
  }
  return {
    distance: minDistance,
    // selected was previous index
    index: index - increment
  };
};

/**
 * measure distance between x and a cell target
 * @param {Number} x
 * @param {Integer} index - cell index
 */
Flickity.prototype.getCellDistance = function( x, index ) {
  var len = this.cells.length;
  // wrap around if at least 2 cells
  var isWrapAround = this.options.wrapAround && len > 1;
  var cellIndex = isWrapAround ? utils.modulo( index, len ) : index;
  var cell = this.cells[ cellIndex ];
  if ( !cell ) {
    return null;
  }
  // add distance for wrap-around cells
  var wrap = isWrapAround ? this.slideableWidth * Math.floor( index / len ) : 0;
  return x - ( cell.target + wrap );
};

Flickity.prototype.dragEndBoostSelect = function() {
  // do not boost if no previousDragX or dragMoveTime
  if ( this.previousDragX === undefined || !this.dragMoveTime ||
    // or if drag was held for 100 ms
    new Date() - this.dragMoveTime > 100 ) {
    return 0;
  }

  var distance = this.getCellDistance( -this.dragX, this.selectedIndex );
  var delta = this.previousDragX - this.dragX;
  if ( distance > 0 && delta > 0 ) {
    // boost to next if moving towards the right, and positive velocity
    return 1;
  } else if ( distance < 0 && delta < 0 ) {
    // boost to previous if moving towards the left, and negative velocity
    return -1;
  }
  return 0;
};

// ----- staticClick ----- //

Flickity.prototype.staticClick = function( event, pointer ) {
  // get clickedCell, if cell was clicked
  var clickedCell = this.getParentCell( event.target );
  var cellElem = clickedCell && clickedCell.element;
  var cellIndex = clickedCell && utils.indexOf( this.cells, clickedCell );
  this.dispatchEvent( 'staticClick', event, [ pointer, cellElem, cellIndex ] );
};

// -----  ----- //

return Flickity;

}));

/*!
 * Tap listener v1.1.1
 * listens to taps
 * MIT license
 */

/*jshint browser: true, unused: true, undef: true, strict: true */

( function( window, factory ) {
  /*global define: false, module: false, require: false */
  
  // universal module definition

  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'tap-listener/tap-listener',[
      'unipointer/unipointer'
    ], function( Unipointer ) {
      return factory( window, Unipointer );
    });
  } else if ( typeof exports == 'object' ) {
    // CommonJS
    module.exports = factory(
      window,
      require('unipointer')
    );
  } else {
    // browser global
    window.TapListener = factory(
      window,
      window.Unipointer
    );
  }

}( window, function factory( window, Unipointer ) {



// handle IE8 prevent default
function preventDefaultEvent( event ) {
  if ( event.preventDefault ) {
    event.preventDefault();
  } else {
    event.returnValue = false;
  }
}

// --------------------------  TapListener -------------------------- //

function TapListener( elem ) {
  this.bindTap( elem );
}

// inherit Unipointer & EventEmitter
TapListener.prototype = new Unipointer();

/**
 * bind tap event to element
 * @param {Element} elem
 */
TapListener.prototype.bindTap = function( elem ) {
  if ( !elem ) {
    return;
  }
  this.unbindTap();
  this.tapElement = elem;
  this._bindStartEvent( elem, true );
};

TapListener.prototype.unbindTap = function() {
  if ( !this.tapElement ) {
    return;
  }
  this._bindStartEvent( this.tapElement, true );
  delete this.tapElement;
};

var pointerDown = TapListener.prototype.pointerDown;

TapListener.prototype.pointerDown = function( event ) {
  // prevent default event for touch, disables tap then click
  if ( event.type == 'touchstart' ) {
    preventDefaultEvent( event );
  }
  pointerDown.apply( this, arguments );
};

var isPageOffset = window.pageYOffset !== undefined;
/**
 * pointer up
 * @param {Event} event
 * @param {Event or Touch} pointer
 */
TapListener.prototype.pointerUp = function( event, pointer ) {
  var pointerPoint = Unipointer.getPointerPoint( pointer );
  var boundingRect = this.tapElement.getBoundingClientRect();
  // standard or IE8 scroll positions
  var scrollX = isPageOffset ? window.pageXOffset : document.body.scrollLeft;
  var scrollY = isPageOffset ? window.pageYOffset : document.body.scrollTop;
  // calculate if pointer is inside tapElement
  var isInside = pointerPoint.x >= boundingRect.left + scrollX &&
    pointerPoint.x <= boundingRect.right + scrollX &&
    pointerPoint.y >= boundingRect.top + scrollY &&
    pointerPoint.y <= boundingRect.bottom + scrollY;
  // trigger callback if pointer is inside element
  if ( isInside ) {
    this.emitEvent( 'tap', [ event, pointer ] );
  }
};

TapListener.prototype.destroy = function() {
  this.pointerDone();
  this.unbindTap();
};

// -----  ----- //

return TapListener;

}));

// -------------------------- prev/next button -------------------------- //

( function( window, factory ) {
  
  // universal module definition

  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'flickity/js/prev-next-button',[
      'eventie/eventie',
      './flickity',
      'tap-listener/tap-listener',
      'fizzy-ui-utils/utils'
    ], function( eventie, Flickity, TapListener, utils ) {
      return factory( window, eventie, Flickity, TapListener, utils );
    });
  } else if ( typeof exports == 'object' ) {
    // CommonJS
    module.exports = factory(
      window,
      require('eventie'),
      require('./flickity'),
      require('tap-listener'),
      require('fizzy-ui-utils')
    );
  } else {
    // browser global
    factory(
      window,
      window.eventie,
      window.Flickity,
      window.TapListener,
      window.fizzyUIUtils
    );
  }

}( window, function factory( window, eventie, Flickity, TapListener, utils ) {



// ----- inline SVG support ----- //

var svgURI = 'http://www.w3.org/2000/svg';

// only check on demand, not on script load
var supportsInlineSVG = ( function() {
  var supports;
  function checkSupport() {
    if ( supports !== undefined ) {
      return supports;
    }
    var div = document.createElement('div');
    div.innerHTML = '<svg/>';
    supports = ( div.firstChild && div.firstChild.namespaceURI ) == svgURI;
    return supports;
  }
  return checkSupport;
})();

// -------------------------- PrevNextButton -------------------------- //

function PrevNextButton( direction, parent ) {
  this.direction = direction;
  this.parent = parent;
  this._create();
}

PrevNextButton.prototype = new TapListener();

PrevNextButton.prototype._create = function() {
  // properties
  this.isEnabled = true;
  this.isPrevious = this.direction == -1;
  var leftDirection = this.parent.options.rightToLeft ? 1 : -1;
  this.isLeft = this.direction == leftDirection;

  var element = this.element = document.createElement('button');
  element.className = 'flickity-prev-next-button';
  element.className += this.isPrevious ? ' previous' : ' next';
  // prevent button from submitting form http://stackoverflow.com/a/10836076/182183
  element.setAttribute( 'type', 'button' );
  Flickity.setUnselectable( element );
  // create arrow
  if ( supportsInlineSVG() ) {
    var svg = this.createSVG();
    element.appendChild( svg );
  } else {
    // SVG not supported, set button text
    this.setArrowText();
    element.className += ' no-svg';
  }
  // update on select
  var _this = this;
  this.onCellSelect = function() {
    _this.update();
  };
  this.parent.on( 'cellSelect', this.onCellSelect );
  // tap
  this.on( 'tap', this.onTap );
  // pointerDown
  this.on( 'pointerDown', function onPointerDown( button, event ) {
    _this.parent.childUIPointerDown( event );
  });
};

PrevNextButton.prototype.activate = function() {
  this.update();
  this.bindTap( this.element );
  // click events from keyboard
  eventie.bind( this.element, 'click', this );
  // add to DOM
  this.parent.element.appendChild( this.element );
};

PrevNextButton.prototype.deactivate = function() {
  // remove from DOM
  this.parent.element.removeChild( this.element );
  // do regular TapListener destroy
  TapListener.prototype.destroy.call( this );
  // click events from keyboard
  eventie.unbind( this.element, 'click', this );
};

PrevNextButton.prototype.createSVG = function() {
  var svg = document.createElementNS( svgURI, 'svg');
  svg.setAttribute( 'viewBox', '0 0 100 100' );
  var path = document.createElementNS( svgURI, 'path');
  var pathMovements = getArrowMovements( this.parent.options.arrowShape );
  path.setAttribute( 'd', pathMovements );
  path.setAttribute( 'class', 'arrow' );
  // rotate arrow
  if ( !this.isLeft ) {
    path.setAttribute( 'transform', 'translate(100, 100) rotate(180) ' );
  }
  svg.appendChild( path );
  return svg;
};

// get SVG path movmement
function getArrowMovements( shape ) {
  // use shape as movement if string
  if ( typeof shape == 'string' ) {
    return shape;
  }
  // create movement string
  return 'M ' + shape.x0 + ',50' +
    ' L ' + shape.x1 + ',' + ( shape.y1 + 50 ) +
    ' L ' + shape.x2 + ',' + ( shape.y2 + 50 ) +
    ' L ' + shape.x3 + ',50 ' +
    ' L ' + shape.x2 + ',' + ( 50 - shape.y2 ) +
    ' L ' + shape.x1 + ',' + ( 50 - shape.y1 ) +
    ' Z';
}

PrevNextButton.prototype.setArrowText = function() {
  var parentOptions = this.parent.options;
  var arrowText = this.isLeft ? parentOptions.leftArrowText : parentOptions.rightArrowText;
  utils.setText( this.element, arrowText );
};

PrevNextButton.prototype.onTap = function() {
  if ( !this.isEnabled ) {
    return;
  }
  this.parent.uiChange();
  var method = this.isPrevious ? 'previous' : 'next';
  this.parent[ method ]();
};

PrevNextButton.prototype.handleEvent = utils.handleEvent;

PrevNextButton.prototype.onclick = function() {
  // only allow clicks from keyboard
  var focused = document.activeElement;
  if ( focused && focused == this.element ) {
    this.onTap();
  }
};

// -----  ----- //

PrevNextButton.prototype.enable = function() {
  if ( this.isEnabled ) {
    return;
  }
  this.element.disabled = false;
  this.isEnabled = true;
};

PrevNextButton.prototype.disable = function() {
  if ( !this.isEnabled ) {
    return;
  }
  this.element.disabled = true;
  this.isEnabled = false;
};

PrevNextButton.prototype.update = function() {
  // index of first or last cell, if previous or next
  var cells = this.parent.cells;
  // enable is wrapAround and at least 2 cells
  if ( this.parent.options.wrapAround && cells.length > 1 ) {
    this.enable();
    return;
  }
  var lastIndex = cells.length ? cells.length - 1 : 0;
  var boundIndex = this.isPrevious ? 0 : lastIndex;
  var method = this.parent.selectedIndex == boundIndex ? 'disable' : 'enable';
  this[ method ]();
};

PrevNextButton.prototype.destroy = function() {
  this.deactivate();
};

// -------------------------- Flickity prototype -------------------------- //

utils.extend( Flickity.defaults, {
  prevNextButtons: true,
  leftArrowText: '‹',
  rightArrowText: '›',
  arrowShape: {
    x0: 10,
    x1: 60, y1: 50,
    x2: 70, y2: 40,
    x3: 30
  }
});

Flickity.createMethods.push('_createPrevNextButtons');

Flickity.prototype._createPrevNextButtons = function() {
  if ( !this.options.prevNextButtons ) {
    return;
  }

  this.prevButton = new PrevNextButton( -1, this );
  this.nextButton = new PrevNextButton( 1, this );

  this.on( 'activate', this.activatePrevNextButtons );
};

Flickity.prototype.activatePrevNextButtons = function() {
  this.prevButton.activate();
  this.nextButton.activate();
  this.on( 'deactivate', this.deactivatePrevNextButtons );
};

Flickity.prototype.deactivatePrevNextButtons = function() {
  this.prevButton.deactivate();
  this.nextButton.deactivate();
  this.off( 'deactivate', this.deactivatePrevNextButtons );
};

// --------------------------  -------------------------- //

Flickity.PrevNextButton = PrevNextButton;

return Flickity;

}));

( function( window, factory ) {
  
  // universal module definition

  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'flickity/js/page-dots',[
      'eventie/eventie',
      './flickity',
      'tap-listener/tap-listener',
      'fizzy-ui-utils/utils'
    ], function( eventie, Flickity, TapListener, utils ) {
      return factory( window, eventie, Flickity, TapListener, utils );
    });
  } else if ( typeof exports == 'object' ) {
    // CommonJS
    module.exports = factory(
      window,
      require('eventie'),
      require('./flickity'),
      require('tap-listener'),
      require('fizzy-ui-utils')
    );
  } else {
    // browser global
    factory(
      window,
      window.eventie,
      window.Flickity,
      window.TapListener,
      window.fizzyUIUtils
    );
  }

}( window, function factory( window, eventie, Flickity, TapListener, utils ) {

// -------------------------- PageDots -------------------------- //



function PageDots( parent ) {
  this.parent = parent;
  this._create();
}

PageDots.prototype = new TapListener();

PageDots.prototype._create = function() {
  // create holder element
  this.holder = document.createElement('ol');
  this.holder.className = 'flickity-page-dots';
  Flickity.setUnselectable( this.holder );
  // create dots, array of elements
  this.dots = [];
  // update on select
  var _this = this;
  this.onCellSelect = function() {
    _this.updateSelected();
  };
  this.parent.on( 'cellSelect', this.onCellSelect );
  // tap
  this.on( 'tap', this.onTap );
  // pointerDown
  this.on( 'pointerDown', function onPointerDown( button, event ) {
    _this.parent.childUIPointerDown( event );
  });
};

PageDots.prototype.activate = function() {
  this.setDots();
  this.updateSelected();
  this.bindTap( this.holder );
  // add to DOM
  this.parent.element.appendChild( this.holder );
};

PageDots.prototype.deactivate = function() {
  // remove from DOM
  this.parent.element.removeChild( this.holder );
  TapListener.prototype.destroy.call( this );
};

PageDots.prototype.setDots = function() {
  // get difference between number of cells and number of dots
  var delta = this.parent.cells.length - this.dots.length;
  if ( delta > 0 ) {
    this.addDots( delta );
  } else if ( delta < 0 ) {
    this.removeDots( -delta );
  }
};

PageDots.prototype.addDots = function( count ) {
  var fragment = document.createDocumentFragment();
  var newDots = [];
  while ( count ) {
    var dot = document.createElement('li');
    dot.className = 'dot';
    fragment.appendChild( dot );
    newDots.push( dot );
    count--;
  }
  this.holder.appendChild( fragment );
  this.dots = this.dots.concat( newDots );
};

PageDots.prototype.removeDots = function( count ) {
  // remove from this.dots collection
  var removeDots = this.dots.splice( this.dots.length - count, count );
  // remove from DOM
  for ( var i=0, len = removeDots.length; i < len; i++ ) {
    var dot = removeDots[i];
    this.holder.removeChild( dot );
  }
};

PageDots.prototype.updateSelected = function() {
  // remove selected class on previous
  if ( this.selectedDot ) {
    this.selectedDot.className = 'dot';
  }
  // don't proceed if no dots
  if ( !this.dots.length ) {
    return;
  }
  this.selectedDot = this.dots[ this.parent.selectedIndex ];
  this.selectedDot.className = 'dot is-selected';
};

PageDots.prototype.onTap = function( event ) {
  var target = event.target;
  // only care about dot clicks
  if ( target.nodeName != 'LI' ) {
    return;
  }

  this.parent.uiChange();
  var index = utils.indexOf( this.dots, target );
  this.parent.select( index );
};

PageDots.prototype.destroy = function() {
  this.deactivate();
};

Flickity.PageDots = PageDots;

// -------------------------- Flickity -------------------------- //

utils.extend( Flickity.defaults, {
  pageDots: true
});

Flickity.createMethods.push('_createPageDots');

Flickity.prototype._createPageDots = function() {
  if ( !this.options.pageDots ) {
    return;
  }
  this.pageDots = new PageDots( this );
  this.on( 'activate', this.activatePageDots );
  this.on( 'cellAddedRemoved', this.onCellAddedRemovedPageDots );
  this.on( 'deactivate', this.deactivatePageDots );
};

Flickity.prototype.activatePageDots = function() {
  this.pageDots.activate();
};

Flickity.prototype.onCellAddedRemovedPageDots = function() {
  this.pageDots.setDots();
};

Flickity.prototype.deactivatePageDots = function() {
  this.pageDots.deactivate();
};

// -----  ----- //

Flickity.PageDots = PageDots;

return Flickity;

}));

( function( window, factory ) {
  
  // universal module definition

  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'flickity/js/player',[
      'eventEmitter/EventEmitter',
      'eventie/eventie',
      './flickity'
    ], function( EventEmitter, eventie, Flickity ) {
      return factory( EventEmitter, eventie, Flickity );
    });
  } else if ( typeof exports == 'object' ) {
    // CommonJS
    module.exports = factory(
      require('wolfy87-eventemitter'),
      require('eventie'),
      require('./flickity')
    );
  } else {
    // browser global
    factory(
      window.EventEmitter,
      window.eventie,
      window.Flickity
    );
  }

}( window, function factory( EventEmitter, eventie, Flickity ) {



// -------------------------- Page Visibility -------------------------- //
// https://developer.mozilla.org/en-US/docs/Web/Guide/User_experience/Using_the_Page_Visibility_API

var hiddenProperty, visibilityEvent;
if ( 'hidden' in document ) {
  hiddenProperty = 'hidden';
  visibilityEvent = 'visibilitychange';
} else if ( 'webkitHidden' in document ) {
  hiddenProperty = 'webkitHidden';
  visibilityEvent = 'webkitvisibilitychange';
}

// -------------------------- Player -------------------------- //

function Player( parent ) {
  this.isPlaying = false;
  this.parent = parent;
  // visibility change event handler
  if ( visibilityEvent ) {
    var _this = this;
    this.onVisibilityChange = function() {
      _this.visibilityChange();
    };
  }
}

Player.prototype = new EventEmitter();

// start play
Player.prototype.play = function() {
  this.isPlaying = true;
  // playing kills pauses
  delete this.isPaused;
  // listen to visibility change
  if ( visibilityEvent ) {
    document.addEventListener( visibilityEvent, this.onVisibilityChange, false );
  }
  // start ticking
  this.tick();
};

Player.prototype.tick = function() {
  // do not tick if paused or not playing
  if ( !this.isPlaying || this.isPaused ) {
    return;
  }
  // keep track of when .tick()
  this.tickTime = new Date();
  var time = this.parent.options.autoPlay;
  // default to 3 seconds
  time = typeof time == 'number' ? time : 3000;
  var _this = this;
  this.timeout = setTimeout( function() {
    _this.parent.next( true );
    _this.tick();
  }, time );
};

Player.prototype.stop = function() {
  this.isPlaying = false;
  // stopping kills pauses
  delete this.isPaused;
  this.clear();
  // remove visibility change event
  if ( visibilityEvent ) {
    document.removeEventListener( visibilityEvent, this.onVisibilityChange, false );
  }
};

Player.prototype.clear = function() {
  clearTimeout( this.timeout );
};

Player.prototype.pause = function() {
  if ( this.isPlaying ) {
    this.isPaused = true;
    this.clear();
  }
};

Player.prototype.unpause = function() {
  // re-start play if in unpaused state
  if ( this.isPaused ) {
    this.play();
  }
};

// pause if page visibility is hidden, unpause if visible
Player.prototype.visibilityChange = function() {
  var isHidden = document[ hiddenProperty ];
  this[ isHidden ? 'pause' : 'unpause' ]();
};

// -------------------------- Flickity -------------------------- //

// utils.extend( Flickity.defaults, {
//   autoPlay: false
// });

Flickity.createMethods.push('_createPlayer');

Flickity.prototype._createPlayer = function() {
  this.player = new Player( this );

  this.on( 'activate', this.activatePlayer );
  this.on( 'uiChange', this.stopPlayer );
  this.on( 'pointerDown', this.stopPlayer );
  this.on( 'deactivate', this.deactivatePlayer );
};

Flickity.prototype.activatePlayer = function() {
  if ( !this.options.autoPlay ) {
    return;
  }
  this.player.play();
  eventie.bind( this.element, 'mouseenter', this );
  this.isMouseenterBound = true;
};

Flickity.prototype.stopPlayer = function() {
  this.player.stop();
};

Flickity.prototype.deactivatePlayer = function() {
  this.player.stop();
  if ( this.isMouseenterBound ) {
    eventie.unbind( this.element, 'mouseenter', this );
    delete this.isMouseenterBound;
  }
};

// ----- mouseenter/leave ----- //

// pause auto-play on hover
Flickity.prototype.onmouseenter = function() {
  this.player.pause();
  eventie.bind( this.element, 'mouseleave', this );
};

// resume auto-play on hover off
Flickity.prototype.onmouseleave = function() {
  this.player.unpause();
  eventie.unbind( this.element, 'mouseleave', this );
};

// -----  ----- //

Flickity.Player = Player;

return Flickity;

}));

( function( window, factory ) {
  
  // universal module definition

  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'flickity/js/add-remove-cell',[
      './flickity',
      'fizzy-ui-utils/utils'
    ], function( Flickity, utils ) {
      return factory( window, Flickity, utils );
    });
  } else if ( typeof exports == 'object' ) {
    // CommonJS
    module.exports = factory(
      window,
      require('./flickity'),
      require('fizzy-ui-utils')
    );
  } else {
    // browser global
    factory(
      window,
      window.Flickity,
      window.fizzyUIUtils
    );
  }

}( window, function factory( window, Flickity, utils ) {



// append cells to a document fragment
function getCellsFragment( cells ) {
  var fragment = document.createDocumentFragment();
  for ( var i=0, len = cells.length; i < len; i++ ) {
    var cell = cells[i];
    fragment.appendChild( cell.element );
  }
  return fragment;
}

// -------------------------- add/remove cell prototype -------------------------- //

/**
 * Insert, prepend, or append cells
 * @param {Element, Array, NodeList} elems
 * @param {Integer} index
 */
Flickity.prototype.insert = function( elems, index ) {
  var cells = this._makeCells( elems );
  if ( !cells || !cells.length ) {
    return;
  }
  var len = this.cells.length;
  // default to append
  index = index === undefined ? len : index;
  // add cells with document fragment
  var fragment = getCellsFragment( cells );
  // append to slider
  var isAppend = index == len;
  if ( isAppend ) {
    this.slider.appendChild( fragment );
  } else {
    var insertCellElement = this.cells[ index ].element;
    this.slider.insertBefore( fragment, insertCellElement );
  }
  // add to this.cells
  if ( index === 0 ) {
    // prepend, add to start
    this.cells = cells.concat( this.cells );
  } else if ( isAppend ) {
    // append, add to end
    this.cells = this.cells.concat( cells );
  } else {
    // insert in this.cells
    var endCells = this.cells.splice( index, len - index );
    this.cells = this.cells.concat( cells ).concat( endCells );
  }

  this._sizeCells( cells );

  var selectedIndexDelta = index > this.selectedIndex ? 0 : cells.length;
  this._cellAddedRemoved( index, selectedIndexDelta );
};

Flickity.prototype.append = function( elems ) {
  this.insert( elems, this.cells.length );
};

Flickity.prototype.prepend = function( elems ) {
  this.insert( elems, 0 );
};

/**
 * Remove cells
 * @param {Element, Array, NodeList} elems
 */
Flickity.prototype.remove = function( elems ) {
  var cells = this.getCells( elems );
  var selectedIndexDelta = 0;
  var i, len, cell;
  // calculate selectedIndexDelta, easier if done in seperate loop
  for ( i=0, len = cells.length; i < len; i++ ) {
    cell = cells[i];
    var wasBefore = utils.indexOf( this.cells, cell ) < this.selectedIndex;
    selectedIndexDelta -= wasBefore ? 1 : 0;
  }

  for ( i=0, len = cells.length; i < len; i++ ) {
    cell = cells[i];
    cell.remove();
    // remove item from collection
    utils.removeFrom( this.cells, cell );
  }

  if ( cells.length ) {
    // update stuff
    this._cellAddedRemoved( 0, selectedIndexDelta );
  }
};

// updates when cells are added or removed
Flickity.prototype._cellAddedRemoved = function( changedCellIndex, selectedIndexDelta ) {
  selectedIndexDelta = selectedIndexDelta || 0;
  this.selectedIndex += selectedIndexDelta;
  this.selectedIndex = Math.max( 0, Math.min( this.cells.length - 1, this.selectedIndex ) );

  this.emitEvent( 'cellAddedRemoved', [ changedCellIndex, selectedIndexDelta ] );
  this.cellChange( changedCellIndex );
};

/**
 * logic to be run after a cell's size changes
 * @param {Element} elem - cell's element
 */
Flickity.prototype.cellSizeChange = function( elem ) {
  var cell = this.getCell( elem );
  if ( !cell ) {
    return;
  }
  cell.getSize();

  var index = utils.indexOf( this.cells, cell );
  this.cellChange( index );
};

/**
 * logic any time a cell is changed: added, removed, or size changed
 * @param {Integer} changedCellIndex - index of the changed cell, optional
 */
Flickity.prototype.cellChange = function( changedCellIndex ) {
  this._positionCells( changedCellIndex );
  this._getWrapShiftCells();
  this.setGallerySize();
  // position slider
  if ( this.options.freeScroll ) {
    this.positionSlider();
  } else {
    this.select( this.selectedIndex );
  }
};

// -----  ----- //

return Flickity;

}));

( function( window, factory ) {
  
  // universal module definition

  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'flickity/js/lazyload',[
      'classie/classie',
      'eventie/eventie',
      './flickity',
      'fizzy-ui-utils/utils'
    ], function( classie, eventie, Flickity, utils ) {
      return factory( window, classie, eventie, Flickity, utils );
    });
  } else if ( typeof exports == 'object' ) {
    // CommonJS
    module.exports = factory(
      window,
      require('desandro-classie'),
      require('eventie'),
      require('./flickity'),
      require('fizzy-ui-utils')
    );
  } else {
    // browser global
    factory(
      window,
      window.classie,
      window.eventie,
      window.Flickity,
      window.fizzyUIUtils
    );
  }

}( window, function factory( window, classie, eventie, Flickity, utils ) {


Flickity.createMethods.push('_createLazyload');

Flickity.prototype._createLazyload = function() {
  this.on( 'cellSelect', this.lazyLoad );
};

Flickity.prototype.lazyLoad = function() {
  var lazyLoad = this.options.lazyLoad;
  if ( !lazyLoad ) {
    return;
  }
  // get adjacent cells, use lazyLoad option for adjacent count
  var adjCount = typeof lazyLoad == 'number' ? lazyLoad : 0;
  var cellElems = this.getAdjacentCellElements( adjCount );
  // get lazy images in those cells
  var lazyImages = [];
  for ( var i=0, len = cellElems.length; i < len; i++ ) {
    var cellElem = cellElems[i];
    var lazyCellImages = getCellLazyImages( cellElem );
    lazyImages = lazyImages.concat( lazyCellImages );
  }
  // load lazy images
  for ( i=0, len = lazyImages.length; i < len; i++ ) {
    var img = lazyImages[i];
    new LazyLoader( img, this );
  }
};

function getCellLazyImages( cellElem ) {
  // check if cell element is lazy image
  if ( cellElem.nodeName == 'IMG' &&
    cellElem.getAttribute('data-flickity-lazyload') ) {
    return [ cellElem ];
  }
  // select lazy images in cell
  var imgs = cellElem.querySelectorAll('img[data-flickity-lazyload]');
  return utils.makeArray( imgs );
}

// -------------------------- LazyLoader -------------------------- //

/**
 * class to handle loading images
 */
function LazyLoader( img, flickity ) {
  this.img = img;
  this.flickity = flickity;
  this.load();
}

LazyLoader.prototype.handleEvent = utils.handleEvent;

LazyLoader.prototype.load = function() {
  eventie.bind( this.img, 'load', this );
  eventie.bind( this.img, 'error', this );
  // load image
  this.img.src = this.img.getAttribute('data-flickity-lazyload');
  // remove attr
  this.img.removeAttribute('data-flickity-lazyload');
};

LazyLoader.prototype.onload = function( event ) {
  this.complete( event, 'flickity-lazyloaded' );
};

LazyLoader.prototype.onerror = function() {
  this.complete( event, 'flickity-lazyerror' );
};

LazyLoader.prototype.complete = function( event, className ) {
  // unbind events
  eventie.unbind( this.img, 'load', this );
  eventie.unbind( this.img, 'error', this );

  var cell = this.flickity.getParentCell( this.img );
  var cellElem = cell && cell.element;
  this.flickity.cellSizeChange( cellElem );

  classie.add( this.img, className );
  this.flickity.dispatchEvent( 'lazyLoad', event, cellElem );
};

// -----  ----- //

Flickity.LazyLoader = LazyLoader;

return Flickity;

}));

/**
 * Flickity index
 * used for AMD and CommonJS exports
 */

( function( window, factory ) {
  
  // universal module definition

  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'flickity/js/index',[
      './flickity',
      './drag',
      './prev-next-button',
      './page-dots',
      './player',
      './add-remove-cell',
      './lazyload'
    ], factory );
  } else if ( typeof exports == 'object' ) {
    // CommonJS
    module.exports = factory(
      require('./flickity'),
      require('./drag'),
      require('./prev-next-button'),
      require('./page-dots'),
      require('./player'),
      require('./add-remove-cell'),
      require('./lazyload')
    );
  }

})( window, function factory( Flickity ) {
  /*jshint strict: false*/
  return Flickity;
});

/*!
 * Flickity asNavFor v1.0.1
 * enable asNavFor for Flickity
 */

/*jshint browser: true, undef: true, unused: true, strict: true*/

( function( window, factory ) {
  /*global define: false, module: false, require: false */
  
  // universal module definition

  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'flickity-as-nav-for/as-nav-for',[
      'classie/classie',
      'flickity/js/index',
      'fizzy-ui-utils/utils'
    ], function( classie, Flickity, utils ) {
      return factory( window, classie, Flickity, utils );
    });
  } else if ( typeof exports == 'object' ) {
    // CommonJS
    module.exports = factory(
      window,
      require('desandro-classie'),
      require('flickity'),
      require('fizzy-ui-utils')
    );
  } else {
    // browser global
    window.Flickity = factory(
      window,
      window.classie,
      window.Flickity,
      window.fizzyUIUtils
    );
  }

}( window, function factory( window, classie, Flickity, utils ) {



// -------------------------- asNavFor prototype -------------------------- //

// Flickity.defaults.asNavFor = null;

Flickity.createMethods.push('_createAsNavFor');

Flickity.prototype._createAsNavFor = function() {
  this.on( 'activate', this.activateAsNavFor );
  this.on( 'deactivate', this.deactivateAsNavFor );
  this.on( 'destroy', this.destroyAsNavFor );

  var asNavForOption = this.options.asNavFor;
  if ( !asNavForOption ) {
    return;
  }
  // HACK do async, give time for other flickity to be initalized
  var _this = this;
  setTimeout( function initNavCompanion() {
    _this.setNavCompanion( asNavForOption );
  });
};

Flickity.prototype.setNavCompanion = function( elem ) {
  elem = utils.getQueryElement( elem );
  var companion = Flickity.data( elem );
  // stop if no companion or companion is self
  if ( !companion || companion == this ) {
    return;
  }

  this.navCompanion = companion;
  // companion select
  var _this = this;
  this.onNavCompanionSelect = function() {
    _this.navCompanionSelect();
  };
  companion.on( 'cellSelect', this.onNavCompanionSelect );
  // click
  this.on( 'staticClick', this.onNavStaticClick );

  this.navCompanionSelect();
};

Flickity.prototype.navCompanionSelect = function() {
  if ( !this.navCompanion ) {
    return;
  }
  var index = this.navCompanion.selectedIndex;
  this.select( index );
  // set nav selected class
  this.removeNavSelectedElement();
  // stop if companion has more cells than this one
  if ( this.selectedIndex != index ) {
    return;
  }
  this.navSelectedElement = this.cells[ index ].element;
  classie.add( this.navSelectedElement, 'is-nav-selected' );
};

Flickity.prototype.activateAsNavFor = function() {
  this.navCompanionSelect();
};

Flickity.prototype.removeNavSelectedElement = function() {
  if ( !this.navSelectedElement ) {
    return;
  }
  classie.remove( this.navSelectedElement, 'is-nav-selected' );
  delete this.navSelectedElement;
};

Flickity.prototype.onNavStaticClick = function( event, pointer, cellElement, cellIndex ) {
  if ( typeof cellIndex == 'number' ) {
    this.navCompanion.select( cellIndex );
  }
};

Flickity.prototype.deactivateAsNavFor = function() {
  this.removeNavSelectedElement();
};

Flickity.prototype.destroyAsNavFor = function() {
  if ( !this.navCompanion ) {
    return;
  }
  this.navCompanion.off( 'cellSelect', this.onNavCompanionSelect );
  this.off( 'staticClick', this.onNavStaticClick );
  delete this.navCompanion;
};

// -----  ----- //

return Flickity;

}));

/*!
 * imagesLoaded v3.1.8
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

( function( window, factory ) { 
  // universal module definition

  /*global define: false, module: false, require: false */

  if ( typeof define === 'function' && define.amd ) {
    // AMD
    define( 'imagesloaded/imagesloaded',[
      'eventEmitter/EventEmitter',
      'eventie/eventie'
    ], function( EventEmitter, eventie ) {
      return factory( window, EventEmitter, eventie );
    });
  } else if ( typeof exports === 'object' ) {
    // CommonJS
    module.exports = factory(
      window,
      require('wolfy87-eventemitter'),
      require('eventie')
    );
  } else {
    // browser global
    window.imagesLoaded = factory(
      window,
      window.EventEmitter,
      window.eventie
    );
  }

})( window,

// --------------------------  factory -------------------------- //

function factory( window, EventEmitter, eventie ) {



var $ = window.jQuery;
var console = window.console;
var hasConsole = typeof console !== 'undefined';

// -------------------------- helpers -------------------------- //

// extend objects
function extend( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
}

var objToString = Object.prototype.toString;
function isArray( obj ) {
  return objToString.call( obj ) === '[object Array]';
}

// turn element or nodeList into an array
function makeArray( obj ) {
  var ary = [];
  if ( isArray( obj ) ) {
    // use object if already an array
    ary = obj;
  } else if ( typeof obj.length === 'number' ) {
    // convert nodeList to array
    for ( var i=0, len = obj.length; i < len; i++ ) {
      ary.push( obj[i] );
    }
  } else {
    // array of single index
    ary.push( obj );
  }
  return ary;
}

  // -------------------------- imagesLoaded -------------------------- //

  /**
   * @param {Array, Element, NodeList, String} elem
   * @param {Object or Function} options - if function, use as callback
   * @param {Function} onAlways - callback function
   */
  function ImagesLoaded( elem, options, onAlways ) {
    // coerce ImagesLoaded() without new, to be new ImagesLoaded()
    if ( !( this instanceof ImagesLoaded ) ) {
      return new ImagesLoaded( elem, options );
    }
    // use elem as selector string
    if ( typeof elem === 'string' ) {
      elem = document.querySelectorAll( elem );
    }

    this.elements = makeArray( elem );
    this.options = extend( {}, this.options );

    if ( typeof options === 'function' ) {
      onAlways = options;
    } else {
      extend( this.options, options );
    }

    if ( onAlways ) {
      this.on( 'always', onAlways );
    }

    this.getImages();

    if ( $ ) {
      // add jQuery Deferred object
      this.jqDeferred = new $.Deferred();
    }

    // HACK check async to allow time to bind listeners
    var _this = this;
    setTimeout( function() {
      _this.check();
    });
  }

  ImagesLoaded.prototype = new EventEmitter();

  ImagesLoaded.prototype.options = {};

  ImagesLoaded.prototype.getImages = function() {
    this.images = [];

    // filter & find items if we have an item selector
    for ( var i=0, len = this.elements.length; i < len; i++ ) {
      var elem = this.elements[i];
      // filter siblings
      if ( elem.nodeName === 'IMG' ) {
        this.addImage( elem );
      }
      // find children
      // no non-element nodes, #143
      var nodeType = elem.nodeType;
      if ( !nodeType || !( nodeType === 1 || nodeType === 9 || nodeType === 11 ) ) {
        continue;
      }
      var childElems = elem.querySelectorAll('img');
      // concat childElems to filterFound array
      for ( var j=0, jLen = childElems.length; j < jLen; j++ ) {
        var img = childElems[j];
        this.addImage( img );
      }
    }
  };

  /**
   * @param {Image} img
   */
  ImagesLoaded.prototype.addImage = function( img ) {
    var loadingImage = new LoadingImage( img );
    this.images.push( loadingImage );
  };

  ImagesLoaded.prototype.check = function() {
    var _this = this;
    var checkedCount = 0;
    var length = this.images.length;
    this.hasAnyBroken = false;
    // complete if no images
    if ( !length ) {
      this.complete();
      return;
    }

    function onConfirm( image, message ) {
      if ( _this.options.debug && hasConsole ) {
        console.log( 'confirm', image, message );
      }

      _this.progress( image );
      checkedCount++;
      if ( checkedCount === length ) {
        _this.complete();
      }
      return true; // bind once
    }

    for ( var i=0; i < length; i++ ) {
      var loadingImage = this.images[i];
      loadingImage.on( 'confirm', onConfirm );
      loadingImage.check();
    }
  };

  ImagesLoaded.prototype.progress = function( image ) {
    this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
    // HACK - Chrome triggers event before object properties have changed. #83
    var _this = this;
    setTimeout( function() {
      _this.emit( 'progress', _this, image );
      if ( _this.jqDeferred && _this.jqDeferred.notify ) {
        _this.jqDeferred.notify( _this, image );
      }
    });
  };

  ImagesLoaded.prototype.complete = function() {
    var eventName = this.hasAnyBroken ? 'fail' : 'done';
    this.isComplete = true;
    var _this = this;
    // HACK - another setTimeout so that confirm happens after progress
    setTimeout( function() {
      _this.emit( eventName, _this );
      _this.emit( 'always', _this );
      if ( _this.jqDeferred ) {
        var jqMethod = _this.hasAnyBroken ? 'reject' : 'resolve';
        _this.jqDeferred[ jqMethod ]( _this );
      }
    });
  };

  // -------------------------- jquery -------------------------- //

  if ( $ ) {
    $.fn.imagesLoaded = function( options, callback ) {
      var instance = new ImagesLoaded( this, options, callback );
      return instance.jqDeferred.promise( $(this) );
    };
  }


  // --------------------------  -------------------------- //

  function LoadingImage( img ) {
    this.img = img;
  }

  LoadingImage.prototype = new EventEmitter();

  LoadingImage.prototype.check = function() {
    // first check cached any previous images that have same src
    var resource = cache[ this.img.src ] || new Resource( this.img.src );
    if ( resource.isConfirmed ) {
      this.confirm( resource.isLoaded, 'cached was confirmed' );
      return;
    }

    // If complete is true and browser supports natural sizes,
    // try to check for image status manually.
    if ( this.img.complete && this.img.naturalWidth !== undefined ) {
      // report based on naturalWidth
      this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
      return;
    }

    // If none of the checks above matched, simulate loading on detached element.
    var _this = this;
    resource.on( 'confirm', function( resrc, message ) {
      _this.confirm( resrc.isLoaded, message );
      return true;
    });

    resource.check();
  };

  LoadingImage.prototype.confirm = function( isLoaded, message ) {
    this.isLoaded = isLoaded;
    this.emit( 'confirm', this, message );
  };

  // -------------------------- Resource -------------------------- //

  // Resource checks each src, only once
  // separate class from LoadingImage to prevent memory leaks. See #115

  var cache = {};

  function Resource( src ) {
    this.src = src;
    // add to cache
    cache[ src ] = this;
  }

  Resource.prototype = new EventEmitter();

  Resource.prototype.check = function() {
    // only trigger checking once
    if ( this.isChecked ) {
      return;
    }
    // simulate loading on detached element
    var proxyImage = new Image();
    eventie.bind( proxyImage, 'load', this );
    eventie.bind( proxyImage, 'error', this );
    proxyImage.src = this.src;
    // set flag
    this.isChecked = true;
  };

  // ----- events ----- //

  // trigger specified handler for event type
  Resource.prototype.handleEvent = function( event ) {
    var method = 'on' + event.type;
    if ( this[ method ] ) {
      this[ method ]( event );
    }
  };

  Resource.prototype.onload = function( event ) {
    this.confirm( true, 'onload' );
    this.unbindProxyEvents( event );
  };

  Resource.prototype.onerror = function( event ) {
    this.confirm( false, 'onerror' );
    this.unbindProxyEvents( event );
  };

  // ----- confirm ----- //

  Resource.prototype.confirm = function( isLoaded, message ) {
    this.isConfirmed = true;
    this.isLoaded = isLoaded;
    this.emit( 'confirm', this, message );
  };

  Resource.prototype.unbindProxyEvents = function( event ) {
    eventie.unbind( event.target, 'load', this );
    eventie.unbind( event.target, 'error', this );
  };

  // -----  ----- //

  return ImagesLoaded;

});

/*!
 * Flickity imagesLoaded v1.0.0
 * enables imagesLoaded option for Flickity
 */

/*jshint browser: true, strict: true, undef: true, unused: true */

( function( window, factory ) {
  /*global define: false, module: false, require: false */
  
  // universal module definition

  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( [
      'flickity/js/index',
      'imagesloaded/imagesloaded'
    ], function( Flickity, imagesLoaded ) {
      return factory( window, Flickity, imagesLoaded );
    });
  } else if ( typeof exports == 'object' ) {
    // CommonJS
    module.exports = factory(
      window,
      require('flickity'),
      require('imagesloaded')
    );
  } else {
    // browser global
    window.Flickity = factory(
      window,
      window.Flickity,
      window.imagesLoaded
    );
  }

}( window, function factory( window, Flickity, imagesLoaded ) {


Flickity.createMethods.push('_createImagesLoaded');

Flickity.prototype._createImagesLoaded = function() {
  this.on( 'activate', this.imagesLoaded );
};

Flickity.prototype.imagesLoaded = function() {
  if ( !this.options.imagesLoaded ) {
    return;
  }
  var _this = this;
  function onImagesLoadedProgress( instance, image ) {
    var cell = _this.getParentCell( image.img );
    _this.cellSizeChange( cell && cell.element );
  }
  imagesLoaded( this.slider ).on( 'progress', onImagesLoadedProgress );
};

return Flickity;

}));


// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();


var bLazy = new Blazy({
  selector: 'img,.lazy',
    breakpoints: [{
        width: 420 // max-width
        ,
        src: 'data-src-small'
    }
   ]
});
// Can also be used with $(document).ready()
$(window).load(function() {


});




var cbpAnimatedHeader = (function() {

	var docElem = document.documentElement,
		header = document.querySelector( '.cbp-af-header' ),
		didScroll = false,
		changeHeaderOn = 100;

	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 250 );
			}
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) {
			classie.add( header, 'cbp-af-header-shrink' );
		}
		else {
			classie.remove( header, 'cbp-af-header-shrink' );
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();
