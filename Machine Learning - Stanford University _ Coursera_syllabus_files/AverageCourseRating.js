define("bundles/content-feedback/components/rating-dashboard/AverageCourseRating",["require","exports","module","react","bundles/content-feedback/components/rating/CourseRatingIcons","bundles/content-feedback/models/CourseRatingStats","js/lib/coursera.react-intl","i18n!nls/content-feedback","css!./__styles__/AverageCourseRating"],function(require,exports,module){"use strict";function _defaults(e,o){for(var a=Object.getOwnPropertyNames(o),t=0;t<a.length;t++){var n=a[t],r=Object.getOwnPropertyDescriptor(o,n);r&&r.configurable&&void 0===e[n]&&Object.defineProperty(e,n,r)}return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):_defaults(t,e))}var t,n,e=require("react"),o=require("bundles/content-feedback/components/rating/CourseRatingIcons"),a=require("bundles/content-feedback/models/CourseRatingStats"),r=require("js/lib/coursera.react-intl"),s=r.FormattedNumber,c=r.FormattedHTMLMessage,i=require("i18n!nls/content-feedback");require("css!./__styles__/AverageCourseRating");var u=(n=t=function(t){function AverageCourseRating(){return _classCallCheck(this,AverageCourseRating),_possibleConstructorReturn(this,t.apply(this,arguments))}return _inherits(AverageCourseRating,t),AverageCourseRating.prototype.render=function render(){var n=this.props.courseRatingStats,t=n.averageRating,r=n.totalCount;return e.createElement("div",{className:"rc-AverageCourseRating"},e.createElement("div",{className:"c-average-course-rating-icons"},e.createElement(o,{value:t,size:"large"}),this.props.showCount&&e.createElement("h2",{className:"c-course-rating-count"},e.createElement(s,{value:r}))),!!t&&e.createElement("div",{className:"c-average-course-rating-stats"},e.createElement(c,{message:i("<strong>{value}</strong> out of 5"),value:t})))},AverageCourseRating}(e.Component),t.propTypes={courseRatingStats:e.PropTypes.instanceOf(a).isRequired,showCount:e.PropTypes.bool},t.defaultProps={showCount:!0},n);module.exports=u});