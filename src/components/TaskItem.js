import React, { Component } from 'react';
import {ListItem, Card, CardTitle, CardText, CardActions, FlatButton, IconButton} from 'material-ui';
import ActionGrade from 'material-ui/svg-icons/action/grade';


export default class TaskItem extends Component {

  render() {
    return (
      <ListItem key={this.props.task.id}>
        <Card>
          <CardTitle title={this.props.task.id + ' ' + this.props.task.title} />
          <CardText>{this.props.task.description}</CardText>

          <CardActions>

            <FlatButton
              label="Edit"
              onClick={this.props.onPressEditTask}
              />

            <FlatButton
              label="Delete"
              onClick={this.props.onPressRemoveTask}
              />

            <IconButton tooltip="bottom-right" touch={true} tooltipPosition="bottom-right">
              <ActionGrade />
            </IconButton>
          </CardActions>
        </Card>
      </ListItem>
    );
  }
}
