!function(t,e){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("jquery")):t.jQueryBridget=e(t,t.jQuery)}(window,function(t,e){"use strict";function i(i,r,a){function h(t,e,n){var o,r="$()."+i+'("'+e+'")';return t.each(function(t,h){var u=a.data(h,i);if(!u)return void s(i+" not initialized. Cannot call methods, i.e. "+r);var d=u[e];if(!d||"_"==e.charAt(0))return void s(r+" is not a valid method");var l=d.apply(u,n);o=void 0===o?l:o}),void 0!==o?o:t}function u(t,e){t.each(function(t,n){var o=a.data(n,i);o?(o.option(e),o._init()):(o=new r(n,e),a.data(n,i,o))})}a=a||e||t.jQuery,a&&(r.prototype.option||(r.prototype.option=function(t){a.isPlainObject(t)&&(this.options=a.extend(!0,this.options,t))}),a.fn[i]=function(t){if("string"==typeof t){var e=o.call(arguments,1);return h(this,t,e)}return u(this,t),this},n(a))}function n(t){!t||t&&t.bridget||(t.bridget=i)}var o=Array.prototype.slice,r=t.console,s="undefined"==typeof r?function(){}:function(t){r.error(t)};return n(e||t.jQuery),i}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},n=i[t]=i[t]||{};return n[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){i=i.slice(0),e=e||[];for(var n=this._onceEvents&&this._onceEvents[t],o=0;o<i.length;o++){var r=i[o],s=n&&n[r];s&&(this.off(t,r),delete n[r]),r.apply(this,e)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("get-size/get-size",[],function(){return e()}):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function t(t){var e=parseFloat(t),i=-1==t.indexOf("%")&&!isNaN(e);return i&&e}function e(){}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;u>e;e++){var i=h[e];t[i]=0}return t}function n(t){var e=getComputedStyle(t);return e||a("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),e}function o(){if(!d){d=!0;var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style.boxSizing="border-box";var i=document.body||document.documentElement;i.appendChild(e);var o=n(e);r.isBoxSizeOuter=s=200==t(o.width),i.removeChild(e)}}function r(e){if(o(),"string"==typeof e&&(e=document.querySelector(e)),e&&"object"==typeof e&&e.nodeType){var r=n(e);if("none"==r.display)return i();var a={};a.width=e.offsetWidth,a.height=e.offsetHeight;for(var d=a.isBorderBox="border-box"==r.boxSizing,l=0;u>l;l++){var c=h[l],f=r[c],m=parseFloat(f);a[c]=isNaN(m)?0:m}var p=a.paddingLeft+a.paddingRight,g=a.paddingTop+a.paddingBottom,y=a.marginLeft+a.marginRight,v=a.marginTop+a.marginBottom,_=a.borderLeftWidth+a.borderRightWidth,z=a.borderTopWidth+a.borderBottomWidth,E=d&&s,b=t(r.width);b!==!1&&(a.width=b+(E?0:p+_));var x=t(r.height);return x!==!1&&(a.height=x+(E?0:g+z)),a.innerWidth=a.width-(p+_),a.innerHeight=a.height-(g+z),a.outerWidth=a.width+y,a.outerHeight=a.height+v,a}}var s,a="undefined"==typeof console?e:function(t){console.error(t)},h=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],u=h.length,d=!1;return r}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var t=function(){var t=window.Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var n=e[i],o=n+"MatchesSelector";if(t[o])return o}}();return function(e,i){return e[t](i)}}),function(t,e){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("desandro-matches-selector")):t.fizzyUIUtils=e(t,t.matchesSelector)}(window,function(t,e){var i={};i.extend=function(t,e){for(var i in e)t[i]=e[i];return t},i.modulo=function(t,e){return(t%e+e)%e},i.makeArray=function(t){var e=[];if(Array.isArray(t))e=t;else if(t&&"object"==typeof t&&"number"==typeof t.length)for(var i=0;i<t.length;i++)e.push(t[i]);else e.push(t);return e},i.removeFrom=function(t,e){var i=t.indexOf(e);-1!=i&&t.splice(i,1)},i.getParent=function(t,i){for(;t.parentNode&&t!=document.body;)if(t=t.parentNode,e(t,i))return t},i.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.filterFindElements=function(t,n){t=i.makeArray(t);var o=[];return t.forEach(function(t){if(t instanceof HTMLElement){if(!n)return void o.push(t);e(t,n)&&o.push(t);for(var i=t.querySelectorAll(n),r=0;r<i.length;r++)o.push(i[r])}}),o},i.debounceMethod=function(t,e,i){var n=t.prototype[e],o=e+"Timeout";t.prototype[e]=function(){var t=this[o];t&&clearTimeout(t);var e=arguments,r=this;this[o]=setTimeout(function(){n.apply(r,e),delete r[o]},i||100)}},i.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},i.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var n=t.console;return i.htmlInit=function(e,o){i.docReady(function(){var r=i.toDashed(o),s="data-"+r,a=document.querySelectorAll("["+s+"]"),h=document.querySelectorAll(".js-"+r),u=i.makeArray(a).concat(i.makeArray(h)),d=s+"-options",l=t.jQuery;u.forEach(function(t){var i,r=t.getAttribute(s)||t.getAttribute(d);try{i=r&&JSON.parse(r)}catch(a){return void(n&&n.error("Error parsing "+s+" on "+t.className+": "+a))}var h=new e(t,i);l&&l.data(t,o,h)})})},i}),function(t,e){"function"==typeof define&&define.amd?define("outlayer/item",["ev-emitter/ev-emitter","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("ev-emitter"),require("get-size")):(t.Outlayer={},t.Outlayer.Item=e(t.EvEmitter,t.getSize))}(window,function(t,e){"use strict";function i(t){for(var e in t)return!1;return e=null,!0}function n(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}function o(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}var r=document.documentElement.style,s="string"==typeof r.transition?"transition":"WebkitTransition",a="string"==typeof r.transform?"transform":"WebkitTransform",h={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[s],u={transform:a,transition:s,transitionDuration:s+"Duration",transitionProperty:s+"Property",transitionDelay:s+"Delay"},d=n.prototype=Object.create(t.prototype);d.constructor=n,d._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},d.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},d.getSize=function(){this.size=e(this.element)},d.css=function(t){var e=this.element.style;for(var i in t){var n=u[i]||i;e[n]=t[i]}},d.getPosition=function(){var t=getComputedStyle(this.element),e=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop"),n=t[e?"left":"right"],o=t[i?"top":"bottom"],r=this.layout.size,s=-1!=n.indexOf("%")?parseFloat(n)/100*r.width:parseInt(n,10),a=-1!=o.indexOf("%")?parseFloat(o)/100*r.height:parseInt(o,10);s=isNaN(s)?0:s,a=isNaN(a)?0:a,s-=e?r.paddingLeft:r.paddingRight,a-=i?r.paddingTop:r.paddingBottom,this.position.x=s,this.position.y=a},d.layoutPosition=function(){var t=this.layout.size,e={},i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop"),o=i?"paddingLeft":"paddingRight",r=i?"left":"right",s=i?"right":"left",a=this.position.x+t[o];e[r]=this.getXValue(a),e[s]="";var h=n?"paddingTop":"paddingBottom",u=n?"top":"bottom",d=n?"bottom":"top",l=this.position.y+t[h];e[u]=this.getYValue(l),e[d]="",this.css(e),this.emitEvent("layout",[this])},d.getXValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!e?t/this.layout.size.width*100+"%":t+"px"},d.getYValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&e?t/this.layout.size.height*100+"%":t+"px"},d._transitionTo=function(t,e){this.getPosition();var i=this.position.x,n=this.position.y,o=parseInt(t,10),r=parseInt(e,10),s=o===this.position.x&&r===this.position.y;if(this.setPosition(t,e),s&&!this.isTransitioning)return void this.layoutPosition();var a=t-i,h=e-n,u={};u.transform=this.getTranslate(a,h),this.transition({to:u,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},d.getTranslate=function(t,e){var i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop");return t=i?t:-t,e=n?e:-e,"translate3d("+t+"px, "+e+"px, 0)"},d.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},d.moveTo=d._transitionTo,d.setPosition=function(t,e){this.position.x=parseInt(t,10),this.position.y=parseInt(e,10)},d._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},d.transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(t);var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var n=this.element.offsetHeight;n=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var l="opacity,"+o(a);d.enableTransition=function(){if(!this.isTransitioning){var t=this.layout.options.transitionDuration;t="number"==typeof t?t+"ms":t,this.css({transitionProperty:l,transitionDuration:t,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(h,this,!1)}},d.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},d.onotransitionend=function(t){this.ontransitionend(t)};var c={"-webkit-transform":"transform"};d.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,n=c[t.propertyName]||t.propertyName;if(delete e.ingProperties[n],i(e.ingProperties)&&this.disableTransition(),n in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[n]),n in e.onEnd){var o=e.onEnd[n];o.call(this),delete e.onEnd[n]}this.emitEvent("transitionEnd",[this])}},d.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(h,this,!1),this.isTransitioning=!1},d._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var f={transitionProperty:"",transitionDuration:"",transitionDelay:""};return d.removeTransitionStyles=function(){this.css(f)},d.stagger=function(t){t=isNaN(t)?0:t,this.staggerDelay=t+"ms"},d.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},d.remove=function(){return s&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),void this.hide()):void this.removeElem()},d.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("visibleStyle");e[i]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e})},d.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},d.getHideRevealTransitionEndProperty=function(t){var e=this.layout.options[t];if(e.opacity)return"opacity";for(var i in e)return i},d.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("hiddenStyle");e[i]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:e})},d.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},d.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},n}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(i,n,o,r){return e(t,i,n,o,r)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):t.Outlayer=e(t,t.EvEmitter,t.getSize,t.fizzyUIUtils,t.Outlayer.Item)}(window,function(t,e,i,n,o){"use strict";function r(t,e){var i=n.getQueryElement(t);if(!i)return void(h&&h.error("Bad element for "+this.constructor.namespace+": "+(i||t)));this.element=i,u&&(this.$element=u(this.element)),this.options=n.extend({},this.constructor.defaults),this.option(e);var o=++l;this.element.outlayerGUID=o,c[o]=this,this._create();var r=this._getOption("initLayout");r&&this.layout()}function s(t){function e(){t.apply(this,arguments)}return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e}function a(t){if("number"==typeof t)return t;var e=t.match(/(^\d*\.?\d*)(\w*)/),i=e&&e[1],n=e&&e[2];if(!i.length)return 0;i=parseFloat(i);var o=m[n]||1;return i*o}var h=t.console,u=t.jQuery,d=function(){},l=0,c={};r.namespace="outlayer",r.Item=o,r.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var f=r.prototype;n.extend(f,e.prototype),f.option=function(t){n.extend(this.options,t)},f._getOption=function(t){var e=this.constructor.compatOptions[t];return e&&void 0!==this.options[e]?this.options[e]:this.options[t]},r.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},f._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),n.extend(this.element.style,this.options.containerStyle);var t=this._getOption("resize");t&&this.bindResize()},f.reloadItems=function(){this.items=this._itemize(this.element.children)},f._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,n=[],o=0;o<e.length;o++){var r=e[o],s=new i(r,this);n.push(s)}return n},f._filterFindItemElements=function(t){return n.filterFindElements(t,this.options.itemSelector)},f.getItemElements=function(){return this.items.map(function(t){return t.element})},f.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;this.layoutItems(this.items,e),this._isLayoutInited=!0},f._init=f.layout,f._resetLayout=function(){this.getSize()},f.getSize=function(){this.size=i(this.element)},f._getMeasurement=function(t,e){var n,o=this.options[t];o?("string"==typeof o?n=this.element.querySelector(o):o instanceof HTMLElement&&(n=o),this[t]=n?i(n)[e]:o):this[t]=0},f.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},f._getItemsForLayout=function(t){return t.filter(function(t){return!t.isIgnored})},f._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),t&&t.length){var i=[];t.forEach(function(t){var n=this._getItemLayoutPosition(t);n.item=t,n.isInstant=e||t.isLayoutInstant,i.push(n)},this),this._processLayoutQueue(i)}},f._getItemLayoutPosition=function(){return{x:0,y:0}},f._processLayoutQueue=function(t){this.updateStagger(),t.forEach(function(t,e){this._positionItem(t.item,t.x,t.y,t.isInstant,e)},this)},f.updateStagger=function(){var t=this.options.stagger;return null===t||void 0===t?void(this.stagger=0):(this.stagger=a(t),this.stagger)},f._positionItem=function(t,e,i,n,o){n?t.goTo(e,i):(t.stagger(o*this.stagger),t.moveTo(e,i))},f._postLayout=function(){this.resizeContainer()},f.resizeContainer=function(){var t=this._getOption("resizeContainer");if(t){var e=this._getContainerSize();e&&(this._setContainerMeasure(e.width,!0),this._setContainerMeasure(e.height,!1))}},f._getContainerSize=d,f._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},f._emitCompleteOnItems=function(t,e){function i(){o.dispatchEvent(t+"Complete",null,[e])}function n(){s++,s==r&&i()}var o=this,r=e.length;if(!e||!r)return void i();var s=0;e.forEach(function(e){e.once(t,n)})},f.dispatchEvent=function(t,e,i){var n=e?[e].concat(i):i;if(this.emitEvent(t,n),u)if(this.$element=this.$element||u(this.element),e){var o=u.Event(e);o.type=t,this.$element.trigger(o,i)}else this.$element.trigger(t,i)},f.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},f.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},f.stamp=function(t){t=this._find(t),t&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},f.unstamp=function(t){t=this._find(t),t&&t.forEach(function(t){n.removeFrom(this.stamps,t),this.unignore(t)},this)},f._find=function(t){return t?("string"==typeof t&&(t=this.element.querySelectorAll(t)),t=n.makeArray(t)):void 0},f._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},f._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},f._manageStamp=d,f._getElementOffset=function(t){var e=t.getBoundingClientRect(),n=this._boundingRect,o=i(t),r={left:e.left-n.left-o.marginLeft,top:e.top-n.top-o.marginTop,right:n.right-e.right-o.marginRight,bottom:n.bottom-e.bottom-o.marginBottom};return r},f.handleEvent=n.handleEvent,f.bindResize=function(){t.addEventListener("resize",this),this.isResizeBound=!0},f.unbindResize=function(){t.removeEventListener("resize",this),this.isResizeBound=!1},f.onresize=function(){this.resize()},n.debounceMethod(r,"onresize",100),f.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},f.needsResizeLayout=function(){var t=i(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},f.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},f.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},f.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},f.reveal=function(t){if(this._emitCompleteOnItems("reveal",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.reveal()})}},f.hide=function(t){if(this._emitCompleteOnItems("hide",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.hide()})}},f.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},f.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},f.getItem=function(t){for(var e=0;e<this.items.length;e++){var i=this.items[e];if(i.element==t)return i}},f.getItems=function(t){t=n.makeArray(t);var e=[];return t.forEach(function(t){var i=this.getItem(t);i&&e.push(i)},this),e},f.remove=function(t){var e=this.getItems(t);this._emitCompleteOnItems("remove",e),e&&e.length&&e.forEach(function(t){t.remove(),n.removeFrom(this.items,t)},this)},f.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="",this.items.forEach(function(t){t.destroy()}),this.unbindResize();var e=this.element.outlayerGUID;delete c[e],delete this.element.outlayerGUID,u&&u.removeData(this.element,this.constructor.namespace)},r.data=function(t){t=n.getQueryElement(t);var e=t&&t.outlayerGUID;return e&&c[e]},r.create=function(t,e){var i=s(r);return i.defaults=n.extend({},r.defaults),n.extend(i.defaults,e),i.compatOptions=n.extend({},r.compatOptions),i.namespace=t,i.data=r.data,i.Item=s(o),n.htmlInit(i,t),u&&u.bridget&&u.bridget(t,i),i};var m={ms:1,s:1e3};return r.Item=o,r}),function(t,e){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer"),require("get-size")):t.Masonry=e(t.Outlayer,t.getSize)}(window,function(t,e){var i=t.create("masonry");i.compatOptions.fitWidth="isFitWidth";var n=i.prototype;return n._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var t=0;t<this.cols;t++)this.colYs.push(0);this.maxY=0,this.horizontalColIndex=0},n.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}var n=this.columnWidth+=this.gutter,o=this.containerWidth+this.gutter,r=o/n,s=n-o%n,a=s&&1>s?"round":"floor";r=Math[a](r),this.cols=Math.max(r,1)},n.getContainerWidth=function(){var t=this._getOption("fitWidth"),i=t?this.element.parentNode:this.element,n=e(i);this.containerWidth=n&&n.innerWidth},n._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,i=e&&1>e?"round":"ceil",n=Math[i](t.size.outerWidth/this.columnWidth);n=Math.min(n,this.cols);for(var o=this.options.horizontalOrder?"_getHorizontalColPosition":"_getTopColPosition",r=this[o](n,t),s={x:this.columnWidth*r.col,y:r.y},a=r.y+t.size.outerHeight,h=n+r.col,u=r.col;h>u;u++)this.colYs[u]=a;return s},n._getTopColPosition=function(t){var e=this._getTopColGroup(t),i=Math.min.apply(Math,e);return{col:e.indexOf(i),y:i}},n._getTopColGroup=function(t){if(2>t)return this.colYs;for(var e=[],i=this.cols+1-t,n=0;i>n;n++)e[n]=this._getColGroupY(n,t);return e},n._getColGroupY=function(t,e){if(2>e)return this.colYs[t];var i=this.colYs.slice(t,t+e);return Math.max.apply(Math,i)},n._getHorizontalColPosition=function(t,e){var i=this.horizontalColIndex%this.cols,n=t>1&&i+t>this.cols;i=n?0:i;var o=e.size.outerWidth&&e.size.outerHeight;return this.horizontalColIndex=o?i+t:this.horizontalColIndex,{col:i,y:this._getColGroupY(i,t)}},n._manageStamp=function(t){var i=e(t),n=this._getElementOffset(t),o=this._getOption("originLeft"),r=o?n.left:n.right,s=r+i.outerWidth,a=Math.floor(r/this.columnWidth);a=Math.max(0,a);var h=Math.floor(s/this.columnWidth);h-=s%this.columnWidth?0:1,h=Math.min(this.cols-1,h);for(var u=this._getOption("originTop"),d=(u?n.top:n.bottom)+i.outerHeight,l=a;h>=l;l++)this.colYs[l]=Math.max(d,this.colYs[l])},n._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this._getOption("fitWidth")&&(t.width=this._getContainerFitWidth()),t},n._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},n.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!=this.containerWidth},i});	

