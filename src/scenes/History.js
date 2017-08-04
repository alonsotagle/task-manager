import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import {TaskList} from '../components';


export default class History extends Component {

  state = {
    tasks: [
      {
        id: 1,
        title: 'title',
        description: 'description',
      },
      {
        id: 2,
        title: 'title',
        description: 'description',
      },
      {
        id: 3,
        title: 'title',
        description: 'description',
      },
      {
        id: 4,
        title: 'title',
        description: 'description',
      },
      {
        id: 5,
        title: 'title',
        description: 'description',
      },
    ],
  }




  render() {
    return (
      <div>
        <AppBar title="Task manager" />

        <TaskList
          tasks={this.state.tasks}
          />
      </div>
    );
  }
}
