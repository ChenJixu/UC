import React from 'react';
import Home from '../Menu/Home/index.js';
import Account from '../Menu/Account/index.js';

export default React.createClass({
  render: function () {
    // const Child = this.props.children;
    // const ChildName = Child.type.displayName || Child.type.name;
    return (
      <div style={{display: 'flex'}}>
        <Home />
        {this.props.children}
      </div>
    )
  }
});