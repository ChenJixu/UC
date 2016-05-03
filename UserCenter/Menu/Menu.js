import React from 'react';
import Home from './Home.js';
import { Link } from 'react-router';
import PageAction from './PageAction.js';
var Menu =  React.createClass({
  getInitialState: function () {
    return {
      UserInfo: {
        data: []
    },
      FitArticle: {
          data: []
      },
      Video: {
          data: []
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
    fetch('/api/userList.php',{
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        pageIndex: 0,
        pageSize: 10
      })
    })
    .then((res) => res.json())
    .then((res) => {
      newState.data = res.result;
    });
    this.setState({UserInfo: newState});
  },
  fetchFitArticle: function() {
    let  newState = Object.assign({},this.state.FitArticle);
    fetch('/api/articleList.php',{
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        pageIndex: 0,
        pageSize: 10
      })
    })
    .then((res) => res.json())
    .then((res) => {
      newState.data = res.result;
    });
    this.setState({FitArticle: newState});
  },
  
  fetchVideo: function() {
    let  newState = Object.assign({},this.state.Video);
    fetch('/api/videoList.php',{
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        pageIndex: 0,
        pageSize: 10
      })
    })
    .then((res) => res.json())
    .then((res) => {
      newState.data = res.result;
    });
    this.setState({Video: newState});
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
        extra = { fetchFitArticle: this.fetchFitArticle};
        break;
      case 'Video':
        extra = {fetchVideo: this.fetchVideo};
        break;
      case 'Message':
        extra = {};
        break;
      default:
        extra = {};
    }

    return (
      <div className="Main">
          <p className="MainTitle">力美健身后台管理
            <a href="http://localhost/fitnessweb/sysHome/sysLogin.php"><span className="LoginOut">退出</span></a>
          </p>
        <div className="MainContent">
          <Home/>
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