/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {Provider} from "react-redux"; 
import store from './src/Redux/store';
import Route from './src/Navigations/Route';



function App(): React.JSX.Element {


  
  return (
    <Provider store={store}>
        <Route/>
    </Provider>
  );
}

export default App;
