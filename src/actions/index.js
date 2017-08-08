export const addTask = newTask => {
  return {
    type: 'ADD_TASK',
    newTask,
  }
}

export const editTask = (taskIndex, task) => {
  return {
    type: 'EDIT_TASK',
    taskIndex,
    task,
  }
}

export const removeTask = taskIndex => {
  return {
    type: 'REMOVE_TASK',
    taskIndex,
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter,
  }
}

export const playTimer = () => {
  return {
    type: 'TIMER_PLAY',
  }
}
