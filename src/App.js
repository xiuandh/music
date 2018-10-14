import React, { Component } from 'react';
import { Switch,Route,HashRouter } from 'react-router-dom'

import './App.css';
import 'antd-mobile/dist/antd-mobile.css'


import './sass/common.scss'

import Login from './components/Login'
import Home from './components/home'
import Search from './components/Search'
import Cloud from './components/NavList'
class App extends Component {
  render() {
    return <div className="App">
            <Switch>
              <Route path="/home" component={Home}>
                {/* <IndexRoute path="/cloud" component={Cloud}/> */}
              </Route>
              <Route path="/search" component={Search}/>
              <Route path="/" component={Login} exact/>
            </Switch>
      </div>
  }
}
export default App;
