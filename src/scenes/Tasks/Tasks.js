import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

import {TaskList, CreateTask} from '../../components';


export default class Tasks extends Component {

  state = {
    currentTask : {
      id: 0,
      title: '',
      description: '',
      duration: -1,
    },
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
    ui: {
      openNewTaskModal: false,
    }
  }

  onPressCreateTask = () => {

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

  onChangeDuration = (_, key, duration) => {
    this.setState({
      currentTask: {
        ...this.state.currentTask,
        duration,
      }
    });
  }

  onPressSaveNewTask = () => {
    console.log("onPressSaveNewTask");
    this.setState({
      ui: {
        ...this.state.ui,
        openNewTaskModal: false
      }
    });
  }

  onPressEditTask = task => {

  }

  onPressRemoveTask = task => {

  }

  onPressFilterTasks = task => {

  }

  generateRandomTasks = () => {

  }


  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar title="Task manager" />
          <CreateTask
            open={this.state.ui.openNewTaskModal}
            onChangeTitle={this.onChangeTitle}
            onChangeDescription={this.onChangeDescription}
            onChangeDuration={this.onChangeDuration}
            currentTask={this.state.currentTask}
            onPressSaveNewTask={this.onPressSaveNewTask}
            />
          <TaskList tasks={this.state.tasks} />
        </div>
      </MuiThemeProvider>
    );
  }
}