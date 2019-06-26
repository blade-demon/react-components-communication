import React from "react";
import PropTypes from "prop-types";

export const TabItem = (props, context) => {
  const { index, interval } = props;
  return (
    <span key={index}>
      <input
        name='date'
        id={interval.key}
        type='radio'
        value={interval.key}
        defaultChecked={index === 3 ? true : false}
        onChange={() => context.setTabInterval(index)}
      />
      <label htmlFor={interval.key}>{interval.value}</label>
    </span>
  );
};

TabItem.contextTypes = {
  setTabInterval: PropTypes.func
};
