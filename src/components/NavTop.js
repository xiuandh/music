import React,{Component} from "react"

import { Route,withRouter,NavLink,Switch } from 'react-router-dom'

import '../sass/page.scss'

import Person from './TopMusic'
import Cloud from './NavList'
import Broad from './NavList'
import Search from './Search'

import { Drawer, List, NavBar } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile'

class Navtest extends Component {
constructor(){
  super();
  this.state ={
    open: false,
    toggle:'none',
    icons:[
        {
          id:1,
          icon:'fa fa-music',
          path:'/person'
      },{
          id:2,
          icon:'fa fa-cloud',
          path:'/cloud'
      },{
          id:3,
          icon:'fa fa-play-circle',
          path:'/broadcasting'
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
      <NavBar 
        leftContent={[
          <i className="fa fa-bars"/>,
        ]}
        rightContent={[
          <i className="fa fa-search" onClick={this.handlerSearch.bind(this,this.state.search)}/>
        ]}
        onLeftClick={this.onOpenChange}
      >
        <ul className="navTop">
          {
            this.state.icons.map((item,index)=>{
              return <li key={index}><NavLink to={item.path}><i className={item.icon} /></NavLink></li>
            })
          }
        </ul>

      </NavBar>
      <Drawer
        className="my-drawer"
        style={{ minHeight: document.documentElement.clientHeight ,display:this.state.toggle}}//控制遮层罩
        enableDragHandle
        contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
        sidebar={sidebar}
        open={this.state.open}
        onOpenChange={this.onOpenChange}
      >
      
      </Drawer>

      <Switch>
        <Route path="/person" component={Person}/>
        <Route path="/Cloud" component={Cloud}/>
        <Route path="/broadcasting" component={Broad}/>
        <Route path="/search" component={Search}/>
      </Switch>
    </div>);
  }
}
Navtest = withRouter(Navtest);
export default Navtest;