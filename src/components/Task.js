import React from 'react';
import {List, ListItem, Card, CardTitle, CardText, CardActions, FlatButton} from 'material-ui';


export default function TaskList ({tasks}) {

  const items = [];

  for (var i = 0; i < tasks.length; i++) {
     items.push(
      <ListItem key={tasks[i].id}>
        <Card>
          <CardTitle title={tasks[i].id + ' ' + tasks[i].title} />
          <CardText>{tasks[i].description}</CardText>
          <CardActions>
            <FlatButton label="Edit" />
            <FlatButton label="Delete" />
          </CardActions>
        </Card>
      </ListItem>
    );
  }

  return <List title="Task">{items}</List>
}

// export const TaskCreate = props => (
//   <List {...props}>
//     <TextField source="id" />
//     <TextField source="title" />
//     <TextField source="description" />
//     <TextField source="views" />
//     <RaisedButton basePath="/Tasks" />
//   </List>
// );