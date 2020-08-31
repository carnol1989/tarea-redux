import React from 'react';
import { Provider } from 'react-redux';
import Empleados from './components/Empleados';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Empleados />
      </div>
    </Provider>    
  );
}

export default App;
