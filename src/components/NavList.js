import React,{Component} from "react"
import { Tabs } from 'antd-mobile'
// import 'antd-mobile/dist/antd-mobile.css'

// import { Route,Switch,withRouter } from 'react-router-dom'

import Carousel from './Carousel'
import SongsNav from './Scrice'
import SongsTable from './Table'
import SongsList from './List'
import Friend from './Frinends'

import Cloud from './Cloud/Cloud'

class Navtest extends Component{
    constructor(props){
        super(props);
        // let url = props.match.url;
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
    // handerTest(a,b){
    //     console.log(a);
    //     console.log(b);
    //     let { history } = this.props;
    //     history.push({pathname:a.name})
    // }
    render(){
        return <div className="list-group">
            {/* onChange={this.handerTest.bind(this)} */}
            <Tabs tabs={this.state.tabs} >
               <div>
                    <Cloud/>
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
            {/* <Switch>
                <Route path={this.props.match.path+"/recommed"} component={Cloud} exact/>
                <Route path={this.props.match.path+"/friends"} component={Friend} exact/>                
                <Route path={this.props.match.path+"/radio"} component={Cloud} exact/>
            </Switch> */}
        </div>
    }
}

// Navtest = withRouter(Navtest);

export default Navtest;