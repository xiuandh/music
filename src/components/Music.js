import React,{  Component} from 'react'
import { withRouter } from 'react-router-dom'
import { List } from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'

import axios from 'axios'

import '../sass/page.scss'
class Music extends Component{
    constructor() {
        super();
        this.state = {
            show:true,
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
        let path = this.props.location.pathname;
        console.log(path == '/search');
        if(path === '/search' || path === "/"){
            console.log('66666');
            this.setState({show:false})
        }else{
            this.setState({show:true})
        }
        axios.get('/api/rank/list',{
            params:{
                json:true
            }
        }).then((res)=>{
            console.log(res)
        })
    }
    handerPlay(){
        let audio = document.getElementById('audio');
        if(audio !== null){
            //检测播放是否已暂停,audio.paused 在播放器播放时返回false
            // alert(audio.paused);
            if(audio.paused){
                audio.play();
            }else{
                audio.pause();
            }
        }
        // 重新播放
        // audio.currentTime = 0;
    }
    componentWillUpdate(nextProps,nextState){
        console.log(nextProps)
        console.log(nextState)
        console.log(this)
        // let path = this.props.location.pathname;
        // if(path == '/search' || path =="/"){
        //     console.log('change');
        //     this.setState({show:false})
        // }else{
        //     this.setState({show:true})
        // }
    }
    render() {
        let index = 0;
        let data = this.state.songs[index];
        return <div id="footer" style={this.state.show ? {display:'block'}:{display:'none'}}>
            <div className="music" >
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
                        <i className="fa fa-play-circle" onClick={this.handerPlay.bind(this)}>
                            {/* controls="controls" */}
                            <audio src='./test.mp3'  preload="auto" id="audio"/>
                        </i>
                        <i className="fa fa-list-ul"></i>
                    </p>    
                    </div>
                </List.Item>
            </List>
        </div>
        </div>
    }
}
Music = withRouter(Music);
export default Music;
