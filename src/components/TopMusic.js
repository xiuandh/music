import React,{Component} from "react"

import '../sass/page.scss'

import { List } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile'

class TopMusic extends Component {
    constructor(){
    super();
    this.state ={
        side:[
            {text:'本地音乐',icon:'fa fa-music'},
            {text:'最近播放',icon:'fa fa-play-circle'},
            {text:'下载管理',icon:'fa fa-download'},
            {text:'我的电台',icon:'fa fa-headphones'},
            {text:'我的收藏',icon:'fa fa-gratipay'}
        ]
    }
    }
  render() {
    return <div>
        <List>
            {
                this.state.side.map((bar,idx)=>{
                    return (
                        <List.Item key={idx} multipleLine thumb={<i className={bar.icon}></i>}>
                            {bar.text}
                        </List.Item>
                    )
                })
            }
        </List>
    </div>
  }
}

export default TopMusic;