define("bundles/asset-admin/components/AssetsList",["require","exports","module","react","underscore","i18n!nls/asset-admin","./AssetItem","css!./__styles__/AssetsList"],function(require,exports,module){"use strict";function _defaults(e,n){for(var o=Object.getOwnPropertyNames(n),t=0;t<o.length;t++){var s=o[t],r=Object.getOwnPropertyDescriptor(n,s);r&&r.configurable&&void 0===e[s]&&Object.defineProperty(e,s,r)}return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):_defaults(t,e))}var t,s,e=require("react"),_=require("underscore"),r=require("i18n!nls/asset-admin"),n=require("./AssetItem");require("css!./__styles__/AssetsList");var o=(s=t=function(t){function AssetsList(){return _classCallCheck(this,AssetsList),_possibleConstructorReturn(this,t.apply(this,arguments))}return _inherits(AssetsList,t),AssetsList.prototype.render=function render(){var t=this.props,s=t.assets,r=t.selectedAssets,o=t.allowMultiple,a=t.emptyMessage;return e.createElement("ol",{className:"rc-AssetsList"},_(s).isEmpty()?e.createElement("li",{className:"empty-assets-message"},a):_(s).map(function(t){if(_(t.tags).find({name:"listed",value:"true"})){var s=AssetsList.isSelected(r,t);return e.createElement("li",{className:"asset-item",key:t.id},e.createElement(n,{asset:t,isSelected:s,allowMultiple:o}))}}))},AssetsList}(e.Component),t.propTypes={assets:e.PropTypes.array,selectedAssets:e.PropTypes.array,allowMultiple:e.PropTypes.bool,emptyMessage:e.PropTypes.string},t.defaultProps={emptyMessage:r("You haven’t uploaded any assets yet.")},t.isSelected=function(e,t){return!_(e).chain().where({id:t.id}).isEmpty().value()},s);module.exports=o});