import React from 'react';
import { Link } from 'react-router';
import ULink from '../../component/ULink/index.js';

export default React.createClass({
  render: function () {
    return (
      <div style={{display: 'flex'}}>
        <ul>
          <Link to="/home/Account"><ULink name="账号设置"/></Link>
          <Link to="/home/Message"><ULink name="我的消息"/></Link>
          <Link to="/home/Plan"><ULink name="健身计划"/></Link>
        </ul>
      </div>
    )
  }
});