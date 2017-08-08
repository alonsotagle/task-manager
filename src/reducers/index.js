import { combineReducers } from 'redux'
import tasks from './tasks'
import visibilityFilter from './visibilityFilter'

const tasksApp = combineReducers({
  tasks,
  visibilityFilter
});

export default tasksApp;
