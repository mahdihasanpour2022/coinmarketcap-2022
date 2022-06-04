import React from 'react';
import Landing from './components/Landing';
import {Provider} from "react-redux";
import Store from "./redux/Store";

const App = () => {

  return (
    <>
    <Provider store={Store} >
      <Landing />
    </Provider>
    </>
  );
};

export default App;