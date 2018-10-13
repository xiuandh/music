import React,{ Component } from 'react'
import 'antd-mobile/dist/antd-mobile.css'

// import axios from 'axios'

class Table extends Component{
    constructor(){
        super();
        this.state = {
            songList: [],
            songTest:[ 
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
        }
    }
    componentDidMount(){
        // axios.get('/api/rank/list',{
        //     params:{
        //         json:true
        //     }
        // }).then((res)=>{
        //     // console.log(res)
        //     // this.setState.songList = res.data.rank.list;
        //     this.setState({
        //         songList: res.data.rank.list
        //     })
        //     console.log(this.state.songList)
        // })
    }
    render(){
        return <div className="table">
            <h4>just test <i className="fa fa-arrow-right"></i></h4>
            <div className="tableBox">
                {
                    this.state.songTest.map((item,id)=>{
                        
                        return <div className="tableItem" key={id}>
                            <img src={item.img} alt=""/>
                            <p>{item.des}</p>
                        </div>
                    })
                }
            </div>
        </div>
    }
}

export default Table;