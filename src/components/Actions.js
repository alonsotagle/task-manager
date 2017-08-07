import React, { Component } from 'react';
import {Card, FloatingActionButton} from 'material-ui';
import AddTaskIcon from 'material-ui/svg-icons/content/add';
import OrderAlphabeticallyIcon from 'material-ui/svg-icons/action/swap-vert';
import OrderDurationIcon from 'material-ui/svg-icons/device/access-time';
import GenerateTasksIcon from 'material-ui/svg-icons/action/list';


export default class Actions extends Component {

  render() {
    return (
      <Card>
        <FloatingActionButton onClick={this.props.onPressCreateTask}>
          <AddTaskIcon />
        </FloatingActionButton>

        <FloatingActionButton onClick={this.props.onPressOrderAlphabeticallyTasks}>
          <OrderAlphabeticallyIcon />
        </FloatingActionButton>

        <FloatingActionButton onClick={this.props.onPressOrderDurationTasks}>
          <OrderDurationIcon />
        </FloatingActionButton>

        <FloatingActionButton onClick={this.props.onPressGenerateTasks}>
          <GenerateTasksIcon />
        </FloatingActionButton>
      </Card>
    );
  }
}
