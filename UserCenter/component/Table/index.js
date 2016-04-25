import React from 'react';

export default function Table(props) {
  console.log(props.data);
  return (
    <table>
      <thead>
        <th>作者</th><th>标题</th><th>时间</th><th>内容</th>
      </thead>
      <tbody>
      <tr>
        <td>{props.data.auter}</td>
        <td>{props.data.title}</td>
        <td>{props.data.time}</td>
        <td>{props.data.content}</td>
      </tr>
      </tbody>
    </table>
  );
}
