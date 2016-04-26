import React from 'react';
import List from '../component/List.js';

var Video = React.createClass({
  render: function () {
    var content = this.props.data.map(function (data, index) {
      return (<List
        {...data}
        key={index}
      />)
    });
    return(
      <div className="FitArticle">
        <p className="Header">
          <span className="HeaderItem">健身视频列表</span>
        </p>
        <div className="list">
          <dl className="listheader">
            <dt className="listheader_item">发布者</dt>
            <dt className="listheader_item">视频标题</dt>
            <dt className="listheader_item">视频类型</dt>
            <dt className="listheader_item">视频地址</dt>
            <dt className="listheader_item">发布时间</dt>
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

export default Video;