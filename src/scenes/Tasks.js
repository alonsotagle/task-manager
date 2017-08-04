import React, { Component } from 'react';
import {TaskList, CreateTask} from '../components';


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

  onPressEditTask = taskId => {
    console.log(`EDIT ${taskId}`);
  }

  onPressRemoveTask = taskId => {

    const actualTasks = this.state.tasks;

    const indexFromTaskToRemove = actualTasks.findIndex(task => task.id === taskId);

    indexFromTaskToRemove !== -1 && actualTasks.splice(indexFromTaskToRemove, 1);

    this.setState({tasks: actualTasks});
  }

  onPressFilterTasks = () => {

  }

  generateRandomTasks = () => {
    const generatedTask = [];

    for (var i = 0; i < 50; i++) {
      generatedTask.push({
        id: i,
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
        <CreateTask
          open={this.state.ui.openNewTaskModal}
          onChangeTitle={this.onChangeTitle}
          onChangeDescription={this.onChangeDescription}
          onChangeDuration={this.onChangeDuration}
          currentTask={this.state.currentTask}
          onPressSaveNewTask={this.onPressSaveNewTask}
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
