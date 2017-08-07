import React, { Component } from 'react';
import {Actions, TaskList, TaskDialog} from '../components';

const emptyTask = {
  title: '',
  description: '',
  duration: -1,
}

export default class Tasks extends Component {

  state = {
    currentTask : emptyTask,
    tasks: [
      {
        title: 'title',
        description: 'description',
      },
      {
        title: 'title',
        description: 'description',
      },
      {
        title: 'title',
        description: 'description',
      },
      {
        title: 'title',
        description: 'description',
      },
      {
        title: 'title',
        description: 'description',
      },
    ],
    ui: {
      openTaskModal: false,
    }
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

  onChangeDuration = (_, key, duration) => {
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
      tasks.push(this.state.currentTask);
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

    const actualTasks = this.state.tasks;
    actualTasks.splice(taskIndex, 1);

    this.setState({tasks: actualTasks});
  }

  onPressFilterTasks = () => {

  }

  generateRandomTasks = () => {
    const generatedTask = [];

    for (var i = 0; i < 50; i++) {
      generatedTask.push({
        title: this.stringGen(10),
        description: this.stringGen(500),
      });
    }

    this.setState({ tasks: generatedTask });
  }

  stringGen = len => {
    var text = "";

    var charset = "abcdefghijklmnopqrstuvwxyz 0123456789";

    for (var i = 0; i < len; i++) {
      text += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    return text;
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
          />

        <TaskList
          tasks={this.state.tasks}
          onPressEditTask={this.onPressEditTask}
          onPressRemoveTask={this.onPressRemoveTask}
          />
      </div>
    );
  }
}
