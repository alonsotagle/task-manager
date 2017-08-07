import React, { Component } from 'react';
import {ListItem, Card, CardTitle, CardText, CardActions, FlatButton} from 'material-ui';


export default class TaskItem extends Component {

  render() {
    return (
      <ListItem>
        <Card>
          <CardTitle title={this.props.task.title} />
          <CardText>{this.props.task.description}</CardText>

          <CardActions>

            <FlatButton
              label="Edit"
              primary
              onClick={this.props.onPressEditTask}
              />

            <FlatButton
              label="Delete"
              secondary
              onClick={this.props.onPressRemoveTask}
              />
          </CardActions>
        </Card>
      </ListItem>
    );
  }
}
