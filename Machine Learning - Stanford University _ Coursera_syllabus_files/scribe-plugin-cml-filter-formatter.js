define("bundles/scribe-plugins/scribe-plugin-cml-filter-formatter",["require","exports","module","jquery","underscore","bundles/cml/models/CMLToHTMLConverter","bundles/cml/models/HTMLToCMLConverter"],function(require,exports,module){"use strict";var $=require("jquery"),_=require("underscore"),r=require("bundles/cml/models/CMLToHTMLConverter"),n=require("bundles/cml/models/HTMLToCMLConverter"),e="text/html",o="text/plain",t=function pasteText(t,r){var e=r.getData(o);e=$("<div/>").text(e).html(),e=e.replace(/[\n]+/g,"<p>"),t.insertHTML(e)},a=function getHTMLAfterInsert(e,r){var t=new e.api.Selection;t.placeMarkers();var n=e.getHTML();e.insertHTML(r);var o=e.getHTML();return e.setHTML(n),t.selectMarkers(),e.el.focus(),o},s=function pasteHTML(o,s){var l=s.getData(e),i=a(o,l),c=new n,u=new r;try{var p=c.toCML(i,!0);i=u.toHTML(p),o.insertHTML(l)}catch(d){console.log("HTML formatting not supported, pasting as text.",d),t(o,s)}};module.exports=function(){return function(r){r.el.addEventListener("paste",function(n){if(n.preventDefault(),n.stopPropagation(),n.clipboardData){var o=n.clipboardData;_(o.types).contains(e)?s(r,o):t(r,o)}}),r.el.addEventListener("drop",function(e){e.preventDefault(),e.stopPropagation()})}}});