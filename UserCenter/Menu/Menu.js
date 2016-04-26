import React from 'react';
import Home from './Home.js';
import PageAction from './PageAction.js';
var Menu =  React.createClass({
  getInitialState: function () {
    return {
      UserInfo: {
        data: [
        {auter: 'm111e', title: '111', type: '动作', time: '2016', content: 'test'},
        {auter: 'me111', title: '111', type: '养剂', time: '2016', content: 'test'},
        {auter: 'm11e', title: '111', type: '动作', time: '2016', content: 'test'},
        {auter: 'me', title: '111', type: '计划', time: '2016', content: 'test'},
        {auter: 'me', title: '111', type: '计划', time: '2016', content: 'test'},
        {auter: 'me', title: '111', type: '计划', time: '2016', content: 'test'},
        {auter: 'me', title: '111', type: '计划', time: '2016', content: 'test'},
        {auter: 'me', title: '111', type: '计划', time: '2016', content: 'test'},
        {auter: 'me', title: '111', type: '计划', time: '2016', content: 'test'},
        {auter: 'me', title: '111', type: '计划', time: '2016', content: 'test'},
        {auter: 'me', title: '111', type: '计划', time: '2016', content: 'test'},
        {auter: 'me', title: '111', type: '计划', time: '2016', content: 'test'},
      ]
    },
      FitArticle: {
          data: [
          {auter: 'me', title: '111', type: '动作', time: '2016', content: 'test', text: '11111'},
          {auter: 'me', title: '111', type: '养剂', time: '2016', content: 'test', text: '11111'},
          {auter: 'me', title: '111', type: '动作', time: '2016', content: 'test', text: '11111'},
          {auter: 'me', title: '111', type: '计划', time: '2016', content: 'test', text: '11111'}
        ]
      },
      Video: {
          data: [
          {auter: 'me1', title: '111', type: '动作', time: '2016', content: 'test', text: '11111'},
          {auter: 'me2', title: '111', type: '养剂', time: '2016', content: 'test', text: '11111'},
          {auter: 'm3e', title: '111', type: '动作', time: '2016', content: 'test', text: '11111'},
          {auter: 'm4e', title: '111', type: '计划', time: '2016', content: 'test', text: '11111'}
        ]
      },
      Message: {
          data: [
          {auter: 'me', title: '111', type: '动作', time: '2016', content: 'test', text: '11111'},
          {auter: 'me', title: '111', type: '养剂', time: '2016', content: 'test', text: '11111'},
          {auter: 'me', title: '111', type: '动作', time: '2016', content: 'test', text: '11111'},
          {auter: 'me', title: '111', type: '计划', time: '2016', content: 'test', text: '11111'}
        ]
      },
    } 
  },
  onHandleClick: function (type) {
    var newState = Object.assign({}, this.state);
    if (type === '0')　{
      newState;
    } else if (type === '1'){
      newState.FitArticle.data=[
        {auter: 'me1',title: '111', type: '动作', time: '2016',content: 'test',text: '11111'},
        {auter: 'me1',title: '111', type: '动作', time: '2016',content: 'test',text: '11111'},
        {auter: 'me1',title: '111', type: '动作', time: '2016',content: 'test',text: '11111'},
        {auter: 'me1',title: '111', type: '动作', time: '2016',content: 'test',text: '11111'},
        {auter: 'me1',title: '111', type: '动作', time: '2016',content: 'test',text: '11111'}
        ];
    } else if (type === '2'){
      newState.FitArticle.data = [
        {auter: 'me2',title: '111', type: '计划', time: '2016',content: 'test',text: '11111'},
        {auter: 'me2',title: '111', type: '计划', time: '2016',content: 'test',text: '11111'},
        {auter: 'me2',title: '111', type: '计划', time: '2016',content: 'test',text: '11111'},
        {auter: 'me2',title: '111', type: '计划', time: '2016',content: 'test',text: '11111'}
        ];
    } else{
      newState.FitArticle.data = [
        {auter: 'me2',title: '111', type: '营养', time: '2016',content: 'test',text: '11111'},
        {auter: 'me2',title: '111', type: '营养', time: '2016',content: 'test',text: '11111'},
        {auter: 'me2',title: '111', type: '营养', time: '2016',content: 'test',text: '11111'},
        {auter: 'me2',title: '111', type: '营养', time: '2016',content: 'test',text: '11111'}
      ]
    }
    this.setState(newState.FitArticle);
  },
  render: function () {
    const Child = this.props.children;
    const ChildName = Child.type.displayName || Child.type.name;
    var eara;
    eara={onHandleClick: this.onHandleClick};
    return (
      <div className="Main">
        <p className="MainTitle">力美健身后台管理</p>
        <div className="MainContent">
          <Home />
          {
            React.cloneElement(
            Child, 
            Object.assign({},
            this.state[ChildName],
            eara
            )
           )
          }
        </div>
        <PageAction />
      </div>
    )
  }
});
export default Menu;