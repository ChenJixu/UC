import React from 'react';

export default function Ulink(props) {
  var onClick =  function(e) {
    e.target.classList.add('add-color');
  };
  var onMouseLeave =  function(e) {
    e.target.classList.remove('add-color');
  };
  return (
    <li className="listItem" onClick={onClick} onMouseLeave={onMouseLeave}>{props.name}</li>
  )
}