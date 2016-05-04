import React from 'react';
import List from '../component/List.js';
import ListHeader from '../component/ListHeader.js';
import TittleBar from '../component/TittleBar.js';

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
          type="user"
          onHandleDel={this.props.onHandleDel}
        />
    ));
    const titleArr = [
      {text:'用户名'},
      {text:'性别'},
      {text:'昵称'},
      {text:'邮箱'},
      {text:'注册时间'},
      {text:'操作'},
    ];
    let titleContent = titleArr.map((data,index) => (
      <TittleBar {...data} key={index} />
    ));
    return (
      <div className="FitArticle">
        <p className="Header">
          <span className="HeaderItem">用户信息列表</span>
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
export default UserInfo;