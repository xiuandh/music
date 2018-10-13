import React,{  Component} from 'react'

import { List } from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'

import axios from 'axios'

import '../sass/page.scss'
class Music extends Component{
    constructor() {
        super();
        this.state = {
            songs:[ 
                {
                    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
                    title: 'Meet hotel',
                    des: '不是所有的',
                  },
                  {
                    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
                    title: 'McDonald\'s invites you',
                    des: '不是所有的兼职汪都需要风吹日晒',
                  },
                  {
                    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
                    title: 'Eat the week',
                    des: '不是所有的兼职汪都需要风吹日晒',
                  },
            ],
            testList: []
        }
    }
    componentDidMount(){
        axios.get('/api/rank/list',{
            params:{
                json:true
            }
        }).then((res)=>{
            console.log(res)
        })
    }
    render() {
        let index = 0;
        let data = this.state.songs[index];
        return <div className="music">
            <List>
                <List.Item 
                    key={index}
                    thumb={data.img}
                >
                    <div>
                        {data.title}
                        <p>{data.des}</p>
                    </div>
                    <div className="button">
                    <p>
                        <i className="fa fa-play-circle">
                            {/* controls="controls" */}
                            <audio src='./test.mp3'  preload="auto"/>
                        </i>
                        <i className="fa fa-list-ul"></i>
                    </p>    
                    </div>
                </List.Item>
            </List>
        </div>
    }
}

export default Music;
