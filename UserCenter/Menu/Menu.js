import React from 'react';
import Home from './Home.js';
import { Link } from 'react-router';
import PageAction from './PageAction.js';
import fetchList from '../func/fetchList.js';
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
      Post: {
          data: []
      },
    } 
  },
  onHandleClick: function (index) {
    const api = '/api/articleList.php';
    fetchList.bind(this)({
      api,
      index,
      list: 'FitArticle'
    })
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
  onHandleDel: function (id,type,index) {
    if(confirm("确定要删除这条数据吗？")) {
        fetch('/api/delete.php',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
        body: JSON.stringify({id,type})
    })
    .then((res) => res.json())
    .then((res) => {
      if(res.result == 'success') {
        alert("删除成功！");
        let api;
        let list;
        if (type == "article") {
          api = '/api/articleList.php';
          list = 'FitArticle';
      } else if (type == "user") {
          api = '/api/userList.php';
          list = 'UserInfo';
      } else if (type == "post") {
          api = '/api/postList.php';
          list = 'Post';
      } else if (type == "video") {
          api = '/api/videoList.php';
          list = 'Video';
      }
      fetchList.bind(this)({api,list})
      }
    })
   }
  },
  fetchUserInfo: function () {
    const api = '/api/userList.php';
    fetchList.bind(this)({
      api,
      list: 'UserInfo'
    })
  },
  fetchFitArticle: function() {
    const api = '/api/articleList.php';
    fetchList.bind(this)({
      api,
      list: 'FitArticle'
    })
  },
  
  fetchVideo: function() {
    const api = '/api/videoList.php';
    fetchList.bind(this)({
      api,
      list: 'Video'
    })
  },
  fetchPost: function() {
    const api = '/api/postList.php';
    fetchList.bind(this)({
      api,
      list: 'Post'
    })
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
      case 'Post':
        extra = {fetchPost: this.fetchPost};
        break;
      default:
        extra = {};
    }

    return (
      console.log(this.state),
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