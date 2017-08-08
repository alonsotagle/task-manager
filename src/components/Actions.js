import React, { Component } from 'react';
import {Card, FlatButton} from 'material-ui';
import AddTaskIcon from 'material-ui/svg-icons/content/add';
import OrderAlphabeticallyIcon from 'material-ui/svg-icons/action/swap-vert';
import OrderDurationIcon from 'material-ui/svg-icons/device/access-time';
import GenerateTasksIcon from 'material-ui/svg-icons/action/list';
import TimerPlay from 'material-ui/svg-icons/av/play-arrow';
import TimerPause from 'material-ui/svg-icons/av/pause';
import { connect } from 'react-redux';
import FilterLink from '../containers/FilterLink';
import Timer from './Timer';


class Actions extends Component {

  render() {
    return (
      <Card>

        <FlatButton
          label="New task"
          onClick={this.props.onPressCreateTask}
          icon={<AddTaskIcon />}
          />

        <FlatButton
          label="Generate tasks"
          onClick={this.props.onPressGenerateTasks}
          icon={<GenerateTasksIcon />}
          />

        <br />

        <b>ORDER</b>

        <br />

        <FilterLink
          label="Show all"
          filter="SHOW_ALL"
          icon={<OrderAlphabeticallyIcon />}
          />

        <FilterLink
          label="Show completed"
          filter="SHOW_COMPLETED"
          icon={<OrderAlphabeticallyIcon />}
          />

        <FilterLink
          label="Show pending"
          filter="SHOW_PENDING"
          icon={<OrderAlphabeticallyIcon />}
          />

        <FilterLink
          label="Order alphabetically"
          filter="ORDER_ALPHABETICALLY"
          icon={<OrderAlphabeticallyIcon />}
          />

        <FilterLink
          label="Order by duration"
          filter="ORDER_BY_DURATION"
          icon={<OrderDurationIcon />}
          />

        <br />

        <b>TIMER</b>

        <br />

        <FlatButton
          label="Start"
          onClick={this.props.onPressPlayTimer}
          icon={<TimerPlay />}
          />

        <FlatButton
          label="Pause"
          onClick={this.props.onPressPauseTimer}
          icon={<TimerPause />}
          />

        <Timer />
      </Card>
    );
  }
}

export default connect()(Actions);
