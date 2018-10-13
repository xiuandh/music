import React,{Component} from "react"
import 'antd-mobile/dist/antd-mobile.css'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../sass/page.scss'

import { Drawer, List, NavBar } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile'

class Navtest extends Component {
constructor(){
  super();
  this.state ={
    open: false,
    toggle:'none',
    icons:['fa fa-music','fa fa-cloud','fa fa-play-circle'],
    side:[
        {text:'本地音乐',icon:'fa fa-music'},
        {text:'最近播放',icon:'fa fa-play-circle'},
        {text:'下载管理',icon:'fa fa-download'},
        {text:'我的电台',icon:'fa fa-headphones'},
        {text:'我的收藏',icon:'fa fa-gratipay'}
    ]
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
  render() {
    const sidebar = (<List>
        {
            this.state.side.map((bar,idx)=>{
                let test = <i className={bar.icon}/>;
                return (
                    <List.Item key={idx} multipleLine thumb={<i className={bar.icon}></i>}>
                        {bar.text}
                    </List.Item>
                )
            })
        }
    </List>)
    return (<div>
      <NavBar 
        leftContent={[
          <i className="fa fa-bars"/>,
        ]}
        rightContent={[
          <i className="fa fa-search" />
        ]}
        onLeftClick={this.onOpenChange}
      >
        <ul className="navTop">
          {
            this.state.icons.map((item,index)=>{
              return <li key={index}><i className={item}></i></li>
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
    </div>);
  }
}

export default Navtest;