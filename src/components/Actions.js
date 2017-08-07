import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import ActionGrade from 'material-ui/svg-icons/content/add-circle';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';


export default class Actions extends Component {

  render() {
    return (
      <Card>
        <FloatingActionButton
          onTouchTap={this.props.onPressCreateTask}
          onClick={this.props.onPressCreateTask}
          >
          <ContentAdd />
        </FloatingActionButton>
      </Card>
    );
  }
}
