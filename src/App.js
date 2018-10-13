import React, { Component } from 'react';

import './App.css';
import 'antd-mobile/dist/antd-mobile.css'

import Test4 from './components/home'
import Test from './components/NavTop'
import Test2 from './components/NavList'
import Test3 from './components/Carousel'
import Test5 from './components/List'
import Test6 from './components/Table'
import Test7 from './components/Music'

import './sass/common.scss'

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStroopwafel } from '@fortawesome/fontawesome-free-solid'
// library.add(faStroopwafel)

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <h4>test</h4> */}
        {/* <Route path="/" component={Main}></Route> */}
        {/* <Route path='/' component={Test}></Route> */}
        <Test />
        <Test2 />
        <Test3/>
        <Test4/>
        <Test5/>
        <Test6/>
        <Test7/>
      </div>
    );
  }
}
// App = withRouter(App)
export default App;
