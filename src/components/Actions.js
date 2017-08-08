import React, { Component } from 'react';
import {Card, FlatButton} from 'material-ui';
import AddTaskIcon from 'material-ui/svg-icons/content/add';
import OrderAlphabeticallyIcon from 'material-ui/svg-icons/action/swap-vert';
import OrderDurationIcon from 'material-ui/svg-icons/device/access-time';
import GenerateTasksIcon from 'material-ui/svg-icons/action/list';


export default class Actions extends Component {

  render() {
    return (
      <Card>
        <FlatButton
          label="New task"
          onClick={this.props.onPressCreateTask}
          icon={<AddTaskIcon />}
          />

        <FlatButton
          label="Order alphabetically"
          onClick={this.props.onPressOrderAlphabeticallyTasks}
          icon={<OrderAlphabeticallyIcon />}
          />

        <FlatButton
          label="Order by duration"
          onClick={this.props.onPressOrderDurationTasks}
          icon={<OrderDurationIcon />}
          />

        <FlatButton
          label="Generate tasks"
          onClick={this.props.onPressGenerateTasks}
          icon={<GenerateTasksIcon />}
          />
      </Card>
    );
  }
}
