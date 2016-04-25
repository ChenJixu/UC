import React from 'react';
import Table from '../../component/Table/index.js';

export default React.createClass({
  handleClick: function (e) {
    var type = e.currentTarget.getAttribute('type');
    this.props.onHandleClick(type);
    },
  render: function () {
    return(
      <div className="FitArticle">
        <p className="Header">
          <span style={{padding: '0 10px'}} onClick={this.handleClick} type="0">全部</span>
          <span style={{padding: '0 10px'}} onClick={this.handleClick} type="1">动作训练</span>
          <span style={{padding: '0 10px'}} onClick={this.handleClick} type="2">健身计划</span>
          <span style={{padding: '0 10px'}} onClick={this.handleClick} type="3">营养不剂</span>
        </p>
        <Table data={this.props.data}/>
      </div>
    )
  }
});