import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { editTask, removeTask } from '../actions';
import { TaskList } from '../components';

const getVisibleTasks = (tasks, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return tasks;
    case 'SHOW_COMPLETED':
      return tasks.filter(t => t.state);
    case 'SHOW_PENDING':
      return tasks.filter(t => !t.state);
  }
}

const mapStateToProps = state => {
  return {
    tasks: getVisibleTasks(state.tasks, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onPressEditTask: (taskIndex, task) => {
      dispatch(editTask(taskIndex, task));
    },
    onPressRemoveTask: taskIndex => {
      dispatch(removeTask(taskIndex));
    }
  }
}

const VisibleTaskList = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList));

export default VisibleTaskList;
