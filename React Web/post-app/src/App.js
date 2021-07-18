import React, { useState } from "react";
import Header from "./Header/Header";
import MainPage from './MainPage/MainPage';
import { Link,Route } from 'react-router-dom';
import FindId from './FindId';
import OnCreate from "./OnCreate";
import ModifyPost from "./MainPage/Modify/ModifyPost"

import { BrowserRouter } from 'react-router-dom';
function App() {

  return (
    <BrowserRouter>

      <Link to='/'><Header></Header></Link>
      <Route path="/" component={MainPage} exact></Route>
      <Route path='/FindId' component={FindId} ></Route>
      <Route path='/create' component={OnCreate}></Route>
      <Route path='/modify/:id' component={ModifyPost}></Route>

    </BrowserRouter>
  );
}

export default App;
