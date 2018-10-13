import React, { Component } from 'react';
import { HashRouter,Switch,Route } from 'react-router-dom'

import './App.css';
import 'antd-mobile/dist/antd-mobile.css'


import './sass/common.scss'
import Recommed from './components/NavTop'
import Music from './components/Music'

import Login from './components/Login'
import LoginForm from './components/LoginForm'

class App extends Component {
  render() {
    return <div className="App">
        <Recommed/>
        <Music/>
        <Switch>
            <Route path="./login" component={Login}/>
            <Route path="./loginfrom" component={LoginForm}/>
        </Switch>
      </div>
  }
}
// App = withRouter(App)
export default App;
