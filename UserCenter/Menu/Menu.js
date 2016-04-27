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
  //翻页
  onHandlePageClick: function(action) {
    var newState = Object.assign({},this.state);
    var totalResult = newState.UserInfo.data.length; //数据总条数
    var epage = 10; //每页条数
    var totalPage = parseInt(totalResult/epage) + 1; // 总页数
    if (action === 'down') {
      console.log(totalPage)
    } else {
      console.log(1);
    }
    this.setState(newState);
  },
  // 删除
  onHandleDel: function (index) {
    console.log(1);
  },
  render: function () {
    const Child = this.props.children;
    const ChildName = Child.type.displayName || Child.type.name;
    var eara;
    eara={onHandleClick: this.onHandleClick, onHandleDel: this.onHandleDel};
    return (
      <div className="Main">
          <p className="MainTitle">力美健身后台管理<span className="LoginOut">退出</span></p>
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
        <PageAction onHandlePageClick={this.onHandlePageClick}/>
      </div>
    )
  }
});
export default Menu;