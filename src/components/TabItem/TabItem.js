import React from "react";

const TabItem = props => (
  <span key={props.index}>
    <input
      name='date'
      id={props.interval.key}
      type='radio'
      value={props.interval.key}
      defaultChecked={props.index === 3 ? true : false}
      onChange={() => props.handleClickTab(props.index)}
    />
    <label htmlFor={props.interval.key}>{props.interval.value}</label>
  </span>
);

export default TabItem;
