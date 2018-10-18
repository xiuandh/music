import React,{Component} from "react"

import { Route,withRouter,NavLink,Switch } from 'react-router-dom'

import { connect } from 'react-redux'

import playAction from '../action'
import '../sass/page.scss'

import Person from './TopMusic'
import Cloud from './NavList'
import Broad from './NavList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Drawer, List, NavBar } from 'antd-mobile';

class Navtest extends Component {
constructor(props){
  super(props);
  let url = props.match.url
  this.state ={
    open: false,
    toggle:'none',
    icons:[
        {
          id:1,
          icon:'music',
          path:url + '/person',
          name:'Person'
      },{
          id:2,
          icon:'cloud',
          path:url + '/cloud',
          name:'Cloud'
      },{
          id:3,
          icon:'play-circle',
          path:url + '/broadcasting',
          name:'Broad'
      }
    ],
    side:[
        {text:'本地音乐',icon:'music'},
        {text:'最近播放',icon:'play-circle'},
        {text:'下载管理',icon:'download'},
        {text:'我的电台',icon:'headphones'},
        {text:'我的收藏',icon:'heart'}
    ],
    search:'search'
  }
}
  onOpenChange = (...args) => {
    // console.log(this)
    // console.log(this.state.open)
    this.setState({ open:!this.state.open,toggle:''});
    // console.log(this.state.open)

  }
  componentDidMount(){
    console.log(this.props)
      // this.props.changeMusic();

  }
  componentWillUpdate(a,b){
    console.log(this.props)
    this.props.changeMusic()
    if(this.state.open===true){
      this.setState({ toggle:'none'});
    }
  }
  // 搜索组件
  handlerSearch(path){
    let { history } = this.props;
    history.push( {pathname:path} )
  }
  render() {
    console.log(this.props)
    const sidebar = (<List>
        {
            this.state.side.map((bar,idx)=>{
                return (
                    <List.Item key={idx} multipleLine thumb={<FontAwesomeIcon icon={bar.icon} />}>
                        {bar.text}
                    </List.Item>
                )
            })
        }
        <List.Item.Brief>
        <ul className="nav-icon-group">
            <li><FontAwesomeIcon icon="eye"/>夜间模式</li>
            <li><FontAwesomeIcon icon="cog"/>设置</li>
            <li><FontAwesomeIcon icon="power-off"/>退出</li>
        </ul>
        </List.Item.Brief>
    </List>)
    return (<div className="app-top">
    <div id="header">
      <NavBar 
        leftContent={[
          <FontAwesomeIcon icon="bars"/>
        ]}

        rightContent={[
          // <i className="fa fa-search" onClick={this.handlerSearch.bind(this,this.state.search)}/>
          <NavLink to="/search" style={{color:"#ddd"}}><FontAwesomeIcon icon="search"/></NavLink>
        ]}
        onLeftClick={this.onOpenChange}
      >
        <ul className="navTop">
          {
            this.state.icons.map((item,index)=>{
              return <li key={index}>
              {/* <i className={item.icon} /> */}
                <NavLink to={item.path}><FontAwesomeIcon icon={item.icon} /></NavLink>
              </li>
            })
          }
          
        </ul>

      </NavBar>
      </div>
      <Drawer
        className="my-drawer"
        style={{ minHeight: document.documentElement.clientHeight ,display:this.state.toggle}}//控制遮层罩
        enableDragHandle
        touch={false}
        contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
        sidebar={sidebar}
        open={this.state.open}
        onOpenChange={this.onOpenChange}
      />
      <Switch>
        <Route path={this.props.match.path} component={Cloud} exact/>
        <Route path={this.props.match.path+"/person"} component={Person} exact/>
        <Route path={this.props.match.path+"/cloud"} component={Cloud} exact/>
        <Route path={this.props.match.path+"/broadcasting"} component={Broad} exact/>
      </Switch>
    </div>);
  }
}
let mapStateToProps = function(state){
  console.log('home',state)
  return {
    music: state.musicReducer.showPlayer
  }
}
let mapDispatchToProps = function(dispatch){
  return {
    changeMusic:()=>{
      dispatch(playAction(true));
    }
  }
}
Navtest = connect(mapStateToProps,mapDispatchToProps)(Navtest)

Navtest = withRouter(Navtest);
export default Navtest;