import React, { Component } from 'react'

import { List,InputItem } from 'antd-mobile'

import { connect } from 'react-redux'
import playAction from '../action'

import '../sass/page.scss'

import Music from './Music'

class Search extends Component{
    constructor(){
        super();
    }
    componentDidMount(){
        this.inputRef.focus();
    }
    handerGo(){
        // console.log(this.props)
        this.props.history.goBack();
    }
    componentDidMount(){
        console.log(this.props)
        this.props.restoringstate()
    }
    componentWillUnmount(){
        this.props.changeState();
    }
    render(){
        console.log('search',this)
        return <div className="search">
            <List>
                <InputItem ref={el => this.inputRef = el}><i className="fa fa-arrow-left" onClick={this.handerGo.bind(this)}/></InputItem>
            </List>
            <List>
                <List.Item>
                <div style={{ width: '100%', textAlign: 'center' }}>
                    搜索歌手
                </div>
                </List.Item>
            </List>
            <div style={{display:'none'}}><Music/></div>
            
        </div>
    }
}
let mapStateToProps = function(state){
    return {
        music: state.musicReducer.showplayer
    }
}
let mapDispatchToProps = function(dispatch){
    return {
        changeState: ()=>{
            dispatch(playAction(true));
        },
        restoringstate:()=>{
            dispatch(playAction(false))
        }
    }
}
Search = connect(mapStateToProps,mapDispatchToProps)(Search)
export default Search;