import React from 'react';

export default function List(props) {
  let handelDel = function (e) {
    let id = e.currentTarget.getAttribute('id');
    props.onHandleDel(id);
  };
  return (
    <dl className="resList">
      <dd className="resList_item" title={props.name}>{props.name}</dd>
      <dd className="resList_item" title={props.item1}>{props.item1}</dd>
      <dd className="resList_item" title={props.item2}>{props.item2}</dd>
      <dd className="resList_item" title={props.item3}>{props.item3}</dd>
      <dd className="resList_item" title={props.item4}>{props.item4}</dd>
      <dd className="resList_item"><a href="script:;" onClick={handelDel} id={props.id}>删除</a></dd>
    </dl>
  );
}
