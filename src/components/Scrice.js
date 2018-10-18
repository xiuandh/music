import React,{Component} from "react"
import { TabBar } from 'antd-mobile'

import '../sass/page.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Main extends Component{
    constructor(){
        super();
        this.state ={
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
    render(){
        return <div className="scrice">
            <TabBar tintColor="#fff">
            {
                this.state.nav.map(tab=>{
                return <TabBar.Item 
                title={tab.text} 
                key={tab.id}
                icon={
                    <FontAwesomeIcon icon={tab.icon}/>
                }
                >
                </TabBar.Item>
                })
            }
            </TabBar>
        </div>
    }
}

export default Main;