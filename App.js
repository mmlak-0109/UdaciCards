import React from 'react';
import { createStore } from 'redux';
import { rootReducer } from './reducers';
import { Provider } from 'react-redux';
import RootComp from './components/RootComp';

const store = createStore(rootReducer)

export default function App() {
  return (
    <Provider store={store}>
      <RootComp />
    </Provider>
  );
}
