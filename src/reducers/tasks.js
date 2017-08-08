const tasks = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        action.newTask,
      ];

    case 'EDIT_TASK':
      state[action.taskIndex] = action.task;
      return state;

    case 'REMOVE_TASK':
      state.splice(action.taskIndex, 1);
      return state;

    default:
      return state;
  }
}

export default tasks;
