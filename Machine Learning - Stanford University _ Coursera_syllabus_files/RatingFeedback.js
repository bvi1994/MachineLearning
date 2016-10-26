define("bundles/content-feedback/models/RatingFeedback",["require","exports","module","./Feedback","bundles/cml/utils/CMLUtils"],function(require,exports,module){"use strict";function _defaults(e,o){for(var i=Object.getOwnPropertyNames(o),t=0;t<i.length;t++){var n=i[t],r=Object.getOwnPropertyDescriptor(o,n);r&&r.configurable&&void 0===e[n]&&Object.defineProperty(e,n,r)}return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):_defaults(t,e))}var t=function(){function defineProperties(r,n){for(var t=0;t<n.length;t++){var e=n[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(r,e.key,e)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),n=require("./Feedback"),e=require("bundles/cml/utils/CMLUtils"),r=function(n){function RatingFeedback(r,o,t,i,c){_classCallCheck(this,RatingFeedback);var u=5,a={rating:{value:r,maxValue:u,active:o},comments:t&&!e.isEmpty(t)?{generic:t}:{},timestamp:i,id:c};return _possibleConstructorReturn(this,n.call(this,a))}return _inherits(RatingFeedback,n),RatingFeedback.prototype.hasComment=function hasComment(){return this.comment&&!e.isEmpty(this.comment)},t(RatingFeedback,[{key:"comment",get:function get(){return this.comments&&this.comments.generic}}]),RatingFeedback}(n);module.exports=r});