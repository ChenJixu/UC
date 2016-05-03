import React from 'react';
import List from '../component/List.js';
import ListHeader from '../component/ListHeader.js';

let UserInfo = React.createClass({
  componentDidMount: function () {
    this.props.fetchUserInfo();
  },
  render: function () {
    let content = this.props.data.map( (data, index) => (
        <List
          {...data}
          key={index}
          index={index}
          name={data.mb_usename}
          item1={data.mb_sex}
          item2={data.mb_petname}
          item3={data.mb_email}
          item4={data.mb_reg_time}
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
            <dt className="listheader_item">昵称</dt>
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