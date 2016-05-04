import React from 'react';
import List from '../component/List.js';
import TittleBar from '../component/TittleBar.js';

var Post = React.createClass({
  componentDidMount: function () {
    this.props.fetchPost();
  },
  render: function () {
    console.log(this.props);
    var content = this.props.data.map(function (data, index) {
      return (<List
        {...data}
        name={data.mb_usename}
        item1={data.mb_title}
        item2={data.mb_main}
        item3={data.mb_date}
        key={index}
      />)
    });
    const titleArr = [
      {text:'发布者'},
      {text:'帖子标题'},
      {text:'帖子描述'},
      {text:'发帖时间'},
      {text:'操作'}
    ];
    let titleContent = titleArr.map((data,index) => (
      <TittleBar {...data} key={index} />
    ));
    return(
      <div className="FitArticle">
        <p className="Header">
          <span className="HeaderItem">帖子列表</span>
        </p>
        <div className="list">
          <dl className="listheader">
            {titleContent}
          </dl>
          <div>
            {content}
          </div>
        </div>
      </div>
    );
  }
});
export default Post;