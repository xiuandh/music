import React, { Component } from 'react'

import { Button,WingBlank,WhiteSpace,TabBar } from 'antd-mobile'

import { withRouter,Switch,Route } from 'react-router-dom'

import Home from "./home"

class Login extends Component{
    constructor(){
        super();
        this.state ={
            link:'/home',
            nav:[
                {
                    id:1,
                    text:'私人FM',
                    name:'/recommend',
                    icon:'fa fa-lastfm-square'
                },{
                    id:2,
                    text:'每日推荐',
                    name:'/friends',
                    icon:'fa fa-calendar'
                },{
                    id:3,
                    text:'歌单',
                    name:'/radio',
                    icon:'fa fa-list-alt'
                },{
                    id:3,
                    text:'排行榜',
                    name:'/radio',
                    icon:'fa fa-list-ol'
                }
            ]
        }
    }
    handlerTolink(path){
        let { history } = this.props;
        history.push({pathname:path})
    }
    render(){
        return <div>
            <WingBlank>
                <div style={{margin:"10px"}}><img src="./favicon.ico"/></div>
                <WhiteSpace/><Button>手机号登录</Button><WhiteSpace />
                <WhiteSpace/><Button>注册</Button><WhiteSpace />
                <div style={{margin:"10px"}}>
                    <a onClick={this.handlerTolink.bind(this,this.state.link)} >短暂使用</a>
                    
                </div>
                <div>
                    <p>其他登录方法</p>
                <TabBar tintColor="#58bc58">
                    {
                        this.state.nav.map(tab=>{
                        return <TabBar.Item 
                        title={tab.text} 
                        key={tab.id}
                        icon={
                            <div className="icondiv"><i className={tab.icon}></i></div>
                        }
                        />})
                    }
                </TabBar></div>
            </WingBlank>
            {/* <Switch>
                <Route path="/home" component={Home}/>
            </Switch> */}
        </div>
    }
}
Login = withRouter(Login)
export default Login;