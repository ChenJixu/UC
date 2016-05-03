import React from 'react';

export default function List(props) {
  var handelDel = function () {
    console.log(props)
  };
  return (
    <dl className="resList">
      <dd className="resList_item" title={props.auter}>{props.username}</dd>
      <dd className="resList_item">{props.title}</dd>
      <dd className="resList_item">{props.type}</dd>
      <dd className="resList_item">{props.content}</dd>
      <dd className="resList_item">{props.time}</dd>
      <dd className="resList_item"><a href="script:;" onClick={handelDel}>删除</a></dd>
    </dl>
  );
}
