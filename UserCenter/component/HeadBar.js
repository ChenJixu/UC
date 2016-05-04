import React from 'react';

export default function HeadBar(props) {
  let handleClick =function () {
    props.onHandleClick(props.index);
    console.log(props.index);
    };
  return (
      <span className="HeaderItem" onClick={handleClick}>{props.text}</span>
  );
}
