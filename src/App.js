import React from "react";
import { View, Text } from "react-native";
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import combineReducers from './reducers'

const store = createStore(combineReducers)

const App = () => {
  return (
    <Provider store={store}>
    <View>
      <Text>app!</Text>
    </View>
    </Provider>
  );
};

export default App;
