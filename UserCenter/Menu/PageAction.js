import React from 'react';

var PageAction = React.createClass({
  HandleClick: function (e) {
    var action = e.target.getAttribute('action');
    this.props.onHandlePageClick(
      this.props.api,
      this.props.list,
      action
    );
  },
  render: function () {
    return (
      <div className="PageAction">
        <ul className="PageAction_list">
          <li className="PageAction_btn" onClick={this.HandleClick} action="up">上一页</li>
          <li className="PageAction_btn" onClick={this.HandleClick} action="next">下一页</li>
        </ul>
      </div>
      );
    }
})
export default PageAction; 