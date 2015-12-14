# react-class-mixin
Adds mixin support to React components that are declared as ES6 classes


### Usage

`react-class-mixin` is built on top of [class-decorators](https://github.com/wescravens/class-decorators).  It automatically decorates the following methods with `@cascade`.

```
render
getInitialState
getDefaultProps
propTypes
mixins
statics
displayName
componentWillMount
componentDidMount
componentWillReceiveProps
shouldComponentUpdate
componentWillUpdate
componentDidUpdate
componentWillUnmount
```