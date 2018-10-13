import React, { Component } from 'react'

import { List,InputItem } from 'antd-mobile'

import '../sass/page.scss'

class Search extends Component{
    constructor(){
        super();
    }
    componentDidMount(){
        this.inputRef.focus();
    }
    render(){
        return <div className="search">
            <List>
                <InputItem ref={el => this.inputRef = el}><i className="fa fa-arrow-left"/></InputItem>
            </List>
            <List>
                <List.Item>
                <div style={{ width: '100%', textAlign: 'center' }}>
                    搜索歌手
                </div>
                </List.Item>
            </List>
        </div>
    }
}

export default Search;