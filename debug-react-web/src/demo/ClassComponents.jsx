import React, { Component } from "react";

const childStyle = {
  padding: 20,
  margin: 20,
  backgroundColor: "LightSkyBlue",
};

const ChildNAME = "Child 组件：";

class Child extends Component {
  constructor() {
    super();
    console.log(ChildNAME, "constructor");
    this.state = {
      counter: 0,
    };
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    console.log(ChildNAME, "getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log(ChildNAME, "componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(ChildNAME, "shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(ChildNAME, "getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(ChildNAME, "componentDidUpdate");
  }

  componentWillUnmount() {
    console.log(ChildNAME, "componentWillUnmount");
  }

  changeCounter = () => {
    let { counter } = this.state;
    this.setState({
      counter: ++counter,
    });
  };

  render() {
    console.log(ChildNAME, "render");
    const { count } = this.props;
    const { counter } = this.state;
    return (
      <div style={childStyle}>
        <h3>子组件</h3>
        <p>父组件传过来的属性 count ： {count}</p>
        <p>子组件自身状态 counter ： {counter}</p>
        <button onClick={this.changeCounter}>改变自身状态 counter</button>
      </div>
    );
  }
}

const parentStyle = {
  padding: 40,
  margin: 20,
  backgroundColor: "LightCyan",
};

const NAME = "Parent 组件：";

export default class Parent extends Component {
  constructor() {
    super();
    console.log(NAME, "constructor");
    this.state = {
      count: 0,
      mountChild: true,
    };
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    console.log(NAME, "getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log(NAME, "componentDidMount"); //在更新后会被立即调用。
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(NAME, "shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(NAME, "getSnapshotBeforeUpdate");
    return "foo";
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(NAME, "componentDidUpdate", "snapshot:", snapshot);
  }

  componentWillUnmount() {
    console.log(NAME, "componentWillUnmount");
  }

  /**
   * 修改传给子组件属性 count 的方法
   */
  changeNum = () => {
    let { count } = this.state;
    this.setState({
      count: ++count,
    });
  };

  /**
   * 切换子组件挂载和卸载的方法
   */
  toggleMountChild = () => {
    const { mountChild } = this.state;
    this.setState({
      mountChild: !mountChild,
    });
  };

  render() {
    console.log(NAME, "render");
    const { count, mountChild } = this.state;
    return (
      <div style={parentStyle}>
        <img width={800} src="//pic1.zhimg.com/80/v2-930c5299db442e73dbb1d2f9c92310d4_720w.webp" alt="lifecycle" />
        <div>
          <h3>父组件</h3>
          <button onClick={this.changeNum}>改变传给子组件的属性 count</button>
          <br />
          <br />
          <button onClick={this.toggleMountChild}>卸载 / 挂载子组件</button>
        </div>
        {mountChild ? <Child count={count} /> : null}
      </div>
    );
  }
}
