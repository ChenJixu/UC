import React from 'react';
import List from '../component/List.js';
import ListHeader from '../component/ListHeader.js';

var FitArticle = React.createClass({
  componentDidMount: function () {
    this.props.fetchFitArticle();
    console.log(this.props)
  },
  handleClick: function (e) {
    var type = e.currentTarget.getAttribute('type');
    this.props.onHandleClick(type);
    },
  render: function () {
    var content = this.props.data.map(function (data, index) {
      return (<List
        {...data}
        name={data.mb_usename}
        item1={data.mb_title}
        item2={data.mb_type}
        item3={data.mb_main}
        item4={data.mb_date}
        key={index}
      />)
    });
    return(
      <div className="FitArticle">
        <p className="Header">
          <span className="HeaderItem" onClick={this.handleClick} type="0">全部</span>
          <span className="HeaderItem" onClick={this.handleClick} type="1">动作训练</span>
          <span className="HeaderItem" onClick={this.handleClick} type="2">健身计划</span>
          <span className="HeaderItem" onClick={this.handleClick} type="3">营养补剂</span>
        </p>
        <div className="list">
          <dl className="listheader">
            <dt className="listheader_item">作者</dt>
            <dt className="listheader_item">文章标题</dt>
            <dt className="listheader_item">文章类型</dt>
            <dt className="listheader_item">内容摘要</dt>
            <dt className="listheader_item">发表时间</dt>
            <dt className="listheader_item">操作</dt>
          </dl>
          <div>
            {content}
          </div>
        </div>
      </div>
    );
  }
});
export default FitArticle;