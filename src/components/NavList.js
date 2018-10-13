import React,{Component} from "react"
import { Tabs } from 'antd-mobile'
// import 'antd-mobile/dist/antd-mobile.css'

import Carousel from './Carousel'
import SongsNav from './home'
import SongsTable from './Table'
import SongsList from './List'
import Friend from './Frinends'

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
               <div>
                    <Carousel/>
                    <SongsNav/>
                    <SongsTable/>
                </div>
                <div>
                    <Friend/>
                </div>
                <div>
                    <Carousel/>
                    <SongsNav/>
                    <SongsList/>
                    <SongsTable/>
                </div>
            </Tabs>
        </div>
    }
}

export default Navtest;