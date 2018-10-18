import React, { Component } from 'react';
import { Switch,Route,HashRouter } from 'react-router-dom'

import './App.css';
import 'antd-mobile/dist/antd-mobile.css'

import './sass/common.scss'

import Login from './components/Login'
import Home from './components/home'
import Search from './components/Search'
import Music from './components/Music'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic,faCloud,faPlayCircle,faDownload,faHeadphones,faHeart,faEye,faCog,faPowerOff,faBars,faSearch,faClock,faCalendar,faListAlt,faListOl,
    faListUl,faComment,faShareAlt,faEllipsisV} from '@fortawesome/free-solid-svg-icons'
library.add(faMusic,faCloud,faPlayCircle,faDownload,faHeadphones,faHeart,faEye,faCog,faPowerOff,faBars,faSearch,faClock,faCalendar,faListAlt,faListOl,
    faListUl,faComment,faShareAlt,faEllipsisV)

class App extends Component {
  render() {
    return <div className="App">
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/search" component={Search}/>
              <Route path="/" component={Login} exact/>
            </Switch>

            <Music/>
            {/* <Switch>
              <Route path="/home" component={Music}/>
              <Route path="/list" component={Music}/>
            </Switch> */}
            
      </div>
  }
}
export default App;
