import React from 'react';
import { Link } from 'react-router';
import Ulink from '../component/Ulink.js';

var Home =  React.createClass({
  render: function () {
    return (
        <section className="MainMenu">
          <ul className="MainList">
            <Link className="MainLink" to="/home/userinfo"><Ulink name="用户资料"/></Link>
            <Link className="MainLink" to="/home/fitarticle"><Ulink name="健身文章"/></Link>
            <Link className="MainLink" to="/home/video"><Ulink name="健身视频"/></Link>
            <Link className="MainLink" to="/home/post"><Ulink name="用户帖子"/></Link>
          </ul>
        </section>
    )
  }
});
export default Home;