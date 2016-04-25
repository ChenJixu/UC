import React from 'react';
import Home from '../Menu/Home/index.js';
import FitArticle from '../Menu/FitArticle/index.js';

export default React.createClass({
  getInitialState: function () {
    var res = {
      data: {
        auter: 'me',
        title: '111',
        time: '2016',
        content: 'test',
        text: '11111'
      }
    };
    return res;
  },
  onHandleClick: function (type) {
    var newState = Object.assign({}, this.state);
    if (type === '0')　{
      newState;
    } else if (type === '1'){
      newState.data={
        auter: 'me1',
        title: '111',
        time: '2016',
        content: 'test',
        text: '11111'};
    } else if (type === '2'){
      newState.data = {
        auter: 'me2',
        title: '111',
        time: '2016',
        content: 'test',
        text: '11111'};
    } else{
      newState.data = {
        auter: 'me3',
        title: '111',
        time: '2016',
        content: 'test',
        text: '11111'};;
    }
    this.setState(newState);
  },
  render: function () {
    const Child = this.props.children;
    // const ChildName = Child.type.displayName || Child.type.name;
    var eara;
    eara={onHandleClick: this.onHandleClick};
    return (
      <div>
        <p style={{background: '#ccc'}}>力美健身后台管理</p>
        <div style={{display: 'flex'}}>
          <Home />
          {React.cloneElement(
            Child, 
            Object.assign({},
            this.state,
            eara
            ))}
        </div>
      </div>
    )
  }
});