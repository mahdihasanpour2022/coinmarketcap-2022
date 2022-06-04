import React from 'react';
// components 
import Landing from './components/Landing';
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
// react-router-dom 
import {Routes , Route ,Navigate} from "react-router-dom";
import {Provider} from "react-redux";
import Store from "./redux/Store";

const App = () => {


  return (
    <>
    <Provider store={Store} >
      <Navbar />
      <Routes>
        <Route path="/" element={ <Landing />} />
        <Route path="/notfound" element={ <NotFound />} />
        <Route path="/*" element={ <Navigate to="/notfound" />} />
      </Routes>
    </Provider>
    </>
  );
};

export default App;