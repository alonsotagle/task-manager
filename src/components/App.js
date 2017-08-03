import React,{ Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';

import TaskList from './Task';


class App extends Component {

  state = {
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
    ]
  }


  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar title="Task manager" />
          <TaskList tasks={this.state.tasks} />
        </div>
      </MuiThemeProvider>
    );
  }
}


export default App;
