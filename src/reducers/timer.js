const timer = (state = 0, action) => {

  switch (action.type) {
    case 'TIMER_PLAY':
      return state + 1;

    default:
      return state;
  }
}

export default timer;
