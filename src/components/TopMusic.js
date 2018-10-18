import React,{Component} from "react"

import '../sass/page.scss'

import { List } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class TopMusic extends Component {
    constructor(){
    super();
    this.state ={
        side:[
            {text:'本地音乐',icon:'music'},
            {text:'最近播放',icon:'play-circle'},
            {text:'下载管理',icon:'download'},
            {text:'我的电台',icon:'headphones'},
            {text:'我的收藏',icon:'heart'}
        ]
    }
    }
  render() {
    return <div id="content">
    <div className="topmusic">
        <List>
            {
                this.state.side.map((bar,idx)=>{
                    return (
                        <List.Item key={idx}  thumb={<FontAwesomeIcon icon={bar.icon}/>}>
                            {bar.text}
                        </List.Item>
                    )
                })
            }
        </List>
    </div>
    </div>
  }
}

export default TopMusic;