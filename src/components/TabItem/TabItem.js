import React from "react";
import { TopicContext } from "../topic-context";

export const TabItem = props => {
  return (
    <TopicContext.Consumer>
      {({ intervalTabIndex, setIntervalTab }) => (
        <span key={props.index}>
          <input
            name="date"
            id={props.interval.key}
            type="radio"
            value={props.interval.key}
            defaultChecked={props.index === intervalTabIndex ? true : false}
            onChange={() => setIntervalTab(props.index)}
          />
          <label htmlFor={props.interval.key}>{props.interval.value}</label>
        </span>
      )}
    </TopicContext.Consumer>
  );
};