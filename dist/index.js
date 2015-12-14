'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.override = exports.cascade = undefined;
exports.default = mixin;

var _classDecorators = require('class-decorators');

Object.defineProperty(exports, 'cascade', {
  enumerable: true,
  get: function get() {
    return _classDecorators.cascade;
  }
});
Object.defineProperty(exports, 'override', {
  enumerable: true,
  get: function get() {
    return _classDecorators.override;
  }
});

var COMPONENT_PROPS = new Set(['render', 'getInitialState', 'getDefaultProps', 'propTypes', 'mixins', 'statics', 'displayName', 'componentWillMount', 'componentDidMount', 'componentWillReceiveProps', 'shouldComponentUpdate', 'componentWillUpdate', 'componentDidUpdate', 'componentWillUnmount']);

function mixin() {
  for (var _len = arguments.length, mixins = Array(_len), _key = 0; _key < _len; _key++) {
    mixins[_key] = arguments[_key];
  }

  return function (TargetClass) {
    var targetProto = TargetClass.prototype;
    var targetPropNames = Object.getOwnPropertyNames(targetProto);
    var targetComponentPropNames = targetPropNames.filter(function (prop) {
      return COMPONENT_PROPS.has(prop);
    });

    targetComponentPropNames.forEach(function (propName) {
      return (0, _classDecorators.cascade)(TargetClass.prototype, propName);
    });
    return _classDecorators.mixin.apply(undefined, mixins)(TargetClass);
  };
};
