import React from 'react';
import List from '../component/List.js';
import ListHeader from '../component/ListHeader.js';
import TittleBar from '../component/TittleBar.js';
import HeadBar from '../component/HeadBar.js';

var FitArticle = React.createClass({
  componentDidMount: function () {
    this.props.fetchFitArticle();
  },
  render: function () {
    var content = this.props.data.map((data, index) => (
      <List
        {...data}
        name={data.mb_usename}
        item1={data.mb_title}
        item2={data.mb_type}
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
    const tittleArr = [
      {text: '发布者'},
      {text: '文章标题'},
      {text: '文章类型'},
      {text: '内容摘要'},
      {text: '发表时间'},
      {text: '操作'}
    ];
    let HeadContent = headArr.map((data, index) => (
      <HeadBar
      {...data}
      key={index}
      onHandleClick={this.props.onHandleClick}
      index={index}
      />
      ));
    let TittleContent = tittleArr.map((data, index) => (
      <TittleBar {...data} key={index} />
      ));
    return(
      <div className="FitArticle">
        <p className="Header">
          {HeadContent}
        </p>
        <div className="list">
          <dl className="listheader">
            {TittleContent}
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