import React,{Component} from "react"

import { List } from 'antd-mobile'
import axios from 'axios'

import '../sass/page.scss'

class Friends extends Component{
    constructor(){
        super();
        this.state = {
            Mvs:[
                {
                    icon:'fa fa-music',
                    name:'秀逗音乐',
                    time:'1539415611579',
                    content:'返还的话费德拉费好大劲法律和地方的，符合大富豪敌方雷达，很丰富哈佛合法化的发盒饭的饭。',
                    mv:'./',
                    like:'28',
                    comment:'2',
                }
            ]
        }
    }
    componentDidMount(){
        axios.get('/api/i/mv.php?cmd=100&hash=&ismp3=1&ext=mp4',{
            params:{
                cmd:100,
                hash:'5F8393A55D5762A63F1A5E92B46E575E',
                ismp3:1,
                ext:'mp4',
            }
        }).then(res=>{
            console.log(res)
        })
    }
    render(){
        return <div className="friend">
            <List>
                {
                    this.state.Mvs.map((item,idx)=>{
                        return <List.Item 
                                    key={idx}
                                    thumb={<i className={item.icon}/>}
                                >
                                <p>{item.name}发布视频</p>
                                <video src={item.mv} controls="controls" preload="true"/>
                                <List.Item.Brief>
                                    <ul className="icon-group">
                                        <li><i className="fa fa-heart"/>{item.like}</li>
                                        <li><i className="fa fa-comment"/>{item.comment}</li>
                                        <li><i className="fa fa-share-alt"/>视频</li>
                                        <li><i className="fa fa-ellipsis-v"/></li>
                                    </ul>
                                </List.Item.Brief>
                        </List.Item>
                    })
                }
            </List>
        </div>
    }
}

export default Friends;