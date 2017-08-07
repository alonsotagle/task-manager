import React, { Component } from 'react';
import {ListItem, Card, CardTitle, CardText, CardActions, FlatButton} from 'material-ui';
import Done from 'material-ui/svg-icons/file/cloud-done';
import Pending from 'material-ui/svg-icons/file/cloud-queue';


export default class TaskItem extends Component {

  render() {
    return (
      <ListItem>
        <Card>
          <CardTitle
            title={this.props.task.title}
            subtitle={`${this.props.task.duration} minutes`}
            />

          <FlatButton>
            {this.props.task.state ?
              <Done />
              :
              <Pending />
            }
          </FlatButton>

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
