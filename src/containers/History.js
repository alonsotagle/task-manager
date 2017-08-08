import React, { Component } from 'react';
import {TaskList} from '../components';


export default class History extends Component {

  state = {
    tasks: [],
  }

  componentWillMount = () => {
    console.log(this.props);
  }

  render() {
    return (
      <div>
      asdfsadf
      asdfsadfasdfasdf
      asdfasdf
        <TaskList tasks={this.state.tasks} />
      </div>
    );
  }
}
