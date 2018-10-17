import React,{Component} from "react"
import { TabBar } from 'antd-mobile'

import '../sass/page.scss'

class Main extends Component{
    constructor(){
        super();
        this.state ={
            nav:[
                {
                    id:1,
                    text:'私人FM',
                    name:'/recommend',
                    icon:'fa fa-lastfm-square'
                },{
                    id:2,
                    text:'每日推荐',
                    name:'/friends',
                    icon:'fa fa-calendar'
                },{
                    id:3,
                    text:'歌单',
                    name:'/radio',
                    icon:'fa fa-list-alt'
                },{
                    id:3,
                    text:'排行榜',
                    name:'/radio',
                    icon:'fa fa-list-ol'
                }
            ]
        }
    }
    render(){
        return <div className="scrice">
            <TabBar tintColor="#58bc58">
            {
                this.state.nav.map(tab=>{
                return <TabBar.Item 
                title={tab.text} 
                key={tab.id}
                icon={
                    <div className="icondiv"><i className={tab.icon}></i></div>
                }
                >
                    {/* <Switch>
                    <Route path="/home" component={Home}></Route>
                    <Route path="/discover" component={Discover}></Route>
                    <Route path="/mine" component={Mine}></Route>
                    </Switch> */}
                </TabBar.Item>
                })
            }
            </TabBar>
        </div>
    }
}

export default Main;