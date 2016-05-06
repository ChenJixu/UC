import React from 'react';
import Home from './Home.js';
import { Link } from 'react-router';
import fetchList from '../func/fetchList.js';
let prams = {
      pageIndex: 0,
      pageSize: 10,
    }
var Menu =  React.createClass({
  getInitialState: function () {
    return {
      UserInfo: {
        data: [],
        total: 0
    },
      FitArticle: {
          data: [],
          total: 0
      },
      Video: {
          data: [],
          total: 0
      },
      Post: {
          data: [],
          total: 0
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
  onHandlePageClick: function(api,list,action) {
    let newState = Object.assign({},this.state[list]);
    console.log(newState.total)
    if (action === 'next') {
      if (prams.pageIndex >= (newState.total -10)) return;
      prams.pageIndex = prams.pageIndex + 10;
      console.log(prams.pageIndex);
    } else if(action === 'up'){
      if (prams.pageIndex === 0) return;
      prams.pageIndex = prams.pageIndex - 10;
      if(prams.pageIndex == 1) {
        prams.pageIndex = 0;
      }
      console.log(prams.pageIndex);
    }
    fetch(api, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(prams)
    })
    .then((res) => res.json())
    .then((res) => {
      newState.data = res.result;
      this.setState({[list]: newState});
    });
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
              onHandlePageClick: this.onHandlePageClick
            },
            extra
            )
           )
          }
        </div>
      </div>
    )
  }
});
export default Menu;