$(function(){
	/* jquery에서 주석은 //내용// */
//start

/*
	//마우스 휠 내리면 위에 네비게이션 생기기
	$('body,html').on('mousewheel DOMMouseScroll',function(e){
		
		var aa = e.originalEvent.wheelDelta || -e.originalEvent.detail;
		var bb = 0;


		if(aa < 0){
			
			$('.menu').addClass('on');
			$('.menu p').css({opacity:0.8});
		}else{

			//$('.menu').removeClass('on');
			//$('.menu p').css({opacity:0});
		}


	});// '.menu'의 닫힘
*/

	$('header,section,footer').hide();
	$(window).load(function(){
		$('.de').hide();
		$('header,section,footer').fadeIn();
	});
	


	//메인화면 중간에오면 네비 사라지고 위로올리면 네비게이션 다시 사라지기
	$(window).scroll(function(e){
		e.preventDefault();
		var nav = $(this).scrollTop();
		if(nav < 400){
			$('.menu').removeClass('on');
			$('.menu p').css({opacity:0});
		}else{
			$('.menu').addClass('on');
			$('.menu p').css({opacity:0.8});
		}

	});

	





/*
	//마우스 올릴때 메인페이지쯤오면 네비 사라지게하기 
	$(window).scroll(function(){
		var HH = $('.section2').offset().top;    //scrollTop??
		
		if(HH < 1000){
			$('.menu').removeClass('on');
			$('.menu p').css({opacity:0});
		}
	});

*/


	







	//메인화면 fade in,out하기-------------------------------------------
	$('.indi a:first-child').addClass('on');

	var count = 0;
	$('.button p').eq(0).hide();
 
	$('.indi a').click(function(){
		count = $(this).index();
		
		$('.main p span').fadeOut();
		$('.main p span').eq(count).fadeIn();
		$('.indi a').removeClass('on');
		$(this).addClass('on');

		update();     //여기서 실행하라  (update의 내용은 밑에 있음)
	});


	$('.button p').click(function(){
		
		//prev.
		if($(this).index() == 0){
			$('.indi a').eq(--count).trigger('click');
		
		//next.
		}else{
			$('.indi a').eq(++count).trigger('click');
			
		}
		
	});



	//위에 update실행 내용
	function update(){
		if(count != 0){
			$('.button p').eq(0).show();

			var spotBg = $('.im span').eq(count).prev().css('background');
			var spotImg = spotBg.split('"');          //split '   ' 의 사이에 ""구간을 를 짤라오다. (백그라운드 주소값가져오려고)
			$('.button p').eq(0).find('img').attr('src',spotImg[1]);
			
		}else{
			$('.button p').eq(0).hide();

		}

		//next 미리보기 사진 바뀌고 마지막에서는 사라지기
		if(count != 2){
			$('.button p').eq(1).show();

			var spotBg = $('.im span').eq(count).next().css('background');
			var spotImg = spotBg.split('"');          //split '   ' 의 사이에 ""구간을 를 짤라오다. (백그라운드 주소값가져오려고)
			$('.button p').eq(1).find('img').attr('src',spotImg[1]);   //[1]은 각구간에서 순번임. "" 사이의 이미지 주소값의 그룹 번호가 1번째라 1을쓴것임.
			
		}else{
			$('.button p').eq(1).hide();

		}


	}

	
	//메인페이지 제목 글씨효과? 인터넷에서 따온것
	/*var a = $(".title p").text(), b='';	
	b = a.substring(0,1);
	$(".title p").text(b+'eb design Portfolio');
	*/
	$(".title p").letterfx({"fx":"fly-right fly-bottom spin"});
	setTimeout(function(){
		$(".title p span").css({fontSize:120, color:'#448193'});
	},1400);


	
	
	




	//메인페이지 별 움직이기

	//첫번째창
	$('.indi a:nth-of-type(1)').click(function(){	
		
		//좌
		$('.light img:nth-of-type(1)').animate({
			top:'50%', left:'38%'
		});

		$('.light img:nth-of-type(2)').animate({
			top:'90%', left:'36%'
		});

		$('.light img:nth-of-type(3)').animate({
			top:'85%', left:'29%'
		});

		$('.light img:nth-of-type(4)').animate({
			top:'60%', left:'35%'
		});

		$('.light img:nth-of-type(5)').animate({
			top:'52%', left:'30%'
		});

		$('.light img:nth-of-type(6)').animate({
			top:'65%', left:'28%'
		});

		$('.light img:nth-of-type(7)').animate({
			top:'72%', left:'37%'
		});

		$('.light img:nth-of-type(8)').animate({
			top:'75%', left:'33%'
		});
		

		//우
		$('.light img:nth-of-type(9)').animate({
			top:'50%', right:'40%'
		});

		$('.light img:nth-of-type(10)').animate({
			top:'55%', right:'35%'
		});

		$('.light img:nth-of-type(11)').animate({
			top:'62%', right:'32%'
		});

		$('.light img:nth-of-type(12)').animate({
			top:'72%', right:'37%'
		});

		$('.light img:nth-of-type(13)').animate({
			top:'80%', right:'27%'
		});

		$('.light img:nth-of-type(14)').animate({
			top:'88%', right:'34%'
		});

		$('.light img:nth-of-type(15)').animate({
			top:'77%', right:'31%'
		});
	});


	//두번째창(2)
	$('.indi a:nth-of-type(2)').click(function(){	
		
		//좌
		$('.light img:nth-of-type(1)').animate({
			top:'30%', left:'48%'
		});

		$('.light img:nth-of-type(2)').animate({
			top:'42%', left:'52%'
		});

		$('.light img:nth-of-type(3)').animate({
			top:'55%', left:'51%'
		});

		$('.light img:nth-of-type(4)').animate({
			top:'59%', left:'56%'
		});

		$('.light img:nth-of-type(5)').animate({
			top:'52%', left:'58%'
		});

		$('.light img:nth-of-type(6)').animate({
			top:'69%', left:'55%'
		});

		$('.light img:nth-of-type(7)').animate({
			top:'80%', left:'52%'
		});

		$('.light img:nth-of-type(8)').animate({
			top:'83%', left:'54%'
		});
		

		//우
		$('.light img:nth-of-type(9)').animate({
			top:'80%', right:'63%'
		});

		$('.light img:nth-of-type(10)').animate({
			top:'71%', right:'65%'
		});

		$('.light img:nth-of-type(11)').animate({
			top:'62%', right:'69%'
		});

		$('.light img:nth-of-type(12)').animate({
			top:'58%', right:'66%'
		});

		$('.light img:nth-of-type(13)').animate({
			top:'43%', right:'64%'
		});

		$('.light img:nth-of-type(14)').animate({
			top:'47%', right:'68%'
		});

		$('.light img:nth-of-type(15)').animate({
			top:'33%', right:'63%'
		});
	});




	//세번째창(3)
	$('.indi a:nth-of-type(3)').click(function(){	
		
		//좌
		$('.light img:nth-of-type(1)').animate({
			top:'35%', left:'10%'
		});

		$('.light img:nth-of-type(2)').animate({
			top:'48%', left:'8%'
		});

		$('.light img:nth-of-type(3)').animate({
			top:'55%', left:'6%'
		});

		$('.light img:nth-of-type(4)').animate({
			top:'60%', left:'9%'
		});

		$('.light img:nth-of-type(5)').animate({
			top:'48%', left:'22%'
		});

		$('.light img:nth-of-type(6)').animate({
			top:'37%', left:'20%'
		});

		$('.light img:nth-of-type(7)').animate({
			top:'25%', left:'15%'
		});

		$('.light img:nth-of-type(8)').animate({
			top:'28%', left:'12%'
		});
		

		//우
		$('.light img:nth-of-type(9)').animate({
			top:'27%', right:'82%'
		});

		$('.light img:nth-of-type(10)').animate({
			top:'65%', right:'85%'
		});

		$('.light img:nth-of-type(11)').animate({
			top:'63%', right:'77%'
		});

		$('.light img:nth-of-type(12)').animate({
			top:'60%', right:'72%'
		});

		$('.light img:nth-of-type(13)').animate({
			top:'67%', right:'82%'
		});

		$('.light img:nth-of-type(14)').animate({
			top:'55%', right:'73%'
		});

		$('.light img:nth-of-type(15)').animate({
			top:'26%', right:'33.5%'
		});
	});

	
	



	//탑 밀면서 메인사진 밀기쭐이기 
	var imH=$('.im').height(),wt=0;
	$(window).scroll(function(e){
		e.preventDefault();
		wt = $(this).scrollTop();
		
		$('.im').css({top:wt/2});
		//$('.im span').css({top:wt});
			
	});








	






	
	

	
	



	


	//xml------------------------------------------------------
	function listFn(){            //listFn 은 함수명(내마음대로)
		$.ajax({
			url:'web.xml',
			dataType:'text',
			success:function(data){
					
				var img = '', tit='', cata = '', tag='', idx = 0, detail2 = '', detailTag = '';   //전역변수 idx 맨밑에 클릭할떄 하나씩느는걸로 썻음 prev next에서

				$(data).find('item').each(function(i){     //each때문에 각각돌아서 사진이2개가뜸
					
					img = $(this).find('imgsrc').text();		//text가 만약 태그를 끌고오고싶으면 html 이라고 적으면됨
					tit = $(this).find('tit').text();
					cata = $(this).find('cata').text();
					tag += '<li class="grid-item all '+cata+'" name="'+i+'"><img src="'+ img +'" alt=""/>';
					tag += '<div><p>'+tit+'<br/><span>'+cata+'</span></p></div></li>'; 							
					
					detail2 += $(this).find('detail').text()+',';
					
				});					                  							
				
				var bimg2 = detail2.split(',');
				for(var j=0;j<bimg2.length;j++){
					detailTag += '<img src="'+bimg2[j]+'">';	
				}



				$('.grid').html(tag);		
				$('.grid').prepend('<li class="grid-sizer"></li>');

				
				$('.de').html(detailTag);
					
				



				//마소니 그리드 따온것--------------------------------------------
				var ma = null, gcon1 = '', gcon2 = '', gcon3 = '', gcon0 = '', $grid = null;
				

				$grid = $('.grid').masonry({
				  itemSelector: '.grid-item',
				  columnWidth: '.grid-sizer',
				  percentPosition: true
				});
					
				setTimeout(function(){ 
					$grid.masonry('layout');
				},800);


				setTimeout(function(){
					gcon0 = $('.grid li').clone();
					gcon1 = $('.grid').find('.GRAPHIC').clone();
					gcon2 = $('.grid').find('.PROMOTION').clone();
					gcon3 = $('.grid').find('.UIUX').clone();
					
				},500);

				


				var ag = 'all';
				$('.category li').click(function(){
					$('.category li').not(':eq('+$(this).index()+')').removeClass('on');

					var $this = $(this);
					if($(this).attr('class') != 'on'){
						switch($(this).index()){
							case 0 : ag = 'all'; break;
							case 3 : ag = 'UIUX'; break;
							default : ag = $(this).text(); break;
						}
						var gg = eval('gcon'+$(this).index());
						$grid.masonry('remove',$('.grid li'));
						$grid.prepend(gg).masonry('prepended',gg);
												
						$grid.masonry();

						setTimeout(function(){
							//$grid.masonry('reloadItems');
						},300);

						
						$('.category li').eq($this.index()).addClass('on');						
						return ag;
					}
				
				});


				function getItemElement() {
				  var elem = document.createElement('div');
				  var wRand = Math.random();
				  var hRand = Math.random();
				  var widthClass = wRand > 0.8 ? 'grid-item--width3' : wRand > 0.6 ? 'grid-item--width2' : '';
				  var heightClass = hRand > 0.85 ? 'grid-item--height4' : hRand > 0.6 ? 'grid-item--height3' : hRand > 0.35 ? 'grid-item--height2' : '';
				  elem.className = 'grid-item ' + widthClass + ' ' + heightClass;
				  return elem;
				}
				
				//상세페이지 관련--------------------------------------------------- 
			
			
				//$(this).attr('class') == 'GRAPHIC'
			
			

				$('.boot ul').on('click','li',function(){
					
					//화면 스크롤 멈추게하기
					var a = $(window).scrollTop();
					$(window).bind('scroll.test',function(){
						$(this).scrollTop(a);
					});
					$('html,body').css({overflow:'hidden'});

					//누르는거 pop이미지 띄우기
					


					var $this = $(this);
					var imgNum = '';
						imgNum = $(this).attr('name');
					popdata(imgNum);
					function popdata(n){

						var ptit = $(data).find('item').eq(n).find('tit').text();
						var pday = $(data).find('item').eq(n).find('day').text();
						var pcata = $(data).find('item').eq(n).find('cata').text();

						var bigimg = $(data).find('item').eq(n).find('detail').text();
						var bimg = bigimg.split(',');
						var bimgTag = '';
						$('.detail_indi span:last').html('');
						
						
						for(var i=0;i<bimg.length;i++){
							bimgTag += '<a href="#"></a>';	
						}

						$('.changing_img').html('<img src="'+bimg[0]+'">');
						$('.detail_title p').eq(0).text(ptit);
						$('.detail_title p').eq(1).find('span').text(pday);
						$('.detail_title p').eq(1).find('em').text(pcata);
						
						setTimeout(function(){    //이미지를 읽고오는 시간을 벌기위해서 
							$('.black').fadeIn();
							function presize(){
								var a = $('.detail').outerWidth(true);    
								var b = $('.detail').outerHeight(true);  //요소의 높이값을 알고싶을때 쓰고 border, padding값을 포함함. margin값까지 알고싶다면 true를 넣음.

								$('.detail').css({left:$(window).width()/2 - a/2});
									
								if($('.detail').height() < $(window).height()){
									$('.detail').css({top:($(window).height() - b)/2});
								}else{
									$('.detail').css({top:'5%'});
								}

								//$('.prev_next a:first').css({left:($(window).width()/2 - a/2)-150});   //상세페이지 가로사이즈별로 딱중앙에 맞쳐서 보여주기위함
								//$('.prev_next a:last').css({right:($(window).width()/2 - a/2)-150});
							}presize();					

							if(bimg.length > 1){
								$('.detail_indi').show();
								$('.detail_indi p span:first').text('1/'+bimg.length);
								$('.detail_indi span:last').html(bimgTag);
								$('.detail_indi a').eq(0).addClass('on');

								$('.detail_indi').on('click','a',function(){
									$('.detail_indi p span:first').text(($(this).index()+1) +'/'+bimg.length);
									$('.changing_img').html('<img src="'+bimg[$(this).index()]+'">');
									$('.detail_indi a').removeClass('on').eq($(this).index()).addClass('on');
									setTimeout(function(){presize();},100);
								});
							}else{
								$('.detail_indi').hide();
							}
						},100);   /*모바일에서 못잡아서 시간차를 주니까 되기는 됨*/


					}

					$('.prev_next a').click(function(e){
						e.preventDefault();
						//next.
						if($(this).index() > 0){
							if( imgNum != $('.grid li').length-2){
								imgNum = $this.next().attr('name');
								
								if(imgNum != undefined){
									popdata(imgNum);
									update();									
								}
								
							}
						

						//prev.
						}else{
							if( imgNum != 0){
								imgNum = $this.prev().attr('name');
								
								if(imgNum != undefined){
									popdata(imgNum);
									update();
								}
							}
							

						}
					});

					function update(){
						$('.grid .'+ag).each(function(i){
							
							if($(this).attr('name') == imgNum){
								if(ag != 'all'){
									$this = $('.grid li').eq(i);
								}else{
									$this = $('.grid li').eq(i+1);
								}								
							}
						});
						
					}	



				});
				

				//x표누르면 끄기
				$('.XXX').click(function(){
					$('.black').hide();
					$(window).unbind('.test');
					$('html,body').css({overflow:'visible'});
				});


				
				//상세페이지에서 2번페이지있을때 컨텐츠만눌러도 2페이지로 넘어가기
				$('.changing_img').click(function(){
					$('.detail_indi span:nth-of-type(2) a:nth-of-type(2)').trigger('click');
				});
				



			},
			error:function(){
				alert('호출실패');
			}

		});
	}

	listFn();    



	
	


















	//모바일 버거메뉴
	var burger = $('.menu-trigger');

	burger.each(function(index){
		var $this = $(this);
		
		$this.on('click', function(e){
			e.preventDefault();
			$(this).toggleClass('active-' + (index+7));
		})
	});


	$('.menu-trigger').click(function(){
		$(this).toggleClass('on');

		if($(this).hasClass('on')){
			$('.menu ul').slideDown();
		}else{
			$('.menu ul').slideUp();
		}
		
		
	});









	//모바일에서만 적용하기-----------------------------------------------
	
	//제목글씨
	setTimeout(function(){
		if($(window).width() < 480){
			$(".title p span").css({fontSize:50, color:'#448193',
				lineHeight:0
			});
		}
	},1400);
	
	


	//네비게이션 고정하기
	$(window).scroll(function(e){
		e.preventDefault();
		var nav = $(this).scrollTop();
		
		if($(window).width() < 480){
			$('.menu p').css({opacity:0.8});
		}

	});


	



	//네비의 메뉴 누르면 해당 위치로 가지기

	$('.menu ul li:nth-of-type(1) a').click(function(){	
		
		dd = $('.section_main').offset().top;
		cc = $('.section_main').offset().top - $('header').height();
		//모바일
		if($(window).width() < 480){
			$('body,html').animate({
				scrollTop:cc
			},300);

		//PC버전
		}else{
			$('body,html').animate({
				scrollTop:dd
			},300);
		}
	});


	
	$('.menu ul li:nth-of-type(2) a').click(function(){	
		dd = $('.section2').offset().top;
		cc = $('.section2').offset().top - 60;
		//모바일
		if($(window).width() < 480){
			$('body,html').animate({
				scrollTop:cc
			},300);

		//PC버전
		}else{
			$('body,html').animate({
				scrollTop:dd
			},300);
		}
	});



	$('.menu ul li:nth-of-type(3) a').click(function(){	
		dd = $('.section4').offset().top;
		cc = $('.section4').offset().top - 60;
		//모바일
		if($(window).width() < 480){
			$('body,html').animate({
				scrollTop:cc
			},300);

		//PC버전
		}else{
			$('body,html').animate({
				scrollTop:dd
			},300);
		}
	});


	$('.menu ul li:nth-of-type(4) a').click(function(){	
		dd = $('.section5').offset().top;
		$('body,html').animate({
			scrollTop:dd
		},300);
	});




















	//About_me  section2부분 
	$(window).scroll(function(e){
		e.preventDefault();
		var abm = $(this).scrollTop();


		if($(window).width() < 480){
			if(abm > 250){
				$('.About_me').css({
					marginTop:40, opacity:1
				});
	
				$('.Skill').css({opacity:1});
				$('.Hobbies dd').html('배드민턴 <br>Walking in nature');   //글짜 엔터치고싶을떄
				
			}	


			if(abm > 380){
				$('.License_Hobbies').css({opacity:1});
			}


			if(abm > 510){
				$('.Education').css({opacity:1});
			}

		
		//여기서의 else는 PC임!!!! 이곳에 넣은이유는 <pc와 모바일> 을 편하게 구분하기 위해서!!
		}else{
			
			
			//제목부분 about me PC에서먹힐곳
			
				e.preventDefault();
				var ab = $(this).scrollTop();
				if(ab > 370){
					$('.About_me').css({marginTop:130, opacity:1});
					
					//첫번째글부분
					setTimeout(function(){
						$('.Profile').css({marginLeft:0, opacity:1});
						$('.Skill').css({marginBottom:0, opacity:1});
						
						setTimeout(function(){
						$('.License_Hobbies').css({marginTop:0, opacity:1});
						$('.Education').css({marginTop:0, opacity:1});
						},700);
					},700);
				}
			
			



		}//else pc버전


	});






	//중간에 좌우명 글씨부분
	$(window).scroll(function(e){
		e.preventDefault();

		var midd = $(this).scrollTop();

		//모바일
		if($(window).width() < 480){
			
			//글씨올라오기
			if(midd > 750){
				$('.section3 p:nth-of-type(1)').css({
					marginTop:0, opacity:1
				});
			}
			
			//위로올리면 색돌아오기
			if(midd < 840){	
				$('.section3 p:nth-of-type(1) span').css({
					textShadow:'2px 2px 5px red',
					fontSize:'8vw'
				});

				$('.section3 p:nth-of-type(1) em').css({
					textShadow:'2px 2px 5px #5d8a9d',
					fontSize:'5vw'
				});

				$('.section3 p:nth-of-type(1) strong').css({
					textShadow:'2px 2px 5px #5d8a9d',
					fontSize:'5vw'
				});

				$('.section3 p:nth-of-type(1) b').css({
					textShadow:'2px 2px 5px #5d8a9d',
					fontSize:'5vw'
				});
			}



			//높이에 따라 색깔변하기
			if(midd > 840 && midd <930){
				$('.section3 p:nth-of-type(1) span').css({
					textShadow:'2px 2px 5px #5d8a9d',
					fontSize:'5vw'
				});

				$('.section3 p:nth-of-type(1) em').css({
					textShadow:'2px 2px 5px red',
					fontSize:'8vw'

				});

				$('.section3 p:nth-of-type(1) strong').css({
					textShadow:'2px 2px 5px #5d8a9d',
					fontSize:'5vw'
				});

				$('.section3 p:nth-of-type(1) b').css({
					textShadow:'2px 2px 5px #5d8a9d',
					fontSize:'5vw'
				});
			}

			
			if(midd > 930 && midd <1020){
				$('.section3 p:nth-of-type(1) span').css({
					textShadow:'2px 2px 5px #5d8a9d',
					fontSize:'5vw'
				});

				$('.section3 p:nth-of-type(1) em').css({
					textShadow:'2px 2px 5px #5d8a9d',
					fontSize:'5vw'
				});

				$('.section3 p:nth-of-type(1) strong').css({
					textShadow:'2px 2px 5px red',
					fontSize:'8vw'
				});

				$('.section3 p:nth-of-type(1) b').css({
					textShadow:'2px 2px 5px #5d8a9d',
					fontSize:'5vw'
				});
			}


			if(midd > 1020 && midd < 1110){
				$('.section3 p:nth-of-type(1) span').css({
					textShadow:'2px 2px 5px #5d8a9d',
					fontSize:'5vw'
				});

				$('.section3 p:nth-of-type(1) em').css({
					textShadow:'2px 2px 5px #5d8a9d',
					fontSize:'5vw'
				});

				$('.section3 p:nth-of-type(1) strong').css({
					textShadow:'2px 2px 5px #5d8a9d',
					fontSize:'5vw'
				});

				$('.section3 p:nth-of-type(1) b').css({
					textShadow:'2px 2px 5px red',
					fontSize:'8vw'
				});
			}

			if(midd > 1110){
				$('.section3 p:nth-of-type(1) b').css({
					textShadow:'2px 2px 5px red',
					fontSize:'8vw'
				});
			}

		
		}else{  //모바일
		
		
			//section3 중간 사진부분 모바일부분임 
	
			var mid = $(this).scrollTop();
			
			//글씨올라오기
			if(mid > 1600){
				$('.section3 p:nth-of-type(1)').css({
					marginTop:0, opacity:1
				});
			}
			


			//위로올리면 색돌아오기
			if(mid < 1700){	
				$('.section3 p:nth-of-type(1) span').css({
					textShadow:'2px 2px 5px red',
					fontSize:'68px'
				});

				$('.section3 p:nth-of-type(1) em').css({
					textShadow:'2px 2px 5px #5d8a9d',
					fontSize:'50px'
				});

				$('.section3 p:nth-of-type(1) strong').css({
					textShadow:'2px 2px 5px #5d8a9d',
					fontSize:'50px'
				});

				$('.section3 p:nth-of-type(1) b').css({
					textShadow:'2px 2px 5px #5d8a9d',
					fontSize:'50px'
				});
			}



			//높이에 따라 색깔변하기
			if(mid > 1700 && mid <1880){
				$('.section3 p:nth-of-type(1) span').css({
					textShadow:'2px 2px 5px #5d8a9d',
					fontSize:'50px'
				});

				$('.section3 p:nth-of-type(1) em').css({
					textShadow:'2px 2px 5px red',
					fontSize:'68px'

				});

				$('.section3 p:nth-of-type(1) strong').css({
					textShadow:'2px 2px 5px #5d8a9d',
					fontSize:'50px'
				});

				$('.section3 p:nth-of-type(1) b').css({
					textShadow:'2px 2px 5px #5d8a9d',
					fontSize:'50px'
				});
			}

			
			if(mid > 1880 && mid <2060){
				$('.section3 p:nth-of-type(1) span').css({
					textShadow:'2px 2px 5px #5d8a9d',
					fontSize:'50px'
				});

				$('.section3 p:nth-of-type(1) em').css({
					textShadow:'2px 2px 5px #5d8a9d',
					fontSize:'50px'
				});

				$('.section3 p:nth-of-type(1) strong').css({
					textShadow:'2px 2px 5px red',
					fontSize:'68px'
				});

				$('.section3 p:nth-of-type(1) b').css({
					textShadow:'2px 2px 5px #5d8a9d',
					fontSize:'50px'
				});
			}


			if(mid > 2060 && mid <2240){
				$('.section3 p:nth-of-type(1) span').css({
					textShadow:'2px 2px 5px #5d8a9d',
					fontSize:'50px'
				});

				$('.section3 p:nth-of-type(1) em').css({
					textShadow:'2px 2px 5px #5d8a9d'
				});

				$('.section3 p:nth-of-type(1) strong').css({
					textShadow:'2px 2px 5px #5d8a9d',
					fontSize:'50px'
				});

				$('.section3 p:nth-of-type(1) b').css({
					textShadow:'2px 2px 5px red',
					fontSize:'63px'
				});
			}

			if(mid > 2240){
				$('.section3 p:nth-of-type(1) b').css({
					textShadow:'2px 2px 5px #5d8a9d',
					fontSize:'50px'
				});
			}

		

	


		
		
		}//if
	

	});//전체



	










//end
});















