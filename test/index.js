/* globals before, after, describe, it, beforeEach */
'use strict';

// Dependencies
import mixin from '..';

let MyMixin = {
  componentDidMount() {
    return 'MyMixin.componentDidMount';
  },
  componentWillUnmount() {
    return 'MyMixin.componentWillUnmount';
  }
};

describe('@mixin', () => {
  it('should automatically cascade react component methods from mixins', () => {
    @mixin(MyMixin)
    class MyComponent {
      componentDidMount() {
        return 'MyComponent.componentDidMount';
      }
      
      myCustomFunction() {
        return 'MyComponent.myCustomFunction';
      }
    }

    let myComponent = new MyComponent(),
      mountReturn = myComponent.componentDidMount();

    mountReturn[0].should.be.equal('MyMixin.componentDidMount');
    mountReturn[1].should.be.equal('MyComponent.componentDidMount');
    myComponent.componentWillUnmount().should.be.equal('MyMixin.componentWillUnmount');
    myComponent.myCustomFunction().should.be.equal('MyComponent.myCustomFunction');
  });
});
