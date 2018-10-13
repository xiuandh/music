import React,{Component} from "react"
import { Carousel } from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../sass/page.scss'
class Navtest extends Component{
    constructor(){
        super();
        this.state ={
            imglist:[
                {url:'./img/1.jpg',path:'#'},
                {url:'./img/2.jpg',path:'#'},
                {url:'./img/3.jpg',path:'#'},
                {url:'./img/4.jpg',path:'#'},
                {url:'./img/5.jpg',path:'#'}
            ]
        }
    }
    render(){
        return <div className="carousel">
            
                <div className="bg">
                    <Carousel autoplay={true} infinite>
                        {
                            this.state.imglist.map((imgs,index)=>{
                                return <a href={imgs.path} key={index}>
                                    <img src={imgs.url} alt=""
                                        onLoad={() => {
                                            // fire window resize event to change height
                                            window.dispatchEvent(new Event('resize'));
                                            this.setState({ imgHeight: 'auto' });
                                        }}
                                    />
                                </a>
                            })
                        }
                    </Carousel>
                </div>
                <div className="bb"></div>
        </div>
    }
}

export default Navtest;