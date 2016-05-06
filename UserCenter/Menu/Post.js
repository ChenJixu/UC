import React from 'react';
import List from '../component/List.js';
// import TittleBar from '../component/TittleBar.js';
import PageAction from './PageAction.js';

var Post = React.createClass({
  componentDidMount: function () {
    this.props.fetchPost();
  },
  render: function () {
    var content = this.props.data.map((data, index) => (
      <List
        {...data}
        name={data.mb_usename}
        item1={data.mb_title}
        item2={data.mb_main}
        item3="其他"
        item4={data.mb_date}
        type="post"
        key={index}
        onHandleDel={this.props.onHandleDel}
      />));
    // const titleArr = [
    //   {text:'发布者'},
    //   {text:'帖子标题'},
    //   {text:'帖子描述'},
    //   {text:'发帖时间'},
    //   {text:'操作'}
    // ];
    // let titleContent = titleArr.map((data,index) => (
    //   <TittleBar {...data} key={index} />
    // ));
    return(
      <div className="FitArticle">
        <p className="Header">
          <span className="HeaderItem">帖子列表</span>
        </p>
        <div className="list">
          <dl className="listheader">
            <dt className="listheader_item" style={{width: '10%'}}>发布者</dt>
            <dt className="listheader_item" style={{width: '10%'}}>帖子标题</dt>
            <dt className="listheader_item" style={{width: '20%'}}>帖子描述</dt>
            <dt className="listheader_item" style={{width: '25%'}}>其他</dt>
            <dt className="listheader_item" style={{width: '20%'}}>发帖时间</dt>
            <dt className="listheader_item" style={{width: '10%'}}>操作</dt>
          </dl>
          <div>
            {content}
          </div>
        </div>
        <PageAction
          onHandlePageClick={this.props.onHandlePageClick}
          api="/api/postList.php"
          list="Post"
        />
      </div>
    );
  }
});
export default Post;