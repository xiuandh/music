import React, { Component } from 'react'
import { List } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css'

class Lists extends Component{
    constructor() {
        super();
        this.state = {
            list:[
                {
                    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
                    title: 'Meet hotel',
                    des: '不是所有的兼职汪都需要风吹日晒',
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
            ]
        }
    }
    
    render(){
        return <div>
            <List>
                {
                    this.state.list.map((item,idx)=>{
                        return (
                            <List.Item 
                                key={idx}
                                thumb={item.img}
                            >
                                {item.title}
                                <List.Item.Brief>
                                    {item.title}
                                    <p>{item.des}</p>
                                </List.Item.Brief>
                            </List.Item>
                        )
                    })
                }
            </List>
        </div>
    }
}

export default Lists;
/* 面试前：身体，态度，千峰联系, 引导性问问题*/
