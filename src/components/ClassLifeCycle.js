import React, { Component } from 'react';
import ReactLifecycle from './ReactLifecycle';

class ClassLifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroName: 'Superman'
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.heroName !== prevState.heroName) {
      return { heroName: nextProps.heroName };
    }
    return null;
  }

  componentDidMount() {
    console.log('Hero component has been mounted');
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.heroName !== this.props.heroName || nextState.heroName !== this.state.heroName;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Snapshot before update:', prevProps, prevState);
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Hero component did update');
  }

  componentWillUnmount() {
    console.log('Hero component will unmount');
  }

  render() {
    return (
      <div>
        <h1>{this.state.heroName}</h1>
        <ReactLifecycle />
      </div>
    );
  }
}

export default ClassLifeCycle;
