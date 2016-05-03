import React from 'react';
import List from '../component/List.js';
import ListHeader from '../component/ListHeader.js';

let UserInfo = React.createClass({
  render: function () {
    console.log(this.props);
    let content = this.props.data.map( (data, index) => (
        <List
          {...data}
          key={index}
          index={index}
          onHandleDel={this.props.onHandleDel}
        />
    ));
    return (
      <div className="FitArticle">
        <p className="Header">
          <span className="HeaderItem">用户信息列表</span>
        </p>
        <div className="list">
          <dl className="listheader">
            <dt className="listheader_item">用户名</dt>
            <dt className="listheader_item">性别</dt>
            <dt className="listheader_item">头像</dt>
            <dt className="listheader_item">邮箱</dt>
            <dt className="listheader_item">注册时间</dt>
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
export default UserInfo;