/*대박 어려움 공부하기

	
마우스 스크롤하면 딱가지고   마지막 footer까지도 딱가지고 위로올리면 딱200만큼 올라가고 가지게하는 것


	마우스 스크롤하면 컨텐츠에 맞쳐서 세로로 가지게 하기
	var cc=0,dd=0;
	$('.indi a').eq(0).addClass('on');     //처음에 Home 인디 보이게하려고

	$('section').on('mousewheel DOMMouseScroll',function(e){           //마우스 스크롤 명령,  e는 넣어줘야함 이벤트발생.. wheelDelta는 폭스브라우저에서 먹히게하기위함
		
		var aa = e.originalEvent.wheelDelta; //올릴땐 120씩  내릴떈 -120씩으로 정해짐
		var bb =0;
		$('.indi a').removeClass('on');    //선택한창 외에는 모든 인디를 가릴려고

	//if는 <0때문에 마우스를 내릴경우		
		if(aa < 0){										//-가 휠을 내릴 때라 ( 0보다 작을경우라고함)
			if($(this).index() != 2){           //에러방지
				bb = $(this).next().offset().top - $('header').height();       //offset은 위치잡기,  top을 헤드높이값만큼뺀이유는 화면에 딱맞쳐서 보이게할려고
			    
				//마우스내리면 indi 가 같이 따라서 열리게하기
				$('.indi a').eq($(this).next().index()).addClass('on');
				
			}else{            //2가됬을때 즉 section3이 됬을때   (footer부분)
				bb = '+=200';
				cc = 1;		       //1='on'같은것  footer에서 올릴때 게시판으로만 가졌다가 다시가게할려고 cc구문넣었음

				$('.indi a').eq(3).addClass('on');
			}


	//else는 마우스 올릴경우
		}else{  
			if($(this).index() !=0 ){       //에러방지
				if(cc == 1){
					bb = '-=200';              //cc가1일때 bb가 다시 -200으로
					cc = 0;
					
					$('.indi a').eq(2).addClass('on');
				}else{	
					bb=$(this).prev().offset().top - $('header').height();

					//마우스올리면 indi 가 같이 따라서 열리게하기
					$('.indi a').eq($(this).prev().index()).addClass('on');
				}
			}
		}


//전체명령구문..?
		$('body,html').animate({      
			scrollTop:bb     
		},{queue:false});    //queue는 여러번 내릴때 하나씩만 움직이게 할려고 하는 안전장치
	});

---------------------------------------------------------------
 대박어려움 공부하기 */





