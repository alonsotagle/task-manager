const tasks = (state = [], action) => {

  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        action.newTask,
      ];

    case 'EDIT_TASK':
      return state.map((item, index) => {
          if(index !== action.taskIndex) {
              return item;
          }

          return {
              ...item,
              ...action.task,
          };
      });

    case 'REMOVE_TASK':
      return state.filter((element, i) => i !== action.taskIndex);

    default:
      return state;
  }
}

export default tasks;
