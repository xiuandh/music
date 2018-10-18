import React,{ Component } from 'react'
import { List,InputItem,Button,WhiteSpace,WingBlank } from 'antd-mobile'


class LoginForm extends Component{
    componentDidMount(){
        this.inputRef.focus();
    }
    render(){
        return <div className="search">
            <List renderHeader={()=><div style={{textAlign:'left'}}><i className="fa fa-arrow-left"></i>手机号码登录</div>}>
                <InputItem ref={el => this.inputRef = el}><i className="fa fa-phone"/></InputItem>
            </List>
            <List>
                <InputItem><i className="fa fa-unlock-alt"/></InputItem>
            </List>
            <WingBlank>
                <WhiteSpace/><Button>登录</Button><WhiteSpace/>
            </WingBlank>
            
        </div>
    }
}

export default LoginForm;