import React, { Component } from 'react';
import {TaskList} from '../components';


export default class Graph extends Component {

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
        <TaskList
          tasks={this.state.tasks}
          />
      </div>
    );
  }
}
