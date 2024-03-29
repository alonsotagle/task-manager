import React from 'react';
import { List } from 'material-ui';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onPressEditTask, onPressRemoveTask }) => (
  <List title="Task">
    {tasks.map((task, i) =>
      <TaskItem
        key={i}
        task={task}
        onPressEditTask={() => onPressEditTask(i, task)}
        onPressRemoveTask={() => onPressRemoveTask(i)}
        />
    )}
  </List>
);

export default TaskList;
