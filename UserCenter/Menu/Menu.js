import React from 'react';
import Home from './Home.js';
import PageAction from './PageAction.js';
var Menu =  React.createClass({
  getInitialState: function () {
    return {
      UserInfo: {
        data: []
    },
      FitArticle: {
          data: [
          {auter: 'me', title: '111', type: '动作', time: '2016', content: 'test', text: '11111'}
        ]
      },
      Video: {
          data: [
          {auter: 'me1', title: '111', type: '动作', time: '2016', content: 'test', text: '11111'},
          {auter: 'me2', title: '111', type: '养剂', time: '2016', content: 'test', text: '11111'}
        ]
      },
      Message: {
          data: [
          {auter: 'me', title: '111', type: '动作', time: '2016', content: 'test', text: '11111'},
          {auter: 'me', title: '111', type: '养剂', time: '2016', content: 'test', text: '11111'}
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
        {auter: 'me1',title: '111', type: '动作', time: '2016',content: 'test',text: '11111'}
        ];
    } else if (type === '2'){
      newState.FitArticle.data = [
        {auter: 'me2',title: '111', type: '计划', time: '2016',content: 'test',text: '11111'},
        {auter: 'me2',title: '111', type: '计划', time: '2016',content: 'test',text: '11111'}
        ];
    } else{
      newState.FitArticle.data = [
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
  onHandleDel: function (id) {
    fetch('/api/videoDel.php',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(id)
    })
  },
  fetchUserInfo: function () {
    let  newState = Object.assign({},this.state.UserInfo);
    fetch('/api/list.php')
    .then((res) => res.json())
    .then((res) => {
      newState.data = res.result;
    });
    this.setState({UserInfo: newState});
  },
  render: function () {
    const Child = this.props.children;
    const ChildName = Child.type.displayName || Child.type.name;

    let extra;
    switch (ChildName) {
      case 'UserInfo':
        extra = { fetchUserInfo: this.fetchUserInfo };
        break;
      case 'FitArticle':
        extra = {};
        break;
      case 'Video':
        extra = {};
        break;
      case 'Message':
        extra = {};
        break;
      default:
        extra = {};
    }

    return (
      <div className="Main">
          <p className="MainTitle">力美健身后台管理<span className="LoginOut">退出</span></p>
        <div className="MainContent">
          <Home fetchUserInfo={this.fetchUserInfo}/>
          {
            React.cloneElement(
            Child, 
            Object.assign({},
            this.state[ChildName],
            {
              onHandleClick: this.onHandleClick,
              onHandleDel: this.onHandleDel,
            },
            extra
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