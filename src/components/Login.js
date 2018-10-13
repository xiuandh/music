import React, { Component } from 'react'

import { List,Button,WingBlank,WhiteSpace,TabBar } from 'antd-mobile'

class Login extends Component{
    constructor(){
        super();
        this.state ={
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
    render(){
        return <div>
            <WingBlank>
                <div><img src="./favicon.ico"/>></div>
                <Button>手机号登录</Button><WhiteSpace />
                <Button>注册</Button><WhiteSpace />
                <div>
                    <a>短暂使用</a>
                </div>
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
                </TabBar>
            </WingBlank>
        </div>
    }
}

export default Login;