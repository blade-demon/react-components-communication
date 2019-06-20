import React, { Component } from "react";
import TopicList from "../TopicList/TopicList";
import "./TopicContainer.css";

class TopicContainer extends Component {
  render() {
    const { intervalArray, handleClick } = this.props;
    return (
      <div>
        <h2 className='TopicContainer__Header'>TopicContainer</h2>
        <div className='TopicContainer__Body'>
          <TopicList {...this.props} />
        </div>
        <div className='TopicContainer__Footer'>
          {intervalArray.map((item, index) => (
            <span key={index}>
              <input
                name='date'
                id={item.key}
                type='radio'
                value={item.data}
                defaultChecked={index === 3 ? true : false}
                onChange={() => handleClick(index)}
              />
              <label htmlFor={item.key}>{item.data}</label>
            </span>
          ))}
        </div>
      </div>
    );
  }
}

export default TopicContainer;
