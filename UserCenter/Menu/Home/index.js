import React from 'react';
import { Link } from 'react-router';
import ULink from '../../component/ULink/index.js';

export default React.createClass({
  render: function () {
    return (
        <section style={{display: 'flex'}}>
          <ul>
            <Link to="/home/FitArticle"><ULink name="健身文章"/></Link>
            <Link to="/home/Message"><ULink name="健身视频"/></Link>
            <Link to="/home/Plan"><ULink name="用户帖子"/></Link>
          </ul>
        </section>
    )
  }
});