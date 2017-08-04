import React, { Component } from 'react';
import {List} from 'material-ui';
import TaskItem from './TaskItem';


export default class TaskList extends Component {

  render() {
    return (
      <List title="Task">
        {this.props.tasks.map(task =>
          <TaskItem
            key={task.id}
            task={task}
            onPressEditTask={() => this.props.onPressEditTask(task.id)}
            onPressRemoveTask={() => this.props.onPressRemoveTask(task.id)}
            />
        )}
      </List>
    );
  }
}
