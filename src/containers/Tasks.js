import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Actions, TaskList, TaskDialog } from '../components';
import { addTask } from '../actions';
import { VisibleTaskList } from './VisibleTaskList';

const emptyTask = {
  title: '',
  description: '',
  duration: -1,
  state: 0,
}

class Tasks extends Component {

  state = {
    currentTask : emptyTask,
    tasks: [],
    ui: {
      openTaskModal: false,
      orderAlphabetically: true,
      orderDuration: true,
    }
  }

  componentWillMount = () => {
    console.log(this.props);
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
    const tasks = this.state.tasks;

    if (isNew) {
      // tasks.push(this.state.currentTask);
      this.props.dispatch(addTask(this.state.currentTask));
    } else {
      tasks[this.state.currentTask.taskIndex] = this.state.currentTask;
    }

    this.setState({
      currentTask: emptyTask,
      tasks: tasks,
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

  onPressEditTask = taskIndex => {
    this.setState({
      currentTask: {
        ...this.state.tasks[taskIndex],
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
    const currentTasks = this.state.tasks;
    currentTasks.splice(taskIndex, 1);

    this.setState({tasks: currentTasks});
  }

  onPressOrderAlphabeticallyTasks = () => {
    const currentTasks = this.state.tasks;
    const orderAlphabetically = this.state.ui.orderAlphabetically;

    if (orderAlphabetically) {
      currentTasks.sort((a, b) => a.title > b.title ? 1 : -1);
    } else {
      currentTasks.sort((a, b) => a.title < b.title ? 1 : -1);
    }

    this.setState({
      tasks: currentTasks,
      ui: {
        ...this.state.ui,
        orderAlphabetically: !this.state.ui.orderAlphabetically,
      },
    });
  }

  onPressOrderDurationTasks = () => {
    const currentTasks = this.state.tasks;
    const orderDuration = this.state.ui.orderDuration;

    if (orderDuration) {
      currentTasks.sort((a, b) => a.duration - b.duration);
    } else {
      currentTasks.sort((a, b) => b.duration - a.duration);
    }

    this.setState({
      tasks: currentTasks,
      ui: {
        ...this.state.ui,
        orderDuration: !this.state.ui.orderDuration,
      },
    });
  }

  onPressGenerateTasks = () => {
    const generatedTask = [];

    for (var i = 0; i < 50; i++) {
      generatedTask.push({
        title: this.stringGenerator(10),
        description: this.stringGenerator(500),
        duration: this.intGenerator(2),
        state: i % 3 ? 1: 0,
      });
    }

    this.setState({ tasks: generatedTask });
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
          onPressOrderAlphabeticallyTasks={this.onPressOrderAlphabeticallyTasks}
          onPressOrderDurationTasks={this.onPressOrderDurationTasks}
          onPressGenerateTasks={this.onPressGenerateTasks}
          />

        <VisibleTaskList />

        <TaskList
          tasks={this.state.tasks}
          onPressEditTask={this.onPressEditTask}
          onPressRemoveTask={this.onPressRemoveTask}
          />
      </div>
    );
  }
}

export default Tasks;