import React from 'react';

class Counter extends React.Component {
  counstructor(props) {
    super(props);
    //state정의
    this.state = { count: 0 };
    this.increaseCount = this.increaseCount.bind(this);
  }
  increaseCount() {
    //state변경
    this.setState((count) => {
      count: count + 1;
    });
  }
  render() {
    return (
      <div>
        <span>카운트: {this.state.count}</span>
        <button onClick={this.increaseCount}>카운트증가</button>
      </div>
    );
  }
}

export default Counter;
