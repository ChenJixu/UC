import React from 'react';
import List from '../component/List.js';
import HeadBar from '../component/HeadBar.js';
import TittleBar from '../component/TittleBar.js';
import PageAction from './PageAction.js';

var FitArticle = React.createClass({
  componentDidMount: function () {
    this.props.fetchFitArticle();
  },
  render: function () {
    var content = this.props.data.map((data, index) => (
      <List
        {...data}
        name={data.mb_usename}
        item1={data.mb_type}
        item2={data.mb_title}
        item3={data.mb_main}
        item4={data.mb_date}
        key={index}
        type="article"
        index={index}
        onHandleDel={this.props.onHandleDel}
      />
      ));
    const headArr = [
      {text: '全部'},
      {text: '资讯类'},
      {text: '知识类'}
    ];
    let HeadContent = headArr.map((data, index) => (
      <HeadBar
      {...data}
      key={index}
      onHandleClick={this.props.onHandleClick}
      index={index}
      />
      ));
    return(
      <div className="FitArticle">
        <p className="Header">
          {HeadContent}
        </p>
        <div className="list">
          <dl className="listheader">
            <dt className="listheader_item" style={{width: '10%'}}>发布者</dt>
            <dt className="listheader_item" style={{width: '15%'}}>文章类型</dt>
            <dt className="listheader_item" style={{width: '20%'}}>文章标题</dt>
            <dt className="listheader_item" style={{width: '25%'}}>内容摘要</dt>
            <dt className="listheader_item" style={{width: '20%'}}>发表时间</dt>
            <dt className="listheader_item" style={{width: '10%'}}>操作</dt>
          </dl>
          <div>
            {content}
          </div>
        </div>
        <PageAction
          onHandlePageClick={this.props.onHandlePageClick}
          list="FitArticle"
          api="/api/articleList.php"
        />
      </div>
    );
  }
});
export default FitArticle;