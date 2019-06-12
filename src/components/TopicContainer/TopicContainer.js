import React, { Component } from "react";
import TopicList from "../TopicList/TopicList";
import { TopicContext } from "../../topic-context";

import "./TopicContainer.css";

class TopicContainer extends Component {
  render() {
    const { list, current } = this.props;
    return (
      <TopicContext.Consumer>
        {({ topicArray, TopicContext }) => (
          <div>
            <h2 className='TopicContainer__Head'>TopicContainer</h2>
            <div className='TopicContainer__Body'>
              <TopicList list={list} tabIndex={current} />
            </div>
            <div className='TopicContainer__Footer'>
              <span>
                <input
                  name='date'
                  id='yesterday'
                  type='radio'
                  value='yesterday'
                  onChange={() => this.props.handleClick(0)}
                />
                <label htmlFor='yesterday'>昨日</label>
              </span>
              <span>
                <input
                  name='date'
                  id='week'
                  type='radio'
                  value='week'
                  onChange={() => this.props.handleClick(1)}
                />
                <label htmlFor='week'>近一周</label>
              </span>
              <span>
                <input
                  name='date'
                  id='month_1'
                  type='radio'
                  value='month_1'
                  onChange={() => this.props.handleClick(2)}
                />
                <label htmlFor='month_1'>近一月</label>
              </span>
              <span>
                <input
                  defaultChecked
                  name='date'
                  id='month_3'
                  type='radio'
                  value='month_3'
                  onChange={() => this.props.handleClick(3)}
                />
                <label htmlFor='month_3'>近三月</label>
              </span>
              <span>
                <input
                  name='date'
                  id='year_1'
                  type='radio'
                  value='year_1'
                  onChange={() => this.props.handleClick(4)}
                />
                <label htmlFor='year_1'>近一年</label>
              </span>
            </div>
          </div>
        )}
      </TopicContext.Consumer>
    );
  }
}

export default TopicContainer;
