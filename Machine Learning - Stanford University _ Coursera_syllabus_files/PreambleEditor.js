define("bundles/author-code-evaluator/components/PreambleEditor",["require","exports","module","react","bundles/phoenix/components/CodeEditor","i18n!nls/author-code-evaluator"],function(require,exports,module){"use strict";function _defaults(e,o){for(var a=Object.getOwnPropertyNames(o),t=0;t<a.length;t++){var r=a[t],n=Object.getOwnPropertyDescriptor(o,r);n&&n.configurable&&void 0===e[r]&&Object.defineProperty(e,r,n)}return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):_defaults(t,e))}var t,r,e=require("react"),o=require("bundles/phoenix/components/CodeEditor"),n=require("i18n!nls/author-code-evaluator"),a=(r=t=function(t){function PreambleEditor(){return _classCallCheck(this,PreambleEditor),_possibleConstructorReturn(this,t.apply(this,arguments))}return _inherits(PreambleEditor,t),PreambleEditor.prototype.render=function render(){var t=this.props,r=t.preamble,a=t.language,i=t.onChange;return e.createElement("div",{className:"rc-PreambleEditor"},e.createElement("h3",{style:{paddingTop:20,paddingBottom:5},className:"headline-2-text"},n("Preamble Code")),e.createElement("div",{className:"caption-text",style:{paddingBottom:10}},n("This code will be executed as a pre-requisite before the learner's code gets executed.")),e.createElement(o,{value:r,language:a,onChange:i}))},PreambleEditor}(e.Component),t.propTypes={preamble:e.PropTypes.string.isRequired,language:e.PropTypes.string.isRequired,onChange:e.PropTypes.func.isRequired},r);module.exports=a});