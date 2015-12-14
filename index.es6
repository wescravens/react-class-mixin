'use strict';

import {mixin as baseMixin, cascade, override} from 'class-decorators';

const COMPONENT_PROPS = new Set([
  'render',
  'getInitialState',
  'getDefaultProps',
  'propTypes',
  'mixins',
  'statics',
  'displayName',
  'componentWillMount',
  'componentDidMount',
  'componentWillReceiveProps',
  'shouldComponentUpdate',
  'componentWillUpdate',
  'componentDidUpdate',
  'componentWillUnmount'
]);

export default function mixin (...mixins) {
  return function (TargetClass) {
    const targetProto = TargetClass.prototype;
    const targetPropNames = Object.getOwnPropertyNames(targetProto);
    const targetComponentPropNames = targetPropNames.filter(prop => {
      return COMPONENT_PROPS.has(prop);
    });

    targetComponentPropNames.forEach(propName => cascade(TargetClass.prototype, propName));
    return baseMixin(...mixins)(TargetClass);
  };
};

export {cascade, override} from 'class-decorators';


