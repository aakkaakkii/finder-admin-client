import logo from './logo.svg';
import './App.css';
import store from "./store/store";
import {Provider} from "react-redux";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "./components/ui/header/Header";
import React from "react";
import Home from "./components/home/Home";
import Usermanagement from "./components/usermanagement/Usermanagement";

function App() {
  return (
      <Provider store={store}>
        <BrowserRouter>
          <Header/>

          <div>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/usermanagement' component={Usermanagement}/>
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
  );
}

export default App;
