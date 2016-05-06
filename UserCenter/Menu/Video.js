import React from 'react';
import List from '../component/List.js';
// import TittleBar from '../component/TittleBar.js';
import PageAction from './PageAction.js';

var Video = React.createClass({
  componentDidMount: function () {
    this.props.fetchVideo();
  },
  render: function () {
    var content = this.props.data.map(function (data, index) {
      return (<List
        {...data}
        name={data.mb_usename}
        item1={data.mb_videourl}
        item2={data.mb_videodetail}
        item3={data.mb_videoname}
        item4={data.mb_time}
        type="video"
        key={index}
      />)
    });
    // const titleArr = [
    //   {text:'发布者'},
    //   {text:'视频标题'},
    //   {text:'视频描述'},
    //   {text:'视频地址'},
    //   {text:'发布时间'},
    //   {text:'操作'},
    // ];
    // let titleContent = titleArr.map((data,index) => (
    //   <TittleBar {...data} key={index} />
    // ));
    return(
      <div className="FitArticle">
        <p className="Header">
          <span className="HeaderItem">健身视频列表</span>
        </p>
        <div className="list">
          <dl className="listheader">
            <dt className="listheader_item" style={{width: '10%'}}>发布者</dt>
            <dt className="listheader_item" style={{width: '10%'}}>视频地址</dt>
            <dt className="listheader_item" style={{width: '20%'}}>视频描述</dt>
            <dt className="listheader_item" style={{width: '25%'}}>视频标题</dt>
            <dt className="listheader_item" style={{width: '20%'}}>发布时间</dt>
            <dt className="listheader_item" style={{width: '10%'}}>操作</dt>
          </dl>
          <div>
            {content}
          </div>
        </div>
        <PageAction
          onHandlePageClick={this.props.onHandlePageClick}
          api="/api/videoList.php"
          list="Video"
        />
      </div>
    );
  }
});

export default Video;