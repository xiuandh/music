import React, { Component } from 'react'

import { Button,WingBlank,WhiteSpace,TabBar } from 'antd-mobile'

import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import musicAction from '../action'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


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
                    icon:'clock'
                },{
                    id:2,
                    text:'每日推荐',
                    name:'/friends',
                    icon:'calendar'
                },{
                    id:3,
                    text:'歌单',
                    name:'/radio',
                    icon:'list-alt'
                },{
                    id:3,
                    text:'排行榜',
                    name:'/radio',
                    icon:'list-ol'
                }
            ]
        }
    }
    handlerTolink(path){
        let { history } = this.props;
        history.push({pathname:path})
    }
    componentWillMount(){
        this.props.changeOriginState(false);//false
    }
    componentWillUnmount(){
        console.log("hhhh")
        this.props.changeOriginState(true);//true
    }
    render(){
        return <div className="scrice">
            <WingBlank>
                <div style={{margin:"10px"}}><img src="./favicon.ico"/></div>
                <WhiteSpace/><Button>手机号登录</Button><WhiteSpace />
                <WhiteSpace/><Button>注册</Button><WhiteSpace />
                <div style={{margin:"10px"}}>
                    <a className="fontsize" onClick={this.handlerTolink.bind(this,this.state.link)} >短暂使用</a>
                    
                </div>
                <div>
                    <p className="fontsize">其他登录方法</p>
                <TabBar tintColor="#58bc58">
                    {
                        this.state.nav.map(tab=>{
                        return <TabBar.Item 
                        title={tab.text} 
                        key={tab.id}
                        icon={
                            <div className="icondiv"><FontAwesomeIcon icon={tab.icon}/></div>
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
let mapStateToProps = function(state){
    return {
        music:state.musicReducer.showPlayer
    }
}
let mapDispatchToProps = function(dispatch){
    return{
        changeOriginState: (state)=>{
            dispatch(musicAction(state))
        }
    }
}
Login = connect(mapStateToProps,mapDispatchToProps)(Login)

Login = withRouter(Login)
export default Login;