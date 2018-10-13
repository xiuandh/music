import React,{Component} from "react"
import { Tabs } from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Navtest extends Component{
    constructor(){
        super();
        this.state ={
            tabs: [
                {
                    id:1,
                    title:'个人推荐',
                    name:'/recommend'
                },{
                    id:2,
                    title:'朋友',
                    name:'/friends'
                },{
                    id:3,
                    title:'主播电台',
                    name:'/radio'
                }
            ]
        }
    }
    render(){
        return <div className="list-group">
            <Tabs tabs={this.state.tabs}>
               {
                   this.state.tabs.map((item)=>{
                       return <div key={item.id}><h4>{item.title}</h4></div>
                   })
               }
            </Tabs>
        </div>
    }
}

export default Navtest;