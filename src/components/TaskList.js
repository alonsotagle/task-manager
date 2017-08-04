import React, { Component } from 'react';
import {List} from 'material-ui';
import TaskItem from './TaskItem';


export default class TaskList extends Component {


  render() {
    return (
      <List title="Task">
        {this.props.tasks.map(task => <TaskItem task key={task.id} />)}
      </List>
    );
  }
}