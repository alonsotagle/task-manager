import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Actions, TaskDialog } from '../components';
import { addTask, editTask, removeTask, setVisibilityFilter } from '../actions';
import { VisibleTaskList } from './';

const emptyTask = {
  title: '',
  description: '',
  duration: -1,
  state: 0,
}

class Tasks extends Component {

  state = {
    currentTask : emptyTask,
    ui: {
      openTaskModal: false,
      orderAlphabetically: true,
      orderDuration: true,
    }
  }

  componentWillMount = () => {
    this.props.dispatch(setVisibilityFilter("SHOW_ALL"));
  }

  onPressCreateTask = () => {
    this.setState({
      currentTask: {
        ...this.state.currentTask,
        isNew: true,
      },
      ui: {
        ...this.state.ui,
        openTaskModal: true,
      }
    });
  }

  onChangeTitle = (_, title) => {
    this.setState({
      currentTask: {
        ...this.state.currentTask,
        title,
      }
    });
  }

  onChangeDescription = (_, description) => {
    this.setState({
      currentTask: {
        ...this.state.currentTask,
        description,
      }
    });
  }

  onChangeDuration = duration => {
    this.setState({
      currentTask: {
        ...this.state.currentTask,
        duration,
      }
    });
  }

  onPressSave = () => {
    const isNew = this.state.currentTask.isNew;

    if (isNew) {
      this.props.dispatch(addTask(this.state.currentTask));
    } else {
      this.props.dispatch(editTask(this.state.currentTask.taskIndex, this.state.currentTask));
    }

    this.setState({
      currentTask: emptyTask,
      ui: {
        ...this.state.ui,
        openTaskModal: false,
      },
    });
  }

  onPressClose = () => {
    this.setState({
      currentTask: emptyTask,
      ui: {
        ...this.state.ui,
        openTaskModal: false,
      },
    });
  }

  onPressEditTask = (taskIndex, task) => {
    this.setState({
      currentTask: {
        ...task,
        isNew: false,
        taskIndex,
      },
      ui: {
        ...this.state.ui,
        openTaskModal: true,
      },
    });
  }

  onPressRemoveTask = taskIndex => {
    this.props.dispatch(removeTask(taskIndex));
  }

  onPressGenerateTasks = () => {

    for (var i = 0; i < 50; i++) {
      const newTask = {
        title: this.stringGenerator(10),
        description: this.stringGenerator(500),
        duration: this.intGenerator(2),
        state: i % 3 ? 1: 0,
      };

      this.props.dispatch(addTask(newTask));
    }
  }

  stringGenerator = len => {
    var text = "";

    var charset = "abcdefghijklmnopqrstuvwxyz ";

    for (var i = 0; i < len; i++) {
      text += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    return text;
  }

  intGenerator = len => {
    var text = "";

    var charset = "1234567890";

    for (var i = 0; i < len; i++) {
      text += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    return parseInt(text, 10);
  }


  render() {
    return (
      <div>
        <TaskDialog
          open={this.state.ui.openTaskModal}
          currentTask={this.state.currentTask}
          onChangeTitle={this.onChangeTitle}
          onChangeDescription={this.onChangeDescription}
          onChangeDuration={this.onChangeDuration}
          onPressSave={this.onPressSave}
          onPressClose={this.onPressClose}
          />

        <Actions
          onPressCreateTask={this.onPressCreateTask}
          onPressGenerateTasks={this.onPressGenerateTasks}
          />

        <VisibleTaskList onPressEditTask={this.onPressEditTask} />
      </div>
    );
  }
}

export default withRouter(connect()(Tasks));
