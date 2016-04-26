import React from 'react';

export default function List(props) {
  return (
    <dl className="resList">
      <dd className="resList_item" title={props.auter}>{props.auter}</dd>
      <dd className="resList_item">{props.title}</dd>
      <dd className="resList_item">{props.type}</dd>
      <dd className="resList_item">{props.content}</dd>
      <dd className="resList_item">{props.time}</dd>
      <dd className="resList_item"><a href="script:;">删除</a></dd>
    </dl>
  );
}
