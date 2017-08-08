import React,{ Component } from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import tasksApp from './reducers';
import RouterNavigation from './containers/RouterNavigation';


let store = createStore(tasksApp);

class App extends Component {

  render() {
    return (
	  <Provider store={store}>
        <RouterNavigation />
      </Provider>
    );
  }
}

export default App;
