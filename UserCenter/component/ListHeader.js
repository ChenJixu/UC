import React from 'react';

export default function ListHeader(props) {
  return (
    <dl className="listHeader" style={{display: 'flex'}}>
      <dd>{props.header.auto}</dd>
      <dd>{props.header.title}</dd>
      <dd>{props.header.content}</dd>
      <dd>{props.header.time}</dd>
    </dl>
  )
}
