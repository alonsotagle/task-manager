export const addTask = newTask => {
  return {
    type: 'ADD_TODO',
    newTask,
  }
}

export const editTask = (taskIndex, task) => {
  return {
    type: 'TOGGLE_TODO',
    taskIndex,
    task,
  }
}

export const removeTask = taskIndex => {
  return {
    type: 'TOGGLE_TODO',
    taskIndex,
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}
