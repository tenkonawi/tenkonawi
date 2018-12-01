import React, { Component } from 'react';
import './App.css';
import HomePage from './components/HomePage'
import BuildingPage from './components/BuildingPage';
import ToolsPage from './components/ToolsPage';
import {BrowserRouter, Route} from 'react-router-dom';
import PostsPage from './components/PostsPage';
import SideBar from './components/SideBar';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div id="mainwrapper">
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/tools" component={ToolsPage}></Route>
          <Route exact path="/building" component={BuildingPage}></Route>
          <Route exact path="/posts" component={PostsPage}></Route>
          <SideBar></SideBar>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
