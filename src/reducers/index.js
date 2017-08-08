import { combineReducers } from 'redux'
import tasks from './tasks'
import visibilityFilter from './visibilityFilter'
import timer from './timer'

const tasksApp = combineReducers({
  tasks,
  visibilityFilter,
  timer,
});

export default tasksApp;
