import React,{Component} from "react"

import { Route,withRouter,NavLink,Switch,Redirect } from 'react-router-dom'

import { Drawer, List, NavBar } from 'antd-mobile';

import '../sass/page.scss'

import Person from './TopMusic'
import Cloud from './NavList'
import Broad from './NavList'
import Music from './Music'

const allComponents = {
  Person,
  Cloud,
  Broad,
}

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
          icon:'fa fa-music',
          path:url + '/person',
          name:'Person'
      },{
          id:2,
          icon:'fa fa-cloud',
          path:url + '/cloud',
          name:'Cloud'
      },{
          id:3,
          icon:'fa fa-play-circle',
          path:url + '/broadcasting',
          name:'Broad'
      }
    ],
    side:[
        {text:'本地音乐',icon:'fa fa-music'},
        {text:'最近播放',icon:'fa fa-play-circle'},
        {text:'下载管理',icon:'fa fa-download'},
        {text:'我的电台',icon:'fa fa-headphones'},
        {text:'我的收藏',icon:'fa fa-gratipay'}
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
  componentWillUpdate(a,b){
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
    const sidebar = (<List>
        {
            this.state.side.map((bar,idx)=>{
                return (
                    <List.Item key={idx} multipleLine thumb={<i className={bar.icon}></i>}>
                        {bar.text}
                    </List.Item>
                )
            })
        }
        <List.Item.Brief>
        <ul className="nav-icon-group">
            <li><i className="fa fa-eye"/>夜间模式</li>
            <li><i className="fa fa-cog"/>设置</li>
            <li><i className="fa fa-times-circle"/>退出</li>
        </ul>
        </List.Item.Brief>
    </List>)
    return (<div className="app-top">
    <div id="header">
      <NavBar 
        leftContent={[
          <i className="fa fa-bars"/>,
        ]}
        rightContent={[
          // <i className="fa fa-search" onClick={this.handlerSearch.bind(this,this.state.search)}/>
          <NavLink to="/search" style={{color:"#ddd"}}><i className="fa fa-search"></i></NavLink>
        ]}
        onLeftClick={this.onOpenChange}
      >
        <ul className="navTop">
          {
            this.state.icons.map((item,index)=>{
              // <Switch>
              //     <Route path={item.path} component={allComponents[item.name]}/>
              // </Switch>
              return <li key={index}>
                <NavLink to={item.path}><i className={item.icon} /></NavLink>
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
      {/* <div id="footer">
        <Music/>
      </div> */}
    </div>);
  }
}
Navtest = withRouter(Navtest);
export default Navtest;