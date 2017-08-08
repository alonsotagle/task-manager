import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { removeTask } from '../actions';
import { TaskList } from '../components';

const getVisibleTasks = (tasks, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return tasks;
    case 'ORDER_ALPHABETICALLY':
      return tasks.slice().sort((a, b) => a.title > b.title ? 1 : -1);
    case 'ORDER_BY_DURATION':
      return tasks.slice().sort((a, b) => parseInt(a.duration, 10) - parseInt(b.duration, 10));
    case 'SHOW_COMPLETED':
      return tasks.filter(t => t.state);
    case 'SHOW_PENDING':
      return tasks.filter(t => !t.state);
    default:
      return tasks;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    tasks: getVisibleTasks(state.tasks, state.visibilityFilter),
    onPressEditTask: ownProps.onPressEditTask,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onPressRemoveTask: taskIndex => {
      dispatch(removeTask(taskIndex));
    }
  }
}

const VisibleTaskList = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(TaskList));

export default VisibleTaskList